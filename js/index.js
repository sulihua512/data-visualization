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
})()