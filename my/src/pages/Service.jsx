import React from "react";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiJetpackcompose } from "react-icons/si";
import { LuComponent } from "react-icons/lu";
import { FaRegThumbsUp } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { BsAmd } from "react-icons/bs";



const Service = () => {
  return (
    <>
      <div>
        <div className="py-40 bg-black text-center text-white px-4">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 ">
            Services Page
          </h1>
        </div>
        <div className="mt-20">
          <div>
            <h1 className="text-center items-center  text-orange-600">
              Our Services
            </h1>
            <h1 className="text-center text-[3rem] font-bold ">
              What We Offer
            </h1>
            <p className="text-center mx-auto w-[40rem] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              iure tenetur debitis, vero repellendus iusto fugit nostrum ipsum
              accusantium .
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex mx-auto gap-5 items-center  justify-center ">
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl" >
              <SiMaterialdesignicons className=" w-[3rem] h-[3rem] text-blue-800 " />
              <h1 className="font-semibold text-[1.5rem] mt-8">Refreshing Design</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
                .
              </p>
            </div>
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl">
           
              <LuComponent  className=" w-[3rem] h-[3rem] text-blue-800 "  />
              <h1 className="font-semibold text-[1.5rem] " >Based on Tailwind CSS</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
              .
              </p>
            </div>
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl">
           
              <SiJetpackcompose className=" w-[3rem] h-[3rem] text-blue-800 "  />
              <h1 className="font-semibold text-[1.5rem] mt-10">300+ Components</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
               .
              </p>
            </div>
          </div>
          <div className="flex mx-auto gap-5 items-center  justify-center my-14">
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl" >
              <RiComputerLine className=" w-[3rem] h-[3rem] text-blue-800 " />
              <h1 className="font-semibold text-[1.5rem] mt-12">Speed Optimized</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
                .
              </p>
            </div>
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl">
           
              <BsAmd  className=" w-[3rem] h-[3rem] text-blue-800 "  />
              <h1 className="font-semibold text-[1.5rem] mt-12" >Fully Customizable</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
              .
              </p>
            </div>
            <div className=" border w-[17rem] p-5 rounded-lg bg-gray-200 shadow-xl">
              <FaRegThumbsUp className=" w-[3rem] h-[3rem] text-blue-800 "  />
              <h1 className="font-semibold text-[1.5rem] mt-12">Regular Updates</h1>
              <p className="text-xs">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                unde pariatur! Cupiditate, similique, tenetur soluta commodi
               .
              </p>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Service;
