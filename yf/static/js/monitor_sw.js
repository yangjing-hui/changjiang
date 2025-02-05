/*#################    总体概览  #####################*/
var dom = document.getElementById("lytj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name:'总体概览',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 12,
                    fontWeight : 'bolder'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 15,
                    fontWeight : 'bolder'
                 }

                },
            },
            data:[
                {value:20, name:'风险'},
                {value:80, name:'安全'},
               
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    安全类别  #####################*/

var dom = document.getElementById("gztj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['不佩戴安全帽','不穿反光背心','擅入禁区','反光锥摆放','正常'],
		textStyle: {
			color: '#fff',
		},
    },
    series: [
        {
            name:'安全类别',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                   	textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 12,
                    fontWeight : 'normal'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'不佩戴安全帽'},
                {value:310, name:'不穿反光背心'},
                {value:234, name:'擅入禁区'},
                {value:135, name:'反光锥摆放'},
                {value:1548, name:'正常'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*##################  巡检风险状态     ##################*/
var  option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['安全指数','风险数目'],
		textStyle: {
			color: '#fff',
		},
	},
	xAxis: [
		{
			type: 'category',
			data: ['A区','B区','C区','D区'],
			axisLabel: {
			show: true,
				textStyle: {
					color: '#657c97'
				}
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '风险数目',
			nameTextStyle : {
			color: "#657c97",
		
			},
			min: 0,
			max: 100,
			interval: 50,
			axisLabel: {
				
				textStyle: {
					color: '#657c97'
				}
			}
		}
	],
	series: [
		 
		{
			name:'安全指数',
			type:'bar',
						
			/*设置柱状图颜色*/
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#0ff'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
					/*信息显示方式*/
					label: {
						show: false,
						position: 'top',
						formatter: '{b}\n{c}'
					}
				}
			},
			data:[70, 88, 21, 90]
		},
		{
			name:'风险数目',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				   //color:'#0ff'
				}
			},
			data:[20, 13, 82, 3]
		}
	]
};
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('xjfxzt'));
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option); 