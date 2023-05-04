<template>
    <div class="makerCont" v-if="this.showfetchStore.maker">
        <div class="head">
            <h3>
                Creators of
                {{ this.showfetchStore.show.name }}
            </h3>
        </div>

        <div class="left">
            <h4 v-for="item in this.showfetchStore.maker">{{ item.type }}</h4>
            <h4 v-if="status" v-for="item in this.showfetchStore.spoiler">{{ item.type }}</h4>
        </div>
        <div class="right">
            <div class="cont" v-for="item   in  this.showfetchStore.maker">
                <div class="img" @click="openModal(item)">
                    <img v-if="item.person.image" :src="item.person.image.medium">
                    <img v-else
                        src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                </div>
                <div class="name">
                    <p v-if="item.person.name">{{ item.person.name }}</p>
                    <p v-else>note found ?</p>
                </div>
            </div>
            <div v-if="status" class="cont" v-for=" item in this.showfetchStore.spoiler">
                <div class="img" @click="openModal(item)">
                    <img v-if="item.person.image" :src="item.person.image.medium">
                    <img v-else
                        src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png">
                </div>
                <div class="name">
                    <p v-if="item.person.name">{{ item.person.name }}</p>
                    <p v-else>note found ?</p>
                </div>
            </div>
        </div>
        <button v-if="this.showfetchStore.spoiler" @dblclick="this.status = true, this.value = ' HIDE '"
            @click="this.status = false ,this.value = ' EXPAND '" >
            {{ value }}
            <span v-if="status">&#8593;</span>
            <span v-else> &#8595;</span>
        </button>
    </div>
    <div v-else class="makerCont">
        <div class="head">
            <h3>NOTE FOUND ??</h3>
        </div>
    </div>
</template>

<script>
import { useShowFetchStore } from '@/stores/showFetch'
import { mapStores } from 'pinia';


export default {
    computed: {
        ...mapStores(useShowFetchStore)
    },

    data() {
        return {
            status: false,
            value: 'EXPAND',
      
        }
    }

,
methods: {
        async datas() {
        this.showfetchStore.spoiler = await null
        this.showfetchStore.maker = await null
        await this.showfetchStore.showCreater()
    },
    openModal(item) {
        this.showfetchStore.modalStatus = true
        document.body.style.overflow = 'hidden'
        this.showfetchStore.modalvelue = item.person
    }
},
mounted() {
    this.datas()


},
watch: {
    '$route.params.id': {
        handler: function () {
            this.datas()
            this.showfetchStore.numberEp = 3
        },
        deep: true,
            immediate: true
    }
}
}
</script>

<style lang="scss" scoped>
* {
    width: max-content;
    height: max-content;
}

button {
    width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px 0;
    background-color: rgb(211, 4, 4);
    border: none;
    border-radius: 100px;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 400ms;



    span {
        margin-left: 20px;
        font-size: 30px;
    }

    &:hover {
        opacity: 50%;
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.342);
    }
}

.makerCont {
    display: flex;

    flex-wrap: wrap;
    padding-bottom: 50px;
    margin-bottom: 100px;
    width: 45%;
    background-color: rgb(31, 27, 27);
    border-radius: 10px;
    border: 2px solid grey;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);





    .head {
        width: 100%;
        margin: 50px 0;

        h3 {
            text-align: center;
            width: 100%;
            font-size: 30px;
            color: rgb(211, 4, 4);
            border-bottom: 2px solid rgb(211, 4, 4);
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .right {

        width: 40%;

        .cont {

            display: flex;
            height: 70px;
            justify-content: space-between;
            align-items: center;


            .img {
                height: 100%;

                margin-right: 20px;

                img {
                    width: 60px;
                    height: 90%;
                    object-fit: cover;
                    cursor: pointer;
                }
            }

            p {
                color: #fff;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-weight: 900;
            }



        }
    }

    .left {
        margin: 0;
        width: 40;
        margin: 0 10px;

    }

}

h4 {
    line-height: 70px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    color: rgb(211, 4, 4);
    width: 100%;
    border-bottom: 2px solid gray;

}
</style>