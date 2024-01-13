import "../src/App.css";
import Navbar from "./components/Navbar";
import frame from "./assets/Frame.png";
import { IoLocationSharp } from "react-icons/io5";
import Work from "./components/Work";
import About from "./components/About";


function App() {
  return (
    <section className="h-screen absolute flex flex-col">
        <Navbar />

        {/* FRAME */}
        <div className="absolute t-0 h-screen w-[48vw] z-[9]">
        {/* <div className="absolute t-0 object-fill z-[9]"> */}
          <div className="">
            <img src={frame}/>
          </div>
        </div>
        
        {/* CONTAINER */}
        <div className="bg-transparent h-fit w-[100vw] absolute top-[35%] left-[18%] z-[11]">


          {/* Hero */}
          <p className="bg-transparent text-[10vw] w-fit text-[#F5F5F7]  font-extrabold tracking-wider drop-shadow-[0_8px_4px_rgba(0,0,0,0.8)]">
            Ankush Das
          </p>


          <div className="flex ">
            <IoLocationSharp   className="h-[1.46vw] w-[1.46vw] absolute bg-transparent text-[#dadada]" />

            <p className="bg-transparent text-[#dadada] left-[1.9vw] p-0 m-0 absolute tracking-[0.08rem] leading-[1.3] text-[1.17vw] hover:decoration-solid	" id="Location">
              Mumbai, India.
            </p>
          </div>
        </div>

      <Work />
      <About />
    </section>
  );
}

export default App;
