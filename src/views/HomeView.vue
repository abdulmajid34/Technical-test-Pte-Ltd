<template>
    <section>
      <div class="flex">
        <div class="img-container">
          <img src="../assets/images/Ellipse_3.png" class="img-elipse" alt="elipse_3">

        </div>
      </div>
      <div class="content-card container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="text-white" style="margin-bottom: 16px; font-weight: 500; line-height: 25.11px; font-size: 21.43px;">Welcome, john</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4">            
            <div class="card shadow--lg" style="border-radius: 10px;">
              <div>
                <img src="../assets/images/Ellipse_1.png" class="card-img-top" alt="elipse_1" style="width: 139px; height: 139px;">
                <img src="../assets/images/Ellipse_2.png" class="card-img-top" alt="elipse_2" style="width: 29px; padding-left: 9px;">
              </div>
              <div class="card-body text-end">
                <div class="">
                  <span style="font-size: 18.84px; font-weight: 400; line-height: 22.07px; color: #535353;">Your Balance</span>
                </div>
                <div style="font-size: 36.52px; color: #0099EE; font-weight: 700; line-height: 42.8px;">
                  <span>$ 200.00</span>
                </div>
              </div>        
            </div>
          </div>
        </div>
        
      </div>
    </section>
</template>

<script>

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

  .content-card {
    margin-top: -10rem;
    /* margin-left: 36px;
    margin-right: 37px; */
  }
</style>