import Vue from 'vue';
import Vuex from 'vuex';

import booking from './modules/booking';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        booking
    }
});
