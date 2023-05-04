<template>
    <v-layout>
        <div class="searchWrapper">
            <div class="infСont">
                <div class="inf">
                    <p class="infFound">found :</p>
                    <p class="valueInf">{{ this.searchStore.pageSearch.length }}</p>
                </div>
                <div class="inf">
                    <p class="infFound">your request :</p>
                    <p class="valueInf">{{ this.$route.query.q }}</p>
                </div>
            </div>
            <div class="cards" v-for="item in this.searchStore.pageSearch">
                <div class="leftCont">
                    <img v-if="item.show.image" :src="item.show.image.medium">
                    <img v-else
                        src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                </div>
                <div class="rightCont">
                    <div class="headSearch">
                        <router-link :to="`show/${item.show.id}/${item.show.name}`">
                            <h4>{{ item.show.name }}</h4>
                        </router-link>
                        <div v-if="item.show.summary" class="plot" v-html="item.show.summary" />
                        <div class="plotno" v-else>
                            <p>not found ??</p>
                        </div>
                    </div>


                    <div class="dataShow">
                        <div class="infthisanime">
                            <p>GENRES:</p>
                            <p>RATING:</p>
                            <p>PREMIERED:</p>
                        </div>
                        <div class="valueInf">
                            <div class="valueganers">
                                <p v-if="item.show.genres" v-for="genr in item.show.genres">{{ genr }}</p>
                                <p v-else>not found ??</p>
                            </div>

                            <p v-if="item.show.rating.average">{{ item.show.rating.average }}</p>
                            <p v-else> not found ??</p>


                            <p v-if="item.show.premiered">{{ item.show.premiered }}</p>
                            <p v-else>not found ??</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-layout>
</template>
<script>
import { useSearchesStore } from '@/stores/searchfetch'
import { mapStores } from 'pinia';
export default {
    computed: {
        ...mapStores(useSearchesStore)
    },


    methods: {

        async oneSearch() {
            const response = await fetch(`${this.searchStore.URL}/search/shows?q=
            ${this.$route.query.q}`)
            const ress = await response.json()
            let a = await ress[0].show.averageRuntime
            let b = await ress[0].show.type
            this.searchStore.pageSearch = await ress.filter(item =>
                item.show.averageRuntime === a &&
                item.show.type === b)
        },
    },
    mounted() {
        this.oneSearch()

    },
    watch: {
        '$route.query.q': {
            handler: function () {
                this.oneSearch()
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.plotno {
    font-size: 40px;
    color: #433b3bb7;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

// запрос
.infСont {
    display: flex;
    justify-content: space-between;
    width: max-content;
    padding: 30px 0;

    .inf {
        display: flex;
        padding: 20px 40px 20px 0;

        .infFound {
            color: rgb(211, 4, 4);
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;

            font-style: normal;

        }

        p {
            font-weight: 200;
            font-style: italic;
            font-size: 16px;
            line-height: 30px;
            margin-right: 5px;
            font-family: Arial, Helvetica, sans-serif;
            color: #fff;
        }

    }
}

// cards

.cards {
    display: flex;
    margin: 30px 0;
    border: 1px solid gray;
    -webkit-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
    box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.541);
    background-color: rgb(31, 27, 27);
    border-radius: 8px;
    cursor: pointer;


    .leftCont {
        margin: 0 30px 0 0;
        width: 20%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px 0 0 8px;


        }
    }

    .rightCont {
        width: 80%;
        padding: 30px 30px 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: sp;

        .headSearch {
            margin-bottom: 30px;

            .plot {
                line-height: 25px;
                font-size: 17px;
                color: #fff;
                font-weight: 400;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


            }

            h4 {
                margin-bottom: 30px;
                text-align: center;
                font-size: 20px;
                line-height: 30px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-weight: 600;
                color: rgb(211, 4, 4);
                border-bottom: 2px solid rgb(31, 27, 27);
                transition: all 400ms;

                &:hover{
                    border-bottom: 2px solid rgb(211, 4, 4);
                }
            }
        }

    }
}

// dataShow

.dataShow {
    display: flex;

    .infthisanime {
        p {
            color: rgb(211, 4, 4);
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18;
            font-weight: 500;
            font-style: normal;
            line-height: 30px;
            margin-right: 20px;
        }
    }

    .valueInf {
        p {


            font-size: 14px;
            line-height: 30px;
            margin-right: 20px;
            font-family: Arial, Helvetica, sans-serif;
            color: #fff;
        }
    }

    .valueganers {
        display: flex;

    }
}</style>
