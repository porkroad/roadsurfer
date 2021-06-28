<template>
  <div
      v-if="this.booking"
      class="container mx-auto flex justify-center"
  >
    <div class="w-80 p-2 bg-gray-50">
      <div class="flex justify-between py-1">
        Name:
        <h3 class="text-sm" v-text="this.booking.customerName"/>
      </div>
      <div class="flex justify-between py-1">
        Starting date:
        <div class="text-sm" v-text="normalizeDate(this.booking.startDate)"/>
      </div>
      <div class="flex justify-between py-1">
        Ending date:
        <div class="text-sm" v-text="normalizeDate(this.booking.endDate)"/>
      </div>
      <div class="flex justify-between py-1">
        Duration in days:
        <div class="text-sm" v-text="dateDiff"/>
      </div>
      <div class="flex justify-between py-1">
        Return-Station id:
        <div class="text-sm" v-text="this.booking.pickupReturnStationId"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {diff, normalizeDate} from '../../utils/date';

export default {
  name: "BookingDetail",
  data() {
    return {
      diff,
      normalizeDate,
    };
  },
  computed: {
    ...mapGetters('booking', [
      'getBookingByStationAndId',
    ]),
    booking() {
      return this.getBookingByStationAndId(this.$route.params.id);
    },
    dateDiff() {
      return diff({endDate: this.booking.endDate, startDate: this.booking.startDate});
    }
  },
}
</script>

<style scoped>

</style>
