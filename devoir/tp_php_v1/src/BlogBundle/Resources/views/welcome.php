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
    <title>Bienvenue</title>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css"> -->
    <link rel="stylesheet" href="/tp_php_v1/web/css/main.css">
    <link rel="stylesheet" href="/tp_php_v1/web/css/bootstrap.min.css">
    <style type="text/css">
        body {
            font: 14px sans-serif;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <?php include('nav.php') ?>
    </div>
    <div class="page-header">
        <h1>Bonjour, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Bienvenue sur notre site.</h1>
    </div>
    <p>
        <a href="reset-password.php" class="btn btn-warning">Réinitialiser votre mot de passe</a>
        <a href="logout.php" class="btn btn-danger">Se deconnecter</a>
    </p>


    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="/tp_php_v1/web/index.php" role="tab" aria-controls="home">Tout les articles</a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="admin.php" role="tab" aria-controls="profile">Vos Article</a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="pageArticle.php" role="tab" aria-controls="messages">Ajouter de nouveau article</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="welcome.php" role="tab" aria-controls="settings">paramétre</a>
                </div>
            </div>
        </div>
    </div>

<!-- <script src="/tp_php_v1/web/css/bootstrap.min.js"></script> -->
</body>

</html>