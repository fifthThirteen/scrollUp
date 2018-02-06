
/*@param
  container:容器ID string
  list: 容器下列表ID string
  li: 列表下的标签 string
  speed: 滚动速度 number
*/
function scrollUp(container,list,li,speed){
  var container = document.getElementById(container);
  var list = document.getElementById(list);
  var lis = list.getElementsByTagName(li);
  var len = lis.length;
  for (var i = 0; i < len; i++) {
    list.appendChild(lis[i].cloneNode(true));
  }
  var speed;
  var myScroll = setInterval(myScrollUp,speed);
  function myScrollUp() {
    if (container.scrollTop >= list.offsetHeight/2) {
      container.scrollTop = 0;
    } else {
      container.scrollTop++;
    }
  }
  container.onmouseover = function() {
    clearInterval(myScroll);
  }
  container.onmouseout = function() {
    myScroll = setInterval(myScrollUp,speed);
  }
}


/*@param
  container:容器ID string
  list: 容器下列表ID string
  li: 列表下的标签 string
  speed: 滚动速度 number
  num: 每次滚动元素的个数
  delay:延时
*/
function scrollUpDelay(container,list,li,speed,num,delay){
  var container = document.getElementById(container);
  var list = document.getElementById(list);
  var lis = list.getElementsByTagName(li);
  var len = lis.length;
  var totalH = list.scrollHeight;
  var eH = totalH/len;
  var sH = eH*num;
  var speed;
  var delay;
  var myScroll;
  for (var i = 0; i < len; i++) {
    list.appendChild(lis[i].cloneNode(true));
  }
  function startScroll() {
    myScroll=setInterval(myScrollUp,speed);
    container.scrollTop++;
  }
  function myScrollUp() {
    if (container.scrollTop % sH == 0) {
      clearInterval(myScroll);
      setTimeout(startScroll,delay);
    } else {
      container.scrollTop++;
      if(container.scrollTop >= list.scrollHeight/2){
         container.scrollTop =0;
         }
       }
    }

    setTimeout(startScroll,delay);
    container.onmouseover = function() {
      clearInterval(myScroll);
    }
    container.onmouseout = function() {
      myScroll = setInterval(myScrollUp,speed);
    }
  }