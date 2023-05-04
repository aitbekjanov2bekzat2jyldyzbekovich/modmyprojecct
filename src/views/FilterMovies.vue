<template>
  <v-layout>

    <section>
      <div class="shpwsConteiner">
        <div class="showsHead">
          <h2>{{ this.$route.params.name }}</h2>
        </div>
        <div class="contShows">
          <div class="cards" v-for=" item in this.tenMovie">
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
        <div class="nextCount" v-if="this.filterData.length > 10">
          <button @click="counter" :class="{ blok: this.filterData.length === this.tenMovie.length }">NEXT</button>
        </div>
      </div>
    </section>
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
  data() {
    return {
      filterData: [],
      tenMovie: [],
      numm: 10,
      status: true
    }
  },
  methods: {
    async Fdata() {

      await this.fcontentStore.data()
      if (this.$route.params.name === 'allmovies') {
        this.filterData = this.fcontentStore.movie.ollScripteds
        console.log(this.$route.params.name);
      }
      if (this.$route.params.name === 'talkShow') {
        this.filterData = this.fcontentStore.talk_Show
        console.log(this.$route.params.name);
      }
      if (this.$route.params.name === 'reality') {
        this.filterData = this.fcontentStore.realityes
        console.log(this.$route.params.name);
      }
      if (this.$route.params.name === 'documentary') {
        this.tenMovie = this.fcontentStore.documentary
        console.log(this.$route.params.name);
      }
      else {

        if (this.filterData.length < 1) {
          this.fcontentStore.movie.ollScripteds.forEach((element) => {
            if (element.genres[0] === this.$route.params.name) {
              this.filterData.push(element)
            }
            if (element.genres[1] === this.$route.params.name) {
              this.filterData.push(element)
            }
            if (element.genres[2] === this.$route.params.name) {
              this.filterData.push(element)
            }
          });
        }

        this.tenMovie = this.filterData.filter((item, index) => {
          return index < 12
        })
      }
    },
    counter() {
      if (this.tenMovie.length < this.filterData.length) {
        this.numm = this.numm + 10
        this.tenMovie = this.filterData.filter((item, index) => {
          return index < this.numm
        })
      }

    }

  },
  watch: {
    '$route.params.name': {
      handler: function () {
        this.Fdata()
        this.filterData = []
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.Fdata()
  }
}







</script>

<style lang="scss" scoped>
.blok {
  display: none;

  &:hover {
    opacity: none;
    cursor: none;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

section {
  width: 1000px;
}

.shpwsConteiner {
  margin: 100px 0;


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

.nextCount {

  width: max-content;

  button {
    padding: 10px 50px;
    cursor: pointer;
    background-color: rgb(211, 4, 4);
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    border-radius: 7px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.711);
    transition: all 400ms;

    &:hover {
      opacity: 70%;
    }
  }
}</style>