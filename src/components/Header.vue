<template>
  <el-header>
    <div class="logo">
      <div><i class="fas fa-bars"></i></div>
      <h1><img src="@/assets/top_logo.png" alt="logo" /></h1>
    </div>
    <div>
      <i class="el-icon-user-solid"></i>
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7c4f9d;
  color: white;
  .logo {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 33px;
    }
    img {
      width: 180px;
    }
  }
}
</style>
