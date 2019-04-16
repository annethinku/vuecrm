<template>
    <div class="kuozhan1 flexbox">
        <div class="chuanzhi">
          <h4>父子组件传值相关信息：</h4>
          父组件内容： {{message}}
          <child :hello="message" @listenToChildEvent="showChildMsg"></child>
          {{childMsg}}
          <div class="props-box">
            <div class="props-1">父组件 data:hello</div>
            <div class="jian">↓</div>
            <div class="props-2">子组件 <br/> props:['hello']</div>
          </div>
          <div class="props-box">
            <div class="props-2" style="line-height: 25px;border-radius: 0">子组件 <br/>this.$emit('自定义事件名称',所传值')</div>
            <div class="jian">↓</div>
            <div class="props-1" style="line-height: 25px;border-radius: 0">父组件 child组件上@自定义事件=fun(data)</div>
          </div>
        </div>
      <div class="vuexbox">
        <h4>vuex相关信息：</h4>
        <ul>
          <li>state用来数据共享数据存储</li>
          <li>mutation用来注册改变数据状态</li>
          <li>getters用来对共享数据进行过滤操作</li>
          <li>action解决异步改变共享数据</li>
        </ul>
        <p>vuex文件夹：index.js、mutation.js、state.js、getters.js、actions.js</p>
      </div>
      <div class="promise">
        <h4>es6相关信息：</h4>
        <ul>
          <li>const声明常量 let声明变量</li>
          <li>()=>箭头函数 ()里面可写参数</li>
          <li>...扩展运算符 let a=[1,2,3]; let b=[...a,4]; console.log(b)//[1,2,3,4]</li>
          <li>解构赋值  let l=[1,2,3]; let [a,b,c]=l; console.log(a)//a 1 //b 2 //c 3;</li>
          <li>promise 使用<pre>function sleep(time){
 return new Promise((resolve,reject)=>{
 setTimeout(resolve,time);
 })
}
sleep(1000).then((res)=>{
 console.log('我是延迟一秒出来的哦');
})</pre></li>
          <li>async加在函数方法名前面，用来表示它是异步函数，不会阻碍后面代码的执行：<pre>async function a(){
return '我是一个异步函数';
}
a().then(res=>{
console.log(res);// '我是一个异步函数'
});
// 异步函数不会阻碍后面代码的执行
console.log('我虽然在后面，但是先执行');</pre>
            • await关键字只能放在async函数里面;遇到await 之后，代码就暂停执行了 await拿到返回值后继续执行console<pre>function double(num){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(num*2);
        },2000)
      })
    }
    async function two(){
      let num=await double(3);
      console.log(num);
    }
    two();</pre></li>
        </ul>
      </div>
    </div>
</template>

<script>
  import child from './child'
    export default {
        name: "kuozhan1",
      data(){
        this.chartSettings = {
          radius: [10, 100],
          offsetY: 300
        }
          return{
            message:'My name is xiaoxiao',
            childMsg:'',
          }
      },
      components:{
        child
      },
      mounted(){

      },
      methods:{
        showChildMsg:function (data) {
          this.childMsg='我是子组件传过来的值：'+data;
        }
      }
    }
</script>

<style scoped>
.props-box{
  margin: 20px auto;
}
  .props-1{
    width: 100px;
    height: 100px;
    line-height: 40px;
    border: 1px gray solid;
    border-radius: 50%;
    background: #b7c9f7;
    color: white;
    text-align: center;
  }
.props-2{
  width: 100px;
  height: 100px;
  line-height: 40px;
  border: 1px gray solid;
  border-radius: 50%;
  background: #5cc873;
  color: white;
  text-align: center;
}
  .jian{
    width: 100px;
    text-align: center;
  }
</style>
