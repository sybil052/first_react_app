/**
 * Created by xizhixin on 2018/5/14.
 */
import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
    return {
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    };
};

export const decrement = (counterCaption) => {
    return {
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    };
};