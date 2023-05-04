<template>
    <div class="author" v-if="this.showfetchStore.author" v-for="item in this.showfetchStore.author">
        <div class="img" @click="openModal(item.person)">
            <img v-if="item.person.image" :src="item.person.image.medium">
            <img v-else
                src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
        </div>
        <div class="count">
            <div class="head">
                <h3> Main{{item.type }}</h3>
            </div>


            <div class="data">
                <p>Name:</p>
                <p>Birthday:</p>
                <p>Country:</p>
                <p>Gender:</p>
            </div>
            <div class="valuedata">
                <p v-if="item.person.name">
                    {{ item.person.name }}
                </p>
                <p v-else>Note Found ??</p>
                <p v-if="item.person.birthday">
                    {{ item.person.birthday }}
                </p>
                <p v-else>Note Found ??</p>
                <p v-if="item.person.country">
                    {{ item.person.country.name }}
                </p>
                <p v-else>Note Found ??</p>
                <p v-if="item.person.gender">
                    {{item.person.gender }}
                </p>
                <p v-else>Note Found ??</p>
            </div>
        </div>
    </div>
    <div class="not" v-else>
        <h4> not found</h4>
    </div>
</template>

<script>
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';


export default {
    computed: {
        ...mapStores(useShowFetchStore)
    },


    methods: {
        openModal(item) {
            this.showfetchStore.modalStatus = true
            document.body.style.overflow = 'hidden'
            this.showfetchStore.modalvelue = item  

        },


    }


}
</script>

<style lang="scss" scoped>
.author {
    width: 45%;
    background-color: rgb(31, 27, 27);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;
    border-radius: 10px;
    height: 400px;
    border: 2px solid grey;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);



    .img {
        height: 100%;
        width: 212px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px 0 0 10px;
            cursor: pointer;
            
        }
    }


}

.count {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    .head {
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: center;
        margin: 40px 0;

        h3 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 19px;
            color: rgb(211, 4, 4);
            margin: 0 auto;
        }
    }

    .data {
        width: 50%;
        height: 70%;
        padding-left: 4px;

        p {
            line-height: 40px;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            color: rgb(211, 4, 4);
            border-bottom: 2px solid gray;
        }
    }

    .valuedata {
        width: 50%;
        height: 70%;
        padding-right: 4px;
        text-align: start;

        p {
            line-height: 40px;
            border-bottom: 2px solid gray;
            font-size: 15px;
            font-family: Arial, Helvetica, sans-serif;

            color: #fff;
        }
    }

}

.not {

    width: 45%;
    background-color: rgb(31, 27, 27);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    border-radius: 10px;
    height: 400px;
    border: 2px solid grey;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

    h4 {
        color: gray;
        opacity: 50%;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>