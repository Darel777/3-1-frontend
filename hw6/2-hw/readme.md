# 一、前端全部作业效果演示

## 第二次作业：实现登录注册页面展示，主页面图片展示和大图

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/1.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/2.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/3.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/4.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/5.png)

## 第三次作业：可见水印与不可见水印

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/54.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/55.png)

## 第四次作业：更换主题

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/3-1.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/3-2.png)

## 第五次作业：登录注册

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E6%B3%A8%E5%86%8C%E9%87%8D%E5%90%8D.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E6%B3%A8%E5%86%8C%E6%88%90%E5%8A%9F.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E7%99%BB%E5%BD%95%E5%AF%86%E7%A0%81%E4%B8%8D%E7%AC%A6%E5%90%88%E8%A6%81%E6%B1%82.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E7%99%BB%E5%BD%95%E5%A4%B1%E8%B4%A5.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E9%AA%8C%E8%AF%81%E7%A0%81.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E4%B8%80%E7%BA%A7%E9%A1%B5%E9%9D%A2%E7%99%BB%E5%BD%95%E6%B5%8B%E8%AF%95.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw5/%E4%BA%8C%E7%BA%A7%E9%A1%B5%E9%9D%A2%E7%99%BB%E5%BD%95%E6%B5%8B%E8%AF%95.png)

## 第六次作业：智能化

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-1.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-2.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-3.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-4.png)

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-5.png)

# 二、项目结构

```
appendix
	arbitary-image-stylization（图像风格转换项目服务器,智能化第二部分）
css
	bg.css（用于login.html和register.html）
	index.css（用于index.html和chatGPT.html）
	subPage.css（用于subPage.html）
js
	server
		server.js&model.js（实现登录注册服务器）
		chatGPT.js（实现AI助手服务器，智能化第五部分）
		test.http（模拟http请求）
	cryptostego.min.js（实现水印涂抹）
	jquery.js（实现ajax请求发送）
music
	5 items
node_modules
	102 items
pics
	music_pic
		11 items（供音乐播放器使用，智能化第一部分）
	17 irems
chatGPT.html（AI助手，智能化第五部分）
index.html（添加音乐播放器，智能化第一部分）
login.html
package.json
package-lock.json
readme.md
register.html
subPage.html
智能化前端演示.mp4
```

# 三、前端全部作业实现演示

## 第二次作业：实现登录注册页面展示，主页面图片展示和大图

### 1.登录注册页面（仅展示注册）

```
register.html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bg.css" type="text/css" rel="stylesheet">
    <title>注册</title> 
</head>
<body>
    <div class="a">
        <div class="b"></div>
        <div class="c">
            <div class="d">
                <h1>注册</h1>
                <input type="text" id="username" class="e" placeholder="用户名">
                <input type="text" id="account" class="e" placeholder="账户">
                <input type="password" id="mima" class="e" placeholder="密码">
                <a href="login.html" class="f">已有账号？点此登录</a>
                <button id="CaptchaId" type="button" class="g">注册</a>
                <!-- a 大框架 b 图片包装 c 登陆框架 d 登陆框架右侧 e 输入栏 f 忘记密码 g 登录 -->
            </div>
        </div>
    </div>
</body>
</html>
```

```
css/bg.css
body{
    /* 背景颜色 */
    margin: 0;
    min-height: 100vh;
    background-color: #e493d0;
    background-image: 
    radial-gradient(closest-side,rgba(228, 156, 108,1),rgba(228, 156, 108,0)),
    radial-gradient(closest-side,rgba(117, 219, 159,1),rgba(117, 219, 159,0)),
    radial-gradient(closest-side,rgba(115, 228, 248,1),rgba(115, 228, 248,0)),
    radial-gradient(closest-side,rgba(170,142,245,1),rgba(170,142,245,0)),
    radial-gradient(closest-side,rgba(241, 131, 146,1),rgba(241, 131, 146,0));
    background-size: 130vmax 130vmax,
                     60vmax 60vmax,
                     90vmax 90vmax,
                     110vmax 110vmax,
                     90vmax 90vmax;
    background-position: -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 15s movement linear infinite;
}
body::after{
    /* 背景部分过滤器 */
    content: '';
    display: block;
    position: fixed;
    width:100%;
    height: 100%;
    top:0;
    left:0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
@keyframes movement {
    /* 背景部分动效 */
    0%,100%{
        background-size: 130vmax 130vmax,
                     70vmax 70vmax,
                     90vmax 90vmax,
                     110vmax 110vmax,
                     90vmax 90vmax;
    background-position: -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
    }
    25%{
        background-size: 110vmax 150vmax,
                     100vmax 100vmax,
                     110vmax 70vmax,
                     90vmax 130vmax,
                     70vmax 110vmax;
    background-position: -60vmax -100vmax,
                         80vmax -10vmax,
                         -10vmax -10vmax,
                         -10vmax 10vmax,
                         30vmax 70vmax;
    }
    50%{
        background-size: 120vmax 140vmax,
                     90vmax 70vmax,
                     100vmax 80vmax,
                     90vmax 130vmax,
                     80vmax 100vmax;
    background-position: -45vmax -110vmax,
                         90vmax 0vmax,
                         -20vmax -20vmax,
                         -5vmax 15vmax,
                         25vmax 80vmax;
    }
    75%{
        background-size: 110vmax 150vmax,
                     100vmax 100vmax,
                     110vmax 70vmax,
                     90vmax 130vmax,
                     70vmax 110vmax;
    background-position: -60vmax -100vmax,
                         80vmax -10vmax,
                         -10vmax -10vmax,
                         -10vmax 10vmax,
                         30vmax 70vmax;
    }
}
.a{
    position: relative;
    top:300px;
    width:1100px;
    height:550px;
    box-shadow: 0 5px 15px rgba(0,0,0,.8);
    display: flex;
    z-index: 10;
    margin: auto auto;

}
.b{
    width:800px;
    height:550px;
    background-image: url("../pics/login_backgroundimage.png");
    background-size: cover;

}
.c{
    width:300px;
    height:500px;
    background-color: white;
    display:flex;
    justify-content: center;
    align-items: center;

}
.d{
    width:250px;
    height:500px;
}
.d h1{
    font: 900 30px '';
}
.e{
    width:230px;
    margin:20px 0;
    outline: none;
    border: 0;
    padding: 10px;
    border-bottom:3px solid rgb(80,80,170);
    font: 900 16px '';
}
.f{
    float:right;
    margin: 10px 0;
    
}
.g{
    position: absolute;
    margin: 20px;
    bottom: 40px;
    display: block;
    width: 200px;
    height: 60px;
    font: 900 30px '';
    text-decoration:none;
    line-height:50px;
    border-radius: 30px;
    background-image: linear-gradient(to left, #9c88ff,#3cadeb);
    text-align: center;
}
```

