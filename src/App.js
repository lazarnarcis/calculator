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
        if (getvalue === "" && (number === "/" || number === "+" || number === "-" || number === "*" || number === ".")) {
            return
        }
        let lastChar = getvalue.substr(getvalue.length - 1)
        if ((number === "/" || number === "+" || number === "-" || number === "*") && (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*")) {
            theNumber.current.value = getvalue.slice(0, -1) + number
        } else if (number === "." && (lastChar === "." || lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*")) {
            return
        } else if ((number === "." || number === "/" || number === "+" || number === "-" || number === "*") && lastChar === ".") {
            return
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
            <table>
                <tr>
                    <td colspan="5" className="specialTD"><input type="text" ref={theNumber} placeholder="Click on the numbers" /></td>
                </tr>
                <tr>
                    <td onClick={() => addValue("7")}>7</td>
                    <td onClick={() => addValue("8")}>8</td>
                    <td onClick={() => addValue("9")}>9</td>
                    <th onClick={() => deleteVal()} colspan="2">DEL</th>
                </tr>
                <tr>
                    <td onClick={() => addValue("4")}>4</td>
                    <td onClick={() => addValue("5")}>5</td>
                    <td onClick={() => addValue("6")}>6</td>
                    <th onClick={() => addValue("*")}>x</th>
                    <th onClick={() => addValue("/")}>÷</th>
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
                    <th onClick={() => addValue(".")}>.</th>
                    <th onClick={() => deleteOne()}>C</th>
                    <th onClick={() => calculate()} colspan="2">=</th>
                </tr>
            </table>
        </div>
    )
}