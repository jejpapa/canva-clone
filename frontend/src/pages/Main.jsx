import React, { useState } from 'react'

import Header from '../components/Header'
import { BsGrid1X2,BsFillImageFill,BsFolder } from 'react-icons/bs'
import { FaShapes,FaCloudUploadAlt } from 'react-icons/fa'
import { TfiText } from 'react-icons/tfi'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { RxTransparencyGrid } from 'react-icons/rx'
import TemplateDesign from '../components/main/TemplateDesign'
import MyImages from '../components/MyImages'

const Main = () => {

  const [state,setState] = useState('')

  const [show,setShow] = useState({
    status : true,
    name : ''
  })

  const setElements = (type,name)=> {
    setState(type)
    setShow({
      state:false,
      name: ''
    })

  }

  return (
    <div className='min-w-screen h-screen bg-black'>
        <Header />
        <div className='flex h-[calc(100%-60px)] w-screen'>
          <div className='w-[80px] bg-[#181918] z-50 h-full text-gray-400 overflow-y-auto'>
            <div onClick={()=>setElements('design','design')} className={` ${show.name ==='design' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><BsGrid1X2/></span>
              <span className='text-xs font-medium'>Design</span>
            </div>                    
            <div onClick={()=>setElements('shape','shape')} className={` ${show.name ==='shape' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><FaShapes/></span>
              <span className='text-xs font-medium'>Shapes</span>
            </div>                    
            <div onClick={()=>setElements('image','uploadImage')} className={` ${show.name ==='uploadImage' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><FaCloudUploadAlt/></span>
              <span className='text-xs font-medium'>Upload</span>
            </div>          
            <div onClick={()=>setElements('text','text')} className={` ${show.name ==='text' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><TfiText/></span>
              <span className='text-xs font-medium'>Text</span>
            </div>          
            <div onClick={()=>setElements('project','project')} className={` ${show.name ==='project' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><BsFolder/></span>
              <span className='text-xs font-medium'>Project</span>
            </div>
          
            <div onClick={()=>setElements('initImage','images')} className={` ${show.name ==='images' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><BsFillImageFill/></span>
              <span className='text-xs font-medium'>Images</span>
            </div>          
            <div onClick={()=>setElements('background','background')} className={` ${show.name ==='background' ? 'bg-[#252627]':''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
              <span className='text-2xl'><RxTransparencyGrid/></span>
              <span className='text-xs font-medium'>Background</span>
            </div>
          </div> 
          <div className='h-full w-[calc(100%-75)]'>
            <div className={`${show.status?'p-0 -left-[350px]':'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
              <div onClick={()=> setShow({name:'',status:true})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'><MdKeyboardArrowLeft/></div>
              {
                state === 'design' && <div>
                      <div className='grid grid-cols-2 gap-2'>
                        <TemplateDesign />
                      </div>
                </div>

              }
              {
                state === 'shape' && <div className='grid grid-cols-3 gap-2'>
                      <div className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                      <div className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                      <div style={{clipPath:'polygon(50% 0,100% 100%, 0 100%'}} className='h-[90px] bg-[#3c3c3d] cursor-pointer '></div>
                      

                </div>

              }
              {
                state === 'image' && <MyImages />

              }
              {
                state === 'text' && <div>
                      text
                </div>

              }
              {
                state === 'project' && <div>
                      project
                </div>

              }
              {
                state === 'initImage' && <div>
                      initImage
                </div>

              }
              {
                state === 'background' && <div>
                      background
                </div>

              }

            </div>

          </div>


        </div>
    </div>
  )
}

export default Main