### 2.主页图片展示

```
index.html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>秋日校园</title>
        <link href="css/index.css" type="text/css" rel="stylesheet">
    </head>
<body>
    <!-- header首页面 -->
    <header>
        <nav>
            <ul class="menu">
                <li><button id="skin" onclick="styleChange()">图片风格迁移</button></li>
                <li><button id="skin" onclick="styleChange2()">漫画化</button></li>
                <li><button id="skin" onclick="styleChange3()">AI绘画</button></li>
                <li><button id="skin" onclick="styleChange4()">AI助手</button></li>
                <li><button id="skin" onclick="changeSkin()">切换模式</button></li>
                <li><button id="skin" onclick="getAuth()">查看用户</button></li>
                <li><button id="skin" onclick="exitAuth()">退出登录</button></li>
            </ul>
        </nav>
    </header>
    <!-- 图片展示栏 -->
    <div class="block" id="school">
        <h1>校园</h1>
        <hr class="seperator" />
        <div class="picture">
            <figure><a href="javascript:gotosub(1)"><img src="pics/1.jpg" alt="校园——1" /></a>                
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(2)"><img src="pics/2.jpg" alt="校园——2" /></a>            
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(3)"><img src="pics/3.jpg" alt="校园——3" /></a>               
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(4)"><img src="pics/4.jpg" alt="校园——4" /></a>           
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(5)"><img src="pics/5.jpg" alt="校园——5" /></a>                
            </figure>
        </div>
    </div>
    <div class="block" id="fall">
        <h1>人像</h1>
        <hr class="seperator" />
        <div class="picture">
            <figure><a href="javascript:gotosub(6)"><img src="pics/6.jpg" alt="秋日——1" /></a>           
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(7)"><img src="pics/7.jpg" alt="秋日——2"></a>            
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(8)"><img src="pics/8.jpg" alt="秋日——3"></a>            
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(9)"><img src="pics/9.jpg" alt="秋日——4"></a>            
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(10)"><img src="pics/10.jpg" alt="秋日——5"></a>            
            </figure>
        </div>
    </div>
    <div class="block" id="FinS">
        <h1>风景</h1>
        <hr class="seperator" />
        <div class="picture">
            <figure><a href="javascript:gotosub(11)"><img src="pics/11.jpg" alt="秋日校园——1" /></a>                
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(12)"><img src="pics/12.jpg" alt="秋日校园——2" /></a>                
            </figure>
        </div> 
        <div class="picture">
            <figure><a href="javascript:gotosub(13)"><img src="pics/13.jpg" alt="秋日校园——3" /></a>                
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(14)"><img src="pics/14.jpg" alt="秋日校园——4"></a>               
            </figure>
        </div>
        <div class="picture">
            <figure><a href="javascript:gotosub(15)"><img src="pics/15.jpg" alt="秋日校园——5"></a>         
            </figure>
        </div>
    </div>
    </body>
</html>
```

```
css/index.css
/* 展示图片 */
.picture{
    width: 330px;
    float: left;
    margin: 10px;
    height: 240px;
    background: rosybrown;
}
/* 页首目录 */
header {
    background-color: rgba(224,255,255,0.9);
    position: fixed;
    top: 0;
    margin-left: 0;
    height: 100px;
    width: 100%;
    z-index: 10;
}
ul.menu{
    margin: 0px;
    padding: 0px;
    float: right;
}
ul.menu >li{
    list-style: none;
    text-decoration: none;
    float: left;
    padding: 0;
    margin: 20px;
    position: relative;
}
ul.menu > li:hover >a{
    color: white;
}
ul.menu > li > a:hover, ul.menu > li > a:focus{
    outline: none;
    color: white;
    background-color: rgb(255, 0, 155);
}
ul.menu > li > a:active{
    outline: none;
    color: white;
    background-color: #FF0000;
}
.block{
    margin-top: 200px;
    clear: both;
}
figure{
    display: block;
    width: 312px;
    height: 195px;
    background: #e7e3d8;
    margin: 0;
    padding: 9px;
    text-align: left;
}
.block>h1{
    width: fit-content;
    background-color: #e7e3d8;
}
figure img{
    width: 308px;
    height: 200px;
    border: 1px solid #d6d6d6;
}
```

### 3.查看大图

```
subPage.html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>查看大图</title>
        <link href="css/subPage.css" type="text/css" rel="stylesheet">
    </head>

<body>
    <header>
        <nav>
            <ul class="menu">
                    <li><button id="skin" onclick="home()">回到主页</button></li>
                    <li><button id="skin" onclick="getAuth()">查看用户</button></li>
                    <li><button id="skin" onclick="exitAuth()">退出登录</button></li>
            </ul>
        </nav>
    </header>
<!-- 原图 -->
<div id="original"></div>
</body>
</html>
```

## 第三次作业：可见水印与不可见水印

```
subPage.html
<!-- 原图 -->
<div id="original"></div>
<!-- 可见水印SVG -->
<div id="SVG">
    <div id="watermark"><img src="pics/16.jpg" alt="16.jpg"></div>
    <div id="watermarkgraph"></div>
</div>
<!-- 不可见水印 -->
<div id="fuliye">
    <canvas id="fourier" width="1024" height="768"></canvas>
</div>
```

```
css/subPage.css
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
#fourier{
    border:1px solid #ccc;margin:20px auto;display: block;
}
#fuliye{
    position:relative;
    z-index:3
```

```
subPage.html
<script src="js/cryptostego.min.js"></script>
<script>
    var link = "pics/" + window.location.search.substring(1,window.location.search.indexOf("&"));
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
window.onload = function (){
    var mycanvas = document.getElementById('fourier')
    var ctx = mycanvas.getContext('2d')
    var img = new Image();
    img.src = link
    img.onload = function(){
        ctx.drawImage(this,0,0,1024,768);
        writeMsgToCanvas('fourier',"201250123","",0);
    }
    var urlParams = window.location.href;
      var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
      setCookie(String(context),"randomaccess",7)

}
</script>
```

