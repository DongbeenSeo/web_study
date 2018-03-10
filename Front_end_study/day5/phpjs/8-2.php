<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <?php
      $pwd = $_GET["pwd"];
      if($pwd == "1111"){
        echo "안녕하세요. 환영합니다.";
      }
      else{echo "비밀번호가 틀렸습니다.";}
    ?>
  </body>
</html>
