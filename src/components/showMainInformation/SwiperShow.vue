<template >
  <section @click="ds"  v-if="this.showfetchStore.episods != null">
    <div class="head">
      <h3>Episodes</h3>
    </div>
    <div>
      <swiper :modules="modules" :slides-per-view="1" :space-between="10" navigation :scrollbar="{ draggable: true }"
      @swiper="onSwiper" @slideChange="onSlideChange" class="sviper" >
      <swiper-slide v-for="item in this.showfetchStore.episods">
        <div class="seria">
          <div class="img">
            <img v-if="item.image" :src="item.image.medium" alt="">
            <img v-else
              src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
          </div>
          <div class="serian">
            <h4>
              EPISOD:
              {{ item.number }}
            </h4>
          
            <h4>    СHAPTER:{{ item.season }}</h4>
          </div>

        </div>
      </swiper-slide>
    </swiper> 
    
    </div>
   
   
  </section>

</template>
<script>
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  methods: {
    ds() {
      this.showfetchStore.numberEp++
      console.log(this.showfetchStore.numberEp);
    }
  },

  computed: {
    ...mapStores(useShowFetchStore)
  },
  mounted() {
    this.showfetchStore.epizods()
  },
  watch: {
    'showfetchStore.numberEp': {
      handler: function () {
        this.showfetchStore.epizods()
      },
      deep: true,
      immediate: true
    }
  }

};
</script>

<style lang="scss" scoped>
h3 {
  border-bottom: 1px solid rgb(211, 4, 4);
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(211, 4, 4);
}

.sviper {
  width: 100%;
  height: 310px;
  margin: 90px 0;
  border: 1px solid gray;
  -webkit-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);


  .seria {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(211, 4, 4);
    color: #fff;

    .serian {
      width: 40%;
      height: max-content;



      h4 {
        margin: 0 auto;
        text-align:justify;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 60px;
        text-shadow: 1px 1px 2px black;
        width: 90%;
        margin-bottom: 10px;
      }
    }

    .img {

      height: 100%;
      width: 60%;

      img {
        min-width: 100%;
        object-fit: cover;
      }

    }
  }
}

.dw {
  width: 100%;
  height: 310px;
  margin: 90px 0;
  border: 1px solid gray;
  -webkit-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: gray;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 50%;
  background-color: #fff ;
}
</style>