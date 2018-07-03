<template>
    <div>
        时间轴
      <div>
        <canvas id="myCanvas" width="200" height="100"
                style="border:1px solid #000000;">
        </canvas>
      </div>
    </div>
</template>
<style scoped></style>
<script>
import '../../assets/js/jtopo.js'
import '../../assets/js/jquery-3.2.1.js'
export default {
  created () {
  },
  mounted () {
    this.initTopo()
  },
  data () {
    return {
      msg: 'hello vue',
      width: 100,
      height: 200
    }
  },
  methods: {
    initTopo () {
    }
  }
}
</script>
