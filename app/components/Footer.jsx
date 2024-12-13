import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:flex-col md:px-40'>
      <div>

      </div>
      <div className='flex flex-row text-white'>
        <div className='flex flex-col'>
          <h1 className=' font-[700] pb-8'>
            Get in Touch 
          </h1>
          <div className='flex space-y-4 flex-col'>
            <h1>
              Twitter
            </h1>
            <h1>
              Facebook 
            </h1>
            <h1>
              LinkedIn
            </h1>
            <h1>
              Skype
            </h1>
            <h1>
              Instagram
            </h1>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className=' font-[700] pb-8'>
            Products 
          </h1>
          <div className='flex space-y-1 flex-col'>
            <h1 className='border-b pb-1 border-[#282828]'>
              Twitter
            </h1>
            <h1 className='border-b pb-1 border-[#282828]'>
              Facebook 
            </h1>
            <h1 className='border-b pb-1 border-[#282828]'>
              LinkedIn
            </h1>
            <h1 className='border-b pb-1 border-[#282828]'>
              Skype
            </h1>
            <h1 className='border-b pb-1 border-[#282828]'>
              Instagram
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
