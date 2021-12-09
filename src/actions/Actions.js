import { evaluate as mathEvaluate } from 'mathjs'
export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate",
  }
  
  export function reducer(state, { type, payload }) {
    let equationValue = null;
    
    if(payload) {
      equationValue =[...state.equation,payload];
    } else {
      equationValue=[...state.equation];
    }
    
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if(state.isEvaluated){
          equationValue = [];
          equationValue.push(payload);
          return {
            ...state,
            equation: [...equationValue],
            answerDisplay : formatAnswer(state.result, state.isEvaluated),
            equationDisplay : payload.value,
            isEvaluated: false
          }
        } else {
          return {
            ...state,
            equation: [...equationValue],
            equationDisplay : formatEquation(equationValue)
          }
        }
      case ACTIONS.CHOOSE_OPERATION:
        if(state.equation.length === 0) return state
        if(state.isEvaluated){
          return {
            ...state,
            equation: [...equationValue],
            answerDisplay : formatAnswer(null, state.isEvaluated),
            equationDisplay : formatEquation(equationValue),
            isEvaluated :false
          }
        } else {
          return {
            ...state,
            equation: [...equationValue],
            equationDisplay : formatEquation(equationValue)
          }
        }
      case ACTIONS.CLEAR:
        return {
          isEvaluated : false,
          equation:[]
        }
      case ACTIONS.DELETE_DIGIT:
        equationValue = state.equation.slice(0, -1);
        return {
          ...state,
          equation: [...equationValue],
          equationDisplay : formatEquation(equationValue)
        }
      case ACTIONS.EVALUATE:
        const result = evaluate(equationValue);
        const updateEquation={
          value : result,
          type : 'Number'
        }
        return {
          ...state,
          result : result,
          equation : [updateEquation],
          equationDisplay: result,
          answerDisplay : formatEquation(equationValue, true),
          isEvaluated : true
        }
    }
  }
  
  function evaluate(equation) {
    let eqFormat = formatEquation(equation, null, true)
    let computation = mathEvaluate(eqFormat)
    
    return computation.toString()
  }
  
  export function formatEquation(equation, isEvaluated, isReplace){
    if(equation == null) return
   
    const reducer = equation.map(function(elem){
      if(isReplace && elem.value === '÷'){
        return '/';
      }
      return elem.value
    }).join("")
    
    return isEvaluated ? (reducer + "=") : reducer;
  }

  export function formatAnswer(answer, isEvaluated){
    if(answer == null) return "Ans=0"
    if(isEvaluated) {
      return "Ans=" + answer
    }
    return answer;
  }