import ButtonGrid from "./components/ButtonGrid";
import InputDisplay from "./components/InputDisplay";
// import "./App.css";
import Container from "./components/Container";
import { useState } from "react";

function App(){
  let btnArray = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.','C'];
 let [btnPress,setBtnPress] = useState('');
   const handleOnClick = (event) => {
    if(event.target.innerText === 'C'){
      setBtnPress('');
    }
    else if(event.target.innerText === '='){
      const result = eval(btnPress);
      setBtnPress(result)
    }
    else{
      const newDisplay = btnPress + event.target.innerText;
      setBtnPress(newDisplay);
    }
     console.log(event.target.innerText);
   }
  return <Container>
    <div>
      <InputDisplay btnPress={btnPress}/>
      <ButtonGrid btnArray={btnArray} handleOnClick={handleOnClick}/>
    </div>
  </Container>
}
export default App;