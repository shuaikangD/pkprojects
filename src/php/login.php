<?php

      header("Content-Type: text/html;charset=utf-8");
      require("./connect.php");
      $username = $_POST["username"];
      $password = $_POST["password"];


      if(!$username || !$password ){
            die('{"state":"error","errorType":"参数不全","stateCode":"2"}');
      }



      $select_query = "SELECT * FROM user_list";

      $select_res = mysql_query($select_query);

      while($row = mysql_fetch_array($select_res)){
            if($row["username"] === $username){
                  if($row["password"] === md5($password)){
                        die('{"state":"success","errorType":"登录成功","stateCode":"1"}');
                  }
            }
      }
      

?>


?>