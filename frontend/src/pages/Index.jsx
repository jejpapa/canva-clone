import React, { useState } from "react"; // React와 useState 훅을 가져옴
import {IoMdClose} from 'react-icons/io'; // 모달 닫기 버튼에 사용할 아이콘
import {AiOutlineGoogle} from 'react-icons/ai'; // 구글 로그인 버튼에 사용할 아이콘
import { FaFacebookF } from 'react-icons/fa' // 페이스북 로그인 버튼에 사용할 아이콘
import api from '../utils/api' // API 요청을 위한 유틸리티 모듈
import toast from 'react-hot-toast'

const Index = () => {
    // 상태 관리: 로그인/회원가입 타입, 모달 표시 여부, 로딩 상태
    const [type, setType] = useState('') // 'signin' 또는 'signup' 중 어떤 폼을 표시할지 결정
    const [show, setShow] = useState(false) // 모달 창 표시 여부
    const [loader, setLoader] = useState(false) // API 요청 중 로딩 상태

    // 입력 폼의 상태 관리 (이름, 이메일, 비밀번호)
    const [state, setState] = useState({
        name: '', // 회원가입 시 사용할 이름
        email: '', // 이메일 주소
        password: '' // 비밀번호
    })

    // 입력값 변경 핸들러: 입력 필드의 값을 상태에 반영
    const inputHandle = (e) => {
        setState({
            ...state, // 기존 상태를 복사
            [e.target.name]: e.target.value // 변경된 필드만 업데이트
        })
    }

    // 회원가입 함수: 사용자 데이터를 서버에 전송
    const user_register = async (e) => {
        e.preventDefault() // 폼 제출 시 페이지 리로드 방지
        try {
            setLoader(true) // 로딩 상태 활성화
            const { data } = await api.post('/api/user-register', state) // 서버에 회원가입 요청
            setLoader(false) // 로딩 상태 해제
            localStorage.setItem('canva_token', data.token) // 토큰을 로컬 스토리지에 저장
            setState({ // 폼 초기화
                name: '',
                email: '',
                password: ''
            })
            window.location.href = '/' // 홈 페이지로 리다이렉트
        } catch (error) {
            setLoader(false) // 에러 발생 시 로딩 상태 해제
             toast.error(error.response.data.message) // 에러 메시지 표시 (toast 주석 처리됨)
        }
    }

    // 로그인 함수: 사용자 인증을 서버에 요청
    const user_login = async (e) => {
        e.preventDefault() // 폼 제출 시 페이지 리로드 방지
        try {
            setLoader(true) // 로딩 상태 활성화
            const { data } = await api.post('/api/user-login', state) // 서버에 로그인 요청
            setLoader(false) // 로딩 상태 해제
            localStorage.setItem('canva_token', data.token) // 토큰을 로컬 스토리지에 저장
            setState({ // 폼 초기화
                email: '',
                password: ''
            })
            window.location.href = '/' // 홈 페이지로 리다이렉트
        } catch (error) {
            console.log(error) // 에러 콘솔 출력
            setLoader(false) // 에러 발생 시 로딩 상태 해제
            toast.error(error.response.data.message) // 에러 메시지 표시 (toast 주석 처리됨)
        }
    }

    // UI 렌더링
    return (
        <div className='bg-[#18191b] min-h-screen w-full'> {/* 전체 배경 설정 */}
            {/* 모달 창: 로그인/회원가입 폼을 표시 */}
            <div className={`w-screen ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
                <div className='w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative'> {/* 모달 컨테이너 */}
                    <div onClick={() => setShow(false)} className='absolute right-4 top-4 text-xl cursor-pointer text-white'><IoMdClose /></div> {/* 닫기 버튼 */}
                    <h2 className='text-white pb-4 text-center text-xl'>Login or sign up in seconds</h2> {/* 모달 제목 */}

                    {/* 로그인 폼 */}
                    {
                        type === 'signin' && <form onSubmit={user_login}>
                            <div className='flex flex-col gap-3 mb-3 text-white'> {/* 이메일 입력 */}
                                <label htmlFor="email">Email</label>
                                <input onChange={inputHandle} type="email" name='email' id='email' placeholder='email' value={state.email} className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-white'> {/* 비밀번호 입력 */}
                                <label htmlFor="password">Password</label>
                                <input onChange={inputHandle} type="password" name='password' id='password' placeholder='password' value={state.password} className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' />
                            </div>
                            <div>
                                <button disabled={loader} className='px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white'>{loader ? 'loading..' : 'Signin'}</button> {/* 로그인 버튼 */}
                            </div>
                            <div className='flex py-4 justify-between items-center px-3'> {/* 구분선 */}
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                                <div className='w-[6%] text-center flex pb-1 px-1 text-white'>or</div>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                            </div>
                            <div className='pb-4'>
                                <button className='px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800'>
                                    <span><AiOutlineGoogle /></span> {/* 구글 로그인 버튼 */}
                                    <span>Login with gamil</span>
                                </button>
                            </div>
                            <div>
                                <button className='px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800'>
                                    <span><FaFacebookF /></span> {/* 페이스북 로그인 버튼 */}
                                    <span>Login with facebook</span>
                                </button>
                            </div>
                        </form>
                    }

                    {/* 회원가입 폼 */}
                    {
                        type === 'signup' && <form onSubmit={user_register}>
                            <div className='flex flex-col gap-3 mb-3 text-white'> {/* 이름 입력 */}
                                <label htmlFor="name">Name</label>
                                <input type="text" onChange={inputHandle} value={state.name} required name='name' id='name' placeholder='name' className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-white'> {/* 이메일 입력 */}
                                <label htmlFor="email">Email</label>
                                <input onChange={inputHandle} value={state.email} type="email" name='email' id='email' placeholder='email' className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' required />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-white'> {/* 비밀번호 입력 */}
                                <label htmlFor="password">Password</label>
                                <input onChange={inputHandle} type="password" name='password' id='password' placeholder='password' value={state.password} className='px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' required />
                            </div>
                            <div>
                                <button disabled={loader} className='px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white'>{loader ? 'loading..' : 'Sign up'}</button> {/* 회원가입 버튼 */}
                            </div>
                            <div className='flex py-4 justify-between items-center px-3'> {/* 구분선 */}
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                                <div className='w-[6%] text-center flex pb-1 px-1 text-white'>or</div>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                            </div>
                            <div className='pb-4'>
                                <button className='px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-orange-700 w-full text-white outline-none hover:bg-orange-800'>
                                    <span><AiOutlineGoogle /></span> {/* 구글 로그인 버튼 */}
                                    <span>Login with gamil</span>
                                </button>
                            </div>
                            <div>
                                <button className='px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-700 w-full text-white outline-none hover:bg-blue-800'>
                                    <span><FaFacebookF /></span> {/* 페이스북 로그인 버튼 */}
                                    <span>Login with facebook</span>
                                </button>
                            </div>
                        </form>
                    }
                </div>
            </div>

            {/* 상단 네비게이션 바 */}
            <div className='bg-[#252627] shadow-md'>
                <div className='w-[93%] m-auto py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[80px] h-[48px]'> {/* 로고 */}
                            <img className='w-full h-full' src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
                        </div>
                        <div className='flex gap-4'> {/* 로그인/회원가입 버튼 */}
                            <button onClick={() => {
                                setType('signin')
                                setShow(true)
                            }} className='py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium'>Signin</button>
                            <button onClick={() => {
                                setType('signup')
                                setShow(true)
                            }} className='py-2 w-[80px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 메인 컨텐츠 */}
            <div className='w-full h-full justify-center items-center p-4'>
                <div className='py-[168px] flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-5xl text-[#c7c5c5] font-bold'>What will you design today?</h2> {/* 메인 제목 */}
                    <span className='text-[#aca9a9] text-2xl font-medium'>Canva makes it easy to create and share professional designs.</span> {/* 부제목 */}
                    <button onClick={() => {
                        setType('signup')
                        setShow(true)
                    }} className='py-2 w-[200px] text-center bg-purple-500 text-white transition-all hover:bg-purple-600 rounded-[5px] font-medium'>Signup for free</button> {/* 회원가입 유도 버튼 */}
                </div>
            </div>
        </div>
    )
}

export default Index // 컴포넌트 내보내기