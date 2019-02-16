

// setTimeout(function(){
 
// },1)
var cookiejson =$.cookie("xq");
var num = Number(cookiejson.replace(/[^0-9]+/ig,""));
    // console.log($(cookiejson));

function ComSp(){}
Object.assign(ComSp.prototype,{
    init(ele,ele_mid){
        $.ajax("./pike/index.json",{
            // dataType:"jsonp"
            })
            .then((res)=>{
                this.render(res,ele);
                this.bindEvent();
            })
    },
    render(res,ele){
        list = res.json;
        var list_cookie = list[num]
        // list = list[num];
        // console.log(list_cookie.title);
        // console.log(list);
        var html = "";
        // var html_img = "";

        html += `<div class="fangdajing">
        <div class="container-magnifier">
                <div class="wrap-small-magnifier">
                    <img src=${list_cookie.img_mid.one} alt="" id="img-mid-a">
                    <div class="focus"></div>
                    <div class="patch">
                        
                    </div>
                </div>
                <div class="wrap-choice-magnifier">
                    <i class="active"
                        data-big=${list_cookie.img_big.one}
                        data-small=${list_cookie.img_mid.one}
                    ><img src=${list_cookie.img_small.one} alt="" id="img-choice"></i>
                    <i
                        data-big=${list_cookie.img_big.two}
                        data-small=${list_cookie.img_mid.two}
                    ><img src=${list_cookie.img_small.two} alt="" id="img-choice"></i>
                    <i
                        data-big=${list_cookie.img_big.thr}
                        data-small=${list_cookie.img_mid.thr}
                    ><img src=${list_cookie.img_small.thr} alt="" id="img-choice"></i>
                    <i
                        data-big=${list_cookie.img_big.fou}
                        data-small=${list_cookie.img_mid.fou}
                    ><img src=${list_cookie.img_small.fou} alt="" id="img-choice"></i>
                    <i
                        data-big=${list_cookie.img_big.fiv}
                        data-small=${list_cookie.img_mid.fiv}
                    ><img src=${list_cookie.img_small.fiv} alt="" id="img-choice"></i>
                    <i
                        data-big=${list_cookie.img_big.six}
                        data-small=${list_cookie.img_mid.six}
                    ><img src=${list_cookie.img_small.six} alt="" id="img-choice"></i>
                </div>
                <div class="wrap-big-magnifier">
                    <img src=${list_cookie.img_big.one} alt="" id="img-big-a">
                </div>
            </div>
            
            <div class="details-wrap">
                <h1 id="title-big">
                     <span>${list_cookie.title}</span> 
                </h1>
                <div class="details-title">
                    实战篮球鞋，透气舒适，时尚有型
                </div>
                <div class="daojishi">
                    <p>
                        <span></span>【春节不打烊】金猪贺岁-限时购
                    </p>
                    <h2>
                            距结束：
                            <span id="day_ele">0</span> 
                            天
                            <span id="hour_ele">0</span> 
                            时
                            <span id="minute_ele">0</span>
                            分
                            <span id="second_ele">0</span>
                            秒
                      </h2>
                </div>
                <ul class="price-wrap">
                    <li class="qianggoujia">
                        抢&nbsp;购&nbsp;价<span>￥${list_cookie.rmb}</span>
                    </li>
                    <li class="diaopaijia">
                        吊&nbsp;牌&nbsp;价<del>￥${list_cookie.diaopai}</del>
                    </li>
                    <li class="lingjuan">
                        <span>领&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;劵</span>
                        <span>满89减10</span>
                        <span>满89减10</span>
                        <span>满299减10</span>
                        <span>满399减10</span>
                    </li>
                    <li class="huodong">
                        <span>活&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动</span>
                        <span>积分抵现</span>
                        <span>满包邮</span>
                        <span>限时抢购</span>
                    </li>
                    <li class="zhankai"><a href="#">展开活动></a></li>
                </ul>
                <ul class="color-xiezi">
                    <li>选择颜色</li>
                    <li><img src=${list_cookie.img_small.one} alt=""></li>
                    <li><img src=${list_cookie.img_small.two} alt=""></li>
                    <li><img src=${list_cookie.img_small.thr} alt=""></li>
                    <li><img src=${list_cookie.img_small.fou} alt=""></li>
                </ul>
                <ul class="shoe-size">
                    <li>选择尺码</li>
                    <li>38</li>
                    <li>39</li>
                    <li>40</li>
                    <li>41</li>
                    <li>42</li>
                    <li>43</li>
                    <li>44</li>
                    <li>45</li>
                </ul>
                <ul class="shoe-number">
                    <li>购买数量</li>
                    <li>-</li>
                    <li><input type="text" value=""></li>
                    <li>+</li>
                    <li>（库存：99+） <span>黑色/银色</span></li>
                </ul>
                <div class="btn-goumai">
                    <span><span></span>立即购买</span>
                    <span><span>❤ </span>喜欢</span>
                </div>
                <ul class="fenxiang-fou"> 
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
        </div>`;
        // var html = template("data-title", list_cookie);
       
        ele.html(html);
    },
    bindEvent(){
        $('.patch').mousemove(function(e){
            $('.wrap-big-magnifier').show();
            $('.focus').show();
            var left = e.offsetX - parseInt($('.focus').width()) / 2;
            var top = e.offsetY - parseInt($('.focus').height()) / 2;
            left = left < 0 ? 0 : left;
            left = left > (parseInt($('.patch').outerWidth()) - parseInt($('.focus').outerWidth())) ? (parseInt($('.patch').outerWidth()) - parseInt($('.focus').outerWidth())) : left;
            top = top < 0 ? 0 : top;
            top = top > (parseInt($('.patch').outerHeight()) - parseInt($('.focus').outerHeight())) ? (parseInt($('.patch').outerHeight()) - parseInt($('.focus').outerHeight())) : top;
        
            $('.focus').css('left', left + 'px');
            $('.focus').css('top', top + 'px');
            
            var leftRate = left / parseInt($('.patch').outerWidth());
            var bigLeft = leftRate * parseInt($('.wrap-big-magnifier img').outerWidth());
            $('.wrap-big-magnifier img').css('margin-left', -bigLeft + 'px');
        
            var topRate = top / parseInt($('.patch').outerHeight());
            var bigTop =  topRate * parseInt($('.wrap-big-magnifier img').outerHeight());
            $('.wrap-big-magnifier img').css('margin-top', -bigTop + 'px');
        })
        $('.patch').mouseleave(function(){
            $('.wrap-big-magnifier').hide();
            $('.focus').hide();
        })
        var choice_items = $(".wrap-choice-magnifier").children();
        var big_bg = $(".wrap-big-magnifier").children();
        var small_bg = $(".wrap-small-magnifier").children(0);
        // var smallImg =$(".wrap-choice-magnifier i").data("small");
        // var bigImg = $(".wrap-choice-magnifier i").data("big");
        $.each(choice_items,function(item,index,arr){
            console.log(item,index,arr);
            var smallImg =$(index).data("small");
            var bigImg = $(index).data("big");
            $(index).on("click",function(){
                // console.log(choice_items[i]);
                console.log(small_bg.src);
                small_bg.attr("src",smallImg);
                big_bg.attr("src",bigImg);
                console.log(small_bg,big_bg);
            })
        })
        
    
        // console.log(smallImg);
        
        // console.log(big_bg);
        // choice_items = Array.from(choice_items);
        // // console.log(big_bg);
        // //  $.each(choice_items,(item)=>{
        // //      item.click(choice.bind(false,item))
        // //  })
        
        //  for(var i = 0; i <= choice_items.length;i++){
        //      item = choice_items[i];
        //      $(item).on("click",choice.bind(false));
        //  }
         
        //  function choice(){
        //     // console.log(item);
        //     var item2 = "";
        //     for(var i = 0; i <= choice_items.length;i++){
        //         item2 = choice_items[i];
        //         $(item2).attr("class","");
        //     }
        //     $(item2).attr("class","active");
        //     console.log(item2);
           

        //     // console.log(bigSrc , smallSrc);

        //     big_bg.attr("src",bigImg);
        //     small_bg.attr("src",smallImg);
        //     console.log(big_bg);
        //  }
    }
})
var comsp = new ComSp();
comsp.init($(".fangdajing-wrap"));





    function countDown(DateString){
       var target = new Date(DateString);
       var now = Date.now();
       var Dtime = target.getTime() - now;
       var day = parseInt(Dtime / 1000 / 3600/24);
       var hour = parseInt((Dtime-day*1000*3600*24) / 1000 / 3600);
       var minute = parseInt((Dtime - hour * 1000 * 3600-day*1000*3600*24) / 1000 / 60);
       var second = parseInt((Dtime - day*1000*3600*24-hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
        var ms = parseInt( Dtime % 1000 );
       return {
           day:day,
            hour : hour,
            minute : minute,
            second : second,
            ms : ms 
       }
    }
    setInterval(myCountDown,50)
    function myCountDown(){
        var jieshu = countDown("2019/2/20");
        $("#day_ele").html(jieshu.day);
        $("#hour_ele").html(jieshu.hour);
        $("#minute_ele").html(jieshu.minute);
        $("#second_ele").html(jieshu.second);
    }

    