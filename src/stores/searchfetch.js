import { defineStore } from 'pinia'

export const useSearchesStore = defineStore('search', {
    state: () => {
        return {
            inputValue: '',
            show: {
                id: 0,
                type: '',
                name: ''
            },
            controller: new AbortController(),
            contData: [],
            URL: 'https://api.tvmaze.com/',
            pageSearch: []

        }
    },


    actions: {
        inputSearch() {
            this.controller.abort()
            this.controller = new AbortController()
            this.search()
            this.clearData()

        },

        async search() {
            if (this.inputValue.length) {
                const response = await fetch(`${this.URL}search/shows?q=${this.inputValue}`, {
                    method: 'GET',
                    signal: this.controller.signal
                })
                const ress = await response.json()
                this.contData = await ress.map(item => ({
                    ...item.show
                }))
                if (this.contData[0].type === 'Animation' && this.contData[0].language === 'Japanese') {
                    this.show.id = this.contData[0].id
                    this.show.type = 'Anime'
                }
                else {
                    this.show.id = this.contData[0].id
                    this.show.type = this.contData[0].type
                    this.show.name = this.contData[0].name
                }
            }
        },
        clearData() {
            if (this.inputValue.length < 1) {
                this.contData = []
            }
        }

    }
})