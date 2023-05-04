import { defineStore } from 'pinia'

export const useFcontentStore = defineStore('fcontent', {
    state: () => {
        return {
            URL: 'https://api.tvmaze.com/',
            imgSlider: null,
            shows: null,
            movie: {
                ollScripteds: null,
                tenMovie: null
            },
            realityes: [],
            talk_Show: [],
            documentary: [],
            cartoons: {
                allCartoons: null,
                anime: null,
                america:null
            }


        }
    },
    actions: {
        async data() {
            const ress = await fetch(`${this.URL}shows`)
            const response = await ress.json()
            let a = Math.floor(Math.random() * 200) + 1;
            this.imgSlider = response.filter(item => item.id >= a
                && item.id <= a + 50)
            this.shows = this.imgSlider.filter(item => item.id > a
                && item.id <= a + 10)
            // movies
            this.movie.ollScripteds = response.filter(item => item.type === 'Scripted')
            this.movie.tenMovie = this.movie.ollScripteds.filter(item => item.id <= 12)
            // Realityes
            this.realityes = response.filter(item => item.type === 'Reality')
            // Talk Show
            this.talk_Show = response.filter(item => item.type === 'Talk Show')
            // Documentary
            this.documentary = response.filter(item => item.type === 'Documentary')
            // cartoons
            this.cartoons.allCartoons = response.filter(item => item.type === 'Animation')
            this.cartoons.anime = this.cartoons.allCartoons.filter(item => item.language === 'Japanese')
            this.cartoons.america = this.cartoons.allCartoons.filter(item => item.language === 'English')
        },






    }
})