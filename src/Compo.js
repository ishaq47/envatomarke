import "./App.css";
import { GiFallingLeaf } from "react-icons/gi";
import { FaArrowDownLong } from "react-icons/fa6";
import cv from "./cv.png";
import cv2 from "./cv2.png";
import reactJS from "./reactJS.png";
import react from "./react.png";
import tailwind from "./tailwind.png";
import aos from "./aos.png";
import api from "./api.png";
import wfc from "./wcf.png";
import rt from "./rt.png";
import nextjs from "./nextjs.png";
import regularlight from "./regularlight.png";
import regulardark from "./regulardark.png";
import hook from "./hooks.png";
import bostami from "./bostami.png";
import homedemo from "./homedemo.png";
function Compo() {
  return (
    <>
      {/* navbar  */}
      <div className="navbar bg-gray-800 flex justify-between p-3 fixed w-screen z-10">
        {/* logo */}
        <div className="text-2xl flex ml-3 ">
          <GiFallingLeaf className="text-green-500 self-center " />
          <h1 className="font-bold text-white ">envato </h1>
          <h1 className="text-green-500"> market </h1>
        </div>
        {/* side button  */}
        <button className="bg-green-500 p-1 rounded mr-3 md:w-[100px] text-white hover:animate-pulse">
          Buy now
        </button>
      </div>
      {/* Ostami middle section  */}
      <div className="background h-screen">
        <div className="flex flex-col justify-center h-[100vh] ">
          <div className="flex justify-center">
            <img src={bostami} alt="Your Alt Text" />
          </div>
          <h1 className="text-4xl font-extrabold text-center text-white">
            Modern, Trending & Creative Portfolio
            <br />
            Tailwind CSS & React NextJS
          </h1>
          {/* buttons  */}
          <div className="flex justify-center  gap-3 mt-7 ">
            <button className="p-4 rounded-full  text-xl font-semibold bg-gradient-to-r from-pink-800 via-pink-600 to-pink-400 hover:animate-pulse  text-white flex gap-1 md:w-[200px] justify-center ">
              view Demos <FaArrowDownLong className="self-center" />
            </button>
            <button className=" hover:bg-black hover:text-white hover:animate-pulse p-4 rounded-full text-xl font-semibold bg-white self-center md:w-[200px]">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
      {/* Home demos section  */}
      <div className="bg-gray-900 ">
        <div className="md:h-[400px] flex flex-col items-center  md:m-0">
          <div className="mt-[100px]">
            <h1 className="text-pink-500 text-5xl font-semibold text-center mb-3">
              Home Demo
            </h1>
            <img src={homedemo} />
          </div>
          <h1 className="text-4xl font-bold text-center text-white">
            04 Awesome Light & Dark Demo
          </h1>
          <h1 className="text-center text-white text-xl m-4 md:m-0">
            Bostami build with Modern, Elegant & Beautiful trendng
            <br />
            technology like Tailwind CSS and React NextJS.
          </h1>
        </div>
        {/* Boxes  */}
        <div className="md:flex justify-center gap-10 h-[1700px] md:h-[400px]">
          <div className="md:w-[270px] border-[2px] border-white md:h-[350px] rounded-xl m-8 md:m-0 relative ">
            <img className="h-full object-cover rounded-xl" src={cv} />
            <button className="absolute text-2xl bg-gray-900 self-center text-white p-4 w-full md:w-[265px] mt-[-65px] border-b rounded">
              Box Layout (Light)
            </button>
          
          </div>
          <div className="md:w-[270px] border-[2px] border-white md:h-[350px] rounded-xl m-8 md:m-0 relative">
            <img className="h-full object-cover rounded-xl" src={cv2} />
            <button className="absolute text-2xl bg-gray-900 self-center text-white p-4 w-full md:w-[265px] mt-[-65px] border-b rounded">
              Box Layout (dark)
            </button>
          </div>
          <div className="md:w-[270px] border-[2px] border-white md:h-[350px] rounded-xl m-8 md:m-0 relative">
            <img
              className="h-full object-cover rounded-xl"
              src={regularlight}
            />
            <button className="absolute text-2xl bg-gray-900 self-center text-white p-4 w-full md:w-[265px] mt-[-65px] border-b rounded">
              Regular Layout (Light)
            </button>
          </div>
          <div className="md:w-[270px] border-[2px] border-white md:h-[350px] rounded-xl m-8 md:m-0 relative">
            <img className="h-full object-cover rounded-xl" src={regulardark} />
            <button className="absolute text-2xl bg-gray-900 self-center text-white p-4 w-full md:w-[265px] mt-[-65px] border-b rounded">
              Regular Layout (Dark)
            </button>
          </div>
        </div>
      </div>
      {/* Salient Features  */}
      {/* section 3rd */}
      <div className=" bg-black flex flex-col items-center">
        <h1 className="text-5xl font-bold text-pink-500 my-[100px]">
          Salient Features
        </h1>
        {/* first three boxes  */}
        <div className="md:flex justify-center gap-4 ">
          <div className=" bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl flex flex-col items-center">
            <img
              className="mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={reactJS}
            />
            <h1 className="text-2xl text-white">Next JS 13+</h1>
            <p className="  text-xl text-gray-500 mx-5 text-center">
              We used latest react Nextjs vertion ^13. Max Components are
              Reusable for you. It's a awesome design made by React NextJS.
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl  flex flex-col items-center">
            <img
              className="mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={aos}
            />
            <h1 className="text-2xl text-white">AOS Animation</h1>
            <p className="  text-xl text-gray-500 mx-5 text-center">
              This way you can trigger animation on one element, while you
              scroll to another - useful in animating fixed elements
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl  flex flex-col items-center">
            <img
              className="mt-[50px] rounded-full border-[15px] w-[80px] border-gray-600 hover:border-gray-500"
              src={tailwind}
            />
            <h1 className="text-2xl text-white">Tailwind v3+</h1>
            <p className="  text-xl text-gray-500 mx-5 text-center">
              Tailwind CSS is basically a modern,trending and utility-first CSS
              framework for rapidly building custom user interfaces.
            </p>
          </div>
        </div>
        {/* second three boxes  */}
        <div className="md:flex justify-center gap-4 md:mt-8">
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] mt-[-1px] md:mt-0 m-8 md:m-0 rounded-xl  flex flex-col items-center">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={react}
            />
            <h1 className="text-2xl text-white">React Icon</h1>
            <p className="  text-xl text-gray-500 text-center mx-5">
              React-icons uses ES6 features to import the icons into your React
              app. And it makes it so that only the icons you actually use from
              each library get imported.
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl  flex flex-col items-center">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={hook}
            />
            <h1 className="text-2xl text-white">React Hooks</h1>
            <p className="  text-xl text-gray-500 mx-5 text-center">
              It allows you to use state and other React features without
              writing a class. Hooks are the functions which hook into React
              state and lifecycle features from function components.
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl  flex flex-col items-center">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={api}
            />
            <h1 className="text-2xl text-white">Api Ready Code</h1>
            <p className="  text-xl text-gray-500 text-center mx-5">
              We made all the code with Array of Object based. so you can
              prepare for your api call whenever you want for it
            </p>
          </div>
        </div>
        {/* third three boxes  */}
        <div className="md:flex justify-center gap-4 md:my-8 ">
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] mt-[-1px] md:mt-0  m-8 md:m-0 rounded-xl  flex flex-col items-center">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={nextjs}
            />
            <h1 className="text-2xl text-white">Next Head</h1>
            <p className="  text-xl text-gray-500 text-center mx-5">
              Next Head is a component which lets you control your document head
              using their React component. With this plugin
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl  flex flex-col items-center">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={rt}
            />
            <h1 className="text-2xl text-white">React Toastify</h1>
            <p className="  text-xl text-gray-500 mx-5 text-center">
              React-Toastify allows you to add notifications to your app with
              easy and comfortable way
            </p>
          </div>
          <div className="bg-gray-800 md:w-[420px] h-[370px] md:h-[300px] m-8 md:m-0 rounded-xl flex flex-col items-center ">
            {" "}
            <img
              className=" w-[80px] mt-[50px] rounded-full border-[15px] border-gray-600 hover:border-gray-500"
              src={wfc}
            />
            <h1 className="text-2xl text-white">Working Contact Form</h1>
            <p className="  text-xl text-gray-500 text-center mx-5">
              You will get working contact form without any type of Bakcend. We
              integrated it With Email js. just follow our documentation and
              integrate it easy way
            </p>
          </div>
        </div>
      </div>
      {/* lower section  */}
      <div className="flex flex-col justify-center items-center h-[600px] md:h-[500px] bg-gray-900">
        <h1 className=" text-2xl md:text-3xl font-bold text-center  text-white">
          Purchase Bostami & Build Your Dream Portfolio
          <br /> React NextJS & Tailwind CSS Portfolio Template.
        </h1>
        <div className="flex justify-center my-4 gap-3">
          <button className="p-4 rounded-full  text-xl font-semibold bg-gradient-to-r from-pink-800 via-pink-600 to-pink-400  text-white flex gap-1 md:w-[200px] justify-center ">
            Purchase Now <FaArrowDownLong className="self-center" />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center p-3 bg-gray-800 text-white text-xl">
        <h1>© 2022 All Rights Reserved by ib-themes.</h1>
      </div>
    </>
  );
}

export default Compo;
