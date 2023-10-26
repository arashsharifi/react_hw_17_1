function Movie({ props, handelDelete }) {
  return (
    <div className="bg-background my-3 flex w-[90%] border-2 border-gray-600 rounded-xl myShadow ">
      <div className="w-[30%] relative flex justify-center p-3 rounded-l  h-[11rem]">
        <img
          className="absolute opacity-80 rounded-lg top-[-20px] h-[12rem]   object-cover w-[80%]"
          src={props.pic}
          alt="noot"
        />
      </div>
      <div className="w-[70%] flex flex-col gap-2 px-10 py-4">
        <h1 className="myfont text-4xl">{props.mName}</h1>
        <div className="text-2xl italic flex gap-2 ">
          <i className="bi bi-star-half text-yellow-600"></i>
          <i className="bi bi-star-half text-yellow-600"></i>
          <i className="bi bi-star-half text-yellow-600"></i>
          <i className="bi bi-star-half text-yellow-600"></i>
        </div>
        <div className="flex w-[70%] justify-between mt-3">
          <button className="bg-gray-400 text-gray-800 px-2 py-1">
            Watched
          </button>
          <button
            onClick={() => {
              handelDelete(props.id);
            }}
            className=" bg-red-700 px-3 py-2 rounded-full cursor-pointer hover:text-white"
          >
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Movie;
