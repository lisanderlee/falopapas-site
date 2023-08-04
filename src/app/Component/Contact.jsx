
import React from "react";


export default function ContactUs() {
  return (
    <>
      <div id="sectionId" className="lg:px-20 mb-20 md:px-11 lg:pb-32 lg:pt-32 sm:px-2 px-5 ">
        <div className="flex flex-col mb-12 lg:flex-row   ">
          <div className=" flex-1 font-bold mt-10  lg:mt-0 text-3xl flex-col text-white	">
            <p>WE WOULD LOVE TO </p>
            <p>HEAR FROM YOU</p>
          </div>
          <div className="flex-1 ">
            <p className="text-xl mt-10 font-md lg:mt-0 text-white	">
            Explore collaboration for real art with us! From small orders to large architectural projects, we work with designers and architects to fill white walls with captivating color. 
            Fill out the form below, and our expert team will reach out to you soon.<br/><span className=" font-bold">Let&rsquo;s create together!</span>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row  lg:mt-1 flex-col-reverse ">
          <div className="flex  flex-col flex-1 ">
            <form action="" method="get">
              <input
                className="w-full bg-gray-300 h-16 rounded-full px-10 sans text-gray-500 "
                type="input"
                value="Name"
              />
              <input
                className="w-full bg-gray-300 h-16 rounded-full px-10 sans text-gray-500 mt-10"
                type="input"
                value="Work email"
              />
              <input
                className="w-full bg-gray-300 h-16 rounded-full px-10 sans text-gray-500 mt-10"
                type="input"
                value="Company"
              />
              <input
                className="w-full bg-gray-300 h-56 rounded-3xl px-10 sans text-gray-500 mt-10"
                type="input"
                value="Message"
              />
            </form>
            <button className=" mt-10  w-28 outline text-white hover:bg-white hover:text-black outline-white px-5 py-2 rounded-full ">
          Send
        </button>
          </div>
        </div>
      </div>
    </>
  );
}
