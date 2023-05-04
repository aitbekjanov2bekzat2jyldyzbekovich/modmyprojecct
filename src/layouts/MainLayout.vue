<template>
    <v-Header />
    <div class="conteiner" :class="{
        conteinerBlok: this.searchStore.inputValue,
        sidebarCont: this.$route.name === 'movie'
            || this.$route.name === 'filter'
            || this.$route.name === 'cartoon'
            || this.$route.name === 'cartoonf'
    }">
    <ModalShow />
    <ContentElasticSearch />
        <main>
          
            <slot />
        </main>
    </div>
    <Footer />
</template>

<script>

import ModalShow from '../components/showMainInformation/ModalShow.vue';
import ContentElasticSearch from '../components/searchComponents/ContentElasticSearch.vue';
import { useSearchesStore } from '@/stores/searchfetch'
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    computed: {
        ...mapStores(useSearchesStore ,useShowFetchStore)
    },
    components: {
        'v-Header': Header,
        Footer,
        ContentElasticSearch,
        ModalShow
    },


    }

</script>

<style lang="scss" scoped>
.sidebarCont {
    width: 1300px;

    main {
        display: flex;
    }

}
</style>