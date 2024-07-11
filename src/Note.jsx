import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const delteone = () => {
    props.onSelect(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={delteone}>
          <DeleteOutlineIcon className="deleteIcon "></DeleteOutlineIcon>
        </button>
      </div>
    </>
  );
};
export default Note;
