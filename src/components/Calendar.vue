<template>
  <div
      class="md:container md:mx-auto"
  >
    <Autocomplete
        @user-select="onSelect"
    />
    <div class="inline-flex">
      <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          @click="lastWeek()"
      >
        Prev
      </button>
      <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          @click="nextWeek()"
      >
        Next
      </button>
    </div>
    <div
        class="grid grid-cols-1 md:grid-cols-7 p-3"
    >
      <div
          v-for="(day, key) in weekData"
          :key="key"
      >
        <CalendarData :date="day"/>
      </div>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs';
import Autocomplete from './Autocomplete';
import CalendarData from "./CalendarData";
import {mapActions, mapState} from 'vuex';

export default {
  name: "Calendar",
  components: {
    CalendarData,
    Autocomplete,
  },
  data() {
    return {
      dateToSelect: dayjs(),
    };
  },
  computed: {
    ...mapState('booking', [
      'initData'
    ]),
    weekData() {
      const currentDay = this.dateToSelect;
      const weekData = [];
      if (currentDay.day() !== 0) {
        while (currentDay.subtract(1, 'day').day() !== 0) {
          const date = currentDay.subtract(1, 'day');

          weekData.push({formatted: date.format('MMM ddd D'), timestamp: date.unix() * 1000});
        }
      }

      weekData.push({formatted: currentDay.format('MMM ddd D'), timestamp: currentDay.unix() * 1000});

      let daysToAdd = 0;
      while (weekData.length < 7) {
        const date = currentDay.add(++daysToAdd, 'day');

        weekData.push({formatted: date.format('MMM ddd D'), timestamp: date.unix() * 1000});
      }

      return weekData;
    },
  },
  async mounted() {
    const data = await fetch('https://605c94c36d85de00170da8b4.mockapi.io/stations');
    const initData = await data.json();

    this.setInitData(initData);
  },
  methods: {
    ...mapActions('booking', [
      'setInitData',
      'setSelected'
    ]),
    lastWeek() {
      this.dateToSelect = this.dateToSelect.subtract(1, 'week');
    },
    nextWeek() {
      this.dateToSelect = this.dateToSelect.add(1, 'week');
    },
    onSelect(result) {
      const station = this.initData.find((stations) => stations.name === result);

      this.setSelected(station.id);
    },
  }
}
</script>

<style scoped>

</style>
