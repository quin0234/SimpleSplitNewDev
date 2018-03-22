import {
    PICTURE,
    EXPENSE_TITLE_CHANGED,
    SAVE_EXPENSE,
    CLEAR_EXPENSE_FORM,
    EXPENSE_FETCH_SUCCESS
} from './types';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const pictureChanged = (text) => {
    return {
        type: PICTURE,
        payload: text
    };
};

export const expenseTitleChanged = (text) => {
    return {
        type: EXPENSE_TITLE_CHANGED,
        payload: text,
    };
};

export const getExpenses = () => {
    const  { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/expenses`)
        .on('value', snapshot => {
            dispatch({ type: EXPENSE_FETCH_SUCCESS, payload: snapshot.val() });

        });
    };
};

export const saveExpense = ({expenseTitle}) => {
    const  { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: SAVE_EXPENSE})
        console.log(expenseTitle)
        firebase.database().ref(`/users/${currentUser.uid}/expenses`)
        .push({expenseTitle})
        .then(() => { 
            dispatch({ type: CLEAR_EXPENSE_FORM})
            Actions.main()
        });
    };
};

