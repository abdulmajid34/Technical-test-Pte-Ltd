<template>
    <section class="content-style">
        <div class="sidebar">
            <div class="d-flex">
                <div>
                    <img src="../../assets/images/Ellipse_4.png" width="56px" height="56px" alt="">
                </div>
                <div>
                    <img  src="../../assets/images/Ellipse_5.png" width="20px" alt="" style="margin: 0px 5px 25px">
                </div>
                <div class="mx-4 my-2">
                    <h2 style="font-weight: 700; font-size: 30px; line-height: 35.16px;">BeLaundry</h2>
                </div>
            </div>
            <div class="" style="margin-top: 50px;">
                <span style="font-size: 24px; font-weight: 700;">
                    Menu
                </span>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <div class="d-flex px-2" style="border: 1px solid white; border-radius: 15px; background-color: #fff;">
                            <i class="bi bi-house-door p-2" style="font-size: 35px; color: #3B97CB;"></i>
                            <a class="nav-link active py-3"  href="#" style="font-size: 26px; color: #3B97CB;">Home</a>
                        </div>
                    </li>
                    <li class="nav-item my-4">
                        <div class="d-flex px-2">
                            <i class="bi bi-folder2-open p-2" style="font-size: 35px; color: #fff;"></i>
                            <a class="nav-link py-3" href="#" style="font-size: 26px; color: #fff;">Products</a>
                        </div>
                    </li>
                    <li class="nav-item my-4">
                        <div class="d-flex px-2">
                            <i class="bi bi-graph-up p-2" style="font-size: 35px; color: #fff;"></i>
                            <a class="nav-link py-3" href="#" style="font-size: 26px; color: #fff;">Sales</a>
                        </div>
                    </li>
                    <li class="nav-item my-4">
                        <div class="d-flex px-2">
                            <i class="bi bi-gear p-2" style="font-size: 35px; color: #fff;"></i>
                            <a class="nav-link py-3" href="#" style="font-size: 26px; color: #fff;">Settings</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      
      <div class="content">
        <h1>Content Area</h1>
        <p>This is the main content area.</p>
      </div>
    </section>
</template>
<style scoped>
.content-style {
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
}
.sidebar {
  width: 350px;
  background-color: #2D9CDB;
  padding: 20px;
  color: white;
}

.content {
  flex: 1;
  /* padding: 20px; */
}
@media (max-width: 600px) {
    .sidebar {
        display: none;
    }
}
</style>