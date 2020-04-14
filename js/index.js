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
                     length2:10
                 }
            },
           
         ],
         // 每块图颜色
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff']
    };
    
     var myChart = echarts.init($('.pie')[0]);
     myChart.setOption(option);
})()