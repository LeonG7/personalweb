---
title: '网页滚动特效—WOW.JS快速使用教程'
date: '2024-01-15'
excerpt: '快速开发一个基于WOW.JS的网页滚动特效, 让你的网页更加炫酷'
coverImage: '/images/blog/wow-js-use.gif'
tags: ['前端', '特效', 'WOW.JS']
---

一、wow.js 当页面滚动时产生一些动画效果
页面在向下滚动的时候，有些元素会产生细小的动画效果。虽然动画比较小，但却能吸引你的注意。
所需要的附件：wow.js animate.css（文章最后有下载地址）
演示动画：

二、首先说明一下怎么使用这个插件：
　　1、wow.js依赖于animate.css，首先在头部引用animate.css或者animate.min.css。
    <link rel="stylesheet" href="css/animate.min.css">

　　2、在最底部引用wow.js或者wow.min.js，然后再下面再写一行javascript代码。（无需引用jQuery）
<link rel="stylesheet" href="css/animate.min.css">
<script src="js/wow.min.js"></script>
<script type="text/javascript">    
    new WOW().init();
</script>

　　注意new WOW().init();中的WOW要大写，否则就没效果了。
        3、在css下方js上方写需要动画的元素（必须设置为块状或者行内块状！必须设置为块状或者行内块状！必须设置为块状或者行内块状！），并添加class类名。
<div class="wow slideInLeft"
data-wow-duration="2s"     （动画持续时间）
data-wow-delay="5s"         （动画延迟时间）
data-wow-offset="10"        （元素的位置露出后距离底部多少像素执行）
data-wow-iteration="10"> （动画执行次数）
</div>

　　类名前面的wow是每一个带动画的元素都要加的，slideInLeft就是说明动画样式。后面的data-wow-duration（动画持续时间）、data-wow-delay（动画延迟时间）、data-wow-offset（元素的位置露出后距离底部多少像素执行）和data-wow-iteration（动画执行次数）这四个属性可选可不选。其中data-wow-offset="数值"中的数值是动画完成后元素距离显示器底部的位置，而不是距离浏览器窗口底部的位置。

三、动画效果
步入正题，下面是各种class类名的动画效果。（记得点击右边的收藏，保存这个表格方便查看）

| 类名 | 效果描述 | 简单说明 |
|------|----------|----------|
| wow rollIn | 从左到右、顺时针滚动、透明度从100%变化至设定值 | 从左侧翻滚出现 |
| wow bounceIn | 从原位置出现，由小变大超出设定值，再变小小于设定值，再回归设定值、透明度从100%变化至设定值 | 原地放大出现，带回弹效果 |
| wow bounceInUp | 从下往上、窜上来以后会向上超出一部分然后弹回去、透明度为设定值不变 | 从下方出现，带回弹效果 |
| wow bounceInDown | 从上往下、掉下来以后会向下超出一部分然后弹跳一下、透明度为设定值不变 | 从上方出现，带回弹效果 |
| wow bounceInLeft | 从左往右、移过来以后会向右超出一部分然后往左弹一下、透明度为设定值不变 | 从左方出现，带回弹效果 |
| wow bounceInRight | 从右往左、移过来以后会向左超出一部分然后往右弹一下、透明度为设定值不变 | 从右方出现，带回弹效果 |
| wow slideInUp | 从下往上、上来后固定到设定位置、透明度为设定值不变 | 缓慢的从下方出现 |
| wow slideInDown | 从上往下、上来后固定到设定位置、透明度为设定值不变 | 缓慢的从上方出现 |
| wow slideInLeft | 从左往右、上来后固定到设定位置、透明度为设定值不变 | 缓慢的从左方出现 |
| wow slideInRight | 从右往左、上来后固定到设定位置、透明度为设定值不变 | 缓慢的从右方出现 |
| wow lightSpeedIn | 从右往左、头部先向右倾斜，又向左倾斜，最后变为原来的形状、透明度从100%变化至设定值 | 快速的从右方出现，带刹车效果 |
| wow pulse | 原位置放大一点点在缩小至原本大小、透明度为设定值不变 | 放大再缩小（强调） |
| wow flipInX | 原位置后仰前栽、透明度从100%变化至设定值 | 上下翻转出现 |
| wow flipInY | 原位置左右旋动、透明度从100%变化至设定值 | 左右翻转出现 |

四、注意事项
    1、配合data-wow-duration（动画持续时间）、data-wow-delay（动画延迟时间）、data-wow-offset（元素的位置露出后距离底部多少像素执行）和data-wow-iteration（动画执行次数）这四个属性可以完成很多效果，主要还是多实践。
    2、IE6、IE7 等老旧浏览器不支持 CSS3 动画，所以没有效果；而 wow.js 也使用了 querySelectorAll 方法，IE 低版本会报错。为了达到更好的兼容，最好加一个浏览器及版本判断。
五、下载地址
链接: https://pan.baidu.com/s/1T__FoGvHr2NyXbnSdKq1nA 密码: 36pw

​