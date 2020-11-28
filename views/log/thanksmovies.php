<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="thanks.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://use.typekit.net/onc2npj.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks</title>
</head>

<body>
    <div class="topnav">
        <a href="/">Home</a>
        <a href="/rank">Rankings</a>
        <a href="/log/books">Submit Book</a>
        <a href="/log/movies">Submit Movie</a>
    </div>
    <h1>Thank You for Submitting!</h1>
    <?php
        include('dbcon.php');
            $title = $_POST["movie_title"];
            $sqlinsert = "INSERT INTO movies (movie_title) VALUES ('" . $title . "')";

            if (!mysqli_query($dbcon, $sqlinsert)) {
                die('Error inserting movie title');
            }
    ?>
</body>
</html>
