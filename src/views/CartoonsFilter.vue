<template>
  <v-layout>
    <div class="shpwsConteiner" v-if="this.$route.params.name === 'anime'">
      <div class="showsHead">
        <h2>{{ this.$route.params.name }}</h2>
      </div>
      <div class="contShows">
        <div class="cards" v-for=" item in this.fcontentStore.cartoons.anime">
          <div class="imgShows">
            <router-link :to="`/show/${item.id}/${item.name}`">
              <img v-if="item.image" :src="item.image.medium">
              <img v-else
                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
            </router-link>
          </div>
          <div class="cardsName">
            <router-link :to="`/show/${item.id}/${item.name}`" class="name">
              <p>{{ item.name }} </p>
            </router-link>
            <Like />
          </div>
        </div>
      </div>
    </div>
    <div class="shpwsConteiner" v-if="this.$route.params.name === 'american'">
      <div class="showsHead">
        <h2>{{ this.$route.params.name }}</h2>
      </div>
      <div class="contShows">
        <div class="cards" v-for=" item in this.fcontentStore.cartoons.america">
          <div class="imgShows">
            <router-link :to="`/show/${item.id}/${item.name}`">
              <img v-if="item.image" :src="item.image.medium">
              <img v-else
                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
            </router-link>
          </div>
          <div class="cardsName">
            <router-link :to="`/show/${item.id}/${item.name}`" class="name">
              <p>{{ item.name }} </p>
            </router-link>
            <Like />
          </div>
        </div>
      </div>
    </div>
    <SideBar />
  </v-layout>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import Like from '@/components/Like.vue'
import { useFcontentStore } from '@/stores/fetchContent'
import { mapStores } from 'pinia';
export default {
  computed: {
    ...mapStores(useFcontentStore)
  },


  components: {
    Like,
    SideBar
  },

  mounted() {
    this.fcontentStore.data()

  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

.shpwsConteiner {
  margin: 100px 0;
  width: 1000px;


  .showsHead {
    margin-bottom: 50px;

    h2 {
      color: rgb(211, 4, 4);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 50px;
      border-bottom: 2px solid rgb(211, 4, 4);
    }
  }

  .contShows {
    display: flex;
    flex-wrap: wrap;

    .cards {
      margin: 0 35px 35px 0;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.711);
      cursor: pointer;

      .imgShows {
        height: 295px;
        width: 210px;

        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 400ms;

          &:hover {
            opacity: 50%;
          }
        }

      }

      .cardsName {

        background-color: rgb(211, 4, 4);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
        width: 210px;
        height: 50px;

        .name {
          width: 80%;
          height: 100%;
          display: flex;
          align-items: center;

          p {
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 700;
            line-height: 20px;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>