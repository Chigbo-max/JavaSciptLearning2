
import './App.css'
import Input from "./components/input.jsx";
import Button from "./components/button";
import PlusButton from "./components/PlusButton.jsx"
import { useState } from 'react';
import * as math from "mathjs"

function App() {
  const signsBackgroundColor = "#51c9db";
  const [text, setText] = useState("0");
  const [result, setResult] = useState("");

  const addToText = (value)=>{
    if(text === "0" && value === "0"){
      return;
    }
    else if(text === "0" && value !=0){
      setText(value + "");
    }
    else{
    setText((text)=>[...text, value + ""]);
    }
  }

  const reset = ()=>{
    setText("0");
    setResult("");
  }

  const calculateResult = ()=>{
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  const reduceText = (value)=>{
    if(value.length > 10){
      return "Number too large"
    }
    return value;
  }



  return (
    <div className = "App">

      <Input text = {reduceText(text)} result = {result}/>
      <div className="buttons">
      <Button symbol = 'CE' color = {signsBackgroundColor} handleClick={reset}/>
      <Button symbol = '(' color = {signsBackgroundColor} handleClick={addToText}/>
      <Button symbol = ')' color = {signsBackgroundColor}handleClick={addToText}/>
      <Button symbol = '/' color = {signsBackgroundColor}handleClick={addToText}/>
      </div>

      <div className="buttons">
      <Button symbol = '7'  handleClick={addToText}/>
      <Button symbol = '8' handleClick={addToText}/>
      <Button symbol = '9' handleClick={addToText}/>
      <Button symbol = '*' color = {signsBackgroundColor} handleClick={addToText}/>
      </div>

      <div className="buttons">
      <Button symbol = '4'  handleClick={addToText}/>
      <Button symbol = '5' handleClick={addToText}/>
      <Button symbol = '6'  handleClick={addToText}/>
      <Button symbol = '-' color = {signsBackgroundColor} handleClick={addToText}/>
      </div>

      <div className="buttons">
      <Button symbol = '1'  handleClick={addToText}/>
      <Button symbol = '2'  handleClick={addToText}/>
      <Button symbol = '3'  handleClick={addToText}/>
      </div>

      <div className="buttons">
      <Button symbol = '0' handleClick={addToText}/>
      <Button symbol = '.' handleClick={addToText}/>
      <Button symbol = '=' color = {signsBackgroundColor} handleClick={calculateResult}/>
      <div className="plusButtons">
      <PlusButton symbol = '+' color = {signsBackgroundColor} handleClick={addToText}/>
      </div>
      </div>
      

   </div>
  )
}

export default App
