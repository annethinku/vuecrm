<template>
  <Table :columns="columns10" :data="data9"></Table>
</template>
<script>
  import expandRow from './product-table';
  export default {
    name: "product",
    components: { expandRow },
    data () {
      return {
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '商品id',
            key: 'goods_id'
          },
          {
            title: '商品名',
            key: 'goods_name'
          },
          {
            title: '商品数量',
            key: 'goods_number'
          },
          {
            title: '商品标签',
            key: 'subtag'
          }
        ],
        data9: []
      }
    },
    mounted(){
      this.$axios({
        url:this.API1+'/cjsc/home.json?trd_session=bb7ae3d4bf73d0bff58764f8f4f6838f',
      }).then((res)=>{
        this.data9=res.data.goods;
      })
    }
  }
</script>
