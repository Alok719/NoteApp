import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setaddItem] = useState([]);
  const addNote = (note) => {
    setaddItem((olditems) => {
      return [...olditems, note];
    });
  };
  const delteItems = (id) => {
    setaddItem((olditems) => {
      return olditems.filter((arrele, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onSelect={delteItems}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App;
