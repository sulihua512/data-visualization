// rem适配模块：进行项目的rem动态适配
(function () {
    // 将rem设置的代码封装为函数
    function setRem() {
      // 1 获取页面的宽度
      var html = document.documentElement; // 获取html标签 querySelector('html')
      var width = html.clientWidth;
  
      // 2 进行尺寸边界值检测
      if (width < 1024) {
        width = 1024; // 如果超过最小值，设置为最小值即可
      }
      if (width > 1920) {
        width = 1920; // 如果超过最大值，设置为最大值即可
      }
  
      // 3 计算一个rem的大小
      var fSize = width / 80;
      // 4 设置给html标签的font-size
      html.style.fontSize = fSize + 'px';
    }
  
  
    // 1 页面加载中调用一次，进行rem的初始设置
    setRem();
  
    // 2 窗口尺寸改变时调用一次，进行rem的重新设置
    //  - window.onresize 窗口尺寸改变时触发
    window.onresize = setRem;
})();
  

(function () {
    // tab切换
    $('.monitor').on('click', '.tabs a', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $('.monitor .content').eq(this.dataset.index).show().siblings('.content').hide()
    })
    // 动画
    $('.marquee').each(function () {
        // $(this).append($cloneList)
        $(this).append($(this).children().clone())
    })
})();

(function () {
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: [10, 70],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 8,
                    length2: 10
                }
            },
           
        ],
        // 每块图颜色
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']
    };
    
    var myChart = echarts.init($('.pie')[0]);
    myChart.setOption(option);
})()

    ; (function () {
        var item = {
            name:'',
            value: 1200,
            // 柱子颜色
            itemStyle: {
              color: '#254065'
            },
            // 鼠标经过柱子颜色
            emphasis: {
              itemStyle: {
                color: '#254065'
              }
            },
            // 工具提示隐藏
            tooltip: {
              extraCssText: 'opacity:0'
            }
          }
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'item',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top:'4%',
                containLabel: true,  // 是否包含文本
                show: true,
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        alignWithLabel: false ,   // true意思：图形在刻度中间
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data:[2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240],
                    itemStyle: {
                        // 提供的工具函数生成渐变颜色
                        color: new echarts.graphic.LinearGradient(
                          // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                          0, 0, 0, 1,
                          [
                            {offset: 0, color: '#00fffb'}, // 0 起始颜色
                            {offset: 1, color: '#0061ce'}  // 1 结束颜色
                          ]
                        )
                      }
                }
            ]
        };
        var myChart = echarts.init($('.bar')[0]);
        myChart.setOption(option);      
})()