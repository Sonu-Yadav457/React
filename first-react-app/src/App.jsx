import { useEffect, useRef, useState } from "react";
// import SonuButton from "./SonuButton";
function App(){
  //UseState Example:-

  // const [myFood,setMyFood] = useState("Paneer");
  // const handlePaneerOnClick = (myFood) => {
  //   if(myFood === "Chicken"){
  //     let toggleFood = "Paneer";
  //     setMyFood(toggleFood);
  //   }
  // }
  // const handleChickenOnClick = (myFood) => {
  //   if(myFood === "Paneer"){
  //     let toggleFood = "Chicken";
  //     setMyFood(toggleFood);
  //   }
  // }

  // return <div>
  //   {/* <h1>Hello, React</h1>
  //   <SonuButton/> */}
  //   {/* UnderStanding UseState Hook */}
  //   <h1>My favourite food is {myFood}</h1>
  //   <button onClick={()=>handleChickenOnClick("Paneer")}>Chicken</button>
  //   <button onClick={()=>handlePaneerOnClick("Chicken")}>Paneer</button>
  // </div>
  //USeEffect Example:-

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
//UseRef:-

let myRef = useRef(null);
const printInput = () => {
  console.log("Input Value:",myRef.current.value);
  myRef.current.value = "";
}
return <>
  <input type="text" ref = {myRef} />
  <button onClick={printInput}>Print Input</button>
</>
}
export default App;