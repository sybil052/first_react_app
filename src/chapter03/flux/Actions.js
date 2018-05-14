/**
 * Created by xizhixin on 2018/5/11.
 */
import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption,
    })
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption,
    })
}