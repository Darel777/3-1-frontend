# 1网络

## 1-1互联网与万维网有何不同？

​		互联网是线路、协议以及通过TCPIP协议实现数据电子传输的硬件和软件的集合体。互联网提供的主要服务有万维网WWW，文件传输FTP，电子邮件Email，远程登陆Telnet等。

​		万维网是无数个网络站点和网页的集合，构成了因特网的主要部分。它实际上是多媒体的集合，由超级链接连接而成。（HTML+HTTP，包含CSS JS以及其它浏览器内容）

## 1-2网际互连协议（IP）

​		IPV4	IPV6

## 1-3传输控制协议（TCP）

​		是一种面向连接的、可靠的、基于字节流的传输层通信协议，由IETF定义。

## 1-4用户数据报协议（UDP）

​		传输层协议，提供非面向连接，不可靠的数据流传输；传输速度很快。

## 1-5域名系统

### 1.什么是DNS

​		DNS是域名系统，Domain Name System的缩写。

### 2.DNS运作过程

​		主机通过DNS客户端访问域名系统，称为解析器。解析器联系DNS服务器，称为名称服务器。DNS服务器返回IP地址给解析器，解析器将IP传递给应用程序。

### 3.DNS名称层次结构

​		DNS层次结构可以用树表示。根域名和顶级域名由互联网中央名称注册机构管理。在顶级域名之下，名称空间的管理被委派给不同的组织。

### 4.名称服务器层次结构

​		由层次化的名称服务器完成。每个服务器负责（授权）DNS名称空间的一个连续部分，称为区域。

### 5.根域名服务器

​		互联网的顶级域名解析服务由根服务器完成，只有13个根域名服务器。

### 6.递归和迭代查询

​		递归查询：如果主机询问的本地域名服务器不知道被查询的域名的IP地址，本地域名服务器就以DNS客户的身份，向其它根域名服务器继续发出查询请求报文。

​		迭代查询：当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的IP地址，要么告诉本地服务器：你下一步应该向哪个域名服务器进行查询。

### 7.缓存

​		为了减少DNS流量，名称服务器会缓存域名/IP地址映射信息。当查询的条目在缓存中时，服务器不会联系其它服务器。

### 8.资源记录

​		分布式数据库的数据库记录称为资源记录。资源记录存储在名称服务器上的配置文件中。

## 1-6资源标识符

​		统一资源标识符URI：用于标识某一互联网资源名称的字符串，该种标识允许用户对任何的资源通过特定的协议进行交互操作。URI格式由URI协议名，一个冒号，和协议对应的内容所构成。

​		统一资源定位符URL：它标识一个互联网资源，并指定对其进行操作或获取该资源的方法。可以加载页面，加载图像，加载样式表，嵌入页面。

​		统一资源名称URN：定义某事物的身份，仅用于命名，而不指定地址。

​		查询字段：查询字段是在URL的末尾加上用于向服务器发送信息的字符串。将“？”放在URL的末尾，然后再加上“参数”=“值”，加上多个参数则使用&。

## 1-7超文本 Hyper Text

​		超文本是用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本。（用标签a来实现）

# 2HTML

## 2-1HTML概述

### 1.HTML定义

​		HTML，全称超文本标记语言，是一种标记语言。它包括一系列标签，通过这些标签可以将网络上的文档格式统一，使分散的·Internet资源连接为一个逻辑整体。

### 2.HTML和XHTML

​		HTML最初是一种应用程序标准通用标记语言SGML。需要相对复杂、宽松且自定义的解析器。

​		XHTML是SGML的一个更严格的子集。允许使用标准XML工具执行自动化处理。

### 3.标记语言

​		标记指在文档中嵌入代码，称为标签。标记语言：描述标签语法的计算机语言，可以与其它工具一起使用来指定渲染。

#### 3.1逻辑标记

​		描述文档的各个部分而不指定如何进行渲染。

​			This is <strong>very</strong> important.

​			This is very important.

#### 3.2逻辑

​		代码负责描述，呈现是客户的决定。当客户端无法展示，会出现优雅降级。

```
	<img alt = "image description" src="foo.gif">
```

#### 3.3Markdown

​		Markdown是一种轻量级标记语言，编写的文档可以导出HTML、WORD、图像、PDF、Epub等多种格式文档。

### 4.HTML基础

​		DOCTYPE：使用的文档定义类型DTD

​		Head：元信息，必须含有<title>

​		Body：需要呈现的内容

​		4.1-4.6	基础

​		4.7-4.8	HEAD部分

​		4.9-结束	BODY部分

#### 4.1开始标签

​		包含元素的名称，被<>包围。表示元素从这里开始或者开始起作用。

#### 4.2结束标签

​		与开始标签相似，只是在元素名之前加了一个斜杠。表示元素的结尾。

#### 4.3内容

​		元素的内容，本例中就是所输入的文本本身。

#### 4.4元素

​		开始标签、结束标签和内容相结合，便是一个完整的元素。

#### 4.5块级元素或行内元素

​		块级元素占据其父元素的整个水平空间，垂直空间等于其内容高度，因此创建了一个“块”。(paragraphs，lists，table cells)

​		行内元素只占据它对应标签的边框所包含的空间。例如bold text，code fragments，images。（要求：允许多个行内元素出现在同一行上，必须嵌套在块级元素中）

