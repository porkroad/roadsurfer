# roudsurfer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Explanation

I used VueRouter for routing.

I used Vuex for state-management. For a big project i'd also use VuexORM for object-modelling.

I used dayjs just for simplicity.

Since we're storing the initial request, i decided to not use the booking endpoint (```https://605c94c36d85de00170da8b4.mockapi.io/stations/{station-id}/{booking-id}```).
I can not see any purpose to use it. If we can't store the initial request for whatever-reason, i'd query the endpoint inside the BookingDetail-component with the given parameters from ```this.$route.params```.

If we would have translations, i'd also use [Vue I18n](https://kazupon.github.io/vue-i18n/) and replace every hardcoded string with a translation.
