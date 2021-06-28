import Vue from 'vue';
import VueRouter from 'vue-router';

import Calendar from '../components/Calendar';
import BookingDetail from '../components/detail/BookingDetail';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Calendar },
    { path: '/:stationId/:id', component: BookingDetail }
];

export default  new VueRouter({
    mode: 'history',
    routes,
});
