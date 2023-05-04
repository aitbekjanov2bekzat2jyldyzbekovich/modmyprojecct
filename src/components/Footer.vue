<template>
    <footer>
        <div v-if="this.searchStore.inputValue.length || this.searchStore.pageSearch.length === 1 "/>
        <div v-else class="contf"/>
    </footer>
</template>

<script>
import { useSearchesStore } from '@/stores/searchfetch'
import { mapStores } from 'pinia';

export default {
    computed: {
    ...mapStores(useSearchesStore)
  },
}
</script>

<style lang="scss" scoped>
.contf {
    width: 100%;
    height: 100px;
    background-color: rgb(211, 4, 4);
    border-top: 1px solid gray;
    -webkit-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 2px -8px 5px -5px rgba(0, 0, 0, 0.6);
    
    bottom: 0;

}
</style>

