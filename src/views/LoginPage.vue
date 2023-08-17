<template>
    <section>
        <div class="container" style="margin-top: 50px;">
            <div>
                <h1>Login Page</h1>
            </div>
            <div class="card p-4 rounded-lg" style="border-radius: 10px;">
                <form @submit="submitFormLogin">
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

const storeUser = userStore();

const email = ref('');
const password = ref('');

const submitFormLogin = async (event) => {
    event.preventDefault();
    try {
        const formData = {
            email: email.value,
            password: password.value
        }
    
        await storeUser.fetchApiLogin(formData)
        formData.reset();
    } catch(err) {
        console.log(err);
    }
}

</script>