import { defineStore } from "pinia";
import axios from 'axios'
import Swal from 'sweetalert2'
import router from "../router";

export const userStore = defineStore('user', {
    state: () => ({

    }),
    actions: {
        async fetchApiRegister(payload) {
            await axios({
                method: 'POST',
                url: 'https://belaundry-api.sebaris.link/platform/user/sign-up',
                data: payload
            })
            .then((data) => {                           
                if(data.data.status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: data.data.message,
                        showConfirmButton: false,
                        timer: 1500
                      })
                      localStorage.setItem('name', payload.name)
                    router.push({ name: 'loginPage' })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: data.data.message,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch((err) => {
                console.log(err, 'err register');
                Swal.fire({
                    title: 'Error!',
                    text: 'ada sesuatu yang salah!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })

        },
        async fetchApiLogin(payload) {
            await axios({
                method: 'POST',
                url: 'https://belaundry-api.sebaris.link/platform/user/sign-in',
                data: payload
            })
            .then((data) => {
                
                if(data.data.status) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: data.data.message,
                        showConfirmButton: false,
                        timer: 1500 
                      })
                    localStorage.setItem('name', payload.name)
                    localStorage.setItem('user_token', data.data.response)
                    router.push({ name: 'home' })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: data.data.message,
                        showConfirmButton: false,
                        timer: 1500
                      })                      
                }
            })
            .catch((err) => {
                console.log(err, 'err LOGIN');
                Swal.fire({
                    title: 'Error!',
                    text: 'ada sesuatu yang salah!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })

        },
        logout() {
            localStorage.clear()
            router.push({ name: 'loginPage' })
        }
    }
})