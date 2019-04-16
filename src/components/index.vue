<template>
  <div class="index">
    <div class="login-out">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="ios-arrow-dropright" color="#bd8c5f"/>
          <span style="color: #bd8c5f">欢迎登录</span></p>
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
          <FormItem>
            <div align="center"><Button type="primary" @click="handleSubmit('formInline')" size="large" style="background: #e0ab72;width: 50%;border:none;">登录</Button></div>
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
    background: url("../assets/bg1.jpg") no-repeat;
    background-size: cover;
  }
  .login-out{
    width: 400px;
    position: fixed;
   left: 50%;
    margin-left: -200px;
    top: 50%;
   transform: translateY(-50%);
  }
  .ivu-card{
    background: rgba(255,255,255,0.6);
  }
</style>
