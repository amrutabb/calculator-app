import { ACTIONS } from "../actions/Actions"

export default function OperationButton({ dispatch, operation }) {
  const payload ={
    value : operation,
    type : 'Oper'
  }
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload })
      }
    >
      {operation}
    </button>
  )
}
