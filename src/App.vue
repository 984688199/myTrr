<template>
  <div id="app">
    <div class="mian">
      <div class="nav">
        <div class="logo">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              background-color="#000"
              text-color="#eee"
              active-text-color="#0095ff">
              <div v-for="(item,index) in menuList" :key="index">
                <template v-if="!item.child">
                  <el-menu-item>
                    <i :class="item.icon"></i>
                    {{item.name}}
                  </el-menu-item>
                </template>
                <template v-else>
                  <el-submenu :index="index+''">
                    <template slot="title"> <i :class="item.icon"></i>
                      <span>{{item.name}}</span>
                    </template>
                    <div v-for="(row, indx) in item.child" :key="indx+indx">
                      <el-menu-item :index="row.name">{{row.name}}</el-menu-item>
                    </div>
                  </el-submenu>
                </template>
              </div>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="mian_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menuList: [
        {
          name: 'HelloWorld',
          path: '',
          icon: 'el-icon-s-home',
          isSubmenu: 'false',
        },
        {
          name: 'Cue Me',
          icon: 'el-icon-s-check',
          isSubmenu: 'true',
          child: [
            {
              name: 'myPage',
              path: 'myPage',
              icon: 'el-icon-s-custom'
            },
            {
              name: 'peojectTable',
              path: 'peojectTable'
            },
            {
              name: 'controlPage',
              path: 'controlPage'
            }
          ]
        }
      ]
    }
  },
  methods:{
    handleSelect(path) {
      if (!path) {
        this.$router.push('/')
      } else {
        this.$router.push({
          path: path,
          query: {
            path: path
          }
        })
      }
    },
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  content: 100%;
}
.mian {
  height: 100vh;
  display: flex;
}
/deep/ .el-row {
  text-align: left;
}
/deep/ .el-menu {
  border-right: solid 1px #000;
}
.logo {
  text-align: center;
  margin-top: 20px;
}
.nav {
  width: 200px;
  height: 100vh;
  background: #000;
}
.mian_content {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
