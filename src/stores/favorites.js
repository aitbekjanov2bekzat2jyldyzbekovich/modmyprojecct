import { defineStore } from 'pinia'
export const useFavStore = defineStore('fav', {
    state: () => ({
        URL: 'http://localhost:3000/favorites',
        getData: null



    }),
    actions: {
        async addFavorite(img, tileId, name) {
            window.location.reload()
            const ress = await fetch(this.URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: tileId,
                    image: img,
                    name: name
                }
                )
            })
          
        },
        async getFavorite() {
            const ress = await fetch(this.URL)
            this.getData = await ress.json()

        },
        async Delatefav(id) {
            window.location.reload()
            const ress = await fetch(`${this.URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })

        }


    }
})