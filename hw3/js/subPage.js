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