var panelcode ='<div  style="position: fixed;bottom: 0;left:0px ;width:380px;height:560px;font-family: -apple-system,system-ui,Helvetica,Arial,sans-serif;font-size: 14px;font-weight: 600;line-height: 20px;"><div style="padding:8px;background-color: #58595c;border: #130d3d;"><div style="padding-bottom:8px; "> <textarea id="txtsrc" style="width: 100%;height:420px;"></textarea> </div><div style="padding-bottom:8px; "> <textarea id="hstag" style="width: 100%;height:40px;"> #AvinashMishra #Avinashians </textarea> </div><div><div style="display: flex;justify-content: space-between "><div style="width:18%; color:#fbfafb "><div style="display: block" id="wordcount"></div>Curr:<div id="currcount" contenteditable="true" style="display:inline " ></div></div><div style="width:60%;color:#fbfafb "><div id="currword"  ></div></div><div style="width:19%"><div id="btn_856790" style=" padding: 6px 12px;  background-color: #2ea44f;border: 1px solid rgba(27, 31, 35, .15);border-radius: 6px; box-shadow: rgba(27, 31, 35, .1) 0 1px 0; box-sizing: border-box;color: #fff;cursor: pointer;display: inline-block;" > Add it </div></div></div></div></div> </div>';  var srcs=[];var txtedtr=document.querySelector('div[role="textbox"][contenteditable="true"]'); document.body.insertAdjacentHTML('beforeend',panelcode); var txtsrc=document.getElementById("txtsrc");var hstag=document.getElementById("hstag");var wordcount=document.getElementById("wordcount");var currcount=document.getElementById("currcount"); var currword=document.getElementById("currword");document.getElementById("btn_856790").addEventListener("click", clicknext);txtsrc.addEventListener("change", updateValue);function updateValue(e) {srcs = (e.target.value).split('}');if(srcs!=null && srcs.length>0){wordcount.innerHTML="limit : "+srcs.length;currword.innerHTML=tstr=srcs[0]+" "+hstag.value;currcount.innerHTML=1;} else{ wordcount.innerHTML='0';currcount.innerHTML='0';}}function setandnext(index){if(index>=srcs.length) {currcount.innerHTML=srcs.length; return;}let tstr=srcs[index].replace(/[\n\r]+/g, " ")+" "+hstag.value; txtedtr.focus(); let ac= document.execCommand('insertText', false, tstr);txtedtr.blur(); console.log(tstr);currword.innerHTML=tstr=srcs[index+1]+" "+hstag.value; currcount.innerHTML=index+2;}function clicknext(){let i=parseInt(currcount.innerHTML);setandnext(i-1);}
