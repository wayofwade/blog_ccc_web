<template>
  <div id="all-body">
    <div id="binner">
      <div class="inner inner-width">
        <h1>在下鲁迅</h1>
        <p class="sub-heading sub-heading-width">
          {{myLog}}
        </p>
        <button>了解我</button>
        <div class="more">更多</div>
      </div>
    </div>
  <div class="content">
    <section class="green">
      <div class="wrapper">
        <div>
          <h1 class=''>标题</h1>
          <div class="hr"></div>
          <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipi
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="icon-group">
          <span class="icon">块1</span>
          <span class="icon">块2</span>
          <span class="icon">块3</span>
        </div>
      </div>
    </section>
    <section class="gray">
      <div class="article-preview">
        <div class="image-section">
          <img src="../../assets/image/TPS.jpg">
        </div>
        <div class="text-section">
          <h1>图片和文字</h1>
          <div class="sub-heading">我是副标题</div>
          <div class="text-section-desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
          </div>
        </div>
      </div>
    </section>
<!--    <section class="purple">
      <div class="article-preview">
        <div class="image-section">
          <img src="../../assets/image/TPS.jpg">
        </div>
        <div class="text-section">
          <h1>图片和文字</h1>
          <div class="sub-heading">我是副标题</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
      </div>
    </section>-->
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      myLog: '人生，其实像一条从宽阔的平原走进森林的路。在平原上同伴可以结伙而行，' +
     '欢乐地前推后挤、相濡以沫；一旦进入森林，草丛和荆棘挡路，各人专心走各人的路，' +
     '寻找各人的方向，那推推挤挤的群体情感，那无忧无虑无猜忌的同侪深情，在人的一生中也只有少年期有'
    }
  }
}
</script>
<style scoped>
  @import '../../assets/css/ShowIndex.css';
</style>
