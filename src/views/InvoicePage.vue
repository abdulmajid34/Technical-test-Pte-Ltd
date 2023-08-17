<template>
    <section>
        <div class="container">
            <router-link to="/">
                <div style="margin-top: 32px;">
                    <img class="icon-chev" src="../assets/images/chevron_left.png"  alt="back_icon">
                </div>
            </router-link>

            <div class="card card-style mx-auto" >
                <div class="title-style">
                    <h2 class="">ORDER SUMMARY</h2>
                </div>

                <div class="text-end order-style">
                    <span>ORDER #21340</span>
                </div>

                <div style="margin-left: 15px; margin-top: 22.3px;">
                    <span class="style-name">
                        John Doe
                    </span>
                </div>
                <div class="address-style">
                    <span>123 Pasir Ris</span> <br>
                    <span>13810, Singapore</span>
                </div>

                <div class="row" style="margin-top: 31px;">
                    <div class="col-3">
                        <div style="margin-left: 14px;">
                            <img class="img-style-order" src="../assets/images/Mask_Group.png" alt="mask">
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <span class="item-name-style">Dry of Laundry</span><br>
                            <span class="qty-style" style="font-size: ;">QTY: 2</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                            <span class="total-style">Total</span><br>
                            <span class="price-style">$ 180.00</span>
                        </div>
                    </div>

                    <div style="margin-left: 11px; border: 1px solid #0099EE; width: 302px;"></div>
                    <div class="col-3">
                        <div style="margin-left: 14px;">
                            <img class="img-style-order" src="../assets/images/Mask_Group.png" alt="mask">
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <span class="item-name-style">Dry of Laundry</span><br>
                            <span class="qty-style" style="font-size: ;">QTY: 2</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                            <span class="total-style">Total</span><br>
                            <span class="price-style">$ 180.00</span>
                        </div>
                    </div>

                    <div style="margin-left: 11px; border: 1px solid #0099EE; width: 302px;"></div>
                    <div class="col-3">
                        <div style="margin-left: 14px;">
                            <img class="img-style-order" src="../assets/images/Mask_Group.png" alt="mask">
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <span class="item-name-style">Dry of Laundry</span><br>
                            <span class="qty-style" style="font-size: ;">QTY: 2</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div>
                            <span class="total-style">Total</span><br>
                            <span class="price-style">$ 180.00</span>
                        </div>
                    </div>

                    <div class="total-order-style">
                        <div class="row">
                            <div class="col-6">
                                <div style="margin: 12px;">
                                    <span class="text-total-order">TOTAL ORDER</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="margin: 11px;" class="px-3">
                                    <span class="text-price-style">$ 204.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-watshapp-style">
                        <div style="margin-right: 11px;">
                            <img src="../assets/images/chat_alt.png" alt="icon" style="width: 34px;">
                        </div>
                        <div style="padding: 5px 0; font-weight: 700; font-size: 15.51px; line-height: 18.17px; color: #fff;">
                            <span>WATSHAP US</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
    .icon-chev {
        width: 59px;
        height: 59px;
    }

    .card-style {
        width: 302px;
        height: 453px;
        margin-top: 31px;
        border-radius: 10px;
    }

    .title-style {
        border-radius: 10px 0;
        background-color: #0099EE;
        padding: 20px;
        text-align: center;
        color: #fff;
    }

    .order-style {
        margin-top: 31px;
        margin-right: 17px;
        font-size: 12.74px;
        font-weight: 400;
        line-height: 14.93px;
        color: #0099EE;
    }

    .style-name {
        font-size: 15.72px;
        font-weight: 700;
        line-height: 18.42px;
        
    }

    .address-style {
        font-weight: 400;
        font-size: 13.04px;
        line-height: 15.28px;
        color: #535353;
        margin-left: 15px;
    }

    .img-style-order {
        width: 55px;
    }

    .item-name-style {
        font-size: 14.91px;
        line-height: 17.47px;
        font-weight: 500;
        color: #525252;
    }

    .qty-style {
        font-size: 11.56px;
        font-weight: 400;
        line-height: 13.55px;
        color: #3B97CB;
    }

    .total-style {
        font-weight: 400;
        font-size: 9.47px;
        line-height: 11.1px;
        color: #535353;
    }

    .price-style {
        font-weight: 700;
        font-size: 14.1px;
        line-height: 16.53px;
        color: #0099EE;
    }

    .total-order-style {
        width: 300px;        
        height: 50px;
        background-color: #0099EE;
        margin-left: 12px;
        border-radius: 5px;        
    }

    .text-total-order {
        font-weight: 700;
        font-size: 15.51px;
        line-height: 18.17px;
        color: #fff;
    }

    .text-price-style {
        color: #fff;
        font-weight: 700;
        font-size: 18.51px;
        line-height: 21.69px;        
    }

    .content-watshapp-style {
        width: 303px;
        height: 64px;
        border-radius: 16px;
        background-color: #56E4A0;
        margin-top: 35px;
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px 0;
    }
</style>