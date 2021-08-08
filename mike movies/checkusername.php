<?php 

require_once('function/connectivity.php');


$name = $_GET['username'];

if(!empty($name)){
  

    $dbc = mysqli_connect(host, user, pwd, database ) or die("couldn't connect to database");

    $query = "SELECT username FROM mike_movies WHERE username ='" . $name . "'";

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
