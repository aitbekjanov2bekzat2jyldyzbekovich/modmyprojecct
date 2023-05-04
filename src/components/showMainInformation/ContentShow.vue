<template>
    <section>
        <div class="show" v-if="this.showfetchStore.show">
            <div class="leftConteinerTop">
                <div class="img">
                    <img v-if="this.showfetchStore.show.image" :src="this.showfetchStore.show.image.medium">
                    <img v-else
                        src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                </div>
                <div class="like">
                    <Like />
                </div>
            </div>
            <div class="rightConteinerTop">
                <div class="head">
                    <h3 v-if="this.showfetchStore.show.name">{{ this.showfetchStore.show.name }}</h3>
                    <h3 v-else>Note found ?</h3>
                </div>
                <div v-if="this.showfetchStore.show.summary
                    && this.showfetchStore.show.summary.length < 400
                    || this.status" class="sumary">
                    <div v-html="this.showfetchStore.show.summary" />
                    <span v-if="this.showfetchStore.show.summary.length > 400" @click="this.status = false">...</span>
                </div>

                <div class="sumary" v-else-if="this.showfetchStore.showSummary.length > 400">
                    <p>{{ this.showfetchStore.showSummary }} <span @click="this.status = true">...</span></p>
                </div>
                <div v-else class="notSumary">
                    <p>Note found ?</p>
                </div>
            </div>
            <div class="betwenin">
                <div class="inf">
                    <h5>Runtime:</h5>
                    <h5>Genres:</h5>
                    <h5>Name:</h5>
                    <h5>OfficialSite:</h5>
                    <h5>Rating:</h5>
                    <h5>Type:</h5>
                    <h5>Episods</h5>
                </div>
                <div class="otv">
                    <p v-if="this.showfetchStore.show.runtime">{{ this.showfetchStore.show.runtime }}</p>
                    <p v-else>Note Found</p>
                    <div class="genres" v-if="this.showfetchStore.show.genres">
                        <p v-for="genre in  this.showfetchStore.show.genres">{{ genre }}</p>
                    </div>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.name">{{ this.showfetchStore.show.name }}</p>
                    <p v-else>Note Found</p>
                    <a v-if="this.showfetchStore.show.officialSite" :href="`${this.showfetchStore.show.officialSite}`"
                        target="_blank">click here</a>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.rating && this.showfetchStore.show.rating.average">{{
                        this.showfetchStore.show.rating.average }}</p>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.type">{{ this.showfetchStore.show.type }}</p>
                    <p v-else>Note Found</p>
                    <p>{{ this.showfetchStore.olep }}</p>
                </div>
            </div>
            <div class="betwenin">
                <div class="inf">
                    <h5>Ended:</h5>
                    <h5>Language:</h5>
                    <h5>Network:</h5>
                    <h5>Premiered:</h5>
                    <h5>Status:</h5>
                    <h5>WebChannel:</h5>
                </div>
                <div class="otv withO">

                    <p v-if="this.showfetchStore.show.ended">{{ this.showfetchStore.show.ended }}</p>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.language">{{ this.showfetchStore.show.language }}</p>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.network && this.showfetchStore.show.network.name">{{
                        this.showfetchStore.show.network.name }}</p>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.premiered">{{ this.showfetchStore.show.premiered }}</p>
                    <p v-else>Note Found</p>
                    <p v-if="this.showfetchStore.show.status">{{ this.showfetchStore.show.status }}</p>
                    <p v-else>Note Found</p>
                    <a v-if="this.showfetchStore.show.webChannel
                        && this.showfetchStore.show.webChannel.name
                        && this.showfetchStore.show.webChannel.officialSite
                    " :href="this.showfetchStore.show.webChannel.officialSite" target="_blank">
                        {{ this.showfetchStore.show.webChannel.name }}
                    </a>
                    <p v-else>Note Found</p>
                </div>
            </div>
            <CreaterShow />
            <mainCreater/>

        </div>
    </section>
</template>

<script>
import CreaterShow from './CreaterShow.vue';
import mainCreater from './MainCreater.vue';
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';
import Like from '@/components/Like.vue'
export default {
    components: {
        Like,
        CreaterShow,
        mainCreater
    },
    data: () => ({
        status: false
    }),
    computed: {
        ...mapStores(useShowFetchStore)
    },
    mounted() {
        this.showfetchStore.IdSow = this.$route.params.id
        this.showfetchStore.fetchShow()

    },





}
</script>

<style lang="scss" scoped>
.show {
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between;
    width: 100%;

    .leftConteinerTop {
        width: 45%;
        height: 600px;
        border-right: 2px solid gray;



        .img {
            width: 90%;
            height: 90%;
            -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .like {
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(211, 4, 4);
            -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
            width: 90%;
        }
    }
}

.rightConteinerTop {
    width: 50%;

    .sumary {
        color: #fff;
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        line-height: 30px;
        margin-top: 50px;


        span {
            font-size: 30px;
            font-weight: 900;
            width: 60px;
            cursor: pointer;


            &:hover {
                color: rgb(211, 4, 4);


            }
        }
    }

    .notSumary {
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 30px;

        p {
            font-size: 30px;
            color: #fff;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: bold;
            opacity: 50%;
        }
    }

    .head {
        text-align: center;
        border-bottom: 2px solid rgb(211, 4, 4);
        margin: 30 px 0;

        h3 {
            font-size: 40px;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(211, 4, 4);
        }
    }


}

.betwenin {
    width: 45%;
    margin: 100px 10px;
    display: flex;
    height: max-content;
    justify-content: center;
    background-color: rgb(31, 27, 27);
    border: 2px solid gray;
    border-radius: 10px;
    flex-wrap: wrap;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);


    .inf {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: rgb(211, 4, 4);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 21px;
        margin-right: 20px;
        line-height: 30px;
        margin: 50px 0;



    }

    .withO {
        width: 50%;
    }

    .otv {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        margin: 50px 0 50px 20px;
        width: 50%;




        p {
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 15px;
            font-weight: 600;
            line-height: 30px;
        }

        a {
            color: blueviolet;
            text-decoration: underline;
            line-height: 30px;
        }

        .genres {
            display: flex;
            justify-content: space-between;


        }
    }
}
</style>