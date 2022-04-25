import {MathButton} from "./components/MathButton"
import './App.css'

function App() {
  return <div>
    <h1>Calculator</h1>
    <input type="number" name="var1" id="var1" />
    <input type="number" name="var2" id="var2" />
    <MathButton text="+" />
    <MathButton text="-" />
    <MathButton text="/" />
    <MathButton text="*" />
    <MathButton text="%" />
    <div id="total">Result</div>
    </div>
}

export default App
