<template>
  <div id="app">
    <Header></Header>
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>智慧名單</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>智慧名單</h2>
      <div style="position: relative">
        <el-tabs type="card">
          <el-tab-pane label="全部">
            <List :tabTitle="(tabTitle = '拉新')"></List>
            <List :tabTitle="(tabTitle = '留存')"></List>
            <List :tabTitle="(tabTitle = '促活')"></List>
          </el-tab-pane>
          <el-tab-pane label="拉新（拓展新客）">
            <List :tabTitle="(tabTitle = '拉新')"></List>
          </el-tab-pane>
          <el-tab-pane label="留存（避免流失）">
            <List :tabTitle="(tabTitle = '留存')"></List>
          </el-tab-pane>
          <el-tab-pane label="促活（促進活躍）">
            <List :tabTitle="(tabTitle = '促活')"></List>
          </el-tab-pane>
        </el-tabs>
        <div class="update">資料更新時間： 2021-02-23 11:36:01</div>
      </div>
    </el-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      tabTitle: "",
    };
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  background-color: #f7f7f7;
  .el-main {
    padding: 14px 13%;
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #7c4f9d;
    }
  }
  .el-tabs__nav {
    background-color: #dddddd;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    background-color: white;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__content {
    background-color: white;
    border: 1px solid #e4e7ed;
    padding: 17px 23px;
  }
  .update {
    font-size: 14px;
    color: #555555;
    position: absolute;
    right: 0px;
    top: 18px;
  }
}
</style>
