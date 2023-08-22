import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const productStore = defineStore('product_module', () => {
        const stateDataProduct =  ref([]);
        const stateDetailProduct =  ref({});
        const isSuccess =  ref(false);
        const isError =  ref(false);
        
        const fetchDataProduct =async()=> {
            await axios({
                method: "GET",
                url: 'https://belaundry-api.sebaris.link/platform/product',
                headers: {
                    token: localStorage.getItem('user_token')
                }
            })
            .then(({ data }) => {                
                stateDataProduct.value = data.response
            })  
            .catch((err) => {
                console.log(err);
            })
        };
        const fetchDetailProduct = async(id)=> {
            await axios({
                method: 'GET',
                url: `https://belaundry-api.sebaris.link/platform/product/${id}`,
                headers: {
                    token: localStorage.getItem('user_token')
                }
            })
            .then(({ data }) => {
                stateDetailProduct.value = data.response
            })
            .catch((error) => {
                console.log(error);
            })
        }

        return {
             stateDataProduct,
         stateDetailProduct,
         isSuccess,
         isError,
         fetchDataProduct,
         fetchDetailProduct
        };
    
})