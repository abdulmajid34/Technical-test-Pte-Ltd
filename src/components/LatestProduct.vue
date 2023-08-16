<template>
    <div style="position: relative;">
        <img class="img-product" v-if="list.image" :src="list.image" alt="image"
            style="width: 176px; height: 214px; border-radius: 10px; object-fit: contain;">
        <img class="img-product" v-else src="../assets/images/image.png" alt="image"
            style="width: 176px; height: 214px; border-radius: 10px;">
        <div style="padding-left: 10px; position: absolute; bottom: 12%;">
            <span style="font-size: 9.31px; font-weight: 400; line-height: 10.91px; color: black;"><img v-if="idx == 0"
                    src="../assets/images/Ellipse_2.png" width="6" alt=""> Category</span>
            <div>
                <span style="font-size: 16px; font-weight: 400; line-height: 23.44px;">
                    {{ list.name }}
                </span>
            </div>
            <span style="font-size: 16.69px; line-height: 25.56px">{{ moneyFormat(list.price) }}/PC</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LatestProduct",
        props: {
            list: Object,
            idx: Number
        },
        methods: {
            moneyFormat(price) {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                return formatter.format(price);
            }
        }
    }
</script>