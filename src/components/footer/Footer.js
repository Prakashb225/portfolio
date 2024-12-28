import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex gap-4">
          
        <span className="bannerIcon"><a
   target="_blank"
   rel="noreferrer"
   href='https://github.com/Prakashb225'>
                    <FaGithub /></a>
                  </span>
          <span className="bannerIcon"> <a
   target="_blank"
   rel="noreferrer"
   href='https://www.linkedin.com/in/prakash-b-123240201'>

              <FaLinkedinIn/></a>
            </span>
        </div>
      </div>

    </div>
  );
}

export default Footer