#### 4.6注释

​		<!--some text-->

#### 4.7网页标题<title>HEAD

​		用于：定义浏览器工具栏中的标题，提供页面被添加到收藏夹时的标题，显示在搜索引擎结果中的页面标题。

#### 4.8meta

​		用于提供关于HTML文档的元数据，只能出现在head里面。meta标签通常用于给出网页描述、关键词、文档作者、最后修改日期等信息。

		<meta http-equiv="Content-Type" content="text/html;charset=iso-8859-1" /><meta name="description" content="Authors' web site forBuilding Java Programs." /><meta name="keywords" content="java, textbook" />

##### 字符编码

```
	<meta charset="utf-8">
	ASCII iso-8859-1 GB2312 GBK GB18030 Unicode UCS
```

#### 4.9<h1>-<h6>标题标签BODY

```
	这些标签被用来定义HTML标题。
```

#### 4.10<p>段落标签

```
	<p></p>
```

#### 4.11插入换行符

```
	br /是br的标准写法。
```

#### 4.12超链接

<p>Search<a href="http://www.google.com/">Google</a> or our<a href="lectures.html">Lecture Notes</a></p>

​		<a>元素最重要的是href属性，它指定连接目标。链接的样式通过CSS改变。

#### 4.13img

​		img是空标签，只包含属性，没有闭合。

```
	<img src="url" alt="some_text">
```

##### a+img

​		通过在a标签嵌套img，给图像添加到另一个文档的链接。

```
<a href=“http://theonering.net/”>
<img src="hh.jpg" alt=“some-text” width="304"
height="228">
</a>
```

#### 4.14em strong

​		em呈现被强调的文本 strong定义重要的文本

```
	<p>
HTML is <em>really</em>,
<strong>REALLY</strong> fun!
</p>
```

​		em是斜体，i也是斜体，但i表示无强调或着重意味的斜体

​		strong是粗体，b也是粗体，但b表示无强调或着重意味的粗体

#### 4.15table etc

```
<table>
<caption>Smart Guys</caption>
<tr><th>name</th><th>gender</th></tr> <tr><td>Bill</td><td>male</td></tr> <tr><td>Susan</
td><td>female</td></tr>
</table>
```

​		table用于定义表格	tr定义行	td/th定义项目	caption定义名称

#### 4.16块元素

```
<p>As Lincoln said in his famous Gettysburg Address:</p>
<blockquote>
<p>Fourscore and seven years ago, our fathers brought forth on this continent a new
nation, conceived in liberty, and dedicated to the proposition that all men are created
equal.</p>
</blockquote>
```

#### 4.17行内引用

​		使用<q>标签，有闭合。

​		为什么不直接写引号：XHTML不应该直接包含引号字符，应该写成转义的&quot;，使用q标签还可以使用CSS样式，更加方便。

#### 4.18HTML字符实体

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/49.png)

## 2-2表单

​		form：html表单，用于收集用户信息	基本语法：

```
	<form parameters> form elements </form>
```

​		常见如文本域textarea、下拉列表select、单选框radio-buttons、复选框checkbox等等。

```
<form>
	<div class="form-group">
		<label for="inputEmail">Email</label>
		<input type="email" class="form-control" id="inputEmail" 				placeholder="Email">
	</div>
	<div class="form-group">
		<label for="inputPassword">Password</label>
		<input type="password" class="form-control" id="inputPwd" 				placeholder="Password">
	</div>
	<div class="checkbox">
	<label><input type="checkbox"> Remember me</label>
	</div>
	<button type="submit" class="btn">Login</button>
</form>
```

​		form标签的表单属性说明了应该如何处理用户输入

​			action="url"（必须）指定单击submit时将数据发送到哪里

​			method="get"（缺省）将表单数据以名称/值对的形式附加到URL中，URL的长度是有限的，不要使用GET发送敏感数据，适用于网络引擎的查询字符串。

​			method="post"将表单数据附加到HTTP请求的body内部，没有长度限制，通过POST提交的表单不能加入书签。

​		input标签规定了用户可以在其中输入数据的输入字段。input元素在form元素中使用，用来声明允许用户输入数据的input控件。

## 2-3Web标准

### 1.为什么要使用Web标准？

​		更严格和结构化的语言

​		不同浏览器之间的兼容性更强

​		更有可能让页面在以后也能正确显示

​		可以与SVG、MathML、MusicML等其它XML数据进行交换。

### 2.XHTML1.0vsHTML4.01

​		文档结构：XHTML DOCTYPE是强制性的；<html>中的XML namespace属性是强制性的；<html><head><title><body>也是强制性的。

​		元素语法：XHTML元素必须正确嵌套、必须始终关闭、必须小写、必须有根元素。

​		属性语法：XHTML属性必须用小写、必须用引号包围、属性最小化也是禁止的。

## 2-4HTML5

​		HTML5是HTML的最新稳定版本，HTML5将HTML从用于构造一个文档的一个简单标记，扩展到一个完整的应用程序开发平台。HTML5还包括新元素和用于增强存储、多媒体和硬件访问的JavaScript APIs。

### 1.HTML5应用

​		本地数据存储

​		访问本地文件

​		本地SQL数据

​		缓存引用

​		JS工作者

​		XHTMLHttpRequest2

### 2.HTML5优势

​		跨浏览器兼容

​		大道至简

​		语义化

