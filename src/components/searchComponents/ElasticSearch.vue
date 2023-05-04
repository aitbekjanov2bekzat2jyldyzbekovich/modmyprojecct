<template>
    <input v-if="this.$route.name != 'show'" type="text" @input="this.searchStore.inputSearch"
        v-model="this.searchStore.inputValue">
    <button class="button" :class="{ nosearch: this.searchStore.contData.length < 1 }
    " @click="linkSearcRess" v-if="this.$route.name != 'show'">
        SEARCH
    </button>
</template>

<script>
import { useSearchesStore } from '@/stores/searchfetch'
import { mapStores } from 'pinia';
export default {
    computed: {
        ...mapStores(useSearchesStore)
    },
    methods: {

        linkSearcRess() {
            if (this.searchStore.contData.length) {
                this.$router.push({
                    path: `/search`,
                    query: {
                        q: this.searchStore.inputValue,
                        type: this.searchStore.show.type,
                        name: this.searchStore.show.name
                    }
                })
                this.searchStore.inputValue = ''
                this.searchStore.contData = []
            }


        }

    }
}

</script>

<style lang="scss" scoped>
input {
    outline: none;
    color: rgb(73, 69, 69);
    padding: 15px;
    width: 50%;
    background-color: rgb(255, 255, 255);
    border: 1px solid gray;
    border-radius: 20px 0px 0px 20px;
    font-size: 17px;
    transition: all 400ms;
    border-right: none;

    &::placeholder {
        text-align: center;
    }

    &:focus {
        border: 1px solid rgb(211, 4, 4);
        -webkit-box-shadow: -1px -1px 10px 5px rgb(211, 4, 4);
        box-shadow: -1px -1px 10px 5px rgb(211, 4, 4);

    }
}

button {
    border: none;
    background-color: rgb(211, 4, 4);
    padding: 15px;
    border: 1px solid rgb(211, 4, 4);
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    border-radius: 0 20px 20px 0;
    text-align: center;
    transition: all 200ms;
    color: #fff;

    &:active {
        -webkit-box-shadow: -1px -1px 10px 5px rgb(211, 4, 4);
        box-shadow: -1px -1px 10px 5px rgb(211, 4, 4);
    }
}

.contentWrapper {
    width: 50%;
    display: none;
}

.nosearch {

    cursor: none;

    &:active {
        box-shadow: none;

    }
}
</style>