## 第四次作业：更换主题

```
css/index.css
/* 双主题 */
body.light{
    /* 背景颜色 */
    margin: 0;
    min-height: 100vh;
    background-color: #e493d0;
    background-image: 
    radial-gradient(closest-side,rgba(228, 156, 108,1),rgba(228, 156, 108,0)),
    radial-gradient(closest-side,rgba(117, 219, 159,1),rgba(117, 219, 159,0)),
    radial-gradient(closest-side,rgba(115, 228, 248,1),rgba(115, 228, 248,0)),
    radial-gradient(closest-side,rgba(170,142,245,1),rgba(170,142,245,0)),
    radial-gradient(closest-side,rgba(241, 131, 146,1),rgba(241, 131, 146,0));
    background-size: 130vmax 130vmax,
                     60vmax 60vmax,
                     90vmax 90vmax,
                     110vmax 110vmax,
                     90vmax 90vmax;
    background-position: -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 15s movement linear infinite;
}
body.dark{
    /* 背景颜色 */
    margin: 0;
    min-height: 100vh;
    background-color: #e493d0;
    background-image: 
    radial-gradient(closest-side,rgb(194, 87, 16),rgba(228, 156, 108,0)),
    radial-gradient(closest-side,rgb(12, 103, 50),rgba(117, 219, 159,0)),
    radial-gradient(closest-side,rgb(17, 126, 145),rgba(115, 228, 248,0)),
    radial-gradient(closest-side,rgb(50, 29, 107),rgba(170,142,245,0)),
    radial-gradient(closest-side,rgb(96, 22, 31),rgba(241, 131, 146,0));
    background-size: 130vmax 130vmax,
                     60vmax 60vmax,
                     90vmax 90vmax,
                     110vmax 110vmax,
                     90vmax 90vmax;
    background-position: -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 15s movement linear infinite;
}
/* 背景部分动效 */
@keyframes movement {
    0%,100%{
        background-size: 130vmax 130vmax,
                     70vmax 70vmax,
                     90vmax 90vmax,
                     110vmax 110vmax,
                     90vmax 90vmax;
    background-position: -80vmax -80vmax,
                         60vmax -30vmax,
                         10vmax 10vmax,
                         -30vmax -10vmax,
                         50vmax 50vmax;
    }
    25%{
        background-size: 110vmax 150vmax,
                     100vmax 100vmax,
                     110vmax 70vmax,
                     90vmax 130vmax,
                     70vmax 110vmax;
    background-position: -60vmax -100vmax,
                         80vmax -10vmax,
                         -10vmax -10vmax,
                         -10vmax 10vmax,
                         30vmax 70vmax;
    }
    50%{
        background-size: 120vmax 140vmax,
                     90vmax 70vmax,
                     100vmax 80vmax,
                     90vmax 130vmax,
                     80vmax 100vmax;
    background-position: -45vmax -110vmax,
                         90vmax 0vmax,
                         -20vmax -20vmax,
                         -5vmax 15vmax,
                         25vmax 80vmax;
    }
    75%{
        background-size: 110vmax 150vmax,
                     100vmax 100vmax,
                     110vmax 70vmax,
                     90vmax 130vmax,
                     70vmax 110vmax;
    background-position: -60vmax -100vmax,
                         80vmax -10vmax,
                         -10vmax -10vmax,
                         -10vmax 10vmax,
                         30vmax 70vmax;
    }
}
```

```
index.html
let i=0;//5.切换模式
function changeSkin(){
    if(i%2==0){
        i=i+1;
        changeSkin1();
    }else{
        i=i+1;
        changeSkin2();
    }
}
function changeSkin1(){
    document.body.className="dark";
}
function changeSkin2(){
    document.body.className="light";
}
```

## 第五次作业：登录注册

### 1.准备工作

```
express&node.js 快速实现node程序
node.js直接安装即可
express：npm i express@next
```

```
mongoose&mongoDB 实现非列族数据库
mongoDB直接安装即可
mongoose：npm i mongoose
```

```
nodemon 启用node程序同时可以监测文件变化
nodemon：npm i nodemon
```

```
bcryptjs 实现密码加密
bcryptjs：npm i bcryptjs
```

```
body-parser 解析传送的body数据
body-parser：npm i body-parser
```

```
jsonwebtoken 实现返回token
jsonwebtoken：npm i jsonwebtoken
```

```
cd js/server
nodemon server.js
//如果提示“此系统禁止运行脚本”，请以管理员身份打开POWERSHELL，输入
set-ExecutionPolicy RemoteSigned
```

### 2.相关代码

```
js/server/server.js
const {User} = require('./models')
const express = require('express')
var body = require("body-parser")
const app = express()
const SECRET = 'randomaccess'
app.use(express.json())
app.use(body.urlencoded({extended:true}))

app.get('/api/users',async(req,res)=>{
    const users = await User.find()
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(users)
})

app.post('/api/register',async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log(req)
    const user = await User.create({
        username: req.body.username,
        account: req.body.account,
        password: req.body.password,
    })
    res.send(user)
})
app.post('/api/login',async(req,res)=>{
    const user = await User.findOne({
        username:req.body.username,
        account:req.body.account
    })
    if(!user){
        return res.status(422).send({
            message:'user not found'
        })
    }
    const isPasswordValid = require('bcryptjs').compareSync(
        req.body.password,
        user.password
    )
    if(!isPasswordValid){
        return res.status(422).send({
            message:'password incorrect'
        })
    }
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
        id:String(user._id)
    },SECRET)
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send({
        user,
        token:token
    })
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
})
```

```
js/server/models.js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-auth',{
    useNewUrlParser:true
})


const UserSchema = new mongoose.Schema({
    username:{type:String},
    account:{type:String,unique:true},
    password:{type:String,set(val){
        return require('bcryptjs').hashSync(val,4)
    }},
})
const User = mongoose.model('User',UserSchema)
User.db.dropCollection('users')
module.exports = { User }
```

```
js/server/test.http
@url=http://localhost:3001/api
@json=Content-Type: application/json
###
get {{url}}/users
###
post {{url}}/register
{{json}}

{
    "username":"user1",
    "account":"745381612@qq.com",
    "password":"123456"
}
###
post {{url}}/login
{{json}}

{
    "username":"user1",
    "account":"745381611@qq.com",
    "password":"1234567"
}
```

