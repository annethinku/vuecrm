<template>
  <div id="app">
    <!-- <input type="text" v-model="countValue">
    <button @click="setCount">点击</button>
    {{count}} -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      countValue: ''
    }
  },
  computed: {
    // 这是计算属性，通常获取vuex里面的值都这样获取，你看下面的return就明白了，所以上面才可以直接{{count}}
    //这个不是方法，？方法都在methods里面，这是计算属性，我才知道计算属性可{{}}这样用，你空了可以去看看，记住这样用就行了，相当于在data里面的值，好，你先捋一捋，我有点东西要写。嗯，不懂直接微信给我说。那断了？嗯 

    count () {
      return this.$store.state.count
    }
  },
  created() {
    // this.prm().then(res => {
    //   // 这里的res就是123  明白了不 两个then  现在呢 好吧  明白了不  所以知道axios为啥是promise了吧 嗯
    //   // console.log('这是返回值',res)
    //   // 多温习
    //   // 说 刚刚想说同时出来？
    //   // 现在理解了吧 嗯
    //   //then 里面返回一个promise会在下一个then接收到 每个then都是同级的
    //   // 如果其中哪一个请求失败那么后面的请求也不会执行了 并会在catch抛出错误
    //   console.log(res)
    //   return new Promise((resolve, reject) => {
    //     axios('xxx').then(res => {
    //       resolve(res)
    //     }).catch(err=>{
    //       reject(err)
    //     })
    //   })
    // }).then(res => {
    //   console.log(res)
    //   return new Promise((resolve, reject) => {
    //     axios('xxx').then(res => {
    //       resolve(res)
    //     }).catch(err=>{
    //       reject(err)
    //     })
    //   })
    // }).then(res => {
    //   console.log(res)
    //   return new Promise((resolve, reject) => {
    //     axios('xxx').then(res => {
    //       resolve(res)
    //     }).catch(err=>{
    //       reject(err)
    //     })
    //   })
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   // 明白了没 一个catch 很多个then？ 其中一个请求失败就近这里面了  后面的then就不会进了 嗯
    //   // 这样是不是比回调地域要好 嗯  不用一直嵌套下去
    //   // 给你5分钟理解一下  不会写   我不是都写好了吗  就这样的啊
    //   //我说在实际使用中实际项目中也是这样写啊   把settimeout换成axios就行了
    //   // 现在呢 我在想个问题  我写一下   我是不是可以在then里面一直then 有点晕
    //   // then后面而不是then里面  第一个then里面不写promise 第二个就没用？
    //   // 对
    //   // 第二个then接受的是第一个返回的 ok  懂
    //   // 如果你第一个then里面请求报错了就不会进第二个then 就该抛出错误到catch 懂了
    // })
    // 明白没 为啥要执行错误喃你请求错误不抛出错误吗
    // 懂了不 嗯  那那个错误和catch是什么关系？设么意思
    // reject是抛出错误  peomise的参数  resolve是请求成功返回结果
    // catch 是接收错误  then是接收返回结果 哦  明白了没
    //明白  你那个双斜杠是怎么快捷键出来的 ctrl + / o
    // 普通的注释不都是这个快捷键吗 我一般是有内容再按快捷键 不知道没内容也可以  。。。
    // 再给你五分钟理解一下   完了我好讲下一个 这个差不多理解了 我想问问这个软件怎么打的命令 刚刚没看到
    // 我说你再理解一下  你就理解一下   5佛恩中 过一遍 哦
    // 我上厕所  你先看  有问题记下来  ok
  //  new Promise((resolve,reject)=>{
  //   resolve('123')
  //  }).then(res => {
  //    console.log(res)
  //   return new Promise((resolve, reject) => {
  //     ajax({
  //       success: function(res) {
  //         resolve(res)
  //       },
  //       error: function(err) {
  //         reject(err)
  //       }
  //     })
  //     reject('错误咯，哈哈')
  //   })
  //  }).then(res => {
  //   console.log(res)
  //  }).catch(err => {
  //    console.log(err)
  //   //  这里接收任何一个请求的错误 等一下
  //  })
  // 怎么样了 大概应该会了  好 下来自己巩固下
  // 你知道async await 不  之前看到过 忘了干啥的了
  // 网上说的是异步终极解决方案  是声明啥的 还是啥
  //  this.test1().then(res=>{
  //   console.log(res);
  //   return new Promise((resolve,reject)=>{
  //     resolve('我是第二只小猪')
  //   })
  // }).then(res=>{
  //   console.log(res);
  // })
  },

  methods: {
    setCount () {
      // 这种是直接调用mutation,没经过action,因为这不是异步操作。 那你为啥还要在getter操作？getter操作没用，可以删掉，getter和action又没关系 ok，
      // 这种是一样的 ，明白了没，action是操作mutation.
      // 说明白点：就是先把值传给action，action在调用mutation，然后再传给state,懂了没，刚刚是直接传给mutation，没经过action,都一样的。
      //我是从你开始写就有点乱 那个count()方法是干啥的 没有这个方法
      this.$store.dispatch('setCount', this.countValue)
    },
    prm (){
      // 现在你知道为什么axios是返回一个peomsie了不 不知道 你不是在讲promise么
      // 我是说刚刚那个啊  是因为返回的promise？

      // 能看懂不 网上看了写都是这么写的 不懂
      // 我们就把settimeouut当做是一个请求  请求需要两秒钟完成
      // 这下明白了不 你改了后没运行？运行啥 你就换了个ajax  我这是给你模拟下啊
      // 他就是在请求外面包了个new Promise  可是刚刚那个 this.axios没包啊
      // 那是人家包好了的啊  你在想啥  ok  需要你来包那他拿来干啥的
      // 下面这个就实现了一个promise 就想axios那样可以通过then返回  理解了不 那我不用then返回
      //就不会打印promise了？then里面拿到的值就是下面resolve返回的啊 明白了不 嗯
      // 你先不管 我慢慢讲  我还是把下面的ajax换成settimeout  模拟两秒请求成功 可以理解吧 嗯
      // return new Promise((resolve, reject) => {
      //   axios('xxx').then(res => {
      //     resolve(res)
      //   }).catch(err=>{
      //     reject(err)
      //   })
      // });
    },
    test1(){
      return new Promise((resolve,reject)=>{
          resolve('我是第一只小猪');
      })
    }
  }
};
</script>

<style>
  .flexbox{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
</style>
