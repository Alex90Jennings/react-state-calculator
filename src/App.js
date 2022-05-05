import "./App.css";
import { useState } from "react";

function App() {
  const [leftNum, setLeftNum] = useState("0");
  const [rightNum, setRightNum] = useState("0");
  const [answer, setAnswer] = useState(0);
  const [symbol, setSymbol] = useState("+");

  const addNumberToLeftNum = (number) => {
    if (leftNum === "0") {
      setLeftNum(number);
    } else {
      setLeftNum(leftNum + number);
    }
  };

  const addNumberToRightNum = (number) => {
    if (rightNum === "0") {
      setRightNum(number);
    } else {
      setRightNum(rightNum + number);
    }
  };

  const calculateAnswer = () => {
    const l = parseFloat(leftNum);
    const r = parseFloat(rightNum);
    if (symbol === "+") {
      setAnswer(l + r);
    }
    if (symbol === "-") {
      setAnswer(l - r);
    }
    if (symbol === "*") {
      setAnswer(l * r);
    }
    if (symbol === "/") {
      setAnswer(l / r);
    }
  };

  const changeSymbol = (symbol) => {
    setSymbol(symbol);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNum}</p>
        <div className="numbers">
          <button onClick={() => addNumberToLeftNum("1")}>1</button>
          <button onClick={() => addNumberToLeftNum("2")}>2</button>
          <button onClick={() => addNumberToLeftNum("3")}>3</button>
          <button onClick={() => addNumberToLeftNum("4")}>4</button>
          <button onClick={() => addNumberToLeftNum("5")}>5</button>
          <button onClick={() => addNumberToLeftNum("6")}>6</button>
          <button onClick={() => addNumberToLeftNum("7")}>7</button>
          <button onClick={() => addNumberToLeftNum("8")}>8</button>
          <button onClick={() => addNumberToLeftNum("9")}>9</button>
          <button onClick={() => addNumberToLeftNum("0")}>0</button>
          <button onClick={() => setLeftNum("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={() => changeSymbol("+")}>+</button>
          <button onClick={() => changeSymbol("-")}>-</button>
          <button onClick={() => changeSymbol("*")}>*</button>
          <button onClick={() => changeSymbol("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNum}</p>
        <div className="numbers">
          <button onClick={() => addNumberToRightNum("1")}>1</button>
          <button onClick={() => addNumberToRightNum("2")}>2</button>
          <button onClick={() => addNumberToRightNum("3")}>3</button>
          <button onClick={() => addNumberToRightNum("4")}>4</button>
          <button onClick={() => addNumberToRightNum("5")}>5</button>
          <button onClick={() => addNumberToRightNum("6")}>6</button>
          <button onClick={() => addNumberToRightNum("7")}>7</button>
          <button onClick={() => addNumberToRightNum("8")}>8</button>
          <button onClick={() => addNumberToRightNum("9")}>9</button>
          <button onClick={() => addNumberToRightNum("0")}>0</button>
          <button onClick={() => setRightNum("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateAnswer()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
