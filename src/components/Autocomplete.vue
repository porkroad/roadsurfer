<template>
  <div>
    <div class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="label-search" for="search">Search..</label>
        </div>
        <div class="md:w-1/3">
          <input
              type="text"
              v-model="searchInput"
              @input="onInput"
              name="search"
              id="search"
              class="border"
          />
        </div>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3 user-select">
        <ul>
          <li
              v-for="(result, key) in results"
              :key="key"
              v-text="result"
              @click="onSelectInput(result)"
              class="user-select__value"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '../utils/debounce';

export default {
  name: "Autocomplete",
  data() {
    return {
      searchInput: '',
      results: [],
      apiData: [],
      debouncedSearch:  debounce(() => this.queryApi(this.searchInput), 500),
    };
  },
  methods: {
     onInput() {
      if (!this.searchInput.trim()) {
        this.results = [];
        return;
      }

       this.debouncedSearch();
    },
    queryApi() {
       this.results = [];
      fetch('https://605c94c36d85de00170da8b4.mockapi.io/stations')
          .then(response => response.json())
          .then(data => (this.results = data.filter(res => {
            if (res.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1) {
              return res.name;
            }
          }).map((data) => data.name)));
    },
    onSelectInput(result) {
      this.searchInput = result;
      this.results = [];
      this.$emit('user-select', result);
    }
  }
}
</script>

<style scoped>
.label-search {
  display: block;
}

.user-select__value {
  cursor: pointer;
}
</style>
