import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex ">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col ">
          <ResumeCard
            title=" Software Developer intern"
            subTitle="SAG CORPS Technologies - (jul 2023- jan 2024)"
            result="KANCHIPURAM"
            des="Collaborated on comprehensive daily tasks ranging from foundational to advanced programming, deepening
expertise in HTML, CSS, Node.js, and React.js.Created QR code reader by using qrcode module in Nodejs to generate current time."
          />
       </div>
       </div>
       
    </motion.div>
  );
};

export default Experience;
