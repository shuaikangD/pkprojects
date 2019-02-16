var quzhuce = $("#quzhuce");
var qudenglu = $("#qudenglu");
var zhuce = $(".right-right");
var denglu = $(".right-denglu");
quzhuce.on("click",registerQu);
qudenglu.on("click",signIn);
console.log(quzhuce);
function registerQu(){
      zhuce.css({"display":"block"});
      denglu.css({"display":"none"});
}
function signIn(){
      zhuce.css({"display":"none"});
      denglu.css({"display":"block"});
}

var zhuce_one = $(".zhuce-one");
zhuce_one.onsubmit = function(evt){
    var e = evt || window.event;
    e.preventDefault();
}
var submit = document.getElementById("submit");
var username = document.getElementById("username");
var password = document.getElementById("password");
var password_two = document.getElementById("password-two");

            submit.addEventListener("click",confirmUserName);
             submit.addEventListener("click",confirmPassWord);
             submit.addEventListener("click",agreementPass);
             submit.addEventListener("click",submitForm);
             // 验证邮箱名的函数;
             function confirmUserName(){
                   var phone_reg = /^[1][3,4,5,7,8][0-9]{9}$/;
                   var username_str = username.value;
                   var tip = username.parentNode.children[1];
                   if(phone_reg.test(username_str)){
                         tip.className = "success";
                   }else if(username_str==""){
                        tip.className = "error";
                        alert("手机号不能为空！");
                   }else{
                        tip.className = "error";
                         alert("请输入正确的手机号！");
                         
                   }
             }
             
            function confirmPassWord(){
                  var pass_reg = /^[1-9a-z]{6,32}$/;
                  var pass_str = password.value;
                  var tip = password.parentNode.children[1];
                  if(pass_reg.test(pass_str)){
                        tip.className = "success";
                  }else{
                        tip.className = "error";
                        alert("密码不能少于六位！不能大于32位！");
                  }
            }

            function agreementPass(){
                  var pass_one = password.value;
                  var pass_two = password_two.value;
                  var tip = password_two.parentNode.children[1];
                  if(pass_one===pass_two){
                        tip.className = "success";
                        
                  }else{
                        tip.className = "error";
                        alert("两次密码输入不一致！");
                  }
            }
            function submitForm(evt){
                  var e = evt || window.event;
                  is = document.querySelectorAll(".zhuce-one i");
                  is = Array.from(is);
                  var res = is.every(function(item){
                        return item.className === "success";
                  })

                  if(res === false){
                        e.preventDefault();
                        is.forEach(function(item){
                              item.className = "error";
                        })
                        
                  }else{
                        alert("注册成功！");
                  }
            }
            //注册
            submit.addEventListener("click",register);
             function register(){
                  // var iss = document.querySelectorAll(".zhuce-one i");
                        
                  //             if(iss.className = "error"){
                  //                   return false;
                  //             }
                        
                 
                  var usr_value = username.value;
                  var pwd_value = password.value;

                  var url = "http://localhost/PKProject/php/zhuce.php";
                  url += `?username=${usr_value}&password=${pwd_value}`;


                  ajaxGet(url)
                  .then(function(res){
                        console.log(res);
                  })
             }
             function ajaxGet(url){
                  return new Promise(function(resolve,reject){
                        var xhr = new XMLHttpRequest();
                        xhr.open("GET",url);
                        xhr.send(null);
                        xhr.onreadystatechange = function(){
                              if(xhr.readyState === 4 && xhr.status === 200){
                                    resolve(xhr.response);
                              }
                        }
                  })
             }

             //登录
             var rgt = document.getElementById("zhuce-two");

        rgt.addEventListener("submit",function(evt){
            var e = evt || window.event;
            e.preventDefault();
        })
        
        var usernameTwo = document.getElementById("username-denglu");
        var passwordTwo = document.getElementById("password-denglu");
        var submitTwo = document.getElementById("submit-denglu");

            submitTwo.addEventListener("click",confirmUserName_dl);
             submitTwo.addEventListener("click",confirmPassWord_dl);
             submitTwo.addEventListener("click",submitForm_dl);
            submitTwo.addEventListener("click",login);
            function confirmUserName_dl(){
                  var phone_reg = /^[1][3,4,5,7,8][0-9]{9}$/;
                  var username_str = usernameTwo.value;
                  var tip = usernameTwo.parentNode.children[1];
                  if(phone_reg.test(username_str)){
                        tip.className = "success";
                  }else if(username_str==""){
                       tip.className = "error";
                       alert("手机号不能为空！");
                  }else{
                       tip.className = "error";
                        alert("请输入正确的手机号！");
                        
                  }
            }
            
           function confirmPassWord_dl(){
                 var pass_reg = /^[1-9a-z]{6,32}$/;
                 var pass_str = passwordTwo.value;
                 var tip = passwordTwo.parentNode.children[1];
                 if(pass_reg.test(pass_str)){
                       tip.className = "success";
                 }else{
                       tip.className = "error";
                       alert("密码不能少于六位！不能大于32位！");
                 }
           }
           function submitForm_dl(evt){
            var e = evt || window.event;
            bs = document.querySelectorAll(".zhuce-two b");
            bs = Array.from(bs);
            var res = bs.every(function(item){
                  return item.className === "success";
            })

            if(res === false){
                  e.preventDefault();
                  bs.forEach(function(item){
                        item.className = "error";
                  })
                  
            }else{
                  alert("登录成功！");
                  location.href = "index.html";
            }
      }
        function login(){
            var unm = usernameTwo.value;
            var pwd = passwordTwo.value;

            // var src = "http://localhost/0109l/interface/login.php";
            
            var data = {
                username:unm,
                password:pwd
            }
            ajaxPost("http://localhost/PKProject/php/login.php",data).then(function(res){
                console.log(res);
            })
        }

        function ajaxPost(url,data){
            return new Promise(function(resolve,reject){

                var xhr = new XMLHttpRequest();
                xhr.open("POST",url);

                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                
                var data_str = "";
                for(var attr in data){
                    if(data_str.length !== 0){
                        data_str += "&";
                    }
                    data_str += attr + "=" + data[attr];
                }
                xhr.send(data_str);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(xhr.response);
                    }
                }
            })
            
        }