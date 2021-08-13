<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puzzle</title>

    <link rel="stylesheet" href="asset/css/bootstrap.min.css">
    <link rel="stylesheet" href="asset/css/style.css">
</head>
<body>
    <div class="wrapper">
        <header>
            <h1>Webville word Puzzles</h1>
        </header>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-6" id="letterbox">
                    <div class="d-flex">
                        <a href="#">d</a>
                        <a href="#">s</a>
                        <a href="#">n</a>
                        <a href="#">i</a>
                    </div>
                    
                    <div class="d-flex">
                        <a href="#">l</a>
                        <a href="#">a</a>
                        <a href="#">e</a>
                        <a href="#">l</a>
                    </div>
                  
                    <div class="d-flex">
                        <a href="#">n</a>
                        <a href="#">e</a>
                        <a href="#">u</a>
                        <a href="#">o</a>
                    </div>
                
                    <div class="d-flex">
                        <a href="#">c</a>
                        <a href="#">d</a>
                        <a href="#">i</a>
                        <a href="#">i</a>
                    </div>
                 
                </div>
                <div class="col-12 col-md-6 col-lg-6" id="puzzle-grid">
                   <div id="currentWord"></div>
                   <div id="submit">
                        <a href="#">Submit word</a>
                   </div>
                   <div id="wordListBg">
                        <div id="wordList"></div>
                   </div>
                   <div id="score">Score: 0</div>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
    <script src="asset/js/utils.js"></script>
    <script src="asset/js/script.js"></script>
</body>
</html>