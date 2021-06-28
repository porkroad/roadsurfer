<template>
  <div class="calendar-data">
    <div v-text="date.formatted"></div>
    <div v-if="this.getSelectedBookings">
      <Booking
          v-for="(booking, key) in this.getSelectedBookings.bookings"
          :key="key"
          :booking="booking"
          :date="date"
      />
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

import Booking from "./Booking";

export default {
  name: "CalendarData",
  components: {Booking},
  props: {
    date: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('booking', [
      'initData',
      'selected',
    ]),
    ...mapGetters('booking', [
      'getSelectedBookings',
    ]),
  },
  methods: {
    async stationData() {
      const data = await fetch('https://605c94c36d85de00170da8b4.mockapi.io/stations');
      const jsonData = await data.json();

      console.log(jsonData);
      return jsonData.find((data) => data.name === this.selected);
    },
    getBooking(timestamp) {
      return {
        timestamp,
      };
    }
  }
}
</script>

<style scoped>
.calendar-data {
  border: 1px solid black;
}
</style>
