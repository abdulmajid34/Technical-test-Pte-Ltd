<template>
    <div class="d-flex justify-content-between">
        <div class="">
            <h2 class="text-white mx-4"
                style="margin-bottom: 16px; font-weight: 500; line-height: 25.11px; font-size: 21.43px;">Welcome, {{ getName }}
            </h2>
        </div>
        <div class="">
            <h2 class="text-white" style="cursor: pointer; margin-bottom: 16px; font-weight: 500; line-height: 25.11px; font-size: 21.43px;" @click="handleLogout">logout</h2>
        </div>
    </div>
    <div class="d-flex">
        <div class="">
            <div class="card shadow-sm mx-4" style="border-radius: 10px; width: 302px; height: 167px; border: none;">
                <div>
                    <img src="../assets/images/Ellipse_1.png" alt="elipse_1" style="width: 100px; height: 90px;">
                    <img src="../assets/images/Ellipse_2.png" alt="elipse_2" style="width: 29px; padding-left: 9px;">
                </div>
                <div class="card-body text-end" style="margin-top: -25px">
                    <div class="">
                        <span style="font-size: 18.84px; font-weight: 400; line-height: 22.07px; color: #535353;">Your
                            Balance</span>
                    </div>
                    <div style="font-size: 36.52px; color: #0099EE; font-weight: 700; line-height: 42.8px;">
                        <span>$ 200.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { userStore } from '../stores/user_module';

const storeUser = userStore();


let getName = localStorage.getItem('name')

const handleLogout = async (event) => {
    event.preventDefault();
    await storeUser.logout()
}


</script>

<style scoped>
</style>