​		可用性和用户体验的改进

​		无插件范式

​		安全

​		大量用于移动应用和游戏

​		在网站抓取和索引方面，对SEO友好

#### 2.1大道至简

​		旧路新铺

​		新的DOCTYPE声明

​		干净的标记和改进的代码

#### 2.2语义化

​		根据结构化的内容选择合适的标签

#### 略过了微数据和结构化数据

#### 2.3可用性和用户体验的改进

​		HTML5为Web开发人员提供了多项技术改进。使用HTML5代码，可以设计更好的应用程序和动态网站。

#### 2.4无插件范式

​		插件安装可能失败、插件可能被禁用乃至屏蔽、插件会称为被攻击的对象、插件不容易与HTML文档的其他部分集成。

​		HTML5使用无插件范式，能够解决这种问题。

#### 2.5安全

​		跨源资源共享使Web服务器允许其它域名的网页访问自己的资源。

#### 2.6移动应用和游戏

​		允许多设备跨平台

​		采用自适应网页设计

#### 2.7对SEO友好

​		HTML5带有各种属性和模块，是爬虫可以搜索内容并编入索引，从而提高在搜索引擎搜索结果中的排名。

​		HTML5技术提供了具有广泛结构、语义、表单类型、新属性和媒体元素的各种功能，使数字营销专家和开发人员更容易专注于更好的搜索引擎优化技术。

### 3.HTML5新功能特性

​		新元素

​		新特性

​		支持CSS3

​		Video和Audio

​		2D/3D制图

​		web存储

​		离线浏览

​		HTML5 WEB SQL 数据库

​		HTML5 WEB WORKERS

​		HTML5 WEB SOCKET

#### 3.1新元素

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/50.png)

#### 3.2新特性

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/51.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/52.png)

#### 3.3音视频

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/53.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/6.png)

#### 3.4canvas&svg

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/7.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/8.png)

#### 3.5web存储

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/9.png)

#### 3.6应用程序缓存与离线浏览

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/10.png)

#### 3.7WEB SQL

#### 3.8WEB WORKERS

#### 3.9WEB SOCKET

# 3CSS

## 3-1什么是CSS？

​		CSS全称Cascading Style Sheets，层叠样式表。

​		CSS有众多优势：丰富的样式定义、灵活简洁清晰、多页面应用、多设备兼容、减少成本提高性能。

## 3-2语法

​		CSS的语法组成：选择器、声明（属性/值）

​		选择器的类型：id选择器、class选择器、标签选择器、属性选择器、伪类选择器、伪元素选择器、组合选择器。

### 1.id选择器

​		为标有特定id的HTML元素指定特定的样式。

​		HTML中元素以ID属性来设置id选择器，CSS中id选择器以#来定义。

```
	#para1 {text-align:center;color:red;}
```

### 2.类选择器

​		class选择器用于描述一组元素的样式，class选择器有别与ID选择器，可以在多个元素中使用。

```
	.center {text-align:center;}
```

### 3.标签选择器

```
    p
    {
        color:red;
        text-align:center;
    }
```

### 4.属性选择器

​		标签名[属性]{声明即样式}

```
	[title]//所有标签的title
	{
		color:blue;
	}
	<h1 title="H W">H W</h1>
```

### 5.伪类选择器

​		CSS伪类用来添加一些选择器的特殊效果。伪类不是类，其实是元素的一个状态。

```
    selector:pseudo-class {property:value;}
    selector.class:pseudo-class {property:value;}
    a:link {color:#000000;} /* 未访问链接*/
    a:visited {color:#00FF00;} /* 已访问链接 */
    a:hover {color:#FF00FF;} /* 鼠标移动到链接上 */
    a:active {color:#0000FF;} /* 鼠标点击时 */
```

### 6.伪元素选择器

```
    selector:pseudo-element {property:value;}
    selector.class:pseudo-element {property:value;}
    p:first-line
    {
    color:#ff0000;
    font-variant:small-caps;
    }
```

### 7.CSS组合选择器

​		后代选择器（以空格分隔）

​		子元素选择器（以大于号分隔）

​		相邻兄弟选择器（以加号分隔）

​		普通兄弟选择器（以破折号分隔）

```
	div p
	{
	background-color:yellow;
	}//只有div中的p会变黄
```

```
	div>p{
	background-color:yellow;
	}//只有div直接子元素p变黄
```

```
	div+p{
	background-color:yellow;
	}//div后面相邻的p变黄
```

```
	div~p{
	background-color:yellow;
	}//div后面的所有p变黄
```

## 3-3层叠排序

​		用来解决样式说明冲突的整个排序过程称为层叠。

​			浏览器缺省样式

​			内联样式

​			嵌入样式表

​			外部样式表

### 1.外部样式表

​		链接方式：用HTML头部的<link>标签引入外部的CSS文件

```
<head>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
```

​		导入方式：指的是用CSS规则引入外部CSS文件

```
<style>
	@import url(style.css);
</style>
```

### 2.嵌入样式表

​		嵌入方式指的是在HTML头部的<style>标签下书写CSS代码。

```
    <head>
    <title>my page</title>
    <style type=“text/css”>
    p{color:red}</style>
    </head>
    <body>
    <p>this is a simple paragraph
    </p>
    </body>
```

### 3.内联样式

​		内联方式指的是在HTML标签的style属性中添加CSS

