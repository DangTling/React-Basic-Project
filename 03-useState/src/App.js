import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";



// const gifts = [
//   'MSI Modern 15',
//   'Dell XPS 13',
//   'Lenovo Ideapad 5 Pro',
//   'Macbook Air 2020'
// ]

// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS, Javascript'
//   },
//   {
//     id: 2,
//     name: 'PHP, MySQL'
//   },
//   {
//     id: 3,
//     name: 'ReactJS, NodeJS, ExpressJS'
//   }
// ]



function App() {

  // const [gift, setGift] = useState()
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)
  //   setGift(gifts[index]);
  // }

  // const [checked, setChecked] = useState([])
  // console.log(checked);
  // const handleCheck = (id) => {
  //   setChecked((prev) => {
  //     const isChecked = checked.includes(id)
  //     if (isChecked) {
  //       return checked.filter(items => items !== id)
  //     } else {
  //       return [...prev, id]
  //     }
  //   })
  // }
  // const handleSubmit = () => {
  //   console.log(checked)
  // }
  
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  const headerStyle = {
    backgroundColor: isDarkMode ? 'rgb(11, 39, 61)' : 'rgb(37, 190, 255)',
    color: isDarkMode ? 'white' : 'black'
  };  
  return (
    <React.Fragment>
      <Header style={headerStyle}></Header>
      <div className="App" style={{
      backgroundColor: isDarkMode ? 'rgb(11, 39, 61)' : 'white',
      color: isDarkMode ? 'white' : 'black'
    }}>

      {/* <h1>{gift || 'Mời bạn quay số trúng thưởng'}</h1>
      <button onClick={randomGift}>Quay Ngẫu Nhiên</button> */}

      {/* {courses.map(course => (
        <div key={course.id}>
          <input type="checkbox"
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button> */}

        <p>Prerequisite to get started ReactJS:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <div className="img">
          <img src="./avatar.jpg" alt="Anh dai dien"/>
        </div>
        <h2>Manchester  United</h2>
        <button onClick={toggleDarkMode}>Change Background Color</button>
      </div>
      <Footer style={headerStyle}/>
    </React.Fragment>
  );
}

export default App;
