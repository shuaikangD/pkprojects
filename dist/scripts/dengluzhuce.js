"use strict";var quzhuce=$("#quzhuce"),qudenglu=$("#qudenglu"),zhuce=$(".right-right"),denglu=$(".right-denglu");function registerQu(){zhuce.css({display:"block"}),denglu.css({display:"none"})}function signIn(){zhuce.css({display:"none"}),denglu.css({display:"block"})}quzhuce.on("click",registerQu),qudenglu.on("click",signIn),console.log(quzhuce);var zhuce_one=$(".zhuce-one");zhuce_one.onsubmit=function(e){(e||window.event).preventDefault()};var submit=document.getElementById("submit"),username=document.getElementById("username"),password=document.getElementById("password"),password_two=document.getElementById("password-two");function confirmUserName(){var e=username.value,s=username.parentNode.children[1];/^[1][3,4,5,7,8][0-9]{9}$/.test(e)?s.className="success":""==e?(s.className="error",alert("手机号不能为空！")):(s.className="error",alert("请输入正确的手机号！"))}function confirmPassWord(){var e=password.value,s=password.parentNode.children[1];/^[1-9a-z]{6,32}$/.test(e)?s.className="success":(s.className="error",alert("密码不能少于六位！不能大于32位！"))}function agreementPass(){var e=password.value,s=password_two.value,n=password_two.parentNode.children[1];e===s?n.className="success":(n.className="error",alert("两次密码输入不一致！"))}function submitForm(e){var s=e||window.event;is=document.querySelectorAll(".zhuce-one i"),is=Array.from(is),!1===is.every(function(e){return"success"===e.className})?(s.preventDefault(),is.forEach(function(e){e.className="error"})):alert("注册成功！")}function register(){var e=username.value,s=password.value,n="http://localhost/PKProject/php/zhuce.php";ajaxGet(n+="?username=".concat(e,"&password=").concat(s)).then(function(e){console.log(e)})}function ajaxGet(t){return new Promise(function(e,s){var n=new XMLHttpRequest;n.open("GET",t),n.send(null),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&e(n.response)}})}submit.addEventListener("click",confirmUserName),submit.addEventListener("click",confirmPassWord),submit.addEventListener("click",agreementPass),submit.addEventListener("click",submitForm),submit.addEventListener("click",register);var rgt=document.getElementById("zhuce-two");rgt.addEventListener("submit",function(e){(e||window.event).preventDefault()});var usernameTwo=document.getElementById("username-denglu"),passwordTwo=document.getElementById("password-denglu"),submitTwo=document.getElementById("submit-denglu");function confirmUserName_dl(){var e=usernameTwo.value,s=usernameTwo.parentNode.children[1];/^[1][3,4,5,7,8][0-9]{9}$/.test(e)?s.className="success":""==e?(s.className="error",alert("手机号不能为空！")):(s.className="error",alert("请输入正确的手机号！"))}function confirmPassWord_dl(){var e=passwordTwo.value,s=passwordTwo.parentNode.children[1];/^[1-9a-z]{6,32}$/.test(e)?s.className="success":(s.className="error",alert("密码不能少于六位！不能大于32位！"))}function submitForm_dl(e){var s=e||window.event;bs=document.querySelectorAll(".zhuce-two b"),bs=Array.from(bs),!1===bs.every(function(e){return"success"===e.className})?(s.preventDefault(),bs.forEach(function(e){e.className="error"})):(alert("登录成功！"),location.href="index.html")}function login(){ajaxPost("http://localhost/PKProject/php/login.php",{username:usernameTwo.value,password:passwordTwo.value}).then(function(e){console.log(e)})}function ajaxPost(a,o){return new Promise(function(e,s){var n=new XMLHttpRequest;n.open("POST",a),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var t="";for(var r in o)0!==t.length&&(t+="&"),t+=r+"="+o[r];n.send(t),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&e(n.response)}})}submitTwo.addEventListener("click",confirmUserName_dl),submitTwo.addEventListener("click",confirmPassWord_dl),submitTwo.addEventListener("click",submitForm_dl),submitTwo.addEventListener("click",login);