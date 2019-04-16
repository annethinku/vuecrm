<template>
  <div>
    子组件内容：{{hello}}--{{helloB}}
    <Button @click="sendMsgParent" type="primary">向父组件传值</Button>
  </div>
</template>

<script>
    export default {
      name: "child",
      props:['hello'],
     data(){
       return {
         helloB:'default'
       }
     },
      mounted(){
        this.normalizedSize();
      },
      methods: {
        normalizedSize: function () {
         this.helloB=this.hello.trim().toUpperCase()
        },
        sendMsgParent:function () {
          this.$emit('listenToChildEvent','小猪')
        }
      }

      }
</script>

<style scoped>

</style>