```
	<p style=“color: red;”> This is a simple paragraph and the
inline style makes it red.</p>
```

### 4.样式冲突该怎么办？

#### 4.1继承（未设置样式）

​		当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。

​		规则1：最近的祖先样式比其它祖先样式优先级高

​		规则2：直接样式比祖先样式优先级高

#### 4.2根据来源和重要程度排序

​		规则5：后一种覆盖前一种：

​			用户代理样式表中的声明（浏览器的默认样式）

​			用户样式表中的常规声明（用户设置的自定义样式）

​			作者样式表中的常规声明（web开发人员设置）

​			作者样式表中的!important声明

​			用户样式表中的!important声明

#### 4.3优先级

​		优先级是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定。

​		优先级与多个CSS声明中任意一个声明的优先级相等的时候，CSS中最后的那个声明会被应用到元素上。

​		规则3：优先级关系（从大到小）：内联、ID、类=属性=伪类、标签=伪元素

​		规则4：计算选择符ID中选择器的个数a，计算选择符中类选择器、属性选择器以及伪类选择器的个数之和b，计算选择符中标签选择器和伪元素选择器的个数之和c。大的优先级高，相等则比较下一个。都相等按照就近原则判断。

## 3-4CSS3

​		CSS3的一个新特点是被分为若干个相互独立的模块。

​		CSS3的新特征：圆角效果、图形化边界、块阴影与文字阴影、使用RGBA实现透明效果、渐变效果……

## 3-5CSS布局

### 1.盒模型

### 2.元素的宽度和高度

​		元素的总宽度计算公式：宽度+左填充+右填充+左边框+右边框+左边距+右边距

​		元素的总高度计算公式：高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

```
div {
    width: 400px;
    border: 20px solid green;
    padding: 20px;
    margin: 20px;
}//填充-padding 边框-border 边距-margin
```

### 3.Position

​		定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。

​		CSS Position属性用于指定一个元素在文档中的定位方式

​			static

​			relative

​			fixed

​			absolute

​			sticky

#### 3.1坐标

​		左上角的坐标是（0，0）

#### 3.2默认布局

​		1.默认的，一个块级元素的内容宽度是其父元素的100%，其高度与其内容高度一致。

​		2.内联元素的height width与内容一致(内联元素就是行内元素)，无法设置内联元素的height width，如果想控制内联元素尺寸，需要为元素设置display:block等属性。

​		3.每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin分隔。

​		4.内联元素不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其它内联元素、相邻的文本内容被安排在同一行。

​		5.如果两个相邻元素都设置了margin并且两个margin有重叠，更大的设置会被保留，小的会消失。

#### 3.3Absolute

​		position：absolute的元素相对于最近的定位祖先元素进行定位，而不是相对于视口定位。如果没有祖先，将使用文档主体。

```
<style type="text/css">
h2.pos_abs
{
position:absolute;
left:100px;
top:150px
}
</style>
```

​		h2的标题将会距离左侧100px，距离顶部150px。

#### 3.4Relative

​		position：relative的元素相对于其正常位置进行定位。

```
<html>
<head>
<style type="text/css">
h2.pos_left
{
position:relative;
left:-20px
}
h2.pos_right
{
position:relative;
left:20px
}
</style>
</head>
<body>
<h2>这是位于正常位置的标题</h2>
<h2 class="pos_left">这个标题相对于其正常位置向左移动</h2>
<h2 class="pos_right">这个标题相对于其正常位置向右移动</h2>
<p>相对定位会按照元素的原始位置对该元素进行移动。</p>
<p>样式 "left:-20px" 从元素的原始左侧位置减去 20 像素。</p>
<p>样式 "left:20px" 向元素的原始左侧位置增加 20 像素。</p>
</body>
```

#### 3.5Fixed

​		position：fixed的元素是相对于视口定位的，这意味着即使滚动页面，他也始终位于同一位置。top，right，bottom，left用于定位此元素。

```
div.fixed {
position: fixed;
bottom: 0;
right: 0;
width: 300px;
border: 3px solid #73AD21;
}
```

#### 3.6Static

​		HTML元素默认定位方式为static。静态定位的元素不受top、bottom、left和right属性的影响。

​		position：static的元素不会以任何特殊方式定位，它始终根据页面的正常流进行定位。

#### 3.7Sticky

​		position：sticky根据用户滚动位置进行定位。粘性元素根据滚动位置在相对和固定之间切换（开始在中间，随着向下滚贴在视口上方）

#### 3.8Float

​		浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

​		由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。

### 4.Formatting Context

​		是页面中的一块渲染区域，并且有一套渲染规则，决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

#### 4.1BFC

​		BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒都会垂直地沿着其父元素的边框排列。

#### 4.2BFC的形成

​		下列方式会创建块格式化上下文：（这玩意应该确实用不上）

​		根元素html

​		浮动元素（float值不为none）

​		绝对定位元素（position为absolute或fixed）

​		行内块元素（display为inline-block）

​		表格单元格（display为table-cell，即HTML表格单元格默认值）

​		表格标题（display值为table-caption，HTML表格单元格默认值）

#### 4.3BFC布局规则

​		内部的BOX会在垂直方向，一个接一个地放置。

​		BOX垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

​		每个盒子（块盒与行盒）的margin box 的左边，与包含块border box的左边相接触。即使存在浮动也是如此。

