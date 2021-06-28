export default {
    getSelectedBookings: (state) => {
        const { selected } = state;
        const station = state.initData.find((station) => station.id === selected);

        return station?.bookings;
    },
    getBookingByStationAndId: (state, getters) => (bookingId) => {
        const station = getters.getSelectedBookings;
        const booking = station?.find((booking) => booking.id === bookingId);

        return booking;
    }
}
