<template>
  <div class="calendar-data">
    <div v-text="date.formatted"></div>
    <div v-if="this.getSelectedBookings">
      <Booking
          v-for="(booking, key) in this.getSelectedBookings"
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
}
</script>

<style scoped>
.calendar-data {
  border: 1px solid black;
}
</style>
