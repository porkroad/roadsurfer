<template>
  <div
      v-if="this.isBookingActive()"
      :class="bookingClass"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
  >
    <router-link
        v-text="booking.customerName"
        :to="routerLink"
    >
    </router-link>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import {mapState} from 'vuex';

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
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    ...mapState('booking', [
      'selected',
    ]),
    bookingClass() {
      return {
        'booking__start': this.isBookingStarting,
        'booking__end': this.isBookingEnding,
        'bg-gray-300': this.isHover,
        'bg-gray-50': !this.isHover,
      };
    },
    routerLink() {
      return `/roadsurfer/${this.selected}/${this.booking.id}`;
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

<style lang="scss" scoped>
.booking {
  &__start {
    color: green;
  }

  &__end {
    color: red;
  }
}
</style>
