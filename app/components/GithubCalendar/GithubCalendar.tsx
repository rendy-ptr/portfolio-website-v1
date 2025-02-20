import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  return (
    <div className="w-[34rem] bg-[#27272a] rounded-xl outline outline-1 outline-[#2e3949] shadow-[0_0_10px_#2e3949]">
      <div className="scale-90">
        <GitHubCalendar username="rendy-ptr" />
      </div>
    </div>
  );
};

export default GithubCalendar;
