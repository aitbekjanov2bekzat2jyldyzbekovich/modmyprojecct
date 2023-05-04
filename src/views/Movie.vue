<template>
  <v-layout>
    <div class="MovieConteiner">
      <TenMovies/>
     <Reality/>
     <Talk_Show/>
     <documentary/>
    </div>
    <SideBarMovie />
  </v-layout>
</template>

<script>
import SideBarMovie from '../components/SideBar.vue';
import documentary from '../components/movies/Documentary.vue'
import Talk_Show from '../components/movies/Talk _Show.vue';
import Reality from '../components/movies/Reality.vue';
import TenMovies from '../components/movies/TenMovies.vue';
import { useFcontentStore } from '@/stores/fetchContent'
import { mapStores } from 'pinia';
export default {
    computed: {
    ...mapStores(useFcontentStore)
  },
  components: {
    TenMovies,
    Reality,
    Talk_Show,
    documentary,
    SideBarMovie
  }

}
</script>

<style lang="scss" scoped>
.MovieConteiner{

  width: 1000px;
}
</style>