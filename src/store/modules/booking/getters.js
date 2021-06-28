export default {
    getSelectedBookings: (state) => {
        const { selected } = state;

        return state.initData.find((booking) => booking.name === selected);
    }
}
