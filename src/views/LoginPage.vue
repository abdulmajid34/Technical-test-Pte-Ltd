<template>
    <section>
        <div class="container" style="margin-top: 50px;">
            <div>
                <h1>Login Page</h1>
            </div>
            <div class="card p-4 rounded-lg" style="border-radius: 10px;">
                <form @submit="submitFormLogin">
                    <div class="row mb-3">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="name" class="form-control" id="name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" v-model="email" class="form-control" id="inputEmail3">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" v-model="password" class="form-control" id="inputPassword3">
                        </div>
                    </div>
                    

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
                <div class="row mt-4">
                    <div class="col-sm-10">
                        <router-link to="/registerPage">
                            <span><a href="">register</a></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { userStore } from '../stores/user_module';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const storeUser = userStore();

const name = ref('');
const email = ref('');
const password = ref('');

const submitFormLogin = async (event) => {
    event.preventDefault();
    try {
        const formData = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        console.log(localStorage.getItem('name'));
        
        if(formData.name == localStorage.getItem('name') || localStorage.getItem('name') == null ) {
            await storeUser.fetchApiLogin(formData)
        } else {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'harus name yang sama saat input register',
                showConfirmButton: false,
                timer: 1500
                })
        }
    } catch(err) {
        console.log(err);
    }
}

</script>