<template>
    <section>
        <div class="swperConteiner">
            <swiper :modules="modules" class="mySwiper" slides-per-view="3" :autoplay="true"
                :center-insufficient-slides="true" :space-between="10">
                <swiper-slide v-for="item in this.fcontentStore.imgSlider">
                    <img :src="item.image.medium" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>

import { useFcontentStore } from '@/stores/fetchContent'
import { mapStores } from 'pinia';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, } from "swiper";
import 'swiper/css';
export default {
    computed: {
        ...mapStores(useFcontentStore)
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],

        };
    },
    mounted() {
        this.fcontentStore.data()

    }

}
</script>
<style lang="scss" scoped>
.swperConteiner {
    margin-bottom: 100px;
}

img {
    height: 100%;
    width: 100%;
    border: 1px solid gray;
    object-fit: cover;
    -webkit-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.541);
    border-radius: 10px;
}

.mySwiper {
    width: 100%;
    height: 85vh;
    margin-top: 10px;
    z-index: -1;



}
</style>
