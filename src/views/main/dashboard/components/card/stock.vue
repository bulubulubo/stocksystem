<template>
  <div class="boxbig">
    <el-card class="box-card">
      <div class="box-left" style="color: #ec0000" v-if="stockinfo[0]['涨跌幅']>0">
        <span style="font-size:28px;font-weight: bold" title="最新价">{{ stockinfo[0]['最新价'] }}</span>
        <div style="font-size:18px;margin:10px;">
          <span style="margin-right:30px;left: 0" title="涨跌额">{{ stockinfo[0]['涨跌额'] }}</span>
          <span title="涨跌幅">{{ stockinfo[0]['涨跌幅'] }}%</span>
        </div>
      </div>
      <div class="box-left" style="color: #00da3c" v-else="stockinfo[0]['涨跌幅']">
        <span style="font-size:28px;font-weight: bold" title="最新价">{{ stockinfo[0]['最新价'] }}</span>
        <div style="font-size:18px;margin:10px;">
          <span style="margin-right:30px;left: 0" title="涨跌额">{{ stockinfo[0]['涨跌额'] }}</span>
          <span title="涨跌幅">{{ stockinfo[0]['涨跌幅'] }}%</span>
        </div>
      </div>
      <div class="tab-title">行情数据</div>
      <div class="box-right">
        <el-descriptions column="5">
          <el-descriptions-item label="5分钟涨跌:">{{ stockinfo[0]['5分钟涨跌'] }}</el-descriptions-item>
          <el-descriptions-item label="60日涨跌幅:">{{ stockinfo[0]['60日涨跌幅'] }}</el-descriptions-item>
          <el-descriptions-item label="今开:">{{ stockinfo[0]['今开'] }}</el-descriptions-item>
          <el-descriptions-item label="市净率:">{{ stockinfo[0]['市净率'] }}</el-descriptions-item>
          <el-descriptions-item label="市盈率-动态:">{{ stockinfo[0]['市盈率-动态'] }}</el-descriptions-item>
          <el-descriptions-item label="年初至今涨跌幅:">{{ stockinfo[0]['年初至今涨跌幅'] }}</el-descriptions-item>
          <el-descriptions-item label="成交量:">{{ parseFloat(stockinfo[0]['成交量'] / 10000).toFixed(2) }}万手
          </el-descriptions-item>
          <el-descriptions-item label="成交额:">{{ parseFloat(stockinfo[0]['成交额'] / 100000000).toFixed(2) }}亿
          </el-descriptions-item>
          <el-descriptions-item label="振幅:">{{ stockinfo[0]['振幅'] }}</el-descriptions-item>
          <el-descriptions-item label="换手率:">{{ stockinfo[0]['换手率'] }}</el-descriptions-item>
          <el-descriptions-item label="最低:">{{ stockinfo[0]['最低'] }}</el-descriptions-item>
          <el-descriptions-item label="最新价:">{{ stockinfo[0]['最新价'] }}</el-descriptions-item>
          <el-descriptions-item label="最高:">{{ stockinfo[0]['最高'] }}</el-descriptions-item>
          <el-descriptions-item label="涨速:">{{ stockinfo[0]['涨速'] }}</el-descriptions-item>
          <el-descriptions-item label="量比:">{{ stockinfo[0]['量比'] }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header" style="font-size: large">
          <span>{{ stockbase[5]['value'] }}</span>
          <el-link style="float: right;" @click="moreinfo">>>>更多信息</el-link>
        </div>
      </template>
      <el-descriptions>
        <el-descriptions-item label="总市值:">{{ parseFloat(stockbase[0]['value'] / 100000000).toFixed(2) }}亿元
        </el-descriptions-item>
        <el-descriptions-item label="流通市值:">{{ parseFloat(stockbase[1]['value'] / 100000000).toFixed(2) }}亿元
        </el-descriptions-item>
        <el-descriptions-item label="行业:">
          <el-tag size="small">{{ stockbase[2]['value'] }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="上市时间:">{{
            moment(stockbase[3]['value']).format("YYYY-MM-DD")
          }}
        </el-descriptions-item>
        <el-descriptions-item label="股票代码:">{{ stockbase[4]['value'] }}</el-descriptions-item>
        <el-descriptions-item label="总股本:">{{ parseFloat(stockbase[6]['value'] / 100000000).toFixed(2) }}亿元
        </el-descriptions-item>
        <el-descriptions-item label="流通股:">{{ stockbase[7]['value'] }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <div class="box" style="height: 600px">
      <el-row>
        <el-col :lg="7" :md="24">
          <div class="box" style="position: relative;">
            <el-card class="box-card">
              <div slot="header" class="clearfix" style="padding-bottom:5%">
                <el-button class="button" @click="getwudangdata">五档</el-button>
                <el-button class="button" @click="getdetaildata">明细</el-button>
              </div>
              <div style="background: #0f1c3c;height:1px;width: 100%;margin-bottom: 8px"></div>
              <el-descriptions v-if="flag===1" column="2"
              >
                <el-descriptions-item
                    label="卖1价"
                >{{ wudang[0]['卖1价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖1量"
                >{{ wudang[0]['卖1量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖2价"
                >{{ wudang[1]['卖2价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖2量"
                >{{ wudang[1]['卖2量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖1价"
                >{{ wudang[2]['卖3价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖3量"
                >{{ wudang[2]['卖3量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖4价"
                >{{ wudang[3]['卖4价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖4量"
                >{{ wudang[3]['卖4量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖5价"
                >{{ wudang[4]['卖5价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="卖5量"
                >{{ wudang[4]['卖5量'] }}
                </el-descriptions-item>
              </el-descriptions>
              <div v-if="flag===1" style="background: #0f1c3c;height:1px;width: 100%;margin-bottom: 8px"></div>
              <el-descriptions v-if="flag===1" column="2"
              >
                <el-descriptions-item
                    label="买1价"
                >{{ wudang[5]['买1价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买1量"
                >{{ wudang[5]['买1量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买2价"
                >{{ wudang[6]['买2价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买2量"
                >{{ wudang[6]['买2量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买3价"
                >{{ wudang[7]['买3价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买3量"
                >{{ wudang[7]['买3量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买4价"
                >{{ wudang[8]['买4价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买4量"
                >{{ wudang[8]['买4量'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买5价"
                >{{ wudang[9]['买5价'] }}
                </el-descriptions-item>
                <el-descriptions-item
                    label="买5量"
                >{{ wudang[9]['买5量'] }}
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions v-else v-for="i in 10">
                <el-descriptions-item
                >{{ wudang[i][0]}}
                </el-descriptions-item>
                <el-descriptions-item
                >{{ wudang[i][1]}}
                </el-descriptions-item>
                <el-descriptions-item
                >{{ wudang[i][2]}}
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </div>
        </el-col>
        <el-col :lg="17" :md="24">
          <div class="box" style="position: relative;">
            <div style="margin-top: 0;position:absolute;margin-left: 45%;z-index: 2000 ">
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
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, Ref, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getdetail, getinfoData, getkData, getstockbaseData, getwudangData} from "@/api/stock";
import moment from "moment";
import * as echarts from "echarts";
import {useEventListener} from "@vueuse/core";
import {useStore} from "vuex";

export default defineComponent({
  setup() {
    const store = useStore()
    let flag = ref(1)
    // 设置默认数据
    const stockbase = ref([{item: '总市值', value: 242573977475},
      {item: '流通市值', value: 242569336875},
      {item: '行业', value: '银行'},
      {item: '上市时间', value: 19910403},
      {item: '股票代码', value: '000001'},
      {item: '股票简称', value: '平安银行'},
      {item: '总股本', value: 19405918198},
      {item: '流通股', value: 19405546950}])
    let params = {kline: '101', code: "000001"}
    // if(route.query.code){
    //   params.code = route.query.code.toString()
    // }
    params.code = store.state.stock.code
    const getstockbasedata = () => {
      getstockbaseData(params)
          .then(res => {
            stockbase.value = res.data
          })
          .catch(err => {
            stockbase.value = []
          })
    }
    getstockbasedata()
    // 获取实时基本数据
    const stockinfo = ref([{
          '序号': 2373,
          '代码': '000001',
          '名称': '平安银行',
          '最新价': 12.5,
          '涨跌幅': -1.96,
          '涨跌额': -0.25,
          '成交量': 918668.0,
          '成交额': 1160509766.03,
          '振幅': 2.75,
          '最高': 12.83,
          '最低': 12.48,
          '今开': 12.7,
          '昨收': 12.75,
          '量比': 0.77,
          '换手率': 0.47,
          '市盈率-动态': 5.33,
          '市净率': 0.67,
          '总市值': 242573977475.0,
          '流通市值': 242569336875.0,
          '涨速': 0.0,
          '5分钟涨跌': 0.08,
          '60日涨跌幅': -17.16,
          '年初至今涨跌幅': -5.02
        }]
    )
    const getstockinfodata = () => {
      getinfoData(params)
          .then(res => {
            stockinfo.value = res.data
          })
          .catch(err => {
            stockinfo.value = []
          })
    }
    getstockinfodata()
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

    const klineOptions = [{name: '分时', value: '0'}, {name: '日K', value: '101'}, {
      name: '30分钟',
      value: '30'
    }, {name: '15分钟', value: '15'}, {name: '5分钟', value: '5'}];
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

    function splitDatatwo(rawData: (string | number)[][]) {
      let categoryData = [];
      let values = [];
      let average = []
      let volumes = [];
      categoryData.push(rawData[0][0]);
      values.push(Number(rawData[0][2]));
      average.push(Number(rawData[0][7]));
      volumes.push([0, Number(rawData[0][6]), 1]);
      for (let i = 1; i < rawData.length; i++) {
        categoryData.push(rawData[i][0]);
        values.push(Number(rawData[i][2]));
        average.push(Number(rawData[i][7]));
        volumes.push([i, Number(rawData[i][6]), Number(rawData[i][6]) >= Number(rawData[i - 1][6]) ? 1 : -1]);
      }
      return {
        categoryData: categoryData,
        values: values,
        average: average,
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
      volumes: [],
      average: []
    })
    // 数据获取
    let options = reactive({})

    function getstockkData() {
      return getkData(params)
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

    function getday() {
      return getkData(params)
          .then(res => {
            // @ts-ignore
            data = splitDatatwo(res.data);
            console.log(data)
            options = reactive({
              hoverAnimation: true,
              animation: false,

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
                  start: 0,
                  end: 100
                },
                {
                  show: true,
                  xAxisIndex: [0, 1],
                  type: 'slider',
                  top: '82%',
                  left: '10%',
                  start: 0,
                  end: 100
                }
              ],
              series: (function () {
                var series = [];
                // @ts-ignore
                series.push(
                    {
                      name: 'price',
                      type: 'line',
                      data: data['values'],
                      smooth: false,
                      lineStyle: {
                        opacity: 1
                      }
                    },
                    {
                      name: 'average',
                      type: 'line',
                      data: data['average'],
                      smooth: true,
                      lineStyle: {
                        opacity: 1
                      }
                    },
                    {
                      name: '',
                      type: 'line',
                      data: [],
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: '',
                      type: 'line',
                      data: [],
                      smooth: true,
                      lineStyle: {
                        opacity: 0.5
                      }
                    },
                    {
                      name: 'Dow-Jones index',
                      type: 'candlestick',
                      data: [],
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

    getstockkData()
    const radio = ref({name: '日K', value: '101'})
    const ktype = (row: any) => {
      radio.value = row
      params.kline = radio.value.value
      if (radio.value.value != '0') {
        getstockkData()
      } else {
        getday()
      }
    }
    const router = useRouter()
    //通过定义一个方法，使用router进行跳转，这里后面的123是路由传参，不传可以不加
    const moreinfo = (row: any) => {
      router.push({
        path: '/more',
        query: params
      })
      store.commit('stock/stateChangetwo', params.code)
    }
    const wudang = ref([{'卖1价': '-', '卖1量': '-'}, {'卖2价': '-', '卖2量': '-'}, {'卖3价': '-', '卖3量': '-'}, {
      '卖4价': '-',
      '卖4量': '-'
    }, {'卖5价': '-', '卖5量': '-'}, {'买1价': 7.46, '买1量': 151846}, {'买2价': 7.45, '买2量': 4395}, {
      '买3价': 7.44,
      '买3量': 1219
    }, {'买4价': 7.43, '买4量': 1817}, {'买5价': 7.42, '买5量': 779}])
    const getwudangdata = () => {
      getwudangData(params)
          .then(res => {
            wudang.value = res.data
            flag.value = 1
          })
          .catch(err => {
            wudang.value = []
          })
    }
    getwudangdata()
    const getdetaildata = () => {
      getdetail(params)
          .then(res => {
            wudang.value = res.data
            flag.value = 0
            console.log('detail',wudang,flag)
          })
          .catch(err => {
            wudang.value = []
          })
    }
    return {
      flag,
      stockbase,
      wudang,
      options,
      chart,
      data,
      stockinfo,
      store,
      moreinfo,
      ktype,
      params,
      klineOptions,
      radio,
      moment,
      getwudangdata,
      getdetaildata,
    }
  }
})

function beforeRouteLeave(to: any, from: any, next: any) {
  throw new Error('Function not implemented.');
}
</script>

<style lang="scss" scoped>
.full-iframe {
  width: 100%;
  height: calc(100% - 5px);
  overflow: hidden;
}

.box-card {
  margin-bottom: 5px;

  .card-header {
    text-align: left;
    Font-weight: bold;
  }

  .box {
    .item {
      align-items: center;

      * {
        margin-right: 20px;
      }
    }

    max-height: 400px;
    overflow: auto;
  }
}

.base {
  width: 50%;
  height: 200px;
}

.boxbig {
  padding: 20px;
}

.box {
  margin: 10px auto 0;
  width: calc(100% - 40px);
  height: 100%;
  background: var(--system-page-background);
  padding: 20px;
  overflow: hidden;
}

.boxlittle {
  margin: 10px auto 0;
  width: calc(100% - 40px);
  height: 100%;
  background: var(--system-page-background);
  padding: 20px;
  overflow: hidden;
}

.box-left {
  width: 160px;
  background: #fff;
  padding: 4px 4px 4px 5px;
  min-height: 68px;
  display: inline-block;
}

.box-right {
  width: calc(100% - 240px);
  background: #fff;
  padding: 15px;
  height: 60px;
  display: inline-block;
}

.box-card .tab-title {
  display: inline-block;
  border-left: 2px solid #d0d0d0;
  width: 18px;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  height: 70px;
  word-spacing: 4px;
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

.button {
  width: 40%;
  height: 100%;
  font-size: 15px;
}

</style>