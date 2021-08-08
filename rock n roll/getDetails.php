
<?php

require_once('function/connectivity.php');

$name = $_GET['id'];

if(!empty($name)){
  

    $dbc = mysqli_connect(host, user, pwd, database ) or die("couldn't connect to database");

    $query = "SELECT id, slug, details FROM rock_n_roll WHERE slug ='" . $name . "'";

    $data = mysqli_query($dbc, $query);

    if (mysqli_num_rows($data) == 1) {
        // $data_arr = array();
        // $data_arr['data'] = array();

        $row = mysqli_fetch_array($data);

        $requested_item = [
            "id" => $row['id'],
            "slug" => $row['slug'],
            "description" => $row['details']
        ];
           
        

        // array_push($data_arr['data'], $requested_item);

    

      $jsondata = json_encode($requested_item);

      echo $jsondata;

      return $jsondata;
      
    }

}











