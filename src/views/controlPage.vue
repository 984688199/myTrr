<template>
  <div class="content_control">
    <el-row>
      <el-col :span="4" v-for="(item, ind) in circleData" :key="ind">
        <el-progress
          type="circle"
          :percentage="item.percentage"
          :status="item.status"
          :class="[index == ind ? 'activeCircle' : '', 'circlebg']">
        </el-progress>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" v-if="index == '1' || index == '2' || index == '3'">
        <MyPage></MyPage>
      </el-col>
      <el-col :span="12" v-if="index == '4' || index == '5' || index == '6'">
        <ProjectTable></ProjectTable>
      </el-col>
    </el-row>
  </div>
</template>
<script >
  import MyPage from "./myPage";
  import ProjectTable from "./peojectTable";
  import { CIRCLEDATA } from './JSON/index.js';
  export default {
    name: 'control',
    components: { MyPage, ProjectTable },
    data(){
      return {
        index: '1',
        timer: null,
        circleData: CIRCLEDATA
      }
    },
    mounted() {
      if (this.timer) {
        clearInterval(this.timer)
      } else {
        this.timer = setInterval(() => {
          setTimeout(this.queryInfo(), 10000)
        }, 10000)
      }
    },
    beforeDestroy(){
       clearInterval(this.timer);        
       this.timer = null;
    },
    methods:{
      queryInfo() {
        var num=Math.floor(Math.random()*6+1);
        this.index = num-1;
      }
    }
  }
</script>

<style scope>
  .content_control {
    width: 100%;
    padding: 20px;
    vertical-align: 'center';
  }
  .activeCircle {
    border: 1px solid #000;
  }
  .circlebg {
    background: '#eee';
  }
</style>