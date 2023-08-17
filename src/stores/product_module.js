import { defineStore } from 'pinia'
import axios from 'axios'

export const productStore = defineStore('product_module', {
    state: () => ({
        stateDataProduct: [],
        stateDetailProduct: {},
        isSuccess: false,
        isError: false
    }),    
    actions: {
        async fetchDataProduct() {
            await axios({
                method: "GET",
                url: 'https://belaundry-api.sebaris.link/platform/product',
                headers: {
                    token: localStorage.getItem('user_token')
                }
            })
            .then(({ data }) => {                
                this.stateDataProduct = data.response
            })  
            .catch((err) => {
                console.log(err);
            })
        },
        async fetchDetailProduct(id) {
            await axios({
                method: 'GET',
                url: `https://belaundry-api.sebaris.link/platform/product/${id}`,
                headers: {
                    token: localStorage.getItem('user_token')
                }
            })
            .then(({ data }) => {
                this.stateDetailProduct = data.response
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
})