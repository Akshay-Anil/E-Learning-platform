<?php
  $email=$_POST["email"];
  $pass=$_POST["pass"];

  $server="localhost";
  $user="root";
  $passw="";
  $db="elearning";

  $conn=mysqli_connect($server,$user,$passw,$db);

  if(!$conn){
    die('Connect Error('.mysqli_connect_errno().')' ); 
  }

  $sql1="SELECT * FROM users WHERE Email='$email'";
  $result1=mysqli_query($conn,$sql1);


  if(mysqli_num_rows($result1)>0){

            $row = mysqli_fetch_array($result1);
            $hashed_password=$row["Password"];
            // if($pass==$orgpass){
            //   header("Location:eventafterlogin.php?user=$email");
            // }
            if(password_verify($pass, $hashed_password)) {
                header("Location:afterlogin.html?user=$email");
            } 
            else {
              echo "Wrong Password";
            }

  }else {
    echo "Email not Registered";
  }


?>