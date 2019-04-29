<template>
    <div>
      扩展2
      <input type="text" v-model="numval">
      <button @click="setNums()">click me</button>
      {{num}}
    </div>
</template>

<script>
    export default {
        name: "kuozhan2",
      data(){
          return{
   numval:''
          }
      },
      computed:{
        num(){
          return this.$store.state.num
        }
      },
     methods:{
 setNums(){
   this.$store.dispatch('set_num',this.numval).then((res)=>{
    //  延迟执行为了看到值变化
     setTimeout(()=>{
       this.$store.commit('SET_NUM',res);
     },3000)
   })
 }
     }
    }
</script>

<style scoped>

</style>
