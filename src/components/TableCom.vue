<template>
  <div style="width: 100%;height: 100%;">
    <el-container style="width: 100%;height: 100%;">
      <el-main style="padding: 0;" v-if="data.tableHeight">
        <el-table ref="multipleTable" stripe :data="data.listData" tooltip-effect="dark" :height="data.tableHeight" border  
        >
          <template v-for="(item,index) in data.tableHead">
            <el-table-column
              v-if="item.show !== false && item.show === 'template'"
              :key="index"
              :label="item.name"
              :width="item.width || ''"
              height="40"
              :align="data.center ? data.center : item.center ? item.center : 'center'"
            >
              <template slot-scope="scope">
                <slot name="tags" :scope="scope.row"></slot>
              </template>
            </el-table-column>
            <el-table-column
              v-else-if="item.show !== false && item.show !== 'template'"
              :key="index"
              :label="item.name"
              :prop="item.value"
              :width="item.width || data.width || ''"
              :formatter="item.formatter"
              show-overflow-tooltip
              :align="data.center ? data.center : item.center ? item.center : 'center'"
            >
            </el-table-column>
          </template>
          <el-table-column
            fixed="right"
            v-for="(operation, index) in data.operations"
            :key="index+'a'"
            :width="operation.width || ''"
            :label="operation.label"
            align="center">
            <template slot-scope="scope">
              <el-button type="primary"
                v-for="item in operation.data"
                :key="index"
                :icon="item.icon"
                @click.stop="handleOperation(scope.$index, scope.row)"
              >
                {{item.label}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: "TableCom",
    data() {
      return {
      }
    },
    props: {
      data:{
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      // 操作
      handleOperation(index, item) {
        this.$emit('handleSubmit', item);
      }
    }
  }
</script>

<style>
  .el-table__row{
    height: 50px;
  }
  .text-green{
    color: limegreen;
  }
  .text-red{
    color: red;
  }
</style>
