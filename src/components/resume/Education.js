import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017- 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Computer Science"
            subTitle="University College Of Engineering Kanchipuram(2020-24)"
            result="7.75/10"
            des="The training provided by universities in order to prepare people to work in various sectors  or areas of culture."
          />
          <ResumeCard
            title="HSC in Computer Science"
            subTitle="Cholan Matric Hr Sec School (2019-20)"
            result="76.3/100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="SSLC"
            subTitle="Cholan Matric Hr Sec School (2017-18 )"
            result="92/100"
            des=" It's all depends on your school what subject they gave you on your 10th standard"
          />
        </div>
      </div>

      
    </motion.div>
  );
}

export default Education