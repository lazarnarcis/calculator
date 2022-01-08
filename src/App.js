import React, { useRef, useState } from "react"
import "./App.scss"

export default function App() {
    const theNumber = useRef(0)
    const [calc, stopCalc] = useState(true)

    const addValue = (number) => {
        if (calc === false) {
            theNumber.current.value = ""
            stopCalc(true)
        }
        const getvalue = theNumber.current.value
        if (getvalue === "" && (number === "/" || number === "+" || number === "-" || number === "*")) {
            return
        }
        const lastChar = getvalue.substr(getvalue.length - 1)
        if ((number === "/" || number === "+" || number === "-" || number === "*") && (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*")) {
            lastChar = number
        } else {
            theNumber.current.value = getvalue + number
        }
    }
    const calculate = () => {
        if (theNumber.current.value === "") {
            return
        }
        const theResult = eval(theNumber.current.value)
        theNumber.current.value = theNumber.current.value + " = " + theResult
        stopCalc(false)
    }
    const deleteOne = () => {
        theNumber.current.value = ""
    }
    const deleteVal = () => {
        theNumber.current.value = theNumber.current.value.slice(0, -1)
    }
    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text" className="input" ref={theNumber} />
            <table>
                <tr>
                    <th onClick={() => addValue("7")}>7</th>
                    <th onClick={() => addValue("8")}>8</th>
                    <th onClick={() => addValue("9")}>9</th>
                    <td onClick={() => deleteVal()} colspan="2">DEL</td>
                </tr>
                <tr>
                    <td onClick={() => addValue("4")}>4</td>
                    <td onClick={() => addValue("5")}>5</td>
                    <td onClick={() => addValue("6")}>6</td>
                    <th onClick={() => addValue("*")}>x</th>
                    <td onClick={() => addValue("/")}>÷</td>
                </tr>
                <tr>
                    <td onClick={() => addValue("1")}>1</td>
                    <td onClick={() => addValue("2")}>2</td>
                    <td onClick={() => addValue("3")}>3</td>
                    <th onClick={() => addValue("+")}>+</th>
                    <th onClick={() => addValue("-")}>-</th>
                </tr>
                <tr>
                    <td onClick={() => addValue("0")}>0</td>
                    <td onClick={() => addValue(".")}>.</td>
                    <td onClick={() => deleteOne()}>C</td>
                    <td onClick={() => calculate()} colspan="2">=</td>
                </tr>
            </table>
        </div>
    )
}