# 学习Canvas

* canvas元素

        canvas标签只有两个属性：width和height，即画布的大小，默认值300*150px。
* 渲染上下文（rendering context）

        canvas创建了一个固定大小的画布，同时公开了一个或多个渲染上下文，该渲染上下文提供了所有绘制功能。
* 画布栅格(canvas grid)

    就是坐标系度量，TopLeft是坐标原点(0,0),向下是Y正向坐标，向右是X正向坐标。
* api
        getContext(param),获取渲染上下文以及对应的绘制功能。
        fillRect(x,y,width,height),绘制填充矩形。
        strokeRect(x,y,width,height),绘制一个矩形的边框。
        clearRect(x,y,width,height),清楚指定矩形区域，让清除部分完全透明。
* 绘制路径
        beginPath(),新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        closePath(),闭合路径之后图形绘制命令又重新指向到上下文中。
        stroke(),通过线条来绘制图形轮廓。
        fill(),通过填充路径的内容区域生成实心的图形。
        lineTo(x,y),绘制一条从当前位置(x0,y0)到指定位置(x,y)的直线。
        moveTo(x,y),将画笔从当前位置(x0,y0)移动到指定位置(x,y)。
* 圆弧
        arc(x,y,radius,startAngle,endAngle,anticlockwise),(x,y)是圆心，radius是半径，startAngle开始角度，endAngle结速角度，anticlockwise绘制方向（顺时针逆时针）。
        arcTo(x1,y1,x2,y2,radius),根据指定的控制点和半径画一段圆弧，再以直线连接两个控制点。
* 二次贝赛尔曲线以及三次贝塞尔曲线
        quadraticCurveTo(cp1x,cp1y,x,y),绘制二次贝赛尔曲线，(cp1x,cp1y)是控制点，(x,y)是结速点。
        bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y),绘制三次贝塞尔曲线。
* 矩形
        rect(x,y,width,height)
* Path2D对象

