<template>
  <v-layout>
    <Slider/>
    <Shows/>
    <Favorite/>
  </v-layout>
</template>

<script>
 import Favorite from '../components/Favorite.vue';
import Slider from '../components/Slider.vue'
import Shows from '../components/MainPageShows.vue';
export default {
components: {
Slider,
Shows,
Favorite
},

}

</script>


