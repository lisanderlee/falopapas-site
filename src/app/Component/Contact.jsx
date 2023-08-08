"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/app/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // You can handle the response here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div
        id="sectionId"
        className="lg:px-20 mb-10 md:px-11 lg:pb-32 lg:pt-32 sm:px-2 px-5 "
      >
        <div className="flex flex-col mb-12 lg:flex-row   ">
          <div className=" flex-1 font-bold mt-10  lg:mt-0 text-3xl flex-col text-white	">
            <p>WE WOULD LOVE TO </p>
            <p>HEAR FROM YOU</p>
          </div>
          <div className="flex-1 ">
            <p className="text-xl mt-10 font-md lg:mt-0 text-white	">
              Explore collaboration for real art with us! From small orders to
              large architectural projects, we work with designers and
              architects to fill white walls with captivating color. Fill out
              the form below, and our expert team will reach out to you soon.
              <br />
              <span className=" font-bold">Let&rsquo;s create together!</span>
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row  lg:mt-1 flex-col-reverse ">
          <div className="flex  flex-col flex-1 ">
            <form onSubmit={handleSubmit}>
              <div className="my-5 ml-2">
                <label className=" text-white  " htmlFor="Name">
                  Name:
                </label>
              </div>

              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
                className="w-full bg-gray-300 h-16 rounded-full px-10 sans text-gray-500 "
              />
              <div className="mt-10 ml-2">
                <label className=" text-white  " htmlFor="email">
                  Email:
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                className="w-full bg-gray-300 h-16 rounded-full px-10 sans text-gray-500 mt-5"
              />
              <div className="mt-10 ml-2">
                <label className="text-white" htmlFor="message">
                  Message:
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
                className="w-full bg-gray-300 h-56 rounded-3xl px-10 py-5 sans text-gray-500 mt-5"
              />

              <button
                type="submit"
                className=" mt-10  w-28 outline text-white hover:bg-white hover:text-black outline-white px-5 py-2 rounded-full "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      
      </div>
    </>
  );
}