​		BFC区域不与float box重叠。

​		BFC的区域不会与float box重叠。

​		BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此。

​		计算BFC的高度时，浮动元素也参与计算。

#### 4.4格式化上下文影响布局

​		通常，我们会为定位和清除浮动创建新的BFC，而不是更改布局，因为它将：包含内部浮动，排除外部浮动，阻止外边距重叠。

#### 4.5高度塌陷问题

​		当父元素未设置高度时，所有子元素浮动后，造成子元素脱离文档流进而无法把父元素撑开，父元素高度为0产生高度塌陷，称为高度塌陷问题。

#### 4.6IFC的形成

​		当多个内联（块级）元素排列在一起的时候就会形成一个IFC，之间不能穿插有块级元素（内联元素），否则就会被切割成多个IFC。

#### 4.7IFC的影响

​		IFC对布局的影响主要在以下三个方面：一个IFC内的元素都是水平排列的。

​		横向的margin、border、padding属性对于这些元素都是有效的。

​		垂直方向可以调整对齐方式。

### 5.响应式web设计

​		自适应网页设计是一种网页设计方法，该设计可以使网站在多种浏览设备上阅读和导航，同时减少缩放、平移和滚动。

​		优点：网站可用性提升，简化服务器端，易维护，只提供一个入口，支持未知设备。

​		缺点：性能累赘、限制应用的复杂性、改变了网站原有的布局，容易混淆。

#### 5.1三个概念

​		流畅或灵活的页面布局，根据浏览器窗口大小称比例缩放。

​		灵活、比例适中的图像和视听媒体。

​		使用CSS3媒体查询，确定浏览器屏幕的宽度并做出相应的调整。

### 5.2流体表格

​		流体表格将页面栅格化，使用em相对单位取代px绝对单位

### 5.3em排版尺寸

​		单纯成比例流式布局不能解决问题，因为不同设备屏幕比例不同。

​		使用em排版尺寸非常重要，因为：

​			当屏幕的排版太大或太小时，有助于进行调整。

​			在CSS控制下，相对类型的大小可以很容易地缩放。

### 5.4HTML5<picture>元素

​		picture元素允许我们在不同的设备上显示不同的图片，一般用于响应式。

​		HTML5引入了<picture>元素，可以让图片资源的调整更灵活。

​		<picture>元素零或多个<source>元素和一个<img>元素，每个source元素匹配不同的设备并引用不同的图像源，如果没有匹配的，选择img元素的src属性中的url。

### 5.5流体图片

​		如果图片满足以下特性中的一个：

​			图片是否传达了应该放在alt属性中的文本信息？

​			是否想要确保图像总是打印出来，因为没有它打印输出就没有意义/不完整？

​			是否需要链接图片？

​		图像就是内容，应该保存在HTML/XHTML中。

### 5.6CSS3媒体查询

​		有条件地检测用户显示屏的各个方面，然后根据这些条件有选择地加载出样式表，并提供最合适的布局、排版和图形。

# 4JS(JS、DOM、事件、作用域闭包、面向对象、框架技术、正则表达式)

## 4-1客户端基础

### 1.客户端脚本

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/11.png)

### 2.客户端编程

​		HTML适合开发静态页面，为了开发交互/响应式页面，必须以某种方式集成编程

​		客户端编程中，程序是用单独的编程脚本语言编写的，程序被嵌入到Web页面。

### 3.客户端与服务器端编程

​		客户端脚本（JS）的好处：

​			可用性：可以修改页面而不必返回服务器。

​			效率：可以在不等待服务器的情况下，对页面进行小而快速的更改。

​			事件驱动：可以相应用户操作，如点击和按键源代码。

​			平台独立型：任何支持脚本的浏览器都可以解释代码。

​		服务器端编程（PHP）的好处：

​			安全性：可以访问服务器的私有数据，客户端看不到。

​			兼容性：不受浏览器兼容性问题的影响。

​			功能全：可以写文件，打开与服务器的连接，连接数据库，等等。

### 4.常见脚本任务

​		向web页面添加动态特性：表单数据验证、图像翻转、时间敏感或随机页面元素、处理cookies。

​		定义web接口：利用按钮、文本框、可点击的图像，提示等。

​		客户端脚本的限制：因为脚本代码嵌入在页面中，所以它对外界可见；功能有限。

## 4-2JS概述

### 1.Why JS？

​		Atwood‘s Law：任何可以用JS来写的应用，最终都将用js来写。

​		性能：JIT（即时编译）、垃圾收集和动态绑定的开销。

​		对象：JS使用原型继承模型。

​		语法：对C家族语言使用经验的人来说熟悉。

​		一等函数：包括函数，几乎所有东西都是对象。

​		事件：在浏览器内部，一切都在一个事件循环中运行。

​		可重用性：最可移植、可重用的代码；JS可以模块化和封装。

### 2.JavaScript vs. Java

​		JavaScript是解释的，不是编译的。

​		更宽松的语法和规则：松散数据类型、变量不需声明、错误通常无声。

​		关键结构是函数而不是类：一等函数。

​		包含在网页中，能够与HTML/CSS内容集成。

## 4-3JS基本语法

### 1.语言基础

​		JavaScript大小写敏感；

​		回车/分号都可以结束语句；

​		语句通过代码块的形式进行组合。

### 2.注释

​		/* */

