<template>
    <section>
        <div class="text-center" style="position: relative;">
            <img v-if="stateDetailProduct.image" style="width: 375px; height: 455px; object-fit: contain; border-radius: 10px;" :src="stateDetailProduct.image" class="card-img-top" alt="...">
            <img v-else style="width: 375px; height: 455px; object-fit: contain; border-radius: 10px;" src="../assets/images/image.png" class="card-img-top" alt="...">
        </div>
        <router-link to="/">
        <div>
            <img src="../assets/images/chevron_left.png" style="width: 59px; position: absolute; top: 32px; left: 6px;" alt="icon_back">
        </div>
    </router-link>
    <div class="container">
        <div class="category-style">
            <span class="text-category-style">
                Day clean
            </span>
        </div>

        <div style="margin-top: 14px;">
            <h1 class="item-name-style">{{ stateDetailProduct.name }}</h1>
        </div>

        <div style="">
            <span class="detail-price-style">{{ moneyFormat(stateDetailProduct.price) }}/PC</span>
        </div>

        <div style="margin-top: 14px;">
            <p class="desc-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea magni minus molestias, beatae possimus, veniam voluptatum aperiam excepturi esse illo cumque reiciendis culpa, vero doloribus unde incidunt corrupti. Magnam autem vitae deleniti dolorem libero dolore explicabo in. Voluptate obcaecati provident ea nostrum? Alias possimus eos, consequuntur veritatis est, dolorum, doloremque quae ducimus quibusdam assumenda nihil perspiciatis voluptas soluta odit recusandae cumque numquam corrupti distinctio velit ratione? Possimus impedit, eveniet sapiente natus molestias saepe quia commodi laboriosam exercitationem ullam nemo libero neque esse minima veniam eligendi aliquid nihil modi. Eveniet, eaque! Voluptatem, ad vitae nemo nihil officiis odio rerum accusantium!</p>
        </div>

        <div class="text-center" style="margin: 36px 0 54px;">
            <div class="">
                <span>
                    <img class="btn-action-qty" src="../assets/images/minus_circle.png" alt="btn-decrement">
                </span>
                <span class="amount-action-style mx-4" style="padding: 15px 43px 15px 42px;;">
                    <span>0</span>
                </span>
                <span>
                    <img class="btn-action-qty" src="../assets/images/coolicon.png" alt="btn-increment">
                </span>
            </div>
            
        </div>
    </div>    
    </section>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue';
    import { productStore } from '../stores/product_module';
    import { storeToRefs } from 'pinia';

    const storeListProduct = productStore(); 
    const { stateDetailProduct } = storeToRefs(storeListProduct);
    const { fetchDetailProduct } = storeListProduct

    const route = useRoute();       

    const moneyFormat = (price) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(price);
    }

    onMounted(() => {
        fetchDetailProduct(route.params.id);
    })

</script>

<style scoped>
    .category-style {
        width: 69.18px;
        height: 30px;
        background-color: #CAECFF;
        margin-top: 41.3px;
    }
    .text-category-style {
        font-size: 12.24px;
        font-weight: 400;
        line-height: 14.35px;
        color: #0099EE;   
        padding: 7px;
    }
    .item-name-style {
        font-size: 44px;
        color: #3B97CB;
        line-height: 51.56px;
        font-weight: 700;
    }
    .detail-price-style {
        font-weight: 500;
        font-size: 27.99px;
        line-height: 32.8px;
        color: #0099EE;
    }

    .desc-style {
        font-size: 16px;
        color: #838383;
        font-weight: 400;
        line-height: 18.75px;
    }
    .btn-action-qty {
        width: 36.66px;
        height: 36.67px;
    }
    .amount-action-style {
        width: 106px;
        height: 55px;
        border-radius: 9px;
        border: 1px solid #3B97CB;
        background-color: #fff;
    }
</style>