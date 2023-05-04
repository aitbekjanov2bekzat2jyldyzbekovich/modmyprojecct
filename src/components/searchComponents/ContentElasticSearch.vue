<template>
    <div class="dfultSearch" v-if="this.$route.name != 'show'" :class="{ activeSearch: this.searchStore.inputValue }">
        <div class="conteiner">
            <div class="conteinerSearch" :class="{
                FilterBlok: this.$route.name === 'filter'
                    || this.$route.name === 'movie'
                    || this.$route.name === 'cartoon'
                    || this.$route.name === 'cartoonf'
            }">
                <div class=" conteinerContent">
                    <div class="putresult" v-if="this.searchStore.contData.length">
                        <span>found:</span>
                        <span class="value">
                            {{ this.searchStore.inputValue }}
                        </span>
                    </div>
                    <div v-else class="putresult">
                        <span> not foud !!!</span>
                    </div>
                    <div v-for="item in this.searchStore.contData" class="contentSearch">
                        <router-link :to="`/show/${item.id}/${item.name}`" class="dataSearch">
                            <img v-if="item.image" :src="item.image.medium">
                            <img v-else
                                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                            <p class="p">{{ item.name }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script                                    >

import { useSearchesStore } from '@/stores/searchfetch'
import { mapStores } from 'pinia';
export default {
    computed: {
        ...mapStores(useSearchesStore)
    },
    mounted() {
        this.searchStore.inputValue = ''
    }
   
}
</script>
<style lang="scss" scoped>
.FilterBlok {
    left: 110px;
}

.conteinerSearch {
    top: 100px;
    width: 400px;
    border: 1px solid gray;
    -webkit-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.541);
    border-radius: 15px;
    position: absolute;
    background-color: rgb(51, 43, 43);


    .conteinerContent {
        width: 380px;
        margin: 10px auto;

        .putresult {
            margin: 10px 0;

            span {
                font-size: 25px;
                font-style: normal;
                font-weight: bold;
                color: rgb(211, 4, 4);
                font-family: Arial, Helvetica, sans-serif;
            }

            .value {
                font-size: 20px;
                font-style: italic;
                font-weight: bold;
            }
        }

        .dataSearch {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100px;
            margin: 10px 0;
            cursor: pointer;
            transition: all 400ms;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;

            &:hover {
                background-color: rgb(211, 4, 4);
            }

            img {
                width: 100px;
                margin-right: 30px;
                height: 100%;
                object-fit: fill;

            }

            p {
                text-align: left;
                background-color: transparent;
                font-size: 19px;
                font-weight: 700;
                line-height: 30px;
            }

        }
    }
}



.dfultSearch {
    display: none;
}

.activeSearch {
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.418);
    position: fixed;
    overflow: auto;
    overflow-x: hidden;
    
}
</style>