<?php

      $con = mysql_connect("localhost:3306","root","123456");
      
      if(!$con){
            die('{"state":"error","errorType":"数据库错误","stateCode":"3"}');
      }

      mysql_select_db("goods");

?>