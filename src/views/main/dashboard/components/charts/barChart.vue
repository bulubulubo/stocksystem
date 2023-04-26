<template>
  <el-row>
    <el-col :lg="7" :md="24">
      <div class="box" style="position: relative;">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="padding-bottom:5%">
            <span style="font-weight: bold;font-size:18px">重要指数</span>
          </div>
          <div style="background: #0f1c3c;height:1px;width: 100%;margin-bottom: 8px"></div>
          <el-table
              :data="allindex" style="width: 100%;height: 100%"
              highlight-current-row
              :cell-style="cellStyle"
              @current-change="indextype"
          >
            <el-table-column
                prop="名称"
                label="名称"
            >
            </el-table-column>
            <el-table-column
                prop="最新价"
                label="最新价"
            >
            </el-table-column>
            <el-table-column
                prop="涨跌幅"
                label="涨跌幅(%)" >
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </el-col>
    <el-col :lg="17" :md="24">
      <div class="box" style="position: relative;">
        <div style="margin-top: 0;position:absolute;margin-left: 55%;z-index: 2000 ">
          <el-radio-group v-model="radio" size="medium">
            <el-radio-button v-for="kline in klineOptions" :label="kline" :key="kline" @change="ktype(kline)">
              {{ kline.name }}
            </el-radio-button>
          </el-radio-group>
        </div>
        <div ref="chart" :option="options" class="chart"/>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {defineComponent, inject, onBeforeUnmount, onMounted, reactive, Ref, ref, watch} from 'vue'
import {getszindexData} from "@/api/dash";
import * as echarts from 'echarts';
import {useEventListener} from "@vueuse/core";
import {getallindexData} from "@/api/dash";

