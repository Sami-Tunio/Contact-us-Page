import React from "react";
import Button from "./Button";
import { FaRegMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Input from "./Input";


const Contact = () => {
  return (
    <>
      <section>
      <div className="flex">
          <Button text="VIA SUPPORT CHAT" className='bg-black text-white ml-30 mt-5 p-3 rounded-2xl flex justify-evenly w-50 items-center' child={<FaRegMessage />}/>

          <Button text="VIA CALL" className='bg-black text-white ml-5 mt-5 p-3 rounded-2xl flex justify-evenly items-center w-30' child={ <IoCall />}/>
        </div>
          <Button  text='VIA EMAIL FORM' className='bg-white text-black mt-3 ml-30 w-85 p-3 border flex justify-center items-center gap-2 text-xl rounded-2xl' child={<MdEmail />
}/>
          <label >Name:</label>
       <Input type='text' placeholder='Enter Your Name' className='border-2 bg-red-400 ml-30'/>


        <div>
          <img src="/images/Service.svg" alt="nhi aa rhi" className="w-100" />
        </div>
      </section>
    </>
  );
};

export default Contact;
