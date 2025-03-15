import GitHubCalendar from "react-github-calendar";
import React from "react";

const GithubCalendar: React.FC = () => {
  return (
    <div className="w-full bg-[#27272a] rounded-xl outline outline-2 outline-[#2c323c] p-6 flex justify-center">
      <div className="text-gray-200">
        <GitHubCalendar
          username="rendy-ptr"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme="dark"
          showWeekdayLabels={true}
        />
      </div>
    </div>
  );
};

export default GithubCalendar;
