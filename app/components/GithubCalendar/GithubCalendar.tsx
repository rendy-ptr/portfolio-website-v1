import GitHubCalendar from "react-github-calendar";
import React from "react";

const GithubCalendar: React.FC = () => {
  return (
    <div className="w-full py-8 bg-[#27272a] rounded-xl outline outline-1 outline-[#2e3949] shadow-[0_0_10px_#2e3949] grid place-items-center">
      <div className= "scale-110">
      <GitHubCalendar username="rendy-ptr" />
      </div>
    </div>
  );
};

export default GithubCalendar;
