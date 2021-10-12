import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addAbout } from "../redux/apiCalls";


export default function AddAbout() {
  const dispatch = useDispatch();

  //
  const title = useRef();
  const image = useRef();
  const describe = useRef();

  const formsubmitted = async (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      image: image.current.value,
      describe: describe.current.value,
    };
    const update = await addAbout(data, dispatch);
  };

  return (
    <div className="">
      <form onSubmit={formsubmitted} className="aboutBox shadow p-3 mb-5">
        <h3 className="aboutTitle">Add About</h3>
        <input
          ref={title}
          required
          type="text"
          className="aboutInput"
          placeholder="title"
        />
        <input
          ref={image}
          required
          type="text"
          className="aboutInput"
          placeholder="image url"
        />
        <textarea
          ref={describe}
          required
          type="text"
          className="aboutInput"
          placeholder="describe"
        />
        <button type="submit" className="aboutButton">
          Add
        </button>
      </form>
    </div>
  );
}
