<template>
  <div class="index">
    <img src="../../static/images/flowers.gif" alt="花瓣"/>
    <div class="login-out">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="ios-arrow-dropright" color="#608041"/>
          <span style="color: #608041">欢迎登录</span></p>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem style="margin-top: 60px;">
            <div align="center"><Button type="primary" @click="handleSubmit('formInline')" size="large" style="background: #608041;width: 30%;border:none;">登录</Button></div>
            <div class="bot-tishi">
              输入任意用户名、密码都可登录
            </div>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码最少设置6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功!');
          this.$store.commit('changeLogin',{
            username:this.formInline.user,
            password:this.formInline.password
          });
          this.$router.push({name:'home',params:{login:true}})
        } else {
          this.$Message.error('登录失败!');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #cbd6dc;
  }
  .login-out{
    width: 658px;
    height: 194px;
    background: url("../assets/bg1.jpg") no-repeat center;
    position: fixed;
    left:50%;
    top: 30%;
    transform: translate(-50%,-50%);
  }
  .ivu-card{
    background: rgba(255,255,255,0.6);
  }
  .bot-tishi{
    text-align: center;
    color: #999;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    bottom: -30px;
  }
</style>
