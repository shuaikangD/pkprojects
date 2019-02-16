var list = [];
var $data_one = $("#data-one");
var $data_one_a=$("#data-one-a");

//轮播图
new Swiper(".swiper-container",{
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
    },
    pagination: {
          el: '.swiper-pagination',
          renderBullet: function (index, className) {
              switch(index){
                  case 0:text='态极跑步鞋';break;
                  case 1:text='我们在路上';break;
                  case 2:text='帕克6代"绅士"';break;
                  case 3:text='磨弹科技跑鞋';break;
              }
              return '<span class="' + className + '">' + text + '</span>';
              },
    },
    loop : true,
    autoplay:true
})
//二级菜单
$(".top-list-right").children("li").on("mouseover",function(){
    $(this).siblings("li").children("ul").hide();
    $(this).children("ul").toggle();
})
$(".top-list-left").children("li").on("mouseover",function(){
    $(this).children("span").toggle();
})

$(".nav-in").children("li").on("mouseover",function(){
    $(this).siblings("li").children("ul").hide();
    $(this).children("ul").toggle();
})
//选项卡
function xuanxiangka(element){
    $(element).on("mouseover",function(){
        $(this).addClass("selection").siblings().removeClass("selection");
        var index=$(this).index();
        $(".exhibition-right ul").eq(index).show().siblings().hide();
    })
}
xuanxiangka(".tab li");
xuanxiangka(".tab-two li");
xuanxiangka(".tab-thr li");
xuanxiangka(".tab-fou li");

//数据渲染
function Commodity(){}

Object.assign(Commodity.prototype,{
    init(ele){
        $.ajax("./pike/index.json",{
            // dataType:"jsonp"
            })
            .then((res)=>{
                this.render(res,ele);
            })
    },
    render(res,ele){
        list = res.json;
        // console.log(list);
        var html = template("data-two",{list : list.slice( 0,6 )});
        ele.html(html);
    }
})

var commodity = new Commodity();
commodity.init($data_one);
commodity.init($data_one_a);
commodity.init($("#data-one-b"));
commodity.init($("#data-one-c"));
commodity.init($("#data-thr"));
commodity.init($("#data-thr-a"));
commodity.init($("#data-thr-b"));
commodity.init($("#data-thr-c"));
commodity.init($("#data-fou"));
commodity.init($("#data-fou-a"));
commodity.init($("#data-fou-b"));
commodity.init($("#data-fou-c"));
commodity.init($("#data-fiv"));
commodity.init($("#data-fiv-a"));
commodity.init($("#data-fiv-b"));
commodity.init($("#data-fiv-c"));

//吸顶菜单
class Xiding{
    constructor(){

    }
    init(){
        this.nav_wrap = $(".nav-wrap");
        this.two_nav = $(".two-nav");
        // this.scrolltop = 1000;
        this.bindEvent();
    }
    bindEvent(){
        $(window).on("scroll",this.suctionTop.bind(this));
    }
    suctionTop(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop >= 500){
            this.nav_wrap.css({"z-index":"999","position":"fixed","left":"0","top":0});
            this.two_nav.css({"display":"none"});
        }else{
            this.nav_wrap.css({"z-index":"auto","position":"static","left":"auto","top":"auto"});
            this.two_nav.css({"display":"block"});
        }
    }
}
var xiding = new Xiding();
xiding.init();

$(".pike-all li").on("click",right_lan);
$(".huiqu").on("click",right_huiqu);
function right_lan(){
    $(".right-lan").animate({right:"0px"});
}
function right_huiqu(){
    $(".right-lan").animate({right:"-300px"});
}

function IndexShangpin(){}
Object.assign(IndexShangpin.prototype,{
    init(){
        this.cookie = null;
        this.bindEvent();
    },
    bindEvent(){
        $("#data-one").on("click","a",this.addData);
        $("#data-one").on("click","a",this.drampXq);
    },
    addData(evt){
        var e = evt || window.event;
        var target = e.target || e.srcElement;
        var index = $(target).data("index");
        var iid = list[index].id;
        console.log(index);
        // list.forEach((item)=>{
        //     console.log(item.id);
        // })
        
        if(this.cookie = $.cookie("xq")){
            
            $.removeCookie("xq");

          var cartsList = [
                  {
                        "id" : iid
                  }
            ]
            $.cookie("xq",JSON.stringify(cartsList));
      }else{
            // 建立初始结构;
            var cartsList = [
                  {
                        "id" : iid
                  }
            ]
            $.cookie("xq",JSON.stringify(cartsList));
      }

    },
    drampXq(){
        location.href = "shangpin.html";
    }
})

var indexshangpin = new IndexShangpin();
indexshangpin.init();

        var input_formm= $("#input-form");
        var list_form = $("#span-form");
        list_form.addClass("hide");
        input_formm.on("input",handlerSearch)

        var showNum = 4;
        var timer = null;
        function handlerSearch(){
            if(timer !== null){
                return false;
            }
            $(list_form).removeClass("hide");
            var input_value = input_formm.val();
            console.log(input_value);
            timer = setTimeout(function(){
                var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${input_value}&json=1&p=3&sid=1427_21127_28131_26350_28266&req=2&csor=1`
                jsonp(url,"cb").then(function(res){
                    var html = "";
                    res.s.every((item,index)=>{
                        html += `<li>${item}</li>`;
                        return index < showNum;
                    })
                    $(list_form).html(html);
                    console.log(html);
                })
                timer=null;
            },100)
        }
        input_formm.on("blur",addClassA);
        function addClassA(){
            list_form.addClass("hide");
        }