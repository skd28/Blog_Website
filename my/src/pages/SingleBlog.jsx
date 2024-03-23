import React from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();

  const {
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 ">
          Single Blog Page
        </h1>
      </div>

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="...." className="w-full mx-auto rounded " />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer ">
            {title}
          </h2>
          <p className=" mb-3 text-gray-600 ">
            {" "}
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>
          <p className=" mb-3 text-gray-600 ">
            {" "}
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className=" text-base text-gray-500 mb-6 ">{content} </p>
          <div className="text-base text-gray-500 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus expedita quia, odit accusantium assumenda totam
              molestias asperiores repudiandae obcaecati ab nisi harum debitis
              maxime amet libero qui incidunt illo corporis sint possimus. Ad
              dolores quos tempore praesentium temporibus porro ut fugiat. Animi
              placeat libero in odit modi, eius fugiat voluptatum facere eum
              expedita consectetur amet nisi unde praesentium natus, excepturi
              est! Doloribus asperiores vero quae adipisci ullam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium architecto, odio omnis dolorum ratione natus quam sed,
              odit voluptate sit minus accusamus cum quisquam. Accusamus quae
              omnis maiores deleniti temporibus.
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi voluptates veritatis eaque fugiat deserunt. Dicta
              delectus id beatae aliquid totam tempore minus velit ad natus
              saepe, sint laboriosam eius consectetur nostrum ipsum corrupti nam
              excepturi corporis quaerat quia ipsam et eos minima sunt!
              Laudantium cupiditate nisi atque accusamus eaque illum assumenda
              facere vel exercitationem, ex delectus explicabo sed reiciendis
              ducimus ullam molestiae nobis ipsam eligendi id ea modi enim
              rerum? Quis unde rerum dolorem vero pariatur? Maiores cupiditate,
              earum error doloremque nulla labore dolorem molestiae sed in
              temporibus vero ad a quo recusandae odio architecto quaerat
              facere. Dolores, eos.
            </p><br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi voluptates veritatis eaque fugiat deserunt. Dicta
              delectus id beatae aliquid totam tempore minus velit ad natus
              saepe, sint laboriosam eius consectetur nostrum ipsum corrupti nam
              excepturi corporis quaerat quia ipsam et eos minima sunt!
              Laudantium cupiditate nisi atque accusamus eaque illum assumenda
              facere vel exercitationem, ex delectus explicabo sed reiciendis
              ducimus ullam molestiae nobis ipsam eligendi id ea modi enim
              rerum? Quis unde rerum dolorem vero pariatur? Maiores cupiditate,
              earum error doloremque nulla labore dolorem molestiae sed in
              temporibus vero ad a quo recusandae odio architecto quaerat
              facere. Dolores, eos.
            </p> <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi voluptates veritatis eaque fugiat deserunt. Dicta
              delectus id beatae aliquid totam tempore minus velit ad natus
              saepe, sint laboriosam eius consectetur nostrum ipsum corrupti nam
              excepturi corporis quaerat quia ipsam et eos minima sunt!
              Laudantium cupiditate nisi atque accusamus eaque illum assumenda
              facere vel exercitationem, ex delectus explicabo sed reiciendis
              ducimus ullam molestiae nobis ipsam eligendi id ea modi enim
              rerum? Quis unde rerum dolorem vero pariatur? Maiores cupiditate,
              earum error doloremque nulla labore dolorem molestiae sed in
              temporibus vero ad a quo recusandae odio architecto quaerat
              facere. Dolores, eos.
            </p><br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eligendi voluptates veritatis eaque fugiat deserunt. Dicta
              delectus id beatae aliquid totam tempore minus velit ad natus
              saepe, sint laboriosam eius consectetur nostrum ipsum corrupti nam
              excepturi corporis quaerat quia ipsam et eos minima sunt!
              Laudantium cupiditate nisi atque accusamus eaque illum assumenda
              facere vel exercitationem, ex delectus explicabo sed reiciendis
              ducimus ullam molestiae nobis ipsam eligendi id ea modi enim
              rerum? Quis unde rerum dolorem vero pariatur? Maiores cupiditate,
              earum error doloremque nulla labore dolorem molestiae sed in
              temporibus vero ad a quo recusandae odio architecto quaerat
              facere. Dolores, eos.
            </p>

          </div>
        </div>
        <div className="lg:w-1/2">
            <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
