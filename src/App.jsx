import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import { useState } from "react";
function App() {
  const [bookmarkAdd, setBookmarkAdd] = useState([]);
  const [time, setTime] = useState(0);

const handleBookMarks = (tittle) => {
  
    const newBookMarksAdd = [...bookmarkAdd, tittle];
    setBookmarkAdd(newBookMarksAdd);

  };



  const handelRead = ({reading_time},title) => {
    
    const newTime = time + reading_time;
    setTime(newTime);
    const remainingBookMarks=bookmarkAdd.filter(onebookmarkt => onebookmarkt != title)
    setBookmarkAdd(remainingBookMarks)
 
  };

  return (
    <>
      <Header></Header>

      <section className="container flex justify-between m-auto">
        <Blogs
          handleBookMarks={handleBookMarks}
          handelRead={handelRead}
        ></Blogs>
        <BookMarks bookmarkAdd={bookmarkAdd} time={time}></BookMarks>
      </section>
    </>
  );
}

export default App;
