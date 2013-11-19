/* $Id : utils.js 5052 2007-02-03 10:30:13Z weberliu $ */

var Browser = new Object();

Browser.isMozilla = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument != 'undefined');
Browser.isIE = window.ActiveXObject ? true : false;
Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox") != - 1);
Browser.isSafari = (navigator.userAgent.toLowerCase().indexOf("safari") != - 1);
Browser.isOpera = (navigator.userAgent.toLowerCase().indexOf("opera") != - 1);
! function(){
    var ua = navigator.userAgent;
    // 蛋疼 你懂的
    switch (true) {
        case /msie (\d+\.\d+)/i.test(ua) :
            Browser.ie = document.documentMode || + RegExp['\x241'];
            break;
        case /chrome\/(\d+\.\d+)/i.test(ua) :
            Browser.chrome = + RegExp['\x241'];
            break;
        case /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ua) && !/chrome/i.test(ua) :
            Browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
            break;
        case /firefox\/(\d+\.\d+)/i.test(ua) : 
            Browser.firefox = + RegExp['\x241'];
            break;
        case /opera(?:\/| )(\d+(?:\.\d+)?)(.+?(version\/(\d+(?:\.\d+)?)))?/i.test(ua) :
            Browser.opera = + ( RegExp["\x244"] || RegExp["\x241"] );
            break;
    }
}();
var Utils = new Object();

Utils.htmlEncode = function(text)
{
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

Utils.trim = function( text )
{
  if (typeof(text) == "string")
  {
    return text.replace(/^\s*|\s*$/g, "");
  }
  else
  {
    return text;
  }
}

Utils.isEmpty = function( val )
{
  switch (typeof(val))
  {
    case 'string':
      return Utils.trim(val).length == 0 ? true : false;
      break;
    case 'number':
      return val == 0;
      break;
    case 'object':
      return val == null;
      break;
    case 'array':
      return val.length == 0;
      break;
    default:
      return true;
  }
}

Utils.isNumber = function(val)
{
  var reg = /^[\d|\.|,]+$/;
  return reg.test(val);
}

Utils.isInt = function(val)
{
  if (val == "")
  {
    return false;
  }
  var reg = /\D+/;
  return !reg.test(val);
}

Utils.isEmail = function( email )
{
  var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;

  return reg1.test( email );
}

Utils.isTel = function ( tel )
{
  var reg = /^[\d|\-|\s|\_]+$/; //只允许使用数字-空格等

  return reg.test( tel );
}

Utils.fixEvent = function(e)
{
  var evt = (typeof e == "undefined") ? window.event : e;
  return evt;
}

Utils.srcElement = function(e)
{
  if (typeof e == "undefined") e = window.event;
  var src = document.all ? e.srcElement : e.target;

  return src;
}

Utils.isTime = function(val)
{
  var reg = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/;

  return reg.test(val);
}

Utils.x = function(e)
{ //当前鼠标X坐标
    return Browser.isIE?event.x + document.documentElement.scrollLeft - 2:e.pageX;
}

Utils.y = function(e)
{ //当前鼠标Y坐标
    return Browser.isIE?event.y + document.documentElement.scrollTop - 2:e.pageY;
}

Utils.request = function(url, item)
{
	var sValue=url.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"));
	return sValue?sValue[1]:sValue;
}

Utils.$ = function(name)
{
    return document.getElementById(name);
}

function rowindex(tr)
{
  if (Browser.isIE)
  {
    return tr.rowIndex;
  }
  else
  {
    table = tr.parentNode.parentNode;
    for (i = 0; i < table.rows.length; i ++ )
    {
      if (table.rows[i] == tr)
      {
        return i;
      }
    }
  }
}

document.getCookie = function(sName)
{
  // cookies are separated by semicolons
  var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++)
  {
    // a name/value pair (a crumb) is separated by an equal sign
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0])
      return decodeURIComponent(aCrumb[1]);
  }

  // a cookie with the requested name does not exist
  return null;
}

document.setCookie = function(sName, sValue, sExpires)
{
  var sCookie = sName + "=" + encodeURIComponent(sValue);
  if (sExpires != null)
  {
    sCookie += "; expires=" + sExpires;
  }

  document.cookie = sCookie;
}

document.removeCookie = function(sName,sValue)
{
  document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}

function getPosition(o)
{
    var t = o.offsetTop;
    var l = o.offsetLeft;
    while(o = o.offsetParent)
    {
        t += o.offsetTop;
        l += o.offsetLeft;
    }
    var pos = {top:t,left:l};
    return pos;
}

function cleanWhitespace(element)
{
  var element = element;
  for (var i = 0; i < element.childNodes.length; i++) {
   var node = element.childNodes[i];
   if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
     element.removeChild(node);
   }
}
! function() {
if(window.innerWidth){// 除IE的所有浏览器 (IE9支持 W3C标准)
  /**
     * getViewportWidth getViewportHeight 窗口的文档显示区宽高
   * getHorizontalScroll getVerticalScroll 当前页面相对于窗口显示区左上角的 X 位置。当前页面相对于窗口显示区左上角的 Y 位置。
   */
  Utils.getViewportWidth = function(){
    return window.innerWidth;// 包括垂直滚动条宽度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getViewportHeight= function(){
    return window.innerHeight;// 包括水平滚动条的高度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getHorizontalScroll = function(){
    return window.pageXOffset;
  }
  Utils.getVerticalScroll= function(){
    return window.pageYOffset;
  }
}else if(document.compatMode == 'CSS1Compat'){
  // IE 且写了DOCTYPE 如果不写DOCTYPE IE6的document.compatMode='BackCompat' 否则为标准模式'CSS1Compat'
  Utils.getViewportWidth = function(){
    return document.documentElement.clientWidth;// 不包括垂直滚动条的宽度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getViewportHeight = function(){
    return document.documentElement.clientHeight;// 不包括水平滚动条的宽度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getHorizontalScroll = function(){
    return document.documentElement.scrollLeft;
  }
  Utils.getVerticalScroll = function(){
    return document.documentElement.scrollTop;
  }
}else if(document.compatMode == 'BackCompat'){// IE6 没有写DOCTYPE 或IE 7 8 9 设置了Quirds模式
  Utils.getViewportWidth = function(){
    return document.body.clientWidth;// 不包括垂直滚动条的宽度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getViewportHeight= function(){
    return document.body.clientHeight;// 不包括水平滚动条的宽度 宽度和高度不包括菜单栏、工具栏
  }
  Utils.getHorizontalScroll = function(){
    return document.body.scrollLeft;
  }
  Utils.getVerticalScroll = function(){
    return document.body.scrollTop;
  }
}
}();