​		//

### 3.对象

​		对象是命名属性的结合。

​		对象中可以有视图，可以有值对，可以添加新成员，可以有方法。

​		数组函数也是对象。

### 4.变量与类型

变量

​		var，let，const

​		变量的类型在第一次使用的时候隐式定义了，（第一次使用的时候）必须赋值。

类型

​		类型没有指定，但是JS确实有类型。

​		Number Boolean String Array Object Function Null Undefined

### 5.数值

​		数值在内部通过双精度浮点型的形式表示，没有int和double之分。

​		运算符可以实现自动的类型转换。

### 6.字符串

​		方法很多：charAt,charCodeAt,fromCharCode,indexOf,lastIndexOf,replace,split,substring,toLowerCase,toUpperCase等。

​		字符串和数值的混合运算：

​		“2”*3=6 但是 “1”+1=“11”

### 7.布尔式犯蠢类型

​		任何值都可以作为布尔值：

​			false：0，-0，0.0，NaN，“”，null，undefined

​			true：anything else

​		将值显式转换为布尔值：

​			var boolValue=Boolean（otherValue）

​			var boolValue=！！（otherValue）

### 8.null，nan，undefined

nan

​		使用例：isNan（）typeof（NaN）

undefined

null

​		typeof（null）->object

### 9.作比较与逻辑运算符

​		平常业务中建议不要使用==和!=。这两个比较的时候会做一些强制的类型转换，所以比较结果很可能有误。推荐使用===/!==。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/12.png)

### 10.math对象以及其自带函数

​		abs函数取绝对值

​		ceil函数返回大于或等于指定表达式的最小整数头文件，floor相反（小于或等于）

​		cos函数返回余弦值，sin函数返回正弦值，tan返回正切值

​		max返回二数大者，min返回二数小者

​		log函数返回以e为底的对数值

​		pow（a，b）返回a的b次幂

​		random函数返回介于0-1（左闭右开）之间的一个随机数。

​		round函数返回四舍五入之后的值。

​		sqrt函数返回一个数字的平方根。

### 11.数组

​		两种方法初始化数组：

​		var empty=[];

​		var mycars=new Array();

​		数组可以实现多种数据结构：list，queue，stack等

​		数组的方法：

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/13.png)

### 12.函数

函数的参数传递

​		基本类型按值传递，对象按引用传递

调用可以提供任意数量的实参

## 4-4DOMBOM

### 1.DOM

​		当一个网页被加载时，浏览器会创建一个页面的文档对象模型。Document Object Model

​		HTML DOM模型被构造成一个对象树：

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/14.png)

#### 1.1功能

​		通过对象模型，JS获得了创建动态HTML所需的所有功能：

​		更改所有HTML元素，更改页面所有HTML属性，更改页面所有CSS样式，删除/添加HTML元素和属性，对页面中现有的HTML事件做出反应，创建新的HTML事件。

#### 1.2WHAT IS DOM

​		DOM是W3C标准，定义了一个访问文档的标准。

​		W3C DOM标准分为3个不同的部分：

​		核心DOM——所有文档类型的标准模型

​		XML DOM——XML文档的标准模型

​		HTML DOM——HTML文档的标准模型。

#### 1.3HTML DOM

​		HTML DOM是HTML的标准对象模型和编程接口。它定义了：

​			HTML元素作为对象

​			所有HTML元素的属性

​			访问所有HTML元素的方法

​			所有HTML元素的事件

#### 1.4DOM编程接口

​		可以使用JS访问HTML DOM。

​		在DOM中，每个HTML元素都被定义为对象。而编程接口是每个对象的属性和方法。

​		属性是可以获取或设置的值。方法是可以执行的操作。

#### 1.5DOM元素

​		页面上的每一个元素都有一个相应的DOM对象，使用objectName.attributeName访问/修改DOM对象的属性。

```
<script>
	document.getElementById("demo").innerHTML="Hello World!";
</script>
```

#### 1.6如何查找HTML元素

​		通过ID查找HTML元素

```
var myElement = document.getElementById("intro")
```

​		通过标记名查找HTML元素

```
var x = document.getElementsByTagName("p")
```

​		根据类名查找HTML元素

```
var x = document.getElementsByClassName("intro")
```

​		通过CSS选择器查找HTML元素

```
var x = document.querySelectorAll("p.intro")
```

​		通过HTML对象集合查找HTML元素

```
var x = document.forms["frm1"]
```

#### 1.7DOM导航

​		页面的元素嵌套在对象的树状结构中——dom树

##### DOM节点类型

​		每个节点都有nodeType，nodeName，nodeValue属性。

​		html DOM中时常出现的类型有：

​			Element元素节点

​			Text文本节点

​			Attr属性节点

​			Comment注释节点

​			Document文档节点

​			DocumentFragment文档片段节点

##### 遍历DOM树

​		每个节点的DOM对象都有以下属性：

​			firstChild，lastChild

​			childNodes

​			nextSibling，previousSibling

​			parentNode

##### 遍历实例

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/15.png)

### 2.BOM

​		浏览器对象模型是JavaScript的组成部分之一，BOM赋予了JavaScript程序与浏览器交互的能力。

​		每个浏览器的Javascript程序都可以引用以下全局对象：

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/16.png)

#### 2.1window对象

​		所有浏览器都支持window对象。它表示浏览器的窗口

