import { useState } from "react";
import movie4 from "../image/movie4.jpg";
import movie6 from "../image/movie6.jpg";
import movie7 from "../image/movie7.jpg";
import movie8 from "../image/movie8.jpg";
import movie9 from "../image/movie9.jpg";
import movie10 from "../image/movie10.jpg";

export function InputElement(props) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPic, setEnteredPic] = useState("");

  function getSrcPic(event) {
    setEnteredPic(event.target.src);
  }

  function inputValueHandler(event) {
    setEnteredText(event.target.value);
  }

  function submitTextFrom(e) {
    e.preventDefault();
    const getFormData = {
      mName: enteredText,
      pic: enteredPic.toString(),
    };
    console.log(getFormData);
    props.onSaveDataForm(getFormData);
    setEnteredText("");
  }

  return (
    <div className="w-[100%]">
      <form
        onSubmit={submitTextFrom}
        className="flex flex-col justify-center items-center gap-3"
      >
        <div className="mt-4 bg-background border-2 rounded-2xl border-gray-600 w-[65%] h-[20rem] grid  grid-cols-3 grid-rows-3 gap-y-10 gap-x-2  p-2">
          <div className=" h-[7rem] w-[5rem] ml-1">
            <img
              className=" w-full object-cover border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie6}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
          <div className=" h-[7rem] w-[5rem] ml-1">
            <img
              className=" w-full object-cover h-[7.2rem] border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie4}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
          <div className=" h-[7rem] w-[5rem] ml-1">
            <img
              className=" w-full object-cover border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie7}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
          <div className=" h-[7rem] w-[5rem] mt-11 ml-1">
            <img
              className=" w-full h-[7.4rem]  object-cover border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie8}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
          <div className="h-[7rem] w-[5rem] mt-11 ml-1">
            <img
              className=" w-full h-[7.4rem] object-cover border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie9}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
          <div className=" h-[7rem] w-[5rem] mt-11 ml-1">
            <img
              className=" w-full  object-cover border-2 rounded-lg cursor-pointer myShadow transition ease-in-out delay-150 hover:shadow-none"
              src={movie10}
              alt="noot"
              onClick={getSrcPic}
            />
          </div>
        </div>
        <div className="relative h-10  w-[80%] mx-auto mt-4 ">
          <input
            className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-xl"
            placeholder=" "
            onChange={inputValueHandler}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            text name mov
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[20%]"
        >
          add
        </button>
      </form>
    </div>
  );
}
export default InputElement;