```
login.html&register.html
<button id="CaptchaId" type="button" class="g" >登录/注册</a>
<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>
<script src="js/jquery.js"></script>
<script>
    function submitFormlist(){
      var passwordVerify=document.getElementById("mima").value;
        if(passwordVerify.length<8){
            alert("密码最低为8位，必须含有大写字母、小写字母、数字！")
            return
        }
        let index=0;
        for(var i=0;i<passwordVerify.length;i++){
            if(passwordVerify.charAt(i)>='A'&&passwordVerify.charAt(i)<='Z'){
                index+=1;
                break;
            }
        }
        for(var i=0;i<passwordVerify.length;i++){
            if(passwordVerify.charAt(i)>='a'&&passwordVerify.charAt(i)<='z'){
                index+=1;
                break;
            }
        }
        for(var i=0;i<passwordVerify.length;i++){
            if(passwordVerify.charAt(i)>='0'&&passwordVerify.charAt(i)<='9'){
                index+=1;
                break;
            }
        }
        if(index!=3){
            alert("密码最低为8位，必须含有大写字母、小写字母、数字！")
            return
        }
        var url = "http://localhost:3001/api/login"
        var data = {
            username:document.getElementById("username").value,
            account:document.getElementById("account").value,
            password:document.getElementById("mima").value
        }
        $.ajax({
            url:url,
            type:'post',
            data:data,
            success:function(res){
                alert("登录成功！")
                location.replace("index.html?username="+res.user.username);
            },error:function (res){
                alert("登录失败，用户名、账户或密码错误！")
            }
        })
    }
    // 定义回调函数
    function callback(res) {
        // 第一个参数传入回调结果，结果如下：
        // ret         Int       验证结果，0：验证成功。2：用户主动关闭验证码。
        // ticket      String    验证成功的票据，当且仅当 ret = 0 时 ticket 有值。
        // CaptchaAppId       String    验证码应用ID。
        // bizState    Any       自定义透传参数。
        // randstr     String    本次验证的随机串，后续票据校验时需传递该参数。
        console.log('callback:', res);


        // res（用户主动关闭验证码）= {ret: 2, ticket: null}
        // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
        // res（请求验证码发生错误，验证码自动返回terror_前缀的容灾票据） = {ret: 0, ticket: "String", randstr: "String",  errorCode: Number, errorMessage: "String"}
        // 此处代码仅为验证结果的展示示例，真实业务接入，建议基于ticket和errorCode情况做不同的业务处理
        if (res.ret === 0) {
          // 复制结果至剪切板
          var str = '【randstr】->【' + res.randstr + '】      【ticket】->【' + res.ticket + '】';
          var ipt = document.createElement('input');
          ipt.value = str;
          document.body.appendChild(ipt);
          ipt.select();
          document.execCommand("Copy");
          document.body.removeChild(ipt);
          submitFormlist()
        //   alert('1. 返回结果（randstr、ticket）已复制到剪切板，ctrl+v 查看。 2. 打开浏览器控制台，查看完整返回结果。');
        }   
    }

    // 定义验证码js加载错误处理函数
    function loadErrorCallback() {
      var appid = '190572254';
      // 生成容灾票据或自行做其它处理
      var ticket = 'terror_1001_' + appid + '_' + Math.floor(new Date().getTime() / 1000);
      callback({
        ret: 0,
        randstr: '@'+ Math.random().toString(36).substr(2),
        ticket: ticket,
        errorCode: 1001,
        errorMessage: 'jsload_error'
      });
    }

    // 定义验证码触发事件
    window.onload = function(){
      document.getElementById('CaptchaId').onclick = function(){
        try {
          // 生成一个验证码对象
          // CaptchaAppId：登录验证码控制台，从【验证管理】页面进行查看。如果未创建过验证，请先新建验证。注意：不可使用客户端类型为小程序的CaptchaAppId，会导致数据统计错误。
          //callback：定义的回调函数
          var captcha = new TencentCaptcha('190572254', callback, {});
          // 调用方法，显示验证码
          captcha.show(); 
        } catch (error) {
          // 加载异常，调用验证码js加载错误处理函数
          loadErrorCallback();
          }
        }
    }
</script>
```

```
index.html&subPage.html
function gotosub(num){//6&7.检查登录状态和退出登录
    var urlParams = window.location.href;
    var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
    window.location.href="subPage.html?"+num+".jpg"+"&username="+context
}
function getAuth(){
    var urlParams = window.location.href;
    var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
    let cookie=getCookie(String(context))
    if(context.charAt(4)!==':'){
        alert("已登录，当前帐号为："+context)
    }else{
        alert("未登录！")
    }
}
function exitAuth(){
    var urlParams = window.location.href;
    var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
    delCookie(context)
    window.location.href="login.html"       
}
/**
* 设置cookie
**/
function setCookie(name, value, day) {
if(typeof day == 'number'){
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + '=' + value + ';expires=' + date;     
}
};
/**
* 获取cookie
**/
function getCookie(name) {
  let reg = RegExp(name + '=([^;]+)');
  let arr = document.cookie.match(reg);
  if (arr) {
      return arr[1];
  } else {
      return '';
  }
};
/**
* 删除cookie
**/
function delCookie(name) {
    setCookie(name, null, -1);
};
```

## 第六次作业：智能化

### 1.图片风格迁移

#### 1.准备工作——下载项目

```
下载项目：https://github.com/reiinakano/arbitrary-image-stylization-tfjs
```

#### 2.进入目录——安装依赖

```
需要先安装yarn（基于npm）：
	npm install -g yarn
	yarn run prep（安装依赖）
	yarn run start（启动）
```

#### 3.魔改index.html——翻译，去除多余部分，添加与原来作业的返回接口

