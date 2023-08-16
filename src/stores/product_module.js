import { defineStore } from 'pinia'
import axios from 'axios'

export const productStore = defineStore('product_module', {
    state: () => ({
        stateDataProduct: [],
        isSuccess: false,
        isError: false
    }),
    getters: {
        getDataProduct(state) {
            return state.stateDataProduct
        }
    },
    actions: {
        async fetchDataProduct() {
            await axios({
                method: "GET",
                url: 'https://belaundry-api.sebaris.link/platform/product',
                headers: {
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTAzNTc4Mzd9.ILF698ktm1Zw_ssLXsmCAMAGEz3_LIVA3_XWXcHWK0k"
                }
            })
            .then(({ data }) => {                
                this.stateDataProduct = data.response
            })  
            .catch((err) => {
                console.log(err);
            })
        }
    }
})