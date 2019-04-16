<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .right-topu{
    position: absolute;
    height:64px;
    right: 20px;
    top: 0;
  }
  .bcenter{
    height: 100%;
    display: flex;
    display: -webkit-flex;
   align-items: center;
  }
  .iconMr{
    margin-right: 20px;
  }
  .hideD{
    display: none;
  }
  .logobox{
    text-align: center;
  }
  .logobox img{
    width: 100px;
  }
</style>
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu :active-name="path" :open-names="openName" theme="dark" width="auto" :class="menuitemClasses" @on-select="selectMenu" :accordion="true">
        <div class="logobox">
          <img src="../assets/logo.png" alt="logo"/>
        </div>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            <span>用户信息</span>
          </template>
          <MenuItem name="contents" to="/content">内容管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            <span>商品管理</span>
          </template>
          <MenuItem name="product" to="/product">商品列表</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            <span>图表分析</span>
          </template>
          <MenuItem name="chart1" to="/chart1">图表 1</MenuItem>
          <MenuItem name="chart2" to="/chart2">图表 2</MenuItem>
        </Submenu>
        <MenuItem name="kuozhan1" to="/kuozhan1">
            <Icon type="ios-basket" />
            <span>扩展信息1</span>
        </MenuItem>
        <MenuItem name="kuozhan2" to="/kuozhan2">
          <Icon type="ios-beer-outline" />
          <span>扩展信息2</span>
        </MenuItem>
      </Menu>
      <Menu theme="dark" width="auto" :class="isCollapsed?'':'hideD'" @on-select="collapsedSider">
        <MenuItem name="1-1">
          <Icon type="ios-navigate" size="30" color="#fff"></Icon>
        </MenuItem>
        <MenuItem name="1-2">
          <Icon type="ios-keypad" size="30" color="#fff"></Icon>
        </MenuItem>
        <MenuItem name="1-3">
          <Icon type="ios-analytics" size="30" color="#fff"></Icon>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout :style="isCollapsed ? 'marginLeft:78px' : 'marginLeft:200px'">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',padding: 0}">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        <div class="right-topu">
           <div class="bcenter">
             <Badge dot class="iconMr" :offset="[20,2]">
             <Icon type="ios-notifications-outline" size="30"/>
             </Badge>
             <Dropdown trigger="click" style="margin-right: 20px" @on-click="updateCode">
               <a href="javascript:void(0)">
                 <Icon type="ios-settings-outline" size="30"/>
               </a>
               <DropdownMenu slot="list">
                 <DropdownItem name="code">修改密码</DropdownItem>
                 <DropdownItem name="loginOut">退出登录</DropdownItem>
               </DropdownMenu>
             </Dropdown>
             <Avatar src="../../static/images/default.jpg"  size="large" v-bind:title="username"/>
           </div>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>{{path}}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="min-height: 710px">
         <router-view></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
    <!--修改密码框-->
    <Modal
      v-model="modal12"
      title="修改密码"
      @on-ok="ok"
      @on-cancel="cancel" :footer-hide="true">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="旧密码" prop="passwdOld">
          <Input type="password" v-model="formCustom.passwdOld"></Input>
        </FormItem>
        <FormItem label="新密码" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
     name:'home',
    data () {
      const validatePassOld = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入你的密码'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入你的密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请确认你的新密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次新密码输入不一致!'));
        } else {
          callback();
        }
      };

      return {
        username:'',
        path:'content',
        openName:['1'],
        isCollapsed: false,
        modal12: false,
        formCustom: {
          passwd: '',
          passwdCheck: '',
          passwdOld: ''
        },
        ruleCustom: {
          passwdOld: [
            { validator: validatePassOld, trigger: 'blur' }
          ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
        }
      }
    },
   created(){
      const  keycode='balabala';
      const keyword='wordbala';
      const sid=12;
      this.$store.commit('getParam',{
        keycode,
        keyword,
        sid
      })
     console.log('getters:过滤')
     console.log(this.changPeople);
     this.$store.dispatch('getParamSync',{
       keycode,
       keyword,
       sid
     }).then((res)=>{
       this.$store.dispatch('changetitleSync',res)
     })
     this.username=this.$store.state.login.username;
     this.path=this.$route.name;
     if(this.path=='contents'){
       this.openName=['1'];
     }else if(this.path=='product'){
       this.openName=['2'];
     }else if(this.path=='chart1' || this.path=='chart2'){
       this.openName=['3'];
     }else{
       this.openName=[''];
     }
   },
    computed: {
       changPeople(){
         return this.$store.getters.changePeople
       },
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu hideD' : ''
        ]
      }
    },
    methods: {
      nizhuan(){
        this.messageTitle= this.messageTitle.split('').reverse().join('')
      },
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      updateCode(name){
       if(name=='code'){//修改密码
         this.modal12 = true;
       }else if(name=='loginOut'){//退出登录
         this.$Modal.confirm({
           title: '提示',
           content: '<p>确定退出登录？</p>',
           okText: '确定',
           cancelText: '取消',
           onOk:()=> {
             this.$router.push({name:'index'})
           }
         });
       }
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            this.$router.push({name:'index'});
          } else {
            this.$Message.error('Fail!');
            return false;
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      ok () {
        this.handleSubmit('formCustom');
        // this.$Message.info('Clicked ok');
      },
      cancel () {
        this.handleReset('formCustom');
        // this.$Message.info('Clicked cancel');
      },
      selectMenu(name){
       this.path=name;
      }

    }
  }
</script>