```
index.html(项目中)
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>浏览器图片风格转换</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
    <!-- Huawei Cloud Self CSS -->
    <link href="https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/index.css" type="text/css" rel="stylesheet">
</head>

<body>
<input type="file" id="file-select" style="display: none" accept="image/x-png,image/gif,image/jpeg"/>
<!-- As a heading -->
<div class="jumbotron jumbotron-fluid py-4" style="text-align: center; background-color: #f5f5f5;">
    <div class="container">
      <h4>浏览器图片风格转换</h1>
    </div>
  </div>
<div class="">
<div id="mobile-warning" hidden class="alert alert-warning" role="alert">
  This site may have problems functioning on mobile devices. 
  Don't worry, you can still read the description below!
</div>
<ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="stylize-tab" data-toggle="tab" href="#stylize" role="tab" aria-controls="stylize" aria-selected="true">单图像</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="combine-tab" data-toggle="tab" href="#combine" role="tab" aria-controls="combine" aria-selected="false">混合两种风格</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="stylize" role="tabpanel" aria-labelledby="stylize-tab">
      <div class="container">
        <div class="row my-4">
          <div class="col mx-5 my-4">
              <img id="content-img" class="centered" src="images/chicago.jpg" height=256></img>
              <br>
              <label for="content-img-size">原照片大小</label>
              <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
              title="更改原照片大小可以获得不同大小的图片，但是更大的图片会增加处理时间。"></i>
              <input type="range" min="256" max="400" value="256" class="custom-range centered" id="content-img-size" >
              <br>
              <select id="content-select" class="centered custom-select">
                <option value="" disabled>Select content</option>
                <option value="pic">自拍</option>
                <option value="file">选择文件</option>
                <option value="stata">stata</option>
                <option value="diana">diana</option>
                <option value="golden_gate">golden_gate</option>
                <option value="beach">beach</option>
                <option value="chicago" selected="selected">chicago</option>
                <option value="statue_of_liberty">statue_of_liberty</option>
              </select>
          </div>
          <div class="col mx-5 my-4">
              <img id="style-img" class="centered" crossorigin="anonymous" src="images/seaport.jpg" height=256></img>
              <br>
              <label for="style-img-size">风格照片大小</label>
              <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
              title='改变风格照片的大小会改变神经网络观察风格图片的方式。'></i>
              <input id="style-img-square" type="checkbox" style="vertical-align: middle; float: right;"
              data-toggle="tooltip" data-placement="top" 
              title="强制转换为方形图片">
              <input type="range" min="100" max="400" value="256" class="custom-range centered" id="style-img-size">
              <br>
              <select id="style-select" class="centered custom-select">
                <option value="" disabled>Select a style</option>
                <option value="file">选择文件</option>
                <option value="random">从wikiart.org中选择一个随机的风格</option>
                <option value="udnie">udnie</option>
                <option value="stripes">stripes</option>
                <option value="bricks">bricks</option>
                <option value="clouds">clouds</option>
                <option value="towers">towers</option>
                <option value="sketch">sketch</option>
                <option value="seaport" selected="selected">seaport</option>
                <option value="red_circles">red_circles</option>
                <option value="zigzag">zigzag</option>
              </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-6 offset-md-3">
            <canvas id="stylized" class="centered"></canvas>
            <br>
            <label for="stylized-img-ratio">风格强度</label>
            <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
            title="越往右，图像越趋近于风格。"></i>
            <input type="range" min="0" max="100" value="100" class="custom-range centered" id="stylized-img-ratio">
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-5 offset-md-3">
              <button disabled id="style-button" type="button" class="btn btn-primary btn-block">未成功加载模型，正在寻找中……</button>
          </div>
          <div class="col-md-1">
              <button type="button" id="randomize" class="btn btn-light btn-block">
                <i class="fas fa-random" data-toggle="tooltip" data-placement="top" 
                title="随机处理"></i>
              </button>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-5 offset-md-3">
              <button id="return-button" type="button" class="btn btn-primary btn-block" onclick="window.history.back(-1)">返回主页</button>
          </div>
        </div>
      </div>
  </div>
  <div class="tab-pane fade" id="combine" role="tabpanel" aria-labelledby="combine-tab">
    <div class="container">
      <div class="row my-4">
        <div class="col mx-5 my-4">
            <img id="c-style-img-1" class="centered" crossorigin="anonymous" src="images/stripes.jpg" height=256></img>
            <br>
            <label for="c-style-img-1-size">Style A 大小</label>
            <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
            title="改变风格照片的大小会改变神经网络观察风格图片的方式。"></i>
            <input id="c-style-1-square" type="checkbox" style="vertical-align: middle; float: right;"
            data-toggle="tooltip" data-placement="top" 
            title="强制转换为方形图片">
            <input type="range" min="100" max="400" value="256" class="custom-range centered" id="c-style-img-1-size">
            <br>
            <select id="c-style-1-select" class="centered custom-select">
              <option value="" disabled>Select a style</option>
              <option value="file">选择文件</option>
              <option value="random">从wikiart.org中选择一个随机的风格</option>
              <option value="udnie">udnie</option>
              <option value="stripes" selected="selected">stripes</option>
              <option value="bricks">bricks</option>
              <option value="clouds">clouds</option>
              <option value="towers">towers</option>
              <option value="sketch">sketch</option>
              <option value="seaport">seaport</option>
              <option value="red_circles">red_circles</option>
              <option value="zigzag">zigzag</option>
            </select>
        </div>
        <div class="col mx-5 my-4">
            <img id="c-style-img-2" class="centered" crossorigin="anonymous" src="images/bricks.jpg" height=256></img>
            <br>
            <label for="c-style-img-2-size">Style B 大小</label>
            <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
            title="改变风格照片的大小会改变神经网络观察风格图片的方式。"></i>
            <input id="c-style-2-square" type="checkbox" style="vertical-align: middle; float: right;"
            data-toggle="tooltip" data-placement="top" 
            title="强制转换为方形图片">
            <input type="range" min="100" max="400" value="256" class="custom-range centered" id="c-style-img-2-size">
            <br>
            <select id="c-style-2-select" class="centered custom-select">
              <option value="" disabled>Select a style</option>
              <option value="file">选择文件</option>
              <option value="random">从wikiart.org中选择一个随机的风格</option>
              <option value="udnie">udnie</option>
              <option value="stripes">stripes</option>
              <option value="bricks" selected="selected">bricks</option>
              <option value="clouds">clouds</option>
              <option value="towers">towers</option>
              <option value="sketch">sketch</option>
              <option value="seaport">seaport</option>
              <option value="red_circles">red_circles</option>
              <option value="zigzag">zigzag</option>
            </select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-6 offset-md-3">
            <img id="c-content-img" class="centered" src="images/statue_of_liberty.jpg" height=256></img>
            <br>
            <label for="c-content-img-size">原照片大小</label>
            <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
            title="更改原照片大小可以获得不同大小的图片，但是更大的图片会增加处理时间。"></i>
            <input type="range" min="256" max="400" value="256" class="custom-range centered" id="c-content-img-size">
            <br>
            <select id="c-content-select" class="centered custom-select">
              <option value="" disabled>Select content</option>
              <option value="pic">自拍</option>
              <option value="file">选择文件</option>
              <option value="stata">stata</option>
              <option value="diana">diana</option>
              <option value="golden_gate">golden_gate</option>
              <option value="beach">beach</option>
              <option value="chicago">chicago</option>
              <option value="statue_of_liberty" selected="selected">statue_of_liberty</option>
            </select>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-6 offset-md-3">
            <canvas id="c-stylized" class="centered"></canvas>
            <br>
            <label for="c-stylized-img-ratio">风格强度</label>
            <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" 
            title="选择风格更加偏向的一边"></i>
            <input type="range" min="0" max="100" value="50" class="custom-range centered" id="c-stylized-img-ratio">
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-5 offset-md-3">
            <button disabled id="combine-button" type="button" class="btn btn-primary btn-block">未成功加载模型，正在寻找中……</button>
        </div>
        <div class="col-md-1">
            <button type="button" id="c-randomize" class="btn btn-light btn-block">
              <i class="fas fa-random" data-toggle="tooltip" data-placement="top" 
              title="随机处理"></i>
            </button>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-5 offset-md-3">
            <button id="return-button" type="button" class="btn btn-primary btn-block" onclick="window.history.back(-1)">返回主页</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row my-4">
    <div class="col-md-3 offset-md-3">
        <select disabled id="model-select-style" class="centered custom-select">
          <option value="mobilenet" selected="selected">[Fast] Distilled MobileNet style model (9.6MB)</option>
          <option value="inception">[High quality] Original Inceptionv3 style model (36.3MB)</option>
        </select>
    </div>
    <div class="col-md-3">
        <select disabled id="model-select-transformer" class="centered custom-select">
          <option value="separable" selected="selected">[Fast] Separable_conv2d transformer (2.4MB)</option>
          <option value="original">[High quality] Original transformer model (7.9MB)</option>
        </select>
    </div>
  </div>
</div>

<canvas id="hidden-canvas" style="display: none"></canvas>
<div class="modal fade" id="cam-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Take a snapshot!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <video id="webcam-video" class="centered" width="500" height="375"></video>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="snap-button">Snap!</button>
      </div>
    </div>
  </div>
</div>
</div>

<!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
<!-- load pth -->
<script src="dist/bundle.js"></script>
<script type="text/javascript">
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
</script>
</body>
</html>
```

