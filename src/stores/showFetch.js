import { defineStore } from 'pinia'
export const useShowFetchStore = defineStore('showfetch', {
    state: () => ({
        URL: 'https://api.tvmaze.com/',
        IdSow: 0,
        showSummary: '',
        show: null,
        maker: null,
        spoiler: null,
        author: null,
        modalStatus: false,
        modalvelue: null,
        episods: null,
        numberEp: 3,
        olep: 0


    }),
    actions: {
        async fetchShow() {
            const response = await fetch(`${this.URL}shows/${this.IdSow}`)
            this.show = await response.json()
            if (this.show.summary.length > 400) {
                this.showSummary = this.show.summary.slice(3, -500)
            }
        },
        async showCreater() {
            const response = await fetch(`${this.URL}shows/${this.IdSow}/crew`)
            const ress = await response.json()
            if (ress.length <= 3) {
                this.maker = ress
            }
            if (ress.length > 3) {
                this.maker = ress.filter((item, index, arr) => {
                    return index < 3
                })
                this.spoiler = ress.filter((item, index, arr) => {
                    return index > 3
                })
            }
            this.author = ress.filter(item => item.type === 'Creator')
        },
        async epizods() {
            const ress = await fetch(`${this.URL}shows/${this.IdSow}/episodes`)
            const response = await ress.json()
            this.olep = response.length
            if (response.length > 20) {
                this.episods = response.filter((item, index) => {
                    return index < this.numberEp
                })
                console.log(this.episods.length);

            } else {
                this.episods = response
            }
        }





    }
}
)