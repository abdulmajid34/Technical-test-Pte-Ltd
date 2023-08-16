<template>
  <section>
    <div class="flex">
      <div class="img-container">
        <img src="../assets/images/Ellipse_3.png" class="img-elipse" alt="elipse_3">

      </div>
    </div>
    <div class="container" style="margin-top: -10rem;">
      <!-- SECTION CARD BALANCE -->
      <div class="row">
        <div class="col-md-4">
          <h2 class="text-white mx-4"
            style="margin-bottom: 16px; font-weight: 500; line-height: 25.11px; font-size: 21.43px;">Welcome, john</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
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
      <div class="row" style="margin-top: 40px">
        <div class="col-md-4">
          <h2 class="mx-4" style="color: #3B97CB; font-weight: 700; font-size: 16.08px; line-height: 18.84px;">PREVIOUS
            ORDER</h2>
        </div>
      </div>

      <!-- SECTION PREVIOUS ORDER -->
      <div class="row">
        <div class="col-md-4">
          <div class="card mx-4" style="width: 302px; height: 96px; border-radius: 10px;">
            <div class="row">
              <div class="col-3">
                <img src="../assets/images/Mask_Group.png" style="width: 67px; object-fit: contain; padding-top: 15px;"
                  alt="mask_group">
              </div>
              <div class="col-5">
                <div class="py-2">
                  <span style="font-size: 15.67px; color: #525252; line-height: 18.36px; font-weight: 500;">Bag of
                    Laundry</span>
                </div>
                <div>
                  <span style="font-size: 9.97px; color: #535353; font-weight: 400; line-height: 11.68px">Total
                    Order</span>
                </div>
                <span style="color: #0099EE; font-weight: 700; font-size: 14.85px; line-height: 17.4px;">$ 180.00</span>
              </div>
              <div class="col-4">
                <div class="p-4"
                  style="background: linear-gradient(to bottom right ,#2D9CDB, #0099EE, #CAECFF); width: 90px; height: 96px;">
                  <img src="../assets/images/note.png" style="width: 46px; height: 46px;" alt="invoice_img">
                  <p
                    style="font-size: 10.45px; line-height: 12.24px; font-weight: 500; color: #ffff; padding-top: 6px;">
                    INVOICE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SECTION CARD MOST ORDERED  -->
      <div class="row" style="margin-top: 39px;">
        <div class="col-md-4">
          <h2 class="mx-4" style="color: #3B97CB; font-weight: 700; font-size: 15.23px; line-height: 17.85px;">YOUR MOST
            ORDERED</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="mx-4">
            <img src="../assets/images/Group_21.png" style="width: 302px; height: 214px;" alt="group_21">
          </div>
        </div>
      </div>

      <!-- SECTION LATEST PRODUCT -->
      <div class="row" style="margin-top: 48px;">
        <div class="col">
          <h2 class="mx-4" style="color: #3B97CB; font-weight: 700; font-size: 15.23px; line-height: 17.85px;">OUR
            LATEST PRODUCT</h2>
        </div>
      </div>
            
    </div>
  
    <div class="card-product mx-4">
      <div v-for="(list, idx) in listProduct" :key="idx" class="card-content">
        <div style="position: relative;">
          <img class="img-product" v-if="list.image" :src="list.image" alt="image" style="width: 176px; height: 214px; border-radius: 10px; object-fit: contain;">
          <img class="img-product" v-else src="../assets/images/image.png" alt="image" style="width: 176px; height: 214px; border-radius: 10px;">
          <div style="padding-left: 10px; position: absolute; bottom: 12%;">
            <span style="font-size: 9.31px; font-weight: 400; line-height: 10.91px; color: black;"><img v-if="idx == 0" src="../assets/images/Ellipse_2.png" width="6" alt=""> Category</span>
            <div>
            <span style="font-size: 16px; font-weight: 400; line-height: 23.44px;">
              {{ list.name }}
            </span>
          </div>
            <span style="font-size: 16.69px; line-height: 25.56px">{{ moneyFormat(list.price) }}/PC</span>
          </div>
        </div>
                
      </div>
    </div>           
    
  </section>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { productStore } from '../stores/product_module';

  const storeListProduct = productStore();

  const listProduct = computed(() => {
    return storeListProduct.stateDataProduct;
  })

  const moneyFormat = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(price);
  }

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