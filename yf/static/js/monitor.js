/*#############  类别  ###############*/
var dom = document.getElementById("gongzhong");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '类别',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
    },
	tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '不佩戴安全帽', max: 500},
           { name: '不穿反光背心', max: 660},
           { name: '擅入禁区', max: 900},
           { name: '反光锥摆放', max: 900},
           { name: '正常', max: 900},
		 ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
    },
    series: [{
        name: '类别',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [100, 280, 350, 500, 190],
                name : '类别',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}