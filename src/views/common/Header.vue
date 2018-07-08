<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#6FA6AC"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
    <el-menu-item index="1" @click="toIndex">西门吹雪</el-menu-item>
    <el-menu-item index="3" @click="toBlogList">技术博客</el-menu-item>
    <el-menu-item index="4" @click="toArticleList">碎碎杂谈</el-menu-item>
    <el-menu-item index="5" @click="toTimeList">时间轴</el-menu-item>
    <el-menu-item index="6" @click="toCooking">学做菜</el-menu-item>
    <el-menu-item index="7" @click="toTimeList">天气</el-menu-item>
    <el-menu-item index="8" @click="toTimeList">篮球</el-menu-item>
    <el-menu-item index="2"><a href="#" target="_blank">关于我</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    toIndex () {
      this.$router.push({path: '/index', params: {}})
    },
    toBlogList () {
      this.$router.push({path: '/blogList', name: '技术博客', params: {}})
    },
    toArticleList () {
      this.$router.push({path: '/articleList', name: '碎碎杂谈', params: {}})
    },
    toTimeList () {
      this.$router.push({path: '/timeList', name: '时间轴', params: {}})
    },
    toCooking () {
      this.$router.push({path: '/cooking', name: '学做菜', params: {}})
    }
  }
}
</script>
<style scoped>
  .el-menu-demo{
   width:100%;
  }
</style>