```
//添加返回主页的按钮
 <div class="row my-4">
        <div class="col-md-5 offset-md-3">
            <button id="return-button" type="button" class="btn btn-primary btn-block" onclick="window.history.back(-1)">返回主页</button>
        </div>
      </div>
```

```
//想要用CSS魔改的话只能上云
 <!-- Huawei Cloud Self CSS -->
    <link href="https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/index.css" type="text/css" rel="stylesheet">
```

#### 4.在自己项目的index.html中提供接口

```
window.location.href="http://localhost:9966"
```

### 2.图片/视频动漫化

#### 1.准备工作——下载项目

```
https://github.com/experience-ml/cartoonize
```

#### 2.python+google colab上云

```
上云之前，先把下载的项目进行修改
1.更改requirements.txt中的tensorflow版本为2.2.0
	在requirements.txt里添加flask-ngrok
2.更改config.yaml中的colabmode为true
把下载好的文件夹传到google云端硬盘
在该文件夹下打开google colaboratory
```

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-6.png)

```
依次输入以下代码并执行（执行前确保你的运行时是GPU运行时）
如果不是，在修改——笔记本设置中进行调整
```

```
//挂载google云端硬盘
import os
from google.colab import drive
drive.mount('/content/drive')

path = "/content/drive/My Drive/cartoonize/cartoonize"//我的项目目录在这里

os.chdir(path)
os.listdir(path)
```

```
//安装依赖
!pip install -r requirements.txt
```

```
//卸载colab中的numpy，因为它和tensorflow2.2.0不兼容
!pip uninstall numpy
```

```
//安装兼容的版本
!pip install numpy==1.18.5
```

```
//从这一步开始安装ngrok（ngrok负责提供内网穿透，使咱们的项目能够访问colab上的远端web项目）
from google.colab import drive
drive.mount('/content/drive', force_remount=True)

!mkdir -p /drive
#umount /drive
!mount --bind /content/drive/My\ Drive /drive
!mkdir -p /drive/ngrok-ssh
!mkdir -p ~/.ssh
```

```
!apt-get install ssh tmux vim
```

```
!mkdir -p /drive/ngrok-ssh
%cd /drive/ngrok-ssh
!wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip -O ngrok-stable-linux-amd64.zip
!unzip -u ngrok-stable-linux-amd64.zip
!cp /drive/ngrok-ssh/ngrok /ngrok
!chmod +x /ngrok
```

```
//回到你的动漫化项目地址
import os
from google.colab import drive
drive.mount('/content/drive')

path = "/content/drive/My Drive/cartoonize/cartoonize"

os.chdir(path)
os.listdir(path)
```

```
//运行pyhton-flask程序
!python app.py
//之后可能有这样的输出
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Running on http://c4ba-34-82-19-63.ngrok.io
 * Traffic stats available on http://127.0.0.1:4040
//进入带ngrok.io的链接
 * Running on http://c4ba-34-82-19-63.ngrok.io
```

```
进入后会报错，这时需要你注册ngrok账号
注册账号并登录之后，拿到那个网页的authtoken
```

```
回到google colab，执行以下代码：
!/ngrok authtoken 你刚才的authtoken
```

```
然后继续执行：
//回到你的动漫化项目地址
import os
from google.colab import drive
drive.mount('/content/drive')

path = "/content/drive/My Drive/cartoonize/cartoonize"

os.chdir(path)
os.listdir(path)
//运行pyhton-flask程序
!python app.py
//之后可能有这样的输出
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Running on http://c4ba-34-82-19-63.ngrok.io
 * Traffic stats available on http://127.0.0.1:4040
//进入带ngrok.io的链接
 * Running on http://c4ba-34-82-19-63.ngrok.io
//之后就可以正常运行了
```

