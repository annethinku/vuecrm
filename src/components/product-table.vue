<template>
  <div class="product">
    <Row class="expand-row">
      <Col span="7">
        <span class="expand-key">商品图片: </span>
        <span class="expand-value">{{ row.real_bannerimgs_array[0] }}</span>
      </Col>
      <Col span="7">
        <span class="expand-key">商品简介: </span>
        <span class="expand-value">{{ row.subtitle }}</span>
      </Col>
      <Col span="5">
        <span class="expand-key">价格: </span>
        <span class="expand-value">{{ row.goods_price }}</span>
      </Col>
      <Col span="5">
        <span class="expand-value"> <Button type="primary" @click="showDetail(row.goods_id)">查看详情</Button></span>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    props: {
      row: Object
    },
    data(){
      return{
      }
    },
    mounted(){

    },
    methods:{
      showDetail(id){
        this.$Modal.info({
          title: '商品详情',
          content: `<p>原价：${this.row.goods_mprice} </p><div style="width: 100%;">图片：<img src="${this.row.real_bannerimgs_array[0]}" style="width: 100%;"/> </div>`
        })
      }
    }
  }
</script>

<style scoped>

</style>

