import { useState } from "react";

import GetFormData from "./components/GetFromData";
import Movie from "./components/Movie";

import movie1 from "./image/movie1.jpg";
import movie2 from "./image/movie2.jpg";
import movie3 from "./image/movie3.jpg";

const DUMMY_MOVIE = [
  {
    mName: "shazem",
    pic: movie1,
    id: 1,
  },
  {
    mName: "oppenhaimer",
    pic: movie2,
    id: 2,
  },
  {
    mName: "talk to me",
    pic: movie3,
    id: 3,
  },
];
function App() {
  const [movieObj, setMovieObj] = useState(DUMMY_MOVIE);

  function addMovieHandler(onjMovie) {
    setMovieObj([...movieObj, onjMovie]);
  }
  function handelDelete(id) {
    setMovieObj((prevStade) => {
      return prevStade.filter((card) => card.id !== id);
    });
  }
  return (
    <div className=" flex flex-col gap-2 justify-center items-center w-[80%] mx-auto">
      <GetFormData onSaveDataFromMovie={addMovieHandler} />

      {movieObj.map((movieObj) => (
        <Movie key={movieObj.id} props={movieObj} handelDelete={handelDelete} />
      ))}
    </div>
  );
}

export default App;
