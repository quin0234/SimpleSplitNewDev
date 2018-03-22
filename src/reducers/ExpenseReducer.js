import { PICTURE, EXPENSE_TITLE_CHANGED, SAVE_EXPENSE, CLEAR_EXPENSE_FORM, } from '../actions/types';

const INITIAL_STATE = { expenseTitle: '', picture: '', error:'', loading: false};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
  switch (action.type) {
    case EXPENSE_TITLE_CHANGED:
        return {...state, expenseTitle: action.payload}
    case PICTURE:
        return {...state, picture: action.payload}
    case SAVE_EXPENSE:
        return {...state, loading: true, error: '' }
    
    case CLEAR_EXPENSE_FORM:
        return INITIAL_STATE;
      default:
          return state;
  }
};