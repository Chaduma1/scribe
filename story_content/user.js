function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YZ0RyldvJT":
        Script1();
        break;
  }
}

function Script1()
{
  if (document.location.href.indexOf('html5') < 0) {
GetPlayer().printSlide()
} else {
if(!window.hasPrintStyle){
window.hasPrintStyle = true;
var css = '@media print {body * {visibility: hidden;}#slidecontainer, #slidecontainer * {visibility: visible;}#slidecontainer {position: absolute;left: 0;top: 0; }#slideframe {overflow: visible;}}',
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
}
var whereNow = $("#slidecontainer").offset();
$("#slidecontainer").offset({top:0,left:0});
window.print();
$("#slidecontainer").offset(whereNow);
}
}

