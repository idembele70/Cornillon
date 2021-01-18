<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <link rel="shortcut icon" href="favicon.png" type="image/png">
  <title>TP PHP Blog</title>
  <link rel="stylesheet" href="/tp_php_v1/web/css/bootstrap.min.css">
  <link rel="stylesheet" href="/tp_php_v1/web/css/main.css">
</head>

<body>
  <div class="wrapper">
    <?php
    session_start();
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
      header("location: ../src/BlogBundle/Resources/views/login.php");
      exit;
    }
    $username = $_SESSION['username'];
    include_once('nav.php'); ?>
    <div class="articles">
    <?php
            define( '__ROOT__', dirname('../app/config/mysqli_connect.php'));
            require_once( __ROOT__ . '/mysqli_connect.php'); ?>

      <div class="container">
        <div class="row">
          <?php
          $query = "SELECT * FROM article";
          $response = @mysqli_query($dbc, $query);
          if ($response) {
            while ($row = mysqli_fetch_array($response)) {
          ?>
              <article class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h1><?php echo $row['title']; ?></h1>
                <div class="meta-data">
                  <span class="author">Auteur: <?php echo $row['author']; ?></span> -
                  <span class="category">Catégorie: <?php echo $row['category']; ?></span> -
                  <span class="category">Catégorie: <?php echo $row['category']; ?></span> -
                  <span class="creation-date">Date de création: <?php echo $row['createdAt']; ?></span>
                </div>
                <p><?php echo $row['content']; ?></p>
              </article>


          <?php    }
          }  ?>
        </div>
      </div>
    </div>
  </div>

</body>

</html>