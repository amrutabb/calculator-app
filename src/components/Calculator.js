import { useReducer } from "react"
import NumberButton from "./NumberButton"
import OperationButton from "./OperationButton"
import LanguageSwitcher from "./LanguageSwitcher"
import "./styles.css"
import { ACTIONS, reducer } from "../actions/Actions"

function Calculator() {
  const initialState = { equation: [] }
  const [{ equationDisplay, answerDisplay }, dispatch] = useReducer(
    reducer,
    initialState
  )
  const disableLangSwitch = true;
  return (
    <div className="calculator-grid">
      { !disableLangSwitch && <div className="lang-switch">
          <LanguageSwitcher resetCalculator={() => dispatch({ type: ACTIONS.CLEAR })}/>
      </div> }
      <div className="output">
        <div className="previous-operand">
          {answerDisplay}
        </div>
        <div className="current-operand">{equationDisplay}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button
        className="span-one"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
      >
        C
      </button>
      <OperationButton operation="%" dispatch={dispatch} />
      <NumberButton digit="7" label="seven" dispatch={dispatch} />
      <NumberButton digit="8" label="eight" dispatch={dispatch} />
      <NumberButton digit="9" label="nine" dispatch={dispatch} />
      <OperationButton operation="÷" dispatch={dispatch} />
      <NumberButton digit="4" label="four" dispatch={dispatch} />
      <NumberButton digit="5" label="five" dispatch={dispatch} />
      <NumberButton digit="6" label="six" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <NumberButton digit="1" label="one" dispatch={dispatch} />
      <NumberButton digit="2" label="two" dispatch={dispatch} />
      <NumberButton digit="3" label="three" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <NumberButton digit="." dispatch={dispatch} />
      <NumberButton digit="0" label="zero" dispatch={dispatch} />
      <button
        className="span-one"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
      <OperationButton operation="+" dispatch={dispatch} />
      
    </div>
  )
}

export default Calculator
