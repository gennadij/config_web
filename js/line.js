
document.addEventListener('DOMContentLoaded', start, false);

/*
 * Docu
 * http://zulfait.blogspot.de/2013/07/jquery-connect.html
 * https://gist.github.com/xtrasmal/11157312
 * http://jsfiddle.net/sbaBG/1/
 * http://stackoverflow.com/questions/19382872/how-to-connect-html-divs-with-lines
 * http://stackoverflow.com/questions/6278152/drawing-a-line-between-two-draggable-divs
 * https://jsplumbtoolkit.com/license#toolkit
 * https://d3js.org/
 * http://stackoverflow.com/questions/1104295/jquery-use-canvas-to-draw-lines-between-divs?rq=1
 * https://gist.github.com/alojzije/11127839
 * https://codepen.io/alojzije/pen/ndfrI
 * http://www.jqueryscript.net/other/jQuery-Plugin-To-Connect-Two-Html-Elements-with-A-Line.html
 * http://www.jqueryscript.net/other/jQuery-Plugin-To-Connect-HTML-Elements-with-Lines-HTML-SVG-Connect.html
 * http://kennykee.com/128/drawing-a-line-between-two-draggable-divs/
 */



function start() {
	adjustLine(
			  document.getElementById('div1'), 
			  document.getElementById('div2'),
			  document.getElementById('line')
			);
}


function adjustLine(from, to, line){

  var fT = from.offsetTop  + from.offsetHeight;
  var tT = to.offsetTop    + to.offsetHeight;
  var fL = from.offsetLeft + from.offsetWidth;
  var tL = to.offsetLeft   + to.offsetWidth;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}
