


<template>
    <aside v-if="this.$route.name === 'movie'
        || this.$route.name === 'filter'">
        <div class="sidebarContennt">
            <div class="movies">
                <div class="SideHead">
                    <h2>FILTER</h2>
                </div>
                <router-link :class="{
                    bred: this.$route.params.name === 'allmovies'
                }
                " to="/movie/allmovies">
                    ALL MOVIES
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Drama'
                }" to="/movie/Drama">DRAMA
                </router-link>
                <router-link :class="{ bred: this.$route.params.name === 'Science-Fiction' }"
                    to="/movie/Science-Fiction">SCIENCE FICTION</router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Thriller'
                }" to="/movie/Thriller">
                    THRILLER
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Action'
                }" to="/movie/Action">
                    ACTION
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Crime'
                }" to="/movie/Crime">
                    CRIME
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Horror'
                }" to="/movie/Horror">
                    HORROR
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Romance'
                }" to="/movie/Romance">
                    ROMANCE
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Adventure'
                }" to="/movie/Adventure">
                    ADVENTURE
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Espionage'
                }" to="/movie/Espionage">ESPIONAGE
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Music'
                }" to="/movie/Music">MUSIC
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Mystery'
                }" to="/movie/Mystery">
                    MYSTERY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Supernatural'
                }" to="/movie/Supernatural">
                    SUPERNATURAL
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Fantasy'
                }" to="/movie/Fantasy">
                    FANTASY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Comedy'
                }" to="/movie/Comedy">
                    COMEDY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'History'
                }" to="/movie/History">
                    HISTORY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Family'
                }" to="/movie/Family">
                    FAMILY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Medical'
                }" to="/movie/Medical">
                    MEDICAL
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Legal'
                }" to="/movie/Legal">
                    LEGAL
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Western'
                }" to="/movie/Western">
                    WESTERN
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'War'
                }" to="/movie/War">
                    WAR
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'Sports'
                }" to="/movie/Sports">SPORTS</router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'talkShow'
                }" to="/movie/talkShow">
                    TALK SHOW
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'reality'
                }" to="/movie/reality">
                    REALITY
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'documentary'
                }" to="/movie/documentary">
                    DOCUMENTARY
                </router-link>
            </div>
        </div>
    </aside>


    <aside v-else class="cartoons">
        <div class="sidebarContennt">
            <div class="movies">
                <div class="SideHead">
                    <h2>FILTER</h2>
                </div>
                <router-link :class="{
                    bred: this.$route.params.name === 'anime'
                }" to="/cartoons/anime">
                    ANIME
                </router-link>
                <router-link :class="{
                    bred: this.$route.params.name === 'american'
                }" to="/cartoons/american">
                    AMERICAN
                </router-link>
            </div>
        </div>
    </aside>
</template>


<style lang="scss" scoped> aside {
     margin: 208px 0;
     width: 300px;
     height: max-content;
     background-color: rgb(31, 27, 27);
     border: 1px solid gray;
     border-radius: 8px;
     -webkit-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
     -moz-box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.6);
     box-shadow: 7px 7px 5px -5px rgba(0, 0, 0, 0.541);
 }

 .bred {
     background-color: rgb(211, 4, 4) !important;
     border-right: 5px solid #fff;
 }

 .SideHead {
     text-align: center;
     padding: 10px 0 20px 0;

     h2 {
         color: rgb(211, 4, 4);
         font-family: Arial, Helvetica, sans-serif;
     }
 }

 .movies {
     display: flex;
     flex-direction: column;
 }

 .cartoons {
     height: 70vh;
 }




 a {
     color: #fff;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     padding: 10pxpx 5px 0;
     transition: all 400ms;
     line-height: 40px;
     padding-left: 10px;
     font-weight: bold;

     &:hover {
         background-color: rgb(211, 4, 4);
         opacity: 90%;
     }

     &:active {
         opacity: 60%;


     }
 }
</style>