#### 3.在自己项目的index.html提供接口

```
接口链接填
 * Running on http://c4ba-34-82-19-63.ngrok.io
 里面的地址
```

### 3.AI绘画

#### 1.准备工作——上传pth模型

```
将AI绘画的模型上传到colab
```

![](https://lxx0921.obs.cn-north-4.myhuaweicloud.com/%E5%89%8D%E7%AB%AF/hw6/6-7.png)

#### 2.google colab上云

```
在目录文件夹下打开google colaboratory
依次输入以下指令：
```

```
//确认你链接的是GPU运行时
!nvidia-smi
```

```
//这是为了消灭colab中影响AI绘画运行的东西
import os
os.kill(os.getpid(),9)
```

```
from google.colab import drive
drive.mount('/content/drive')
```

```
//下载webUI包
!git clone https://github.com/alphanemeless/stable-diffusion-webui.git
%cd stable-diffusion-webui
```

```
//安装依赖
!COMMANDLINE_ARGS="--exit" REQS_FILE="requirements.txt" python launch.py
```

```
//将云端硬盘上的模型导入运行时
!cp /content/drive/MyDrive/stableckpt/animefull-final-pruned/model.ckpt /content/stable-diffusion-webui/models/Stable-diffusion/final-pruned.ckpt
!cp /content/drive/MyDrive/stableckpt/animevae.pt /content/stable-diffusion-webui/models/Stable-diffusion/final-pruned.vae.pt
!mkdir /content/stable-diffusion-webui/models/hypernetworks
!cp -r /content/drive/MyDrive/stableckpt/modules/modules/* /content/stable-diffusion-webui/models/hypernetworks
!rm /content/stable-diffusion-webui/repositories/stable-diffusion/configs/stable-diffusion/v1-inference.yaml
!cp /content/drive/MyDrive/stableckpt/animefull-final-pruned/config.yaml /content/stable-diffusion-webui/repositories/stable-diffusion/configs/stable-diffusion/v1-inference.yaml
```

```
!COMMANDLINE_ARGS="--share --gradio-debug --gradio-auth me:qwerty" REQS_FILE="requirements.txt" python launch.py
//之后可能有这样的输出
Loaded a total of 0 textual inversion embeddings.
Running on local URL:  http://127.0.0.1:7860
Running on public URL: https://89edc4ebcf10b2bf.gradio.app
//带有gradio.app的链接是接口地址
Running on public URL: https://89edc4ebcf10b2bf.gradio.app
gradio在WEBUI封装好了，已经做好了内网穿透
```

#### 3.在自己项目的index.html中提供接口

```
window.location.href= https://89edc4ebcf10b2bf.gradio.app
```

### 4.AI助手（基于chat GPT实现，构建自搭建服务器和接口）

#### 1.准备工作——有一个OPENAI账号

```
包括全局代理，境外电话短信验证码接收等一系列问题，这里不做赘述
链接：http://www.zztongyun.com/article/%E5%9B%BD%E5%86%85%E7%99%BB%E5%BD%95%E4%B8%8D%E4%BA%86%E8%B0%B7%E6%AD%8C%E9%82%AE%E7%AE%B1
```

#### 2.创建chatGPT.html

```
chatGPT.html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>AI智能助手</title>
        <link href="css/index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <header>
            <nav>
                <ul class="menu">
                        <li><button id="skin" onclick="home()">回到主页</button></li>
                        <li><button id="skin" onclick="getAuth()">查看用户</button></li>
                        <li><button id="skin" onclick="exitAuth()">退出登录</button></li>
                </ul>
            </nav>
        </header>
        <div class="quesArea">
            <input type="text" placeholder="请输入你的问题" class="quesText" id="ques">
            <button type="button" onclick="connectGPT()">获取答案</button>
        </div>
    </body>

</html>
<script src="js/jquery.js"></script>
<script>
function home(){
  var urlParams = window.location.href;
  var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
  window.location.href="index.html?"+"username="+context
}
function getAuth(){
  var urlParams = window.location.href;
  var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
  let cookie=getCookie(String(context))
  if(context.charAt(4)!==':'){
      alert("已登录，当前帐号为："+context)
  }else{
      alert("未登录！")
  }
}
function exitAuth(){
  var urlParams = window.location.href;
      var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
      delCookie(context)
      window.location.href="login.html"      
}
/**
 * 设置cookie
 **/
 function setCookie(name, value, day) {
  if(typeof day == 'number'){
    let date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;     
  }
};
/**
 * 获取cookie
 **/
function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
};
/**
 * 删除cookie
 **/
function delCookie(name) {
    setCookie(name, null, -1);
};
function connectGPT() {
        var data = {
            prompt:document.getElementById("ques").value,
        }
        $.ajax({
            url:"http://localhost:3000/api/chatGPT2answer",
            type:'post',
            data:data,
            success:function(res){
                alert(res.answer)
            }   
        })
}
</script>
```

#### 3.和以前登录注册的原理一样，构建一个chat GPT服务器（基于node express 等）

```
我们需要安装axios
npm i axios
```

```
const axios=require('axios')
const express = require('express')
const app = express()
app.use(express.json())
var body = require("body-parser")
const { response } = require('express')
app.use(body.urlencoded({extended:true}))
async function getChatGPTResponse(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
        prompt:prompt,
        max_tokens:2048,
        model:"text-davinci-003"
    },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          	//当你注册成功之后，会有一个API接口码，通过这个实现接口
          }
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}
app.post('/api/chatGPT2answer',async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");//避免跨域问题！
    const quest = req.body.prompt;
    let answer = null;
    await getChatGPTResponse(quest).then(result =>{//这里必须用await！
        answer=result;
    });
    res.send({
      answer
    }) 
})
app.listen(3000, () => {
    console.log('http://localhost:3000')//监听3000端口，一定要和之前的3001区别开
})


```

```
cd js
cd server
nodemon chatGPT.js
```

### 5.纯前端实现音乐盒小程序

#### 1.html

```
html部分
index.html
<!-- 音乐盒 -->
<audio src="" id="mymusic"></audio>
<div class="music">
    <div class="pic_div"> <img src="./pics/music_pic/disc.png" alt="" class="disc"> <img src="./pics/music_pic/girl.png" alt="" id="music_pic"> <span class="dot"></span>
        <div class="music_program">
        <div id="prograss"></div>
        </div>

        <div class="time">
        <p><span id="currenttime">0:00</span><span>/</span><span id="duration">0:00</span></p>
        </div>

        <div class="music_menu"> <span onClick="backMusic()"></span> <span onClick="playPause()" id="playbtn"></span> <span onClick="nextMusic()"></span> </div>
    </div>
</div>
```

#### 2.css

```
css部分
css/index.css
/* 音乐部分 */
.music {
    height: 150px;
    width: 150px;
    background:rgba(98,91,91,0.5);
    position: fixed;
    top: 0px;
    left: 0px; 
    z-index: 11;  
}
.pic_div{
    position: relative;
}
.dot {
    width: 15px;
    height: 15px;
    background: #464545;
    position: absolute;
    border: 2px solid white;
    border-radius: 50%;
    top: 40px;
    left: 85px;
}
.disc {
    width: 100px;
    position: absolute;
    right: 5px;
    transform: rotate(30deg);
}
#music_pic {
    width: 100px;
    position: absolute;
}
.music_program {
    height: 2px;
    width: 150px;
    background: #555;
    position: relative;
    top: 80px;
}
.music_program div {
    height: 100%;
    width: 0%;
    background: red;
}
.time {
    width: 100px;
    height: 20px;
    position: relative;
    top: 85px;
    overflow: hide;
}
.time p {
    padding-left: 33px;
}
.time p span:nth-of-type(2) {
    padding: 0 5px;
}
.music_menu {
    width: 150px;
    height: 25px;
    position: relative;
    top: 85px;
}
.music_menu span {
    width: 30px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
}
.music_menu span:nth-of-type(1) {
    margin-left: 8px;
    background: url(./../pics/music_pic/last.png) no-repeat 7px;
}
.music_menu span:nth-of-type(2) {
    margin-left: 14px;
    background: url(./../pics/music_pic/play.png) no-repeat 10px;
}
.music_menu span:nth-of-type(3) {
    margin-left: 14px;
    background: url(./../pics/music_pic/next.png  ) no-repeat 7px;
}
.quesArea{
    position: fixed;
    top: 30%;
    left: 36%;
}
.quesText{
    border: #CCCCCC 1px solid;
    height: 200px;
    width:  500px;
}
```

#### 3.js

```
js部分
index.html
<script>
//音乐部分
//获取元素
var music=document.getElementById("mymusic");
var prograss=document.getElementById("prograss");
var curtxt=document.getElementById("currenttime");
var duration=document.getElementById("duration");
var music_pic=document.getElementById("music_pic");
var deg=0;//旋转角度
var disctimer,prograsstimer;//碟片计时器,进度条计时器
var musicindex=0;//音乐索引
var musics=new Array("./music/Are You Lost.mp3","./music/Feels Like.mp3","./music/STYX HELIX.mp3","./music/带我去找夜生活.mp3","./music/Never Gonna Give You Up.mp3");//音乐数组
var music_pics=new Array("./pics/music_pic/song1.png","./pics/music_pic/song2.png","./pics/music_pic/song3.png","./pics/music_pic/song4.png","./pics/music_pic/song5.png");
//旋转碟片
var disc=document.getElementsByClassName('disc');
//音乐时间显示
 function curtime(txt,music)
 {
    if(music.currentTime<10)
    {
        txt.innerHTML="0:0"+Math.floor(music.currentTime);
    }else
    if(music.currentTime<60)
    {
    txt.innerHTML="0:"+Math.floor(music.currentTime);
    }
    else
    {
    var minet=parseInt(music.currentTime/60);
    var sec=music.currentTime-minet*60;
    if(sec<10)
    {
    txt.innerHTML="0"+minet+":"+"0"+parseInt(sec);
    }
    else
    {
    txt.innerHTML="0"+minet+":"+parseInt(sec);
    }
    }
 } 
 //播放暂停
 function playPause()
 {
    var btn=document.getElementById("playbtn");
    if(music.paused)
    {
        music.play();
        clearInterval(disctimer);//清除碟片的定时器
        btn.style.background="url(./pics/music_pic/play.png) no-repeat 10px";//改变播放暂停键的图标
        disctimer=setInterval(function(){
        disc[0].style.transform="rotate("+deg+"deg)";
        deg+=5;
        //每秒设置进度条长度
        },100);
        prograsstimer=setInterval(function(){
        prograss.style.width=(music.currentTime)*100 / (music.duration)+"%";
        curtime(curtxt,music);
        if(music.currentTime>=music.duration-1)//片尾跳转下一曲
        {
        musicindex++;//音乐索引加一
        if(musicindex>=musics.length)//如果音乐索引超过长度，将音乐索引清零
        {
        musicindex=0;
        }
        getMusic();
        music.play();//重载音乐后进行播放
        }
        },1000);
    }
 else
 {
  music.pause();//停止音乐
  btn.style.background="url(./pics/music_pic/pause.png) no-repeat 10px";
  clearInterval(disctimer);//清除碟片滚动的定时器
  clearInterval(prograsstimer);//清除进度条的定时器
 }
 }
 //下一曲
 function nextMusic()
 {
    musicindex++;//音乐索引加一
    if(musicindex>=musics.length)//如果音乐索引超过长度，将音乐索引清零
    {
    musicindex=0;
    }
    getMusic();
    music.play();
 }
 //上一曲
 function backMusic()
 {
    musicindex--;
    if(musicindex<0)//如果索引小于0，将索引变为最大值
    {
    musicindex=musics.length-1;
    }
    getMusic();
    music.play();
 } 
 //读取音乐
 function getMusic()
 {
    music.src=musics[musicindex];//改变音乐的SRC
    music_pic.src=music_pics[musicindex];//改变音乐的封面
    if(music.readyState="complete")
    {
    setTimeout(function(){
    duration.innerHTML=parseInt(music.duration/60)+":"+parseInt(music.duration%60);
    },1000);//一秒后读取音乐的总时长
    }
 }
 window.onload=function(){
    var urlParams = window.location.href;
    var context = urlParams.substring(urlParams.indexOf("=")+1,urlParams.length)
    setCookie(String(context),"randomaccess",7)
    getMusic();
}
</script>
```

