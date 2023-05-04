<template>
    <header>
        <div class="Headerconteiner" :class="{
            movi: this.$route.name === 'movie'
                || this.$route.name === 'filter'
                || this.$route.name === 'cartoon'
                || this.$route.name === 'cartoonf'

        }">
            <div class=" contConteiner 
                            conteinerLeft">
                <ElasticSearch />
            </div>
            <div class=" contConteiner 
                            conteinerRight">
                <router-link :class="{
                    home: this.$route.name === 'home'
                }" to="/">HOME</router-link>
                <router-link :class="{
                    home: this.$route.name === 'movie'
                        || this.$route.name === 'filter'
                }" to="/movie">MOVIE</router-link>
                <router-link :class="{
                    home: this.$route.name === 'cartoon'
                        || this.$route.name === 'cartoonf'
                }" to="/cartoons">CARTOON</router-link>
            </div>
        </div>
    </header>
</template>

<script>

import ElasticSearch from './searchComponents/ElasticSearch.vue'
export default {
    components: {
        ElasticSearch
    }
}
</script>

<style lang="scss" scoped>
.home {
    color: rgb(211, 4, 4) !important;
    border-bottom: 2px solid rgb(211, 4, 4) !important;
}

header {
    z-index: 3;
    width: 100%;
    background-color: rgb(51, 43, 43);
    border-bottom: 2px solid gray;
    position: fixed;
}

.movi {
    width: 1300px !important;

}

.Headerconteiner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .conteinerLeft {
        width: 50%;
    }

    .contConteiner {
        height: 90px;
        display: flex;
        align-items: center;


        a {
            margin-left: 40px;
            font-weight: 600;
            transition: all 400ms;
            font-family: Arial, Helvetica, sans-serif;
            color: #fff;
            border-bottom: 2px solid rgba(0, 0, 0, 0);

            &:hover {
                color: rgb(211, 4, 4);
                border-bottom: 2px solid rgb(211, 4, 4);
            }

            &:active {
                color: black;
            }
        }
    }
}
</style>