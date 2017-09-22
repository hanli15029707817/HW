define(['jquery-1.8.3.min'],function(){
          function Top(){
              let cha = $("#cha");
              cha.click(function () {
                  $("#top").hide();
              });
		  }
     function Event(){
         //小导航
         $("#more").mouseenter(function () {
             $("#more").find("span")[0].style.display = "none";
             $("#more").find("span")[1].style.display = "block";
             $("#more_two").show();
             $("#more").css({borderRight: "1px solid #ededed", borderLeft: "1px solid #ededed"});
             $("#more_two").css({borderTop: "0"});
             $(".v").css({borderRight: "0"});
         });
         $("#more").mouseleave(function () {
             $("#more").find("span")[0].style.display = "block";
             $("#more").find("span")[1].style.display = "none";
             $("#more_two").hide();
             $("#more").css({borderRight: "0", borderLeft: "0"});
             $(".v").css({borderRight: "1px solid  #e4e4e4"});
         });

         //华为商城导航
         let oul = $("#huawei");
         let ali = oul.find("li");
         let aa = ali.find("a")[0];
         for (let i = 0; i < ali.length; i++) {
             ali[i].onmouseover = function () {
                 $(this).find("a").css({borderBottom: "2px solid #CA141D"});
             };
             ali[i].onmouseout = function () {
                 $(this).find("a").css({borderBottom: "2px solid #fff"});
             };
         }


         //搜索框
         $("#search").find("form").find("input").focus(function () {
             $("#searchBar").hide();
         });
         $("#search").find("form").find("input").blur(function () {
             $("#searchBar").show();
         });

     }
    return {
     	Top:Top,
    	Event:Event

	}
})
