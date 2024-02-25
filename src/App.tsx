import './App.css'
import QRCode from './assets/image-qr-code.png'

function App() {
  return (
    <>
      <div>
        <div className='flex flex-col justify-start items-center gap-5 bg-white rounded-2xl p-6 m-4 w-[22rem] h-[34rem]'>
          <img src={QRCode} alt="" className='size-80 rounded-2xl' />

          <p className='text-gray-900 font-bold font-outfit text-2xl'>
            Improve your front-end skills by building projects
          </p>

          <p className='text-gray-400 font-outfit leading-5 w-72'>          
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>

        <div className="attribution text-slate-500">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Kaiskii</a>.
        </div>
      </div>
    </>
  )
}

export default App
