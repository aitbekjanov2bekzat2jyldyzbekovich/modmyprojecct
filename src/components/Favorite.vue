<template>
    <section>
        <div class="shpwsConteiner">
            <div class="showsHead">
                <h1>SHOWS</h1>
            </div>
            <div class="contShows">
                <div class="cards" v-for=" item in this.favStore.getData">
                    <div class="imgShows">
                        <router-link :to="`/show/${item.id}/${item.name}`">
                            <img v-if="item.image" :src="item.image.medium">
                            <img v-else
                                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                        </router-link>

                    </div>
                    <div class="cardsName">
                        <router-link class="name" :to="`/show/${item.id}/${item.name}`">
                            <p>{{ item.name }} </p>
                        </router-link>
                        <div @click="this.favStore.Delatefav(item.id)">
                            <Like />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>


<script>
import Like from '@/components/Like.vue'
import { useFavStore } from '@/stores/favorites'
import { mapStores } from 'pinia';

export default {
    computed: {
        ...mapStores(useFavStore)
    },
    mounted() {
        this.favStore.getFavorite()
    },

    components: {
        Like
    },

}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.shpwsConteiner {
    margin-bottom: 100px;

    .showsHead {
        margin-bottom: 50px;

        h1 {
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
            margin-bottom: 20px;
            margin-left: 20px;
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