import{_ as u,d as l,k as r,y as i,z as n,o as c,c as f,a as d}from"./index.3351d015.js";import{L as a,u as _,i as p,a as x,b as m,c as h,d as F,e as v,f as y}from"./echarts.42015861.js";var E=["\u70B9","\u51FB","\u67F1","\u5B50","\u6216","\u8005","\u4E24","\u6307","\u5728","\u89E6","\u5C4F","\u4E0A","\u6ED1","\u52A8","\u80FD","\u591F","\u81EA","\u52A8","\u7F29","\u653E"],o=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220];for(var t=0;t<o.length;t++);const B={title:{text:"\u7279\u6027\u793A\u4F8B\uFF1A\u6E10\u53D8\u8272 \u9634\u5F71 \u70B9\u51FB \u7F29\u653E",subtext:"Feature Sample: Gradient Color, Shadow, Click, Zoom"},xAxis:{data:E,axisLabel:{inside:!0},textStyle:{color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{},textStyle:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",showBackground:!0,itemStyle:{color:new a(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new a(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:o}]};const b=l({setup(){const s=r(null);let e=null;return i(()=>{_([x,m,h,F,v,y]),e=p(s.value),e.setOption(B),n("resize",()=>e.resize())}),{dom:s}}}),A={class:"layout-container"},$={ref:"dom",class:"chart"};function w(s,e,k,L,S,z){return c(),f("div",A,[d("div",$,null,512)])}var D=u(b,[["render",w],["__scopeId","data-v-7d9c48dc"]]);export{D as default};
