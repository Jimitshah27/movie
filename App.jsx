import { useState } from "react";
import "./App.css";
// import workData from "./work.js";
import Request from "./Request";
import Movie from "./Movie";

// const something = fetch(URL)
//       .then((response) => {return response.json();
//       })
//       .then((data) => setquote(data.quote));
      // console.log(data.quote)
      // \



      // function App() {
      //   // console.log(workData);
      //   const [quote, setQuote] = useState("Click the button");
      //   const URL = "https://swapi.dev/api/films/?format=json";
      
      //   async function makeRequest(){
      //       const something = await fetch(URL);
      //       const data = await something.json();
        
      //       setQuote(data.quote);
      
      //     }
        
      //   return (
      //     <div>
      //        <Movie/>
      //        <Request url = {URL} makeRequest={makeRequest}/>
      //        <h6>{quote}</h6>
      //     </div>

function App() {
  // console.log(workData);
  const [movie, setmovie] = useState([]);
  const URL = "https://swapi.dev/api/films/?format=json";

  async function makeRequest(){
      const something = await fetch(URL);
      const data = await something.json();
      console.log(data)
      setmovie(data.results);

    }
  
  return (
    <div>
       <Movie url = {URL} makeMovie={makeRequest} movie = {movie}/>
       {/* <Request url = {URL} makeMovie={makeRequest}/> */}
       
    </div>

    // <div className="work">
    //   <div className="slider">
    //     {workData.map((data) => (
    //       <div key={data.id} className="container">
    //         <div className="item">
    //           <div className="left">
    //             <h1 className="title">{data.title}</h1>
    //             <h4 className="desc">{data.desc}</h4>
    //           </div>
    //           <div className="right">
    //             <img src={data.img} alt="img" />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="leftArrow arrow" onClick={() => handleClick ("left")}> ◀ </div>
    //   <div className="rightArrow arrow" onClick={() => handleClick ("right")}> ▶ </div>
    // </div>
  );
}

export default App;







// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Header';
// // import Note from './Note';
// // import Footer from "./Footer";
// // // import Counter from "./Counter";
// // import EMOJI from "./emoji";
// import workData from './work';


// function Jimit() {

//   return (
//       <div className="container">
//         <Header />
//         {/* <EMOJI /> */}
//         {workData.map((elem) => (
//           <div className="">
//           <div key={elem.id}>{elem.icon}</div>
//             <div>{elem.desc}</div>
//             <div>{elem.img}</div>
//             </div>
//             <img src={elem.img} alt="" />
          
//         ))}
    
//         </div>
//         )

// //   console.log(EMOJI);

// //  return (
// //   <div className="container">
// //     <Header />
// //     {/* <EMOJI /> */}
// //     {EMOJI.map((elem) => (
// //       <div className="">
// //       <div key={elem.id}>{elem.emoji}</div>
// //         <div>{elem.name}</div>
// //         <div>{elem.meaning}</div>
// //         </div>
      
// //     ))}

// //     </div>
// //     )

//   // const numbers = [1, 2, 3, 4, 5, 6, 7];

//   // functio 

//   // let state = useState();
   

//   // let testname = "Jimit";

//   // function handleClick() {
//   //   console.log("i got clicked!");
//   // }

//   // const test = {
//   //   name: "zaiem",
//   //   hobbies: ["games", "anime"],
//   //   grade: 12,
//   //   isAdmin: false,
//   //   subject: {
//   //     name: "javascipt",
//   //     grade: "a",
//   //   },
//   // };

//   // function handleChange(event) {
//   //   let value = event.target.value;
//   //   testname = value
//   //   console.log(testname);
//   // }

//   // return (
//   //   <div className="container">
//   //     <Header />
//   //     <Note />
//   //     <Footer />
//   //     <h1>Hello {testname}</h1>
//   //     <div className="form">
//   //       <input
//   //         onChange={handleChange}
//   //         type="text"
//   //         placeholder="Enter your Name"
//   //       />
//   //       <input 
//   //         onChange={handleChange}
//   //         type="text" placeholder="Enter your Email" />

//   //       <button type="submit" onClick={handleClick}>
//   //         Submit
//   //       </button>
//   //       <button onClick={handleplus}>+</button>
//   //       <button onClick={handleminus}>-</button>
//   //       <button onClick={handlereset}>reset</button>
//   //     </div>
//   //   </div>
//   // );
// }

// export default Jimit
