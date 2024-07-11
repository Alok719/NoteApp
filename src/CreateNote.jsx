import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const CreateNote = (props) => {
  const [expand, setExpend] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setnote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setnote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpend(true);
  };
  const shrinkIt = () => {
    setExpend(false);
  };
  return (
    <>
      <div className="main_note" onDoubleClick={shrinkIt}>
        <form className="form">
          {expand ? (
            <input
              type="text"
              placeholder="Tittle"
              autoComplete="off"
              value={note.title}
              name="title"
              onChange={InputEvent}
            />
          ) : null}
          <textarea
            rows=""
            column=""
            placeholder="write your note..."
            value={note.content}
            name="content"
            onChange={InputEvent}
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddCircleIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
