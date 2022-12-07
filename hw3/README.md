# 一、项目结构

```
css
	bg.css
	index.css
	subPage.css
js
	cryptostego.min.js
	subPage.js
pics
	1-16.jpg
	login_backgroundimage.png
index.html
login.html
register.html
subPage.html
```

# 二、可见水印

## 1.方法

```
<div id="SVG">
    <div id="watermark"><img src="pics/16.jpg" alt="16.jpg"></div>
    <div id="watermarkgraph"></div>
</div>
```

```
#watermark{
    position: relative;
    z-index: 2;
    float: left;
}
#watermarkgraph{
    position: absolute;
    z-index: 1;
}
#SVG{
    width: auto;
    height: auto;
    overflow: auto;
    position:relative;
}
```

```
var link = "pics/" + window.location.search.substring(1);
document.querySelector('#original').innerHTML = "<a href=" + link + " />" + "<img src=" + link + " alt=" + link + " />" + "</a>";
const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
                  <text x="0" y="200" 
                    text-anchor="middle" 
                    fill="#ccc" 
                    fill-opacity="0.3" 
                    transform="rotate(-45, 30 0)" 
                    style="font-size: 30px;"\
                  >{content}</text>
                </svg>`
const watermark = `url("data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent( svgStr.replace(/\{content\}/g, "201250123 刘晓旭") )))}")`
document.querySelector('#watermark').style.backgroundImage = watermark
document.querySelector('#watermarkgraph').innerHTML = "<img src=" + link + " alt=" + link + " />";
```

## 2.图片

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/54.png)

# 三、不可见水印

## 1.方法

```
<div id="fuliye">
    <canvas id="fourier" width="1024" height="768"></canvas>
</div>
```

```
#fourier{
    border:1px solid #ccc;margin:20px auto;display: block;
}
#fuliye{
    position:relative;
    z-index:3;
}
```

```
//需要cryptostego.min.js
window.onload = function (){
    var mycanvas = document.getElementById('fourier')
    var ctx = mycanvas.getContext('2d')
    var img = new Image();
    img.src = link
    img.onload = function(){
        ctx.drawImage(this,0,0,1024,768);
        writeMsgToCanvas('fourier',"201250123","",0);
    }
}
```

## 2.图片

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/55.png)

## 3.验证

​		存储图片，在https://stego.js.org选择图片并read message即可。