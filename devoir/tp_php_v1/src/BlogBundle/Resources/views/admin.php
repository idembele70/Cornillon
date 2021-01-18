<?php
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'aministration</title>
    <link rel="stylesheet" href="/tp_php_v1/web/css/bootstrap.min.css">
    <link rel="stylesheet" href="/tp_php_v1/web/css/main.css">
</head>

<body>
    <div class="wrapper">
        <?php include 'nav.php'; ?>


        <div class="articles">

            <?php
            define( '__ROOT__', dirname('../../../../app/config/mysqli_connect.php'));
            require_once( __ROOT__ . '/mysqli_connect.php'); ?>
            <div class="container">
                <div class="row">
                    <?php
                    $query = "SELECT * FROM article";
                    $response = @mysqli_query($dbc, $query);
                    if ($response) {

                        while ($row = mysqli_fetch_array($response)) {
                            $username = $_SESSION["username"];
                            $createdBy = $row['createdBy'];
                            if ($username == $createdBy) {

                    ?>
                                <article class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <h1><?php echo $row['title']; ?></h1>
                                    <div class="meta-data">
                                        <span class="author">Auteur: <?php echo $row['author']; ?></span> -
                                        <span class="category">Catégorie: <?php echo $row['category']; ?></span> -
                                        <span class="creation-date">Date de création: <?php echo $row['createdAt']; ?></span> -
                                        <span class="creation-by">createdBy: <?php echo $row['createdBy']; ?></span>
                                    </div>
                                    <p><?php echo $row['content']; ?></p>
                                    <p align="center">
                                        <a class="btn btn-success" href="modifierArticle.php?id=<?php echo $row['id']; ?>">Modifier</a>
                                        <a class="btn btn-danger" href="delete.php?id=<?php echo $row['id']; ?>">Supprimer</a>
                                    </p>
                                </article>


                    <?php    }
                        }
                    }  ?>
                </div>
            </div>
        </div>
    </div>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css"> -->
</body>

</html>