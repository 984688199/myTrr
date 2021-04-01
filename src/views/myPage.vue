<template>
  <div class="content">
    <h2 class="subhead">個人主頁</h2>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          個人信息
        </template>
        <el-row  class="info_cont">
          <el-col :xs="12" :sm="8" :md="4" :lg="4" v-for="(item,index) in infoMation" :key="index">
            <span class="lay_item">
              <i :class="item.icon"></i>
              {{item.value}}
            </span>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="el-icon-medal"></i>
          教育背景
        </template>
        <div v-for="(row, i) in education">
          <el-row  class="info_cont">
            <el-col :xs="24" :sm="12" :md="5" :lg="5" v-for="(item,index) in row" :key="index">
              <span class="info_item">{{item.label}}</span>
              <span class="info_item">{{item.value}}</span>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="el-icon-discount"></i>
          入職公司
        </template>
        <div v-for="(row, i) in company">
          <el-row  class="info_cont">
            <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item,index) in row" :key="index">
              <span class="info_item">{{item.label}}</span>
              <span class="info_item">{{item.value}}</span>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <template slot="title">
          <i class="el-icon-mouse"></i>
          技能
        </template>
        <div id="myChart" ref="myChart"></div>
      </el-collapse-item>
    </el-collapse>
</div>
</template>

<script>
import { INFOMATION , EDUCATION, COMPANY} from './JSON/index.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      radio1: '上海',
      activeNames: ['1'],
      infoMation: INFOMATION,
      education: EDUCATION,
      company: COMPANY,
      skillData: [70, 50, 80, 60, 60, 20, 60, 70, 20],
      skill: ["css", "less/sass", "html", "javascript", "query", "Es6", "Vue", "Element-ui", "react-Native"]
    }
  },
  created() {
    this.$nextTick(function() {
      this.drawLine();
    })
  },
  methods: {
    drawLine(){
      this.myChart = this.$echarts.init(document.getElementById('myChart'));
      let option = {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          data: []
        },
        xAxis: {
          data: this.skill,
          axisLabel: {
            textStyle: {
              color: '#03a9f4'
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            barWidth: 20,
            data: this.skillData,
            itemStyle: {
              normal: {
                label: {
                   show: true,      //开启显示
                   position: 'top', //在上方显示
                   textStyle: {     //数值样式
                     color: 'black',
                     fontSize: 16
                   }
                },
                barBorderRadius: 20,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#99d9ea'
                }, {
                  offset: 1,
                  color: '#3fa7dc'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
              }
            }
          }
        ]
      };
      // 绘制图表
      this.myChart.setOption( option ); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.logo {
  width: '100%';
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  text-align: 'center';
}
#myChart {
  width: 80vw;
  height: 50vh;
}
.info_cont {
  padding: 20px;
}
.info_row {
  margin: 10px;
}
.info_item {
  margin-left: 20px;
}
/deep/ .el-collapse-item__header {
  font-size: 16px;
  font-weight: 700;
  i {
    margin-right: 20px;
  }
}
</style>