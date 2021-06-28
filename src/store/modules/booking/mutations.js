import * as mutationTypes from './mutation-types';

const setInitData = (state, initData) => {
    state.initData = initData;
}

const setSelected = (state, selectedBooking) => {
    state.selected = selectedBooking;
}

const mutations = {
    [mutationTypes.SET_INIT_DATA]: setInitData,
    [mutationTypes.SET_SELECTED]: setSelected,
};

export default mutations;
