import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/apiCalls";
export default function AddProject() {
  const dispatch = useDispatch();
  const title = useRef();
  const tech = useRef();
  const describe = useRef();
  const linkSource = useRef();
  const linkAction = useRef();
  const type = useRef();

  const formsubmitted = async (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      tech: tech.current.value,
      describe: describe.current.value,
      linkSource: linkSource.current.value,
      linkAction: linkAction.current.value,
      type: type.current.value,
    };
    const update = await addProject(data, dispatch);
  };

  return (
    <div className="">
      <form onSubmit={formsubmitted} className="projectBox shadow p-3 mb-5">
        <h3 className="Admin">Add Project</h3>
        <input
          ref={title}
          required
          type="text"
          className="projectInput"
          placeholder="title"
        />
        <input
          ref={tech}
          required
          type="text"
          className="projectInput"
          placeholder="tech stack"
        />
        <input
          ref={linkSource}
          required
          type="text"
          className="projectInput"
          placeholder="url for source"
        />
        <input
          ref={linkAction}
          required
          type="text"
          className="projectInput"
          placeholder="url for image or gif"
        />
        <input
          ref={type}
          required
          type="text"
          className="projectInput"
          placeholder="type or subcategory"
        />
        <textarea
          ref={describe}
          required
          type="text"
          className="projectInput"
          placeholder="describe"
        />
        <button type="submit" className="projectButton">
          Add
        </button>
      </form>
    </div>
  );
}
