import "./App.css";
import CustomTypingText from "./components/CustomTypingText/CustomTypingText";
import Navbar from "./components/Navbar/Navbar";
import ParticlesDemo from "./components/Particles/Particles";
import Button from "./components/Buttons/Button";
import ProfileImages from "./components/ProfileImages/index";
import { SITE_TITLE, SITE_DESCRIPTION, BUTTONS } from "../src/constant/index";
import { IconChevronRight, IconDownload } from "@tabler/icons-react";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar tetap di posisi awal */}
      <Navbar />
      <ParticlesDemo />

      {/* Container untuk gambar dan teks */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center z-10">
        {/* Gambar */}
        <ProfileImages src="../../src/assets/prof-7.jpg" alt="Profile" />

        {/* Teks dan Tombol */}
        <div className="animate-fadeIn">
          <h1 className="text-2xl font-semibold text-[#D6D6D6]">
            Hello, My Name
          </h1>
          <h1 className="text-4xl font-bold text-[#EAE8D9]">{SITE_TITLE}</h1>
          {/* CustomTypingText sedikit ke kiri */}
          <div className="ml-[-50px]">
            <CustomTypingText />
          </div>
          <p className="mt-4 text-xl font-semibold text-[#A3A3A3]">
            {SITE_DESCRIPTION}
            <span className="waving-hand" role="img" aria-label="waving hand">
              👋🏻
            </span>
          </p>

          {/* Tombol */}
          <div className="flex justify-center mt-6 gap-3">
            <Button
              onClick={() => console.log("Download CV")}
              icon={<IconDownload size={24} />}
              className="bg-black text-white hover:bg-gray-800"
            >
              {BUTTONS.DOWNLOAD_CV}
            </Button>
            <Button
              onClick={() => console.log("Contact Me")}
              icon={<IconChevronRight size={24} />}
              className="bg-white text-black hover:bg-gray-200"
            >
              {BUTTONS.CONTACT_ME}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
