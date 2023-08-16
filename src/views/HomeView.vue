<template>
  <section>
    <div class="flex">
      <div class="img-container">
        <img src="../assets/images/Ellipse_3.png" class="img-elipse" alt="elipse_3">

      </div>
    </div>
    <div class="container" style="margin-top: -10rem;">
      <!-- SECTION CARD BALANCE -->
      <CardBalance />

      <!-- SECTION PREVIOUS ORDER -->
      <PreviousOrder />

      <!-- SECTION CARD MOST ORDERED  -->
      <MostOrdered />

      <!-- SECTION LATEST PRODUCT -->
      <div class="row" style="margin-top: 48px;">
        <div class="col">
          <h2 class="mx-4" style="color: #3B97CB; font-weight: 700; font-size: 15.23px; line-height: 17.85px;">OUR
            LATEST PRODUCT</h2>
        </div>
      </div>
            
      <div class="card-product">
        <div v-for="(list, idx) in listProduct" :key="idx" class="card-content">
          <LatestProduct :list="list" :idx="idx" />
        </div>
      </div>           
    </div>
  
    
  </section>
</template>

<script setup>
  import LatestProduct from '../components/LatestProduct.vue'
  import CardBalance from '../components/CardBalance.vue'
  import MostOrdered from '../components/MostOrdered.vue'
  import PreviousOrder from '../components/PreviousOrder.vue';
  import { computed, onMounted } from 'vue';
  import { productStore } from '../stores/product_module';

  const storeListProduct = productStore();

  const listProduct = computed(() => {
    return storeListProduct.stateDataProduct;
  })

  

  onMounted(() => {
    storeListProduct.fetchDataProduct();
  })


</script>

<style scoped>
  .img-elipse {
    width: 100%;
    height: 250px;
  }

  .img-container {
    /* z-index: -1;
    position: relative; */
  }

  .card-style {
    display: flex;
    justify-content: center;
  }

.card-product {
  display: flex;
  flex-direction: row;  
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px;
  
}

.card-content {
  width: 176px;
  height: 214px;  
  border-radius: 10px;
  box-shadow: 0 2px 4px #CAECFF;
  margin-right: 20px;  
  background-color: #fff;
  /* padding: 20px; */  
}


</style>