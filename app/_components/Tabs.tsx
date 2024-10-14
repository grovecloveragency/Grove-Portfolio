"use client";


import { Tabs } from "../../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Website & App Development",
      value: "Website & App Development",
      content: (
        <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">Website & App Development</p>
          <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto " src="/images/services/development.jpg" alt="" />
        </div>
      ),
    },
    {
      title: "Data Analysis",
      value: "Data Analysis",
      content: (
        <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">Data Analysis</p>
          <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto "  src="/images/services/data anly.jpg" alt="" />
        </div>
      ),
    },
    {
      title: "Product Marketing",
      value: "Product Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">Product Marketing</p>
          <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto "  src="/images/services/marketinf.jpg" alt="" />
        </div>
      ),
    },
    {
      title: "UI & UX Designing",
      value: "UI & UX Designing",
      content: (
        <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">UI & UX design</p>
          <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto "  src="/images/services/UIandUX.jpg" alt="" />
        </div>
      ),
    },
    {
      title: "AI and Machine Learning Solutions",
      value: "AI and Machine Learning Solution",
      content: (
        <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="pb-8">AI and Machine Learning Solution</p>
          <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto "  src="/images/services/Ai.jpg" alt="" />
        </div>
      ),
    },
    {
        title: "DevOps and Automation",
        value: "DevOps and Automation",
        content: (
          <div className="w-full overflow-hidden relative h-100px rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className="pb-8">DevOps and Automation</p>
            <img className=" w-full lg:w-1/2 h-1/2 ml-auto mr-auto "  src="/images/services/devops.jpg" alt="" />
          </div>
        ),
      },
  ];

  return (
    <div className="h-[35rem] md:h-[40rem] [perspective:1000px] relative  b flex flex-col text-xl max-w-5xl font-bold text-white mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