export default defineComponent({
  setup() {
    const chart: Ref<HTMLDivElement | null> = ref(null)
    // 在onMounted事件才能拿到真实dom
    onMounted(() => {
      setTimeout(() => {
        //code
        aa()
      }, 200);
    })
    // let timer:any = null;
    const aa = () => {
      // const chart = echarts.init(HTMLElement);
      const dom = chart.value
      if (dom) {
        let option: any = options
        // 需要在页面Dom元素加载后再初始化echarts对象
        let myChart = echarts.init(dom)
        myChart.setOption(option)
        // 自动监听加自动销毁
        useEventListener('resize', () => myChart.resize())
        watch(() => option, (newVal: any) => {
          myChart.setOption(newVal)
        }, {deep: true})
      }
    }

    const klineOptions = [{name: '日K', value: '101'}, {name: '30分钟', value: '30'}, {
      name: '15分钟',
      value: '15'
    }, {name: '5分钟', value: '5'}];
    const upColor = '#00da3c';
    const downColor = '#ec0000';

    function tonumber(list: (string | number)[]) {
      for (let i = 0; i < list.length; i++) {
        list[i] = Number(list[i])
      }
      return list
    }

    function splitData(rawData: (string | number)[][]) {
      let name = ''
      let categoryData = [];
      let values = [];
      let volumes = [];
      name = rawData[0][1] + ' [' + rawData[0][0] + '] ' + rawData[rawData.length - 1][2]
      for (let i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 3)[2]);
        values.push(tonumber(rawData[i]));
        volumes.push([i, Number(rawData[i][6]), Number(rawData[i][0]) > Number(rawData[i][1]) ? 1 : -1]);
      }
      return {
        name: name,
        categoryData: categoryData,
        values: values,
        volumes: volumes
      };
    }

    function calculateMA(dayCount: number, data: object) {
      var result = [];
      // @ts-ignore
      for (var i = 0, len = data.categoryData.length; i < len; i++) {
        if (i < dayCount) {
          result.push('-');
          continue;
        }
        var sum: string | number = 0;
        for (var j = 0; j < dayCount; j++) {
          // @ts-ignore
          sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
      }
      return result;
    }

    let data = reactive({
      name: '',
      categoryData: [],
      values: [],
      volumes: []
    })
    // 数据获取
    let params = {kline: '101',type:'sh000001'}
    let options = reactive({})

    function getindexData() {
      return getszindexData(params)
          .then(res => {
            // @ts-ignore
            data = splitData(res.data);
            options = reactive({
              hoverAnimation: true,
              animation: false,
              title: {
                text: data.name,
                left: 60,
                top: 4
              },
              legend: {
                bottom: 10,
                left: 'center',
                data: ['道琼斯指数', 'MA5', 'MA10', 'MA20', 'MA30']
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross'
                },
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                  color: '#000'
                },
                position: function (pos: number[], params: any, el: any, elRect: any, size: { viewSize: number[]; }) {
                  const obj: Record<string, number> = {
                    top: 10
                  };
                  obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                  return obj;
                }
                // extraCssText: 'width: 170px'
              },
              axisPointer: {
                link: [
                  {
                    xAxisIndex: 'all'
                  }
                ],
                label: {
                  backgroundColor: '#777'
                }
              },
              visualMap: {
                show: false,
                seriesIndex: 5,
                dimension: 2,
                pieces: [
                  {
                    value: 1,
                    color: downColor
                  },
                  {
                    value: -1,
                    color: upColor
                  }
                ]
              },
              grid: [
                {
                  left: '10%',
                  right: '8%',
                  height: '50%'
                },
                {
                  left: '10%',
                  right: '8%',
                  top: '68%',
                  height: '13%'
                }
              ],
              xAxis: [
                {
                  type: 'category',
                  data: data['categoryData'],
                  boundaryGap: false,
                  axisLine: {onZero: false},
                  splitLine: {show: false},
                  min: 'dataMin',
                  max: 'dataMax',
                  axisPointer: {
                    z: 100
                  }
                },
                {
                  type: 'category',
                  gridIndex: 1,
                  data: data['categoryData'],
                  boundaryGap: false,
                  axisLine: {onZero: false},
                  axisTick: {show: false},
                  splitLine: {show: false},
                  axisLabel: {show: false},
                  min: 'dataMin',
                  max: 'dataMax'
                }
              ],
              yAxis: [
                {
                  scale: true,
                  splitArea: {
                    show: true
                  }
                },
                {
                  scale: true,
                  gridIndex: 1,
                  splitNumber: 2,
                  axisLabel: {show: false},
                  axisLine: {show: false},
                  axisTick: {show: false},
                  splitLine: {show: false}
                }
              ],
              dataZoom: [
                {
                  type: 'inside',
                  xAxisIndex: [0, 1],
                  start: 70,
                  end: 100
                },
                {
                  show: true,
                  xAxisIndex: [0, 1],
                  type: 'slider',
                  top: '82%',
                  left: '10%',
                  start: 70,
                  end: 100
                }
              ],
              series: (function () {
                var series = [];
                // @ts-ignore
                series.push(
                    {
                      name: 'MA5',
                      type: 'line',
                      data: calculateMA(5, data),
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: 'MA10',
                      type: 'line',
                      data: calculateMA(10, data),
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: 'MA20',
                      type: 'line',
                      data: calculateMA(20, data),
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: 'MA30',
                      type: 'line',
                      data: calculateMA(30, data),
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: 'Dow-Jones index',
                      type: 'candlestick',
                      data: data.values,
                      itemStyle: {
                        color: upColor,
                        color0: downColor,
                        borderColor: undefined,
                        borderColor0: undefined
                      },
                      tooltip: {
                        formatter: function (param: any) {
                          param = param[0];
                          return [
                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                            'Open: ' + param.data[0] + '<br/>',
                            'Close: ' + param.data[1] + '<br/>',
                            'Lowest: ' + param.data[2] + '<br/>',
                            'Highest: ' + param.data[3] + '<br/>'
                          ].join('');
                        }
                      }
                    },
                    {
                      name: 'Volume',
                      type: 'bar',
                      xAxisIndex: 1,
                      yAxisIndex: 1,
                      data: data.volumes
                    },
                );
                return series;

              })()
            })
            aa()
          })
          .catch(error => {
            console.log('error:', error);
            return {};
          });
    }

    getindexData()
    const radio = ref({name: '日K', value: '101'})
    const ktype = (row: any) => {
      radio.value = row
      params.kline = radio.value.value
      getindexData()
    }
    const indextype = (row:any)=>{
      params.type=row['代码']
      getindexData()
      console.log(row,params)
    }
    //指数类型选择
    const allindex = ref([])
    const getallindex = () => {
      let params = {}
      getallindexData(params)
          .then(res => {
            allindex.value = res.data
            console.log(allindex)
          })
          .catch(err => {
            allindex.value = []
          })
    }
    getallindex()
    const cellStyle = (row:any)=>{
      const style = {
        color:'black'
      };
      if (row.columnIndex && row.columnIndex ==2 && row.row['涨跌幅']>0) {
        style.color='#ec0000'
        return style; // 绿色,最大值
      }
      else if( row.columnIndex ==2 ) {
        style.color='#00da3c'
        return style;
      }
      else
        return style
    }
    return {
      options,
      chart,
      ktype,
      klineOptions,
      allindex,
      indextype,
      getallindex,
      cellStyle,
      radio,
      params
    }
  }
})
</script>

<style lang="scss" scoped>
.box {
  margin: 10px auto 0;
  width: calc(100% - 40px);
  height: 400px;
  background: var(--system-page-background);
  padding: 20px;
  overflow: hidden;
}

.chart {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  height: 100%;
}

</style>