​		所有JS全局对象、函数和变量都自动成为窗口对象的成员

​		在客户端JS中，Window对象是全局对象，所有的表达式都要在当前的环境中计算。	

```
	window.document.getElementById("header");
	document.getElementById("header");
```

#### 2.2document对象

​		上面提过了，不再说明。是Window对象的一部分。

#### 2.3location对象

​		location对象包含有关当前URL的信息。

​		location对象是Window对象的一个部分，可以通过window.location访问。

```
	window.location.href 返回/设置完整URL
	window.location.hostname 返回/设置当前URL主机名
	window.location.pathname 返回/设置当前URL路径部分
	window.location.protocol 返回/设置当前URL的协议（HTTP/HTTPS）
	window.locaiton.assign 加载新的文档
```

#### 2.4navigator对象

​		window.navigator对象包含有关浏览器的信息。

```
	navigator.appName 返回浏览器的名称
	navigator.onLine 返回指明系统是否处于脱机模式的布尔值
	navigator.appCodeName 返回浏览器的代码名
	navigator.platform 返回运行浏览器的操作系统平台
```

#### 2.5screen对象

​		window.screen包含有关客户端显示屏幕的信息

```
	screen.width 显示器屏幕宽度
	screen.height 显示屏幕的高度
	screen.availWidth 返回显示屏幕的宽度（除任务栏）
	screen.availHeight 返回显示屏幕的高度（除任务栏）
	screen.colorDepth 返回目标设备或缓冲器上的调色板的比特深度
	screen.pixelDepth 返回显示屏幕的颜色分辨率
```

#### 2.6history对象

​		window.history对象包含用户访问过的URL

​		History对象是window对象的一部分

```
	history.back()加载history列表中的前一个URL
	history.forward()加载history列表中的下一个URL
```

### 3.Cookies

​		Cookies可以让你在网页中存储用户信息

​		cookie是存储在计算机上的小文本文件中的数据

​		当浏览器从服务器请求一个网页时，属于该网页的cookies被添加到请求中。通过这种方式，服务器获得必要的数据记住关于用户的信息。

#### 3.1创建cookie

​		document.cookie="username=Tom;expires=Thu, 18 Sep 2015 10:00:00 UTC";

#### 3.2如何使用cookie

​		使用JS读取cookie

​		修改cookie

​		删除cookie（把expire time改成1970）

## 4-5事件

### 1.JS事件

​		事件和事件处理：使web应用的响应性、动态性交互性更强

​		JS事件：允许脚本相应用户与网页上的元素的交互，是否可以启动对页面的修改

#### 1.1事件驱动编程

​		程序流由事件决定，诸如用户操作、传感器输出或来自其他程序/线程的消息。

​		事件驱动应用程序中，通常有一个主循环监听事件，然后再检测到其中一个事件时触发回调函数。

#### 1.2事件处理程序

​		处理程序接受的输入的子回调例程（侦听器）

​		事件发生时调用的函数

​		通常与XHTML元素关联

#### 1.3JS的用途

​		事件处理程序可用于处理和验证用户输入、用户操作和浏览器操作

​		可以使用许多不同的方法让JavaScript处理事件

#### 1.4语法

​		element.addEventListener(event,function,useCapture)

​		event：事件类型如鼠标点击或滚轮

​		function：调用的函数

​		useCapture：可选，指定使用事件冒泡还是使用事件捕获

#### 1.5观察者模式

​		观察者模式是一种软件设计模式，一个称为主题的对象维护一个名为观察者的依赖项目列表，通常通过调用它们的一个方法自动通知其任何状态的变化。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/17.png)

#### 1.6jQuery方式附加事件处理程序

```
var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
hiddenBox.show();
});
```

### 2.事件类型

#### 2.1DOM2事件类型

​		用户界面事件：DOMFocusIn，DOMFocusOut，DOMActivate

​		鼠标事件：click，mousedown，mouseup，mouseover，mousemove，mouseout

​		键盘事件：DOM3有

​		变动事件：DOMSubtreeModified，DOMNodeInserted……

​		HTML事件：load，unload，abort，error……

#### 2.2HTML5新事件

​		audio，video：canplay，playing，suspend。

​		drag/drop

​		history

​		new form events

​		offline，online

​		message

#### 2.3触屏和移动设备事件

​		一般情况下，由于触摸屏移动设备在后期出现，所以触屏事件一般被映射到传统事件类型。但是并非所有的触屏UI的交互都模仿鼠标。

#### 2.4鼠标事件

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/18.png)

### 3.事件处理模型

#### 3.1DOM0

​		DOM0有两种模型类型：

​			内联模型：事件处理程序作为元素的属性添加。

​			传统模型：可以通过脚本添加/删除事件处理程序。与内联模型一样，每个事件只能注册一个事件处理程序。通过将处理程序名称分配给元素对象的事件属性来添加事件。要删除事件处理程序，只需要将属性设置为null。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/19.png)

#### 3.2DOM事件流

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/20.png)	

在DOM事件流中，事件流分为3阶段：

​		捕获阶段：事件从Document节点自上而下向目标节点传播

​		目标阶段：真正的目标节点正在处理事件的阶段。

​		冒泡阶段：事件从目标节点自下而上向Document节点传播的阶段。

#### 3.3DOM2

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/21.png)

