<?php 

require_once('function/connectivity.php');


$pwd = $_GET['password'];

if(!empty($pwd)){
  

    $dbc = mysqli_connect(host, user, pwd, database ) or die("couldn't connect to database");

    $query = "SELECT password FROM mike_movies WHERE password ='" . $pwd . "'";

    $data = mysqli_query($dbc, $query);

    $checkResults = mysqli_num_rows($data);

    $status = '';


    if ($checkResults > 0) {
       
        $status = 'no';


        echo $status;

        return $status;
      
    } else {
        $status = 'yes';


        echo $status;

        return $status;
    }

}