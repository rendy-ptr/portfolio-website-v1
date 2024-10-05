import "./App.css";
import CustomTypingText from "./components/CustomTypingText/CustomTypingText";
import Navbar from "./components/Navbar/Navbar";
import ParticlesDemo from "./components/Particles/Particles";
import Button from "./components/Buttons/Button";
import { IconChevronRight, IconDownload } from '@tabler/icons-react';
function App() {
  return (
    <div>
      <Navbar />
      <ParticlesDemo />
      <div className="flex justify-between items-center z-10">
        <div className=" w-1/2 min-h-[750px] flex justify-center items-center">
          <div className="text-left animate-fadeIn">
            <h1 className="text-2xl font-semibold text-[#D6D6D6]">
              Hello, My Name
            </h1>
            <h1 className="text-4xl font-bold text-[#EAE8D9]">
              Rendy Putra Pratama
            </h1>
            <CustomTypingText />
            <p className="mt-4 text-xl font-semibold text-[#A3A3A3]">
              Welcome To My Personal Website{" "}
              <span className="waving-hand" role="img" aria-label="waving hand">
                👋🏻
              </span>
            </p>
            <div className="flex justify-start mt-6 gap-3">
              <Button
                text="Download CV"
                onClick={() => console.log("Download CV")}
                icon={<IconDownload size={24} />}
                className="bg-black text-white hover:bg-gray-800"
              />
              <Button
                text="Contact Me"
                onClick={() => console.log("Contact Me")}
                icon={<IconChevronRight size={24} />}
                className="bg-white text-black hover:bg-gray-200"
              />
            </div>
          </div>
        </div>
        <div className=" w-1/2 min-h-[750px]">
          <h1>Gambar</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
