<template>
  <div
      v-if="this.isBookingActive()"
      :class="bookingClass"
  >
    {{ booking.customerName }}
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export default {
  name: "Booking",
  props: {
    booking: {
      type: Object,
      required: true
    },
    date: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bookingClass() {
      return {
        'booking__start': this.isBookingStarting,
        'booking__end': this.isBookingEnding,
      };
    },
    isBookingStarting() {
      const calendarData = new Date(this.date.timestamp);
      const startDate = new Date(this.booking.startDate);

      return calendarData.setHours(0, 0, 0, 0) == startDate.setHours(0, 0, 0, 0);
    },
    isBookingEnding() {
      const calendarData = new Date(this.date.timestamp);
      const endDate = new Date(this.booking.endDate);

      return calendarData.setHours(0, 0, 0, 0) == endDate.setHours(0, 0, 0, 0);
    }
  },
  methods: {
    getDate() {
      return (new Date(this.booking.timestamp)).getDate();
    },
    isBookingActive() {
      return this.isBookingStarting || this.isBookingEnding;
    },
  }
}
</script>

<style scoped>
.booking__start {
  color: green;
}

.booking__end {
  color: red;
}
</style>
