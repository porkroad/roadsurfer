import * as mutationTypes from './mutation-types';

const setInitData = ({ commit }, initData) => {
    commit(mutationTypes.SET_INIT_DATA, initData);
}

const setSelected = ({ commit }, selectedBooking) => {
    commit(mutationTypes.SET_SELECTED, selectedBooking);
}

export default {
    setInitData,
    setSelected,
};
