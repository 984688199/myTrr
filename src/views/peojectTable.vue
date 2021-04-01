<template>
  <div class="content">
    <h2 class="subhead">項目列表</h2>
    <TableVom :data='tableData' @handleSubmit="tableClickChange">
      <template v-slot:tags="scope">
        <el-link type="primary">{{scope.scope.progectName}}</el-link>
      </template>
    </TableVom>
    <el-dialog
      v-if="rowItem"
      :title="rowItem.companyName + '：項目詳細信息'"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
    >
      <p>項目Link：<a :href="rowItem.progectLink" target="_blank">{{rowItem.progectLink}}</a></p>
      <p>項目描述：{{rowItem.progectDescription}}</p>
      <p>項目責任：{{rowItem.progectResponsibilities}}</p>
      <p>應用技術：{{rowItem.progectTechnology}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { TABLE_DATA } from './JSON/index.js';
import TableVom from "@/components/TableCom";
export default {
  name: 'tablePage',
  components: { TableVom },
  data() {
    return {
      centerDialogVisible: false,
      rowItem: null,
      tableData: {
        tableHeight: 400,
        clientHeight: 0,
        listData: TABLE_DATA,
        tableHead: [
          {
            name: "項目時間",
            value: 'progectTime',
            width: '160'
          },
          {
            name: "公司名称",
            value: 'companyName',
          },
          {
            name: "項目名稱",
            value: 'progectName',
            show: 'template',
          },
          {
            name: "項目Link",
            value: 'progectLink',
            show:  false
          },
          {
            name: "項目描述",
            value: 'progectDescription',
            show:  false
          },
          {
            name: "項目責任",
            value: 'progectResponsibilities',
            show:  false
          },
          {
            name: "應用技術",
            value: 'progectTechnology',
            show:  false
          }
        ],
        operations: [
          {
            label: '操作',
            width: '160',
            data: [
              {
                label: '查看詳情',
                type:'editor',
                icon: 'el-icon-view'
              }
            ]
          }
        ]
      },
    }
  },
  methods: {
    tableClickChange(data) {
      this.centerDialogVisible = true;
      this.rowItem = data;
    }
  }
}
</script>