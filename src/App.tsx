import './App.css';
import QRCode from './assets/image-qr-code.png';

function App() {
  return (
    <>
      <div>
        <div className="m-4 flex h-[34rem] w-[22rem] flex-col items-center justify-start gap-5 rounded-2xl bg-white p-6">
          <img src={QRCode} alt="" className="size-80 rounded-2xl" />

          <p className="font-outfit text-2xl font-bold text-gray-900">
            Improve your front-end skills by building projects
          </p>

          <p className="w-72 font-outfit leading-5 text-gray-400">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>

        <div className="attribution text-slate-500">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Kaiskii</a>.
        </div>
      </div>
    </>
  );
}

export default App;
