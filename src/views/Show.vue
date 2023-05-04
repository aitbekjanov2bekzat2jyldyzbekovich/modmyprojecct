<template>
    <v-layout>
        <ContentShow/>
        <SwiperShow/>
    </v-layout>
</template>


<script>
import SwiperShow from '../components/showMainInformation/SwiperShow.vue';
import ContentShow from '../components/showMainInformation/ContentShow.vue';
export default {
    components: {
        ContentShow,
        SwiperShow
    }

}
</script>

