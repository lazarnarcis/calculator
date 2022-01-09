import React, { useRef } from "react"
import "./App.scss"

export default function App() {
    const theNumber = useRef(0)

    const addValue = (number) => {
        const getvalue = theNumber.current.value
        if ((getvalue === "" && (number === "/" || number === "*")) || ((number === "/" || number === "*") && (getvalue === "+" || getvalue === "-"))) {
            return
        }
        let lastChar = getvalue.substr(getvalue.length - 1)
        if ((number === "/" || number === "+" || number === "-" || number === "*" || number === ".") && (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".")) {
            theNumber.current.value = getvalue.slice(0, -1) + number
        } else {
            theNumber.current.value = getvalue + number
        }
    }
    const calculate = () => {
        const getvalue = theNumber.current.value
        if (getvalue === "") {
            return
        }
        let lastChar = getvalue.substr(getvalue.length - 1)
        if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
            theNumber.current.value = getvalue.slice(0, -1)
        }
        const theResult = eval(theNumber.current.value)
        theNumber.current.value = theResult
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
                <tbody>
                    <tr>
                        <th colSpan="5" className="specialTD"><input type="text" ref={theNumber} placeholder="Click on numbers" /></th>
                    </tr>
                    <tr>
                        <td onClick={() => addValue("7")}>7</td>
                        <td onClick={() => addValue("8")}>8</td>
                        <td onClick={() => addValue("9")}>9</td>
                        <td onClick={() => deleteVal()} colSpan="2">DEL</td>
                    </tr>
                    <tr>
                        <td onClick={() => addValue("4")}>4</td>
                        <td onClick={() => addValue("5")}>5</td>
                        <td onClick={() => addValue("6")}>6</td>
                        <td onClick={() => addValue("*")}>x</td>
                        <td onClick={() => addValue("/")}>÷</td>
                    </tr>
                    <tr>
                        <td onClick={() => addValue("1")}>1</td>
                        <td onClick={() => addValue("2")}>2</td>
                        <td onClick={() => addValue("3")}>3</td>
                        <td onClick={() => addValue("+")}>+</td>
                        <td onClick={() => addValue("-")}>-</td>
                    </tr>
                    <tr>
                        <td onClick={() => addValue("0")}>0</td>
                        <td onClick={() => addValue(".")}>.</td>
                        <td onClick={() => deleteOne()}>C</td>
                        <td onClick={() => calculate()} colSpan="2">=</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}