#### 3.4DOM2的浏览器兼容性

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/22.png)

#### 3.5DOM2阻止默认行为

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/23.png)

#### 3.6DOM2示例

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/24.png)

#### 3.7事件处理程序的绑定

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/25.png)

## 4-6作用域与闭包

### 1.JavaScript作用域

​		作用域是当前的执行上下文（context），值（en-US）和表达式在其中“可见”或可被访问，即作用域指的是有权访问的变量集合。

​		JavaScript的作用域分为以下三种：

​			全局作用域：脚本模式运行所有代码的默认作用域

​			模块作用域：模块模式中运行代码的作用域

​			函数作用域：由函数创建的作用域

​			由（ES6）中let或const声明的变量属于额外的作用域：块级作用域（用一对花括号/一个代码块创建出来的作用域）

#### 1.1全局变量

​		函数之外声明的变量叫做全局变量，因为它可以被当前文档中的任何其它代码所访问。

#### 1.2自动全局

​		如果未尚未声明的变量赋值，此变量自动成为全局变量。

​		比如，函数外声明，函数内赋值，也是全局变量。

#### 1.3函数作用域

​		函数内定义的变量不能在函数之外的地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围的任何变量和函数。

​		在另一个函数中定义的函数可以访问在其父函数中定义的所有变量和父函数有权访问的任何其它变量。

#### 1.4变量有效期

​		开始于被创建时，局部变量在函数完成时删除，全局变量在关闭页面时删除。

### 2.JavaScript闭包

#### 2.1以计数器为例

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/26.png)

[js自调用函数](https://blog.csdn.net/qq_47455650/article/details/125113883)

[js中的匿名函数](https://blog.csdn.net/weixin_44116816/article/details/117302582)

[js中的闭包](https://blog.csdn.net/qq_40468450/article/details/125233364)

#### 2.2闭包

​		闭包是可以访问父作用域的函数，即使父函数已经关闭。

​		闭包是一个函数以及其捆绑的周边环境状态的引用的组合。

#### 2.3闭包应用场景

​		闭包很有用，它允许函数将其环境关联。这类似面向对象编程。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/27.png)	

​		下面两个的效果相似：

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/28.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/29.png)

### 3.let const

​		ES6新增块级作用域。这个区块对这些变量从一开始就形成了封闭作用域，直到声明语句完成，这些变量才能被访问。

### 4.函数提升

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/30.png)

## 4-7JavaScript最佳实践

### 1.避免全局变量

### 2.始终声明局部变量

​		局部变量必须通过var关键词来声明，否则将称为全局变量。可以使用严格模式“use strict”，它不允许未声明的变量。

​		严格模式有以下限制：

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/31.png)

### 3.在顶部声明

### 4.初始化变量

### 5.不要声明数值、字符串或布尔对象

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/32.png)

### 6.不要使用new Object（）

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/33.png)

### 7.意识到自动类型转换

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/34.png)

### 8.使用===

### 9.使用默认值

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/35.png)

### 10.用default结束switch

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/36.png)

## 4-8Vanilla JS框架

### 1.JS框架优点

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/37.png)

## 4-9正则表达式

### 1.什么是正则表达式

​		用于匹配字符串中字符组合的模式

​		构成搜索模式的字符序列

### 2.如何使用正则

#### 2.1匹配单个字符:.

​		.匹配除换行和行结束符的字符

​		/.oo.y/匹配doocy

#### 2.2修饰符i

​		执行对大小写不敏感的匹配

​		/mart/i匹配Marty、WALMART等

#### 2.3|选择匹配

​		/abc|def|g/三选一

#### 2.4子表达式（）

​		（）可以更好看出优先级

#### 2.5^匹配输入开始

​		/^A/	->	An E

#### 2.6$匹配输入结束

#### 2.7转义\

#### 2.8*匹配0次或多次

#### 2.9+匹配1次或多次

#### 2.10？匹配0或1次

#### 2.11{min,max}

​		允许重复的次数

​		/a(bc){2,4}/ -> abcbc abcbcbc abcbcbcbc

#### 2.12字符集，匹配任何一个包含的字符[]

#### 2.13字符范围[start-end]

#### 2.14字符

​		特殊字符集：

​			\d任何阿拉伯数字

​			\D任何非阿拉伯数字，相当于[^0-9]

​			\s匹配一个空白字符

#### 2.15如何使用

​		字符串.search(正则表达式)

​		字符串.replace(正则表达式对象或字符串，替代查找到的字符串)

​		正则表达式.test(字符串)//true or false

​		正则表达式.exec(字符串)//返回符合要求的数组

#### 2.16如何使用-RegExp对象

​		var patt = new RegExp(pattern,modifiers)

​		等价于

​		var patt = /patt/modifiers

## 4-10类&&this

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/38.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/39.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/40.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/41.png)

### this

函数体中，非显式简单调用函数时，在严格模式下，函数内的this会被绑定到undefined上，否则会被绑定到window/global上。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/42.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/43.png)

使用new调用构造函数时，this被绑定到新创建的对象上。

通过call/apply/bind显式调用函数时，函数体内的this被绑定到指定参数的对象上。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/44.png)

通过上下文对象调用函数时，this会被绑定到该对象上。

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/45.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/46.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/47.png)

this优先级

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/48.png)

# 5服务器平台？不清楚有没有

# 6优化？不清楚有没有

​		

