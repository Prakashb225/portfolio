import React from 'react'
import Title from '../layouts/Title'
import { twitter,chatapp,crud,Notes } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TWITTER CLONE"
          des="I have to build this design by using HTML and CSS "
          src={twitter}
        />
        <ProjectsCard
         title="Chatting App"
         des="Build a real-time chat appication using Node.js and Socket.io. User should be able to join chat rooms,send messages and receive in real time.Socket.io makes it easy to implement real-time communication between the server and clients. "
         src={chatapp}
       />

        <ProjectsCard
          title="Notes app using node.js"
          des=" A notes taking application is basically used to store information or notes in a database so that it can never loses,it is just like Google keep."
          src={Notes}
        />
        <ProjectsCard
          title="React.js - CRUD app"
          des="CRUD stands for create,read,update and delete . In ReactJS everything is aligned in a form of a component and every component has its own way and feature to do so. React js is one of the most used JavaScript libraries for frontend development. "
          src={crud}
        />

        
      </div>
    </section>
  );
}

export default Projects