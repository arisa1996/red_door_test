<template>
  <div class="list-body">
    <h3>{{ tabTitle }}</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="名稱"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="people" align="center" label="受眾人數" sortable>
      </el-table-column>
      <el-table-column prop="updateDate" align="center" label="更新日期" sortable>
      </el-table-column>
      <el-table-column label="操作" align="right">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in dropdownData"
                :key="item"
                @click.native.prevent="handleEvent(scope.$index, scope.row)"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
        {
          title: "忠實老會員(VVIP)",
          description: "經常消費且購買金額高的忠實會員",
          people: "47",
          updateDate: "2020-03-21",
        },
      ],
      dropdownData: ["下載", "複制連結", "新增SMS行銷"],
    };
  },
  props: {
    tabTitle: String,
  },
  methods: {
    handleEvent(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="scss">
.list-body {
  margin-bottom: 20px;
  .el-table th {
    background-color: #eeeeee;
  }
  h3 {
    font-size: 20px;
    border-bottom: 1px solid #000;
    padding: 12px 0px;
    margin-top: 0;
    color: #222222;
  }
  .el-table th > .cell {
    color: #555555;
  }
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f8f8f9;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
