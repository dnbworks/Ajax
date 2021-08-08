
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kadalah's rock 'n' roll Memorabilia</title>

    <link rel="stylesheet" href="asset/css/bootstrap.min.css">
    <link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
    <div class="wrapper">
        <img src="asset/img/logo.png" alt="" class="logo">
        <h1>Choose instrument to view details</h1>
        <p>an art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color.</p>

        <div class="container">
            <div class="row">

     
        <?php
         
         require_once('function/connectivity.php');


         $dbc = mysqli_connect(host, user, pwd, database ) or die("couldn't connect to database");
         $query = "SELECT slug FROM rock_n_roll";
         $data = mysqli_query($dbc, $query);

        echo '<div class="instruments col-12 col-md-6 col-lg-6">';
         while($row = mysqli_fetch_array($data)){
            echo '<img src="asset/img/' . $row['slug'] . '.png" alt="" width="150px" title="' . $row['slug'] . '">';
         }

         echo '</div>'; 

        ?>

       

            
                <!-- <img src="asset/img/african-drum.png" alt="" width="150px" title="Engalabi">
                <img src="asset/img/Arched-harp.png" alt="" width="150px" title="Adungu">
                <img src="asset/img/bowl-lyre.png" alt="" width="150px" title="Endongo"> -->
         
                <div class="details col-12 col-md-6 col-lg-6">
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
        </div>
        
    </div>
    <script src="asset/js/script.js"></script>
</body>
</html>