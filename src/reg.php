<?php
    $server="localhost";
    $user="root";
    $passw="";
    $db="elearning";

    $conn=mysqli_connect($server,$user,$passw,$db);

    if(!$conn){
      die('Connect Error('.mysqli_connect_errno().')' ); 
    }

    $fname=$_POST["fname"];
    $lname=$_POST["lname"];
    $num=$_POST["num"];
    $email=$_POST["email"];
    $password=$_POST["pass"];
    $clg=$_POST["clg"];

    $checksql="SELECT * FROM users WHERE Email='$email'";
    $dup=mysqli_query($conn,$checksql);

    if(mysqli_num_rows($dup)>0){
      echo "The email is already registered";
    }else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);   

              $sql1="INSERT INTO users (FirstName,LastName,Email,Password,Number,College) VALUES ('$fname','$lname','$email',
                  '$hashed_password','$num','$clg')";
                  

                    if(mysqli_query($conn,$sql1)  ){
                      //echo "Successfully Registered";
                      header("Location:afterlogin.html?user=$email");
                    }
                    
                    else {
                      echo "Sorry there was an Error".mysqli_error($conn);
                    }


  }

    mysqli_close($conn);
?>