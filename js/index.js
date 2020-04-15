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
            name: '',
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
                top: '4%',
                containLabel: true,  // 是否包含文本
                show: true,
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        alignWithLabel: false,   // true意思：图形在刻度中间
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
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                    itemStyle: {
                        // 提供的工具函数生成渐变颜色
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0, 0, 0, 1,
                            [
                                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                                { offset: 1, color: '#0061ce' }  // 1 结束颜色
                            ]
                        )
                    }
                }
            ]
        };
        var myChart = echarts.init($('.bar')[0]);
        myChart.setOption(option);
    })()

    // 订单区域-效果
    ; (function () {
        // 1. 准备数据
        var data = {
            day365: { orders: '20,301,987', amount: '99834' },
            day90: { orders: '301,987', amount: '9834' },
            day30: { orders: '1,987', amount: '3834' },
            day1: { orders: '987', amount: '834' }
        }
        // 获取显示 订单数量 容器
        var $h4Orders = $('.order h4:eq(0)')
        // 获取显示 金额数量 容器
        var $h4Amount = $('.order h4:eq(1)')
        $('.order').on('click', '.filter a', function () {
            // 2. 点击切换激活样式
            $(this).addClass('active').siblings().removeClass('active')
            // 3. 点击切换数据
            var currdata = data[this.dataset.key]
            $h4Orders.html(currdata.orders)
            $h4Amount.html(currdata.amount)
        })
        // 4. 开启定时器切换数据
        var index = 0
        var $allTab = $('.order .filter a')
        setInterval(() => {
            index++;
            if (index >= 4) index = 0
            $allTab.eq(index).click()
        }, 2000);
    })()

    // 销售统计
    ; (function () {
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色
                },
                right: '10%' // 距离右边10%
            },
            grid: {
                show: true,// 显示边框
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd' // 文本颜色
                },
                axisLine: {
                    show: false // 去除轴线
                },
                boundaryGap: false  // 去除轴内间距
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd' // 文本颜色
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                }
            },
            series: [{
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                // 圆滑连接                                  
                smooth: true,
                itemStyle: {
                    color: '#00f2f1'  // 线颜色
                }
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                smooth: true,
                itemStyle: {
                    color: '#ed3f35'  // 线颜色
                }
            }]
        };
        var myChart = echarts.init($('.line')[0]);
        myChart.setOption(option);

        $('.sales').on('click', '.caption a', function () {
            $(this).addClass('active').siblings().removeClass('active')
            var currdata = data[this.dataset.type];
            option.series[0].data = currdata[0]
            option.series[1].data = currdata[1]
            myChart.setOption(option);
        })

        // 自动切换
        var index = 0
        var allTab = $('.sales .caption a')
        setInterval(() => {
            index++
            if (index >= 4) index = 0
            allTab.eq(index).click()
        }, 2000);
    })()

    ; (function () {
        var option = {
            series: [
                {
                    type: 'pie',
                    radius: ['130%', '150%'],  // 放大图形
                    center: ['48%', '80%'],  // 往下移动  套住75%文字
                    label: {
                        show: false,
                    },
                    startAngle: 180,
                    hoverOffset: 0,  // 鼠标经过不变大
                    data: [
                        {
                            value: 100, itemStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        { offset: 0, color: '#00c9e0' },
                                        { offset: 1, color: '#005fc1' }
                                    ]
                                }
                            }
                        },
                        { value: 100, itemStyle: { color: '#12274d' } },
                        { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
                    ]
                }
            ]
        };
        var myChart = echarts.init($('.gauge')[0]);
        myChart.setOption(option);
    })()


    // 热销排行
    ; (function () {
        var data = [
            { name: '可爱多', num: '9,086' },
            { name: '娃哈哈', num: '8,341' },
            { name: '喜之郎', num: '7,407' },
            { name: '八喜', num: '6,080' },
            { name: '小洋人', num: '6,724' },
            { name: '好多鱼', num: '2,170' },
        ]
        $('.province').on('mouseenter', '.sup li', function () {
            // 样式
            $(this).addClass('active').siblings().removeClass('active')
            // 打乱数据
            var randomData = data.sort(function (a, b) {
                return 0.5 - Math.random()
            })
            // 拼接字符串
            var html = ''
            randomData.forEach(function (item) {
                html += `<li><span>${item.name}</span><span>${item.num} <s class="icon-up"></s></span></li>`
            })
            // 渲染
            $('.sub').html(html)
        })
        // 所有的LI
        var $lis = $('.province .sup li')
        // 第一个默认激活
        $lis.eq(0).mouseenter()

        // 开启定时器 切换
        var index = 0
        setInterval(function () {
            index++
            // 大于等于5索引切换到0索引
            if (index >= 5) index = 0
            // 选中对应tab触发点击
            $lis.eq(index).mouseenter()
        }, 1000)
    })()