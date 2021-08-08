<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mike Movies</title>

    <link rel="stylesheet" href="asset/css/bootstrap.min.css">
    <link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
    <div class="top-img-bg"></div>
    
    <div class="wrapper">
        <img src="asset/img/logo.png" alt="" srcset="" id="logo" >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-10">
                    <main>
                        <h3>Please register to access reviews</h3>
                        <form action="" method="post">
                            <div class="row input-field justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="username">username:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="text" name="username" id="username" class="username" autocomplete="off">
                                    <p class="error"></p>
                                </div>
                            
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="password">password:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="password" name="password" id="password"> 
                                </div>
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="confirm-password">Re-type password:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="password" name="confirm-password" id="confirm-password">
                                    <p class="error"></p> 
                                </div>
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="first name">first name:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="text" name="first name" id="first name"> 
                                </div>
                                
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="last name">last name:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="text" name="last name" id="last name">
                                </div>
                                
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="email">email:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="text" name="email" id="email">
                                </div>
                                
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="genre">genre:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <select name="genre" id="genre">
                                        <option value="action">action</option>
                                        <option value="drama">drama</option>
                                        <option value="comedy">comedy</option>
                                        <option value="horror">horror</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="favorite_movie">favorite movie:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <input type="text" name="favorite_movie" id="favorite_movie">
                                </div>
                                
                                
                            </div>
                             <div class="input-field row justify-content-center align-items-center">
                                <div class="col-12 col-md-3 col-lg-4">
                                    <label for="describe_movie">describe your fav movie:</label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">    
                                    <textarea name="describe_movie" id="describe_movie" cols="30" rows="5"></textarea>
                                </div>
             
                            </div>
                            <div class="input-field d-flex justify-content-center">
                                <!-- <input /> -->
                                <button type="submit" id="register" name="register">Submit</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
       
    </div>
    <script src="asset/js/utils.js"></script>
    <script src="asset/js/script.js"></script>
</body>
</html>