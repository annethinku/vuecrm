<template>
  <div class="content">
          <Form ref="formInline" inline>
            <FormItem prop="user">
              <Input type="text"  placeholder="用户名" v-model="search"></Input>
            </FormItem>
            <FormItem prop="phone">
              <Input type="number" placeholder="手机号" v-model="searchPhone"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="searchData()">查询</Button>
              <Button type="warning" @click="returnOld()">重置</Button>
            </FormItem>
          </Form>
          <Table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
              <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看详情</Button>
              <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
          </Table>
          <Page :total="20" style="margin-top: 20px;text-align: right;" @on-change="pageChange" v-if="!haveSearch"/>
  </div>
</template>

<script>
    export default {
      name:'contents',
      data(){
          return{
            columns12: [
              {
                title: '用户名',
                slot: 'name'
              },
              {
                title: '年龄',
                key: 'age'
              },
              {
                title: '手机号',
                key: 'phone'
              },
              {
                title: '地址',
                key: 'address'
              },
              {
                title: '操作',
                slot: 'action',
                width: 150,
                align: 'center'
              }
            ],
            data6: [],
            oldData6:[],
            search:'',
            searchPhone:'',
            haveSearch:null
          }
      },
      created(){
      this.getData()
      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: '用户信息',
            content: `用户名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>电话：${this.data6[index].phone}<br>地址：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.$Modal.confirm({
            title: '提示',
            content: '<p>确定要删除此条数据吗？</p>',
            okText: '确定',
            cancelText: '取消',
            onOk:()=> {
              this.data6.splice(index, 1);
            },
            onCancel:()=>{
              // this.$Modal.remove();
            }
          });

        },
        getData () {
          this.$axios({
            method:'get',
            url:'../../static/json/index.json',
            // data:this.qs.stringify({
            //   userId:this.userId,
            //   token:this.token,
            // })
          }).then((response) =>{
            this.data6=response.data.data;
            this.oldData6=response.data.data;
          }).catch((error) =>{
            // console.log(error)       //请求失败返回的数据
          })
        },
        async getData2 () {
          const res = await this.$axios({
            method:'get',
            url:'../../static/json/index2.json'
          });
          if (res.status === 200) {
            // alert('成功')
            this.data6=res.data.data;
            this.oldData6=res.data.data;
          } else{
            // alert('失败')
          }
        },
        pageChange(num){
         if(num==1){
           this.getData();
         }else{
           this.getData2();
         }
        },
        searchData(){
          const  arr=[];
          if(!this.search && !this.searchPhone){
            this.$Modal.warning({
              title: '提示',
              content: '请输入你要查询的内容!'
            });
            return false;
          }
          if(this.search){
            for(let i=0;i<this.data6.length;i++){
              if(this.oldData6[i].name.indexOf(this.search)!=-1){
                arr.push(this.oldData6[i]);
              }
            }
          }else if(this.searchPhone){
            for(let i=0;i<this.data6.length;i++){
              if(this.oldData6[i].phone.indexOf(this.searchPhone)!=-1){
                arr.push(this.oldData6[i]);
              }
            }
          }
          if (arr.length>0){
            this.data6=arr;
            this.haveSearch=true;
          }else{
            this.haveSearch=null;
            this.$Modal.warning({
              title: '提示',
              content: '暂无搜索数据!'
            });
            return false;
          }
        },
        returnOld(){
          this.data6=this.oldData6;
          this.search='';
          this.searchPhone='';
          this.haveSearch=null;
        },
      }

    }
</script>

<style scoped>

</style>
