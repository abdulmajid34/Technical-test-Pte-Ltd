import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvoicePage from '../views/InvoicePage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePageAdmin from '../views/admin/HomePage.vue'
import AddProductByAdmin from '../views/admin/AddProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/registerPage',
      name: 'registerPage',
      component: RegisterPage
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        // Lakukan pemeriksaan otorisasi atau logika lain di sini
        // Ganti dengan logika otorisasi
        if (localStorage.user_token) {
          next(); // Lanjutkan ke halaman jika otorisasi berhasil
        } else {
          next({ name: 'loginPage' }); // Alihkan ke halaman login jika otorisasi gagal
        }
      },
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoicePage,
      beforeEnter: (to, from, next) => {
        // Lakukan pemeriksaan otorisasi atau logika lain di sini
        // Ganti dengan logika otorisasi
        if (localStorage.user_token) {
          next(); // Lanjutkan ke halaman jika otorisasi berhasil
        } else {
          next({ name: 'loginPage' }); // Alihkan ke halaman login jika otorisasi gagal
        }
      },
    },
    {
      path: '/product/detail/:id',
      name: 'productDetail',
      component: ProductDetail,
      beforeEnter: (to, from, next) => {
        // Lakukan pemeriksaan otorisasi atau logika lain di sini
        // Ganti dengan logika otorisasi
        if (localStorage.user_token) {
          next(); // Lanjutkan ke halaman jika otorisasi berhasil
        } else {
          next({ name: 'loginPage' }); // Alihkan ke halaman login jika otorisasi gagal
        }
      },
    },
    {
      path: '/admin/management',
      name: 'adminManagement',
      component: HomePageAdmin,
      beforeEnter: (to, from, next) => {
        // Lakukan pemeriksaan otorisasi atau logika lain di sini
        // Ganti dengan logika otorisasi
        if (localStorage.user_token) {
          next(); // Lanjutkan ke halaman jika otorisasi berhasil
        } else {
          next({ name: 'loginPage' }); // Alihkan ke halaman login jika otorisasi gagal
        }
      },
    },
    {
      path: '/admin/management/add/product',
      name: 'adminManagementAddProduct',
      component: AddProductByAdmin,
      beforeEnter: (to, from, next) => {
        // Lakukan pemeriksaan otorisasi atau logika lain di sini
        // Ganti dengan logika otorisasi
        if (localStorage.user_token) {
          next(); // Lanjutkan ke halaman jika otorisasi berhasil
        } else {
          next({ name: 'loginPage' }); // Alihkan ke halaman login jika otorisasi gagal
        }
      },
    }
  ]
})

export default router
