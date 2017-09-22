// var num=0;  //自定义的num   当前显现的图片    //取得是下标   和下标刚好匹配
// var arr=$("#warp").find("li");   //存放图片的所有li的集合
// var btn=$("#btn").find("li");      //所有btn的小圆圈  的集合
//
//     $("#right")[0].onclick=function(){
//         num++;
//         if(num>6){
//             num=0;
//         }
//         //for循环来更换当前显示的图片   不显示，即是让所有的图片的opacity=0；
//         for(let i=0;i<7;i++){
//             arr[i].style.opacity=0;
//         }
//         //使用num来显示当前图片
//         arr[num].style.opacity=1;
//
//         //改变按钮的的外观
//         for(let j=0;j<7;j++){
//             btn[j].className="";     //
//         }
//         btn[num].className="white";
//     }
//
//      $("#left")[0].onclick=function() {
//          num--;
//          if(num<0){
//              num=6;
//          }
//          for(let i=0;i<7;i++){
//              arr[i].style.opacity=0;
//          }
//          arr[num].style.opacity=1;
//          for(let j=0;j<7;j++){
//              btn[j].className="";
//          }
//          btn[num].className="white";
//      }
//     for(var i in btn){
//         btn[0].className="white";
//         btn[i].className=" ";
//         //给每个按钮添加onmouseover事件
//         //所以给每一个按钮添加一个自定义属性
//         btn[i].index=i;
//         btn[i].onmouseover=function(){
//             for(let j=0;j<7;j++){
//                 btn[j].className=" ";
//                 arr[j].style.opacity="0";
//             }
//             //this.index指的就是当前需要显示的图片的下标，只不过把小标付给了每个按钮的自定义属性index。，index的值是对应图片的下标
//             btn[this.index].className="white";
//             arr[this.index].style.opacity=1;
//             num=this.index;
//         }
//     }
//
// //开始做鼠标放上将对应的图片显示出来
//
//
//
//
// //启动定时器让图片走
// let timer=null;
// timer=setInterval( $("#right")[0].onclick,3000);
//
// $("#box")[0].onmouseover=function(){
//     // $("#left").style.display="block";
//     // $("#right").style.display="block";
//     clearInterval(timer);
// }
//
// $("#box")[0].onmouseout=function(){
//     // $("#left").style.display="none";
//     // $("#right").style.display="none";
//     timer=setInterval( $("#right")[0].onclick,3000);
// }
define([],function(){
    function $Id(id){
        return document.getElementById(id);
    }
    function showSlider(){
        var num=0;
        var arr=$Id("warp").children;
        var stu=$Id("btn").children;

        $Id("right").onclick=function(){
            num++;
            if(num>6){
                num=0;
            }
            for(var i=0;i<7;i++){
                arr[i].style.opacity=0;
            }
            arr[num].style.opacity=1;
            for(var j=0;j<7;j++){
                stu[j].className="";
            }
            stu[num].className="white";
        }

        $Id("left").onclick=function(){
            num--;
            if(num<0){
                num=6;
            }
            for(var i=0;i<7;i++){
                arr[i].style.opacity=0;
            }
            arr[num].style.opacity=1;
            for(var j=0;j<7;j++){
                stu[j].className="";
            }
            stu[num].className="white";
        }

        for(var i in stu){
            stu[0].className="white";
            stu[i].className="";
            stu[i].index=i;
            stu[i].onmouseover=function(){
                for(var j=0;j<7;j++){
                    stu[j].className="";
                    arr[j].style.opacity=0;
                }
                stu[this.index].className="white";
                arr[this.index].style.opacity=1;
                num=this.index;
            }
        }


        var timer=null;
        timer=setInterval($Id("right").onclick,3000)

        $Id("box").onmouseover=function(){
            // $Id("left").style.display="block";
            // $Id("right").style.display="block";

            clearInterval(timer);
        }
        $Id("box").onmouseout=function(){
            // $Id("left").style.display="none";
            // $Id("right").style.display="none";
            timer=setInterval($Id("right").onclick,3000)
        }
    }
    return {
        $Id:$Id,
        showSlider:showSlider
    }
})

