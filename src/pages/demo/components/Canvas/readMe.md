# 学习Canvas

* canvas元素

        canvas标签只有两个属性：width和height。
        1、该元素根据宽高创建画布，对应公开了一个或多个渲染上下文
        2、该元素提供了一个getContext()方法，用来获取渲染上下文。
        getContext(contextType,contextAttributes)
                contextType：上下文格式，其值为'2d','webgl'('experimental-webgl'),'webgl2'('experimental-webgl2'),'bitmaprenderer'
                contextAttributes：是一个对象，设置上下文属性
                返回值：null或者相关有效值
* 画布栅格(canvas grid)

    就是坐标系度量，TopLeft是坐标原点(0,0),向下是Y正向坐标，向右是X正向坐标。
* 绘制矩形，html提供的唯一的原生支持图形。
        fillRect(x,y,width,height),绘制填充矩形。
        strokeRect(x,y,width,height),绘制一个矩形的边框。
        clearRect(x,y,width,height),清除指定矩形区域，让清除部分完全透明。
* 绘制路径
        beginPath(),新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        closePath(),闭合路径之后图形绘制命令又重新指向到上下文中。
        stroke(path),通过线条来绘制图形轮廓。path:{Path2d}
        fill(path,[fillRule]),通过填充路径的内容区域生成实心的图形。path:{Path2d},fillRUle:{nonzero | evenodd}
        lineTo(x,y),绘制一条从当前位置(x0,y0)到指定位置(x,y)的直线。
        moveTo(x,y),将画笔从当前位置(x0,y0)移动到指定位置(x,y)。
* 圆弧
        arc(x,y,radius,startAngle,endAngle,anticlockwise),(x,y)是圆心，
        radius是半径，
        startAngle开始角度，
        endAngle结速角度，
        anticlockwise绘制方向（顺时针逆时针）。
        
        arcTo(x1,y1,x2,y2,radius),根据指定的控制点和半径画一段圆弧，再以直线连接两个控制点。
* 二次贝赛尔曲线以及三次贝塞尔曲线
        quadraticCurveTo(cp1x,cp1y,x,y),绘制二次贝赛尔曲线，(cp1x,cp1y)是控制点，(x,y)是结速点。
        bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y),绘制三次贝塞尔曲线。
* 矩形
        rect(x,y,width,height)
* Path2D对象

