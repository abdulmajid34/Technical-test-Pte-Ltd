<template>
    <section class="content-style">
        <div class="sidebar">
            <div>
                <h2>BetLaundry</h2>
            </div>
            <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            </ul>
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
  width: 250px;
  background-color: #333;
  padding: 20px;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>