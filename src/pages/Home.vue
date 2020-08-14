<template>
  <div>
    <div class="stage">
      <vue-baberrage
        ref="baberrage"
        :lanesCount="5"
        :boxHeight="stageHeight"
        :isShow="barrageIsShow"
        :barrageList="barrageList"
        :loop="barrageLoop"
        :maxWordCount="60"
        :hoverLanePause="hoverLanePause"
      >
        <!-- <template v-slot:default="slotProps">
          <span style="color: #000; padding: 15px;">
            {{slotProps.item.msg}}
          </span>
        </template> -->
      </vue-baberrage>
    </div>
    <div class="demo-control">
      <div>
        <input type="text" v-model="msg">
        <button type="button" @click="addToList">{{stageHeight}}</button>
        <button type="button" @click="pauseBaberrage">Pause</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      msg: `Hello World!vue-baberrage!`,
      position: "normal",
      barrageIsShow: true,
      stageHeight: 300,
      boxWidth: 375,
      placeStyle: "normal",
      currentId: 0,
      barrageLoop: false,
      hoverLanePause: true, // 鼠标移动到上面的时候 会暂停泳道滚动
      barrageList: []
    };
  },
  methods: {
    removeList() {
      this.barrageList = [];
    },
    addToList() {
      console.log("11");
      const arr = Array.from({ length: 15 }, e => {
        return {
          id: ++this.currentId,
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          msg: this.msg,
          // time: Math.floor(Math.random() * 10 + 5),
          style: {
            fontSize: 15
          },
          time: 5
          // extraWidth: 60,
        };
      });
      // this.barrageList.push(...arr)
      this.barrageList.push({
        id: ++this.currentId,
        avatar:
          "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        msg: this.msg,
        // time: Math.floor(Math.random() * 10 + 5),
        style: {
          fontSize: 15
        },
        time: 5
        // extraWidth: 60,
      });
    },
    // 暂停弹幕
    pauseBaberrage() {
      this.$refs.baberrage.pause();
    },
    changeHeight(height) {
      this.stageHeight = height;
    },
    // 自定义泳道选择函数
    posRender(lanes) {
      // 全部放到第一条泳道
      return 0;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
::v-deep .baberrage-stage{
  height: 300px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.baberrage-stage .baberrage-item.normal {
  color: #fff;
}
.top {
  border: 1px solid #66aabb;
}
.demo-control {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  bottom: 380px;
  top: 70%;
  height: 69px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  div {
    width: 420px;
    background: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #8ad9ff;
    display: flex;
    justify-content: center;
  }
  input,
  button,
  select {
    height: 35px;
    width: 15%;
    min-width: 15%;
    padding: 0;
    background: #027fbb;
    border: 1px solid #ccc;
    color: #fff;
    border-radius: 0;
    box-sizing: border-box;
  }
  select {
    height: 33px;
    margin-top: 1px;
    border: 0px;
    outline: 1px solid rgb(204, 204, 204);
  }
  input {
    flex: 1;
    height: 35px;
    width: 50%;
    min-width: 50%;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #8ad9ff;
    padding-left: 5px;
    color: #fff;
  }
}
.baberrageStyle {
  display: flex;
  flex-direction: column;
  span {
    color: #fff;
  }
}
</style>