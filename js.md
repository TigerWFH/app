# 原生javascript知识点累积
## JSON Schema
JSON Schema定义了如何基于JSON格式描述JSON数据结构的规范，进而提供数据校验、文档生成和接口数据交互控制等一系列能力。
* 作用

        用于描述数据结构
        用于构建人机可读的文档
        用于生成模拟数据
        用于校验数据，实现自动化测试
* JSON Schema实例

[可用关键字](https://github.com/epoberezkin/ajv#validation-keywords)
```
// schema,
{
        "$schema": "http://json-schema.org/schema#",
        "title": "test",
        "type":"object",
        "description":"",
        "properties":{
                "name":{
                        "type":"string",
                        "title":"名字"
                },
                "age":{
                        "type":"number",
                        "title":"年龄",
                        "maximum": 3
                }
        }
}
// data
{
        "name":"monkey",
        "age":123
}
```

## js内置对象和web api区别
* js内置对象：js原生提供的，脱离宿主环境依然能够正常使用。例如：Map，Array等。
* web api：宿主环境提供的，脱离宿主环境就不能使用了。例如：XMLHttpRequest，File，Blob，HTMLElement等。
## js类层次关系（宿主环境即浏览器，提供）

        Node
        |
        |-1--->DocumentFragment
        |
        |-2--->DocumentType
        |
        |-3--->Document
        |       |       |------>HTMLDocument(HTML文档)
        |       |------>|
        |       |       |------>XMLDocument(XML文档)
        |-4--->Entity
        |
        |-5--->EntityReference
        |
        |-6--->ProcessingInstruction
        |
        |-7--->Attr(属性)
        |
        |-8--->CharacterData
        |       |       |------>TEXT(文本)
        |       |------>|
        |       |       |------>COMMENT(注释)
        |-9--->Notation
        |
        |-10-->Element
                |       |----->HTMLElement(html元素)
                |------>|
                        |----->SVGElement
## Promise
* promise相关[规范文档](https://promisesaplus.com/)，[中文翻译](http://www.ituring.com.cn/article/66566)
## javascript中的类型化数组的实现拆分成了两个部分：缓冲和视图
### ArrayBuffer（缓冲）
* 作用 
        
        二进制数据缓冲区，描述的是一个数据块，无格式。
        不能直接操作ArrayBuffer的内容，需要通过类型化数组对象（typed array object）
        或数据视图对象（DataView）来对buffer的内容进行`读取`和`写入`操作。
* 属性和方法

        ArrayBuffer.length,值是1
        get ArrayBuffer[@@species],用于创建派生对象的构造函数（不理解）
        ArrayBuffer.prototype,原型，允许给所有ArrayBuffer对象添加属性。
        ArrayBuffer.isView(arg),如果是视图实例，返回true；否者返回false。
        ArrayBuffer.transfer(oldBuffer[, newByteLength]),返回新的
                ArrayBuffer,内容则是依据oldBuffer内容进行截取或者用0扩展。
* 原型(即实例方法)

        ArrayBuffer.prototype.constructor
        ArrayBuffer.prototype.byteLength（只读，不可变更）
        ArrayBuffer.prototype.slice()
### TypedArray(视图1)

        视图提供了上下文-即数据类型、起始偏移量和元素数-将数据转换为实际有类型的数组。
* 作用

        TypedArray对象描述一个底层的二进制缓冲区(ArrayBuffer)的类似数组(array-like)视图，
        即解析二进制的规则。
* 所有构造函数
        
        Int8Array()
        Uint8Array()
        Uint8ClampedArray()
        Int16Array()
        Uint16Array()
        Int32Array()
        Uint32Array()
        Float32Array()
        Float64Array()
* 属性和方法

        TypedArray.BYTES_PER_ELEMENT，代表了强类型数组中每个元素占用的字节数
        TypedArray.name，描述数组构造名的字符串
        get TypedArray[@@species]，访问器属性返回类型化苏沪对象的构造器

        TypedArray.from()，一句类数组对象或可枚举对象创建一个新的类型数据
        TypedArray.of()，
* 原型(即实例属性和方法)

        TypedArray.prototype，构造器原型，所有强类型数组的原型
        TypedArray.prototype.buffer，指向强类型组数构造期间引用的ArrayBuffer
        TypedArray.prototype.byteLength，类型化数组的长度（即强类型数组的长度），单位是字节
        TypedArray.prototype.byteOffset，类型化数组距离ArrayBuffer起始位置的偏移，单位是字节
        TypedArray.prototype.length，类型化数组的长度（元素数）

        TypedArray.prototype.copyWithin()，
        TypedArray.prototype.entries()，
        TypedArray.prototype.vevry()，
        TypedArray.prototype.fill()，
        TypedArray.prototype.filter()，
        TypedArray.prototype.find()，
        TypedArray.prototype.findIndex()，
        TypedArray.prototype.forEach()，
        TypedArray.prototype.includes()，
        TypedArray.prototype.indexOf()，
        TypedArray.prototype.join()，
        TypedArray.prototype.keys()，
        TypedArray.prototype.lastIndexOf()，
        TypedArray.prototype.map()，
        TypedArray.prototype.reduce()，
        TypedArray.prototype.reduceRight()，
        TypedArray.prototype.reverse()，
        TypedArray.prototype.set()，
        TypedArray.prototype.slice()，
        TypedArray.prototype.some()，
        TypedArray.prototype.sort()，
        TypedArray.prototype.subarray()，
        TypedArray.prototype.toLocaleString()，
        TypedArray.prototype.toString()，
        TypedArray.prototype.values()，
        TypedArray.prototype[@@iterator]()
### DataView(视图2)
## 可迭代协议 与 迭代器协议

        可迭代协议：允许javascript对象去定义或定制它们的迭代行为。
                为了编程可遍历对象，一个对象必须实现@@iterator方法，意思就是这个对象（或者它的原型
                链上的某个对象）必须有一个名为Symbol.iterator的属性，该属性返回迭代器。
        迭代器协议：迭代器实现next方法；next是一个无参函数，且返回一个对象，返回的对象有done和value两个属性。
                done：约束见MDN
                value：约束见MDN

        可迭代对象：符合可迭代协议（即实现了Symbol.iterator属性）的对象，就是可迭代对象。
        迭代器：符合迭代器协议（即实现了next函数，且拥有两个属性done和value，符合规范行为）的对象。
## proxy 和 reflect

        Proxy 对象用于定义 基本操作 的 自定义 行为。
## 元素的宽高
* window：包含DOM文档的窗口
* window.outHeight：浏览器窗口的高度，单位像素，IE9
* window.outWidth：浏览器窗口的宽度，单位像素，IE9
* window.innerHeight：浏览器窗口的视口（viewport）高度，单位像素，如果存在水平滚动条，包含水平滚动条，IE9
* window.innerWidth：浏览器窗口的视口（viewport）宽度，单位像素，如果存在垂直滚动条，包含水平滚动条，IE9
* window.pageXOffset：返回文档在窗口左上角水平方向滚动的像素（pageXOffset是scrollX的别名，更具通用型，IE9以上才支持这两个属性）
* window.pageYOffset：返回文档在窗口左上角垂直方向滚动的像素（pageYOffset是scrollY的别名，更具通用型，IE9以上才支持这两个属性）
* window.scrollX：返回文档在窗口左上角水平方向滚动的像素
* window.scrollY：返回文档在窗口左上角垂直方向滚动的像素


* window.screen：特殊对象，返回当前渲染窗口中的屏幕相关属性信息
* 一下数据分歧过大
* window.screenLeft：返回浏览器窗口左边界到操作系统桌面左边界的水平距离（非标准，firefox不支持）
* window.screenTop：返回浏览器窗口下边界到操作系统桌面上边界的垂直距离（非标准，firefox不支持）
* window.screenX：返回浏览器窗口左边界到操作系统桌面左边界的水平距离（非标准）
* window.screenY：返回浏览器窗口下边界到操作系统桌面上边界的垂直距离（非标准）

* document：文档实例

* Element：
* clientHeight：`content padding+css height(标准盒模型情况下)`
* clientWidth：`content padding+css width(标准盒模型情况下)`
* clientLeft：`border-top的宽度`
* clientTop：`border-left的宽度`

* scrollHeight：`content+padding+scrollMaxLength`
* scrollWidth：`content+padding+scrollMaxLength`
* scrollLeft：`0~max(最大可滚动距离)`
* scrollTop：`0~max(最大可滚动距离)`

* HTMLElement(Element的子类)
* offsetHeight：`content padding+scrollbar+css height（标准盒模型情况下）,已经验证`
* offsetWidth：`content padding+scrollbar+css width（标准盒模型情况下）,已经验证`
* offsetLeft：`返回当前元素相对于offsetParent顶部的距离`
* offsetTop：`返回当前元素相对于offsetParent左边的距离`


* client***系列：`content+padding+css width(标准盒模型情况下)`

        clientWidth：内容可视宽度（包括padding）
        clientHeight：内容可视高度（包括padding）
        clientTop：border-top的宽度
        clientLeft：border-left的宽度
* offset***系列：`content+padding+scrollbar+css width（标准盒模型情况下）,已经验证`

        offsetWidth：元素占用的空间，包括border，padding，scrollbar，content等内容。(HTMLElement.offWidth read-only property is a measurement which includes the element borders,horizontal padding,the element vertical scrollbar(if present,if rendered) and the css width.)
        offsetHeight：元素占用的空间，包括border，padding，scrollbar，content等内容
        ，margin是看不到的。(HTMLElement.offsetHeight read-only property is the height of the element including vertical padding,borders and the element horizontal scrollbar(if present,if rendered), as an integer.)
        offsetParent：positioned：返回最近定位元素的引用；non-positioned： 返回table,table-cell,html(标准模式),body(怪异模式),null(display:none)
        offsetTop：返回当前元素相对于offsetParent顶部的距离
        offsetLeft：返回当前元素相对于offsetParent左边的距离
* scroll***系列：`content+padding+scrollMaxLength`

        scrollWidth：实际内容宽度
        scrollHeight：实际内容高度
        scrollTop：0~max(最大可滚动距离)
        scrollLeft：0-max(最大可滚动距离)
* element.getBoundingClientRect()：返回元素相对于viewport的size

        chrome在使用该函数时，如果遇到img标签不指定高度，计算数据top不正确；
        firefox在使用该函数时，如果遇到img标签不指定高度，第一次计算数据不正确，刷新可以计算出正确数据。
* element.getClientRects()

[一些参考资料](http://blog.sina.com.cn/s/blog_14e2a237b0102w4i0.html)
## 一些有用的event
* onload：window.onload等待页面以及资源加载完成，会触发；img.onload等待img.src执行完，会触发。
* DOMContentLoaded：DOM树构建完毕，会就会触发，先于onload
## 一些调试函数
* 展示信息：

        console.log
        console.info
        console.warning
        console.error
* 占位符

        console.log('%d年%d月', 2017, 7);类似printf
        console.info('%d年%d月', 2017, 7);类似printf
        console.warning('%d年%d月', 2017, 7);类似printf
        console.error('%d年%d月', 2017, 7);类似printf
* 信息分组

        console.group
        console.groupEnd
* 查看对象的属性信息

        console.dir
* 显式某个节点的内容

        console.dirxml
* 断言

        console.assert
* 追踪函数的信息

        console.trace
* 即时功能

        console.time
        console.timeEnd
* 性能分析

        console.profile
        console.profileEnd
[参考资料](http://blog.csdn.net/kimsoft/article/details/52275888)
## window窗口
* 版本信息：

        chrome：版本 59.0.3071.115（正式版本）（64 位）
        ie：11.0.45
        opera：47.0.2631.71 (PGO) - Opera 为最新版本
        firefox：55.0.3（32位）
* 窗口相对于屏幕的位置：(无法跨浏览器获取窗体位置)

        全屏条件下测试结果：
        chrome，opera        
        screenLeft：0
        screenTop：0
        screenX：0
        screenY：0
        IE        
        screenLeft：0
        screenTop：55
        screenX：-8
        screenY：-8
        firefox        
        screenLeft：undefined
        screenTop：undefined
        screenX：-8
        screenY：-8
        ```
        let top = 0;
        if (typeof screenTop === 'number'){
                top = screenTop;
        }
        else{
                top = screenY;
        }
        ```
* 窗口大小也无法跨浏览器获取，但视口（viewport）可以统一获取，派生于element的元素都有client***属性

        innerWidth
        innerHeight
        outerWidth
        outerHeight
        document.documentElement.clientWidth（viewport）
        document.documentElement.clientHeight（viewport）
        document.body.clientWidth
        document.body.clientHeight
        通过对比这几个值在四个浏览器中的值，inner***包括滚动条宽度，outer***是窗体大小，client***是viewport大小，且viewport+scrollbar = inner***，且scrollbar宽度是17px。

# SGHTML、HTML、XML文档中的字符实体(character entity)

        In SGML, HTML and XML documents, the logical constructs known as character data and attribute values consist of sequences of characters, in which each character can manifest directly (representing itself), or can be represented by a series of characters called a character reference, of which there are two types: a numeric character reference and a character entity reference. This article lists the character entity references that are valid in HTML and XML documents.

        A character entity reference refers to the content of a named entity.
[character entity](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)

## 移动端知识点
* 单位：

        绝对单位：cm,pt是物理长度，1cm=0.01m,1pt=1/72inch,1inch=2.54cm
        相对单位：rem,em,ex等都是相对单位。
* dp(device pixel,设备像素，设备分辨率，物理分辨率，屏幕实际分辨率)：

        实际显示的最小物理单元，该物理单元度量单位使用pt。显示器出厂时就决定了物理尺寸以及对应的设备像素。
        其实就是使用了相对单位度(物理像素)量屏幕大小。
* dip(device-independent pixel,设备独立/无关像素,逻辑分辨率,逻辑点logic point):

        计算机坐标系统中的点,该点代表了一个可由程序使用并控制的虚拟像素,然后由系统转换成对应的物理像素。
        在移动设备中，screen.width/height获取的就是dip而不是dp。
* dpr(device pixel ratio,设备像素比)：

        dpr = dp/dip即设备像素与设备独立像素的比值（在x方向或y方向），意味着一个逻辑点对应着着几个物理像素。



* ppi(pixel per inch)：

        像素密度，每英寸屏幕所拥有的像素数。用来描述屏幕显示密度，越大显示越清晰。
* dpi(dot per inch)：

        点密度，用来描述打印机打印密度，越大打印出来的越清晰。
        在屏幕上，可以用来描述逻辑ppi，即单位英寸内的逻辑像素。直接描述编程时使用的px对应的物理尺寸。
* 总结：

        dp：描述屏幕的大小，用物理像素度量。
        ppi：描述的屏幕的像素密度，越大显示越无颗粒感。
* [参考资料](https://www.zhihu.com/question/25361043)

[![](./src/common/res/images/iphone.jpg)](https://www.zhihu.com/question/25361043)
