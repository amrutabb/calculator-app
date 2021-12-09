import { ACTIONS } from "../actions/Actions"
import { useTranslation } from 'react-i18next';

export default function NumberButton({ dispatch, digit, label }) {
  const { t, i18n } = useTranslation();
  const payload ={
    value : digit,
    type : 'Number',
    language : i18n.language
  }
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload })}
    >
      { label ? t(label): digit }
    </button>
  )
}
