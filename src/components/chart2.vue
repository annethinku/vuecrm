<template>
   <div class="flexbox">
     <div style="width: 40%">
       <ve-map :data="chartData"></ve-map>
     </div>
    <div style="width: 50%;">
      <ve-bmap
        :settings="chartSettings"
        :series="chartSeries"
        :tooltip="chartTooltip">
      </ve-bmap>
    </div>
   </div>
</template>

<script>
    export default {
      name: "chart1",
      data () {
        this.chartSettings = {
          key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
          bmap: {
            center: [120, 30],
            zoom: 14,
            roam: true,
            mapStyle: {}
          }
        }
        this.chartTooltip = { show: true }
        return {
          chartData: {
            columns: ['位置', '税收', '人口', '面积'],
            rows: [
              { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
              { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
              { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
              { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
            ]
          },
          chartSeries: [
            {
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: [
                [120, 30, 1] // 经度，维度，value，...
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
