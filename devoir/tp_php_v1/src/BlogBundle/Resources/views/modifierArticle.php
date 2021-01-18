<?php

 define( '__ROOT__', dirname('../../../../app/config/mysqli_connect.php'));
 require_once( __ROOT__ . '/mysqli_connect.php');

$id = $_REQUEST['id'];

$query = "SELECT * FROM article WHERE id='" . $id . "'";
$result = mysqli_query($dbc, $query) or die(mysqli_error($dbc));
$row = mysqli_fetch_assoc($result);

// if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
//     header("location: login.php");
//     exit;
// }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/tp_php_v1/web/css/main.css">
    <link rel="stylesheet" href="/tp_php_v1/web/css/bootstrap.min.css">
    <title>Modifier Article</title>
</head>

<body>
    <div class="wrapper">
        <?php require('nav.php') ?>
    </div>

    <?php
    $status = "";
    // if (isset($_POST['new']) && $_POST['new'] == 1) {
    if (isset($_POST['update'])) {
        $id = $_REQUEST['id'];
        $title = $_REQUEST['title'];
        $author = $_REQUEST['author'];
        $category = $_REQUEST['category'];
        $content = $_REQUEST['content'];

        $update = "UPDATE article SET `title`= '" . $title . "',`author` = '" . $author . "', `category` = '" . $category . "', `content` = '" . $content . "'  WHERE `id` = '" . $id . "'";
        mysqli_query($dbc, $update) or die(mysqli_error($dbc));
        $status = "Enregistrement effectuer avec succès. <br> <br> 
        <a href='admin.php'> Admin PHP </a>";
        echo $status;
        header("location: admin.php");
    } else { ?>
        <div class="container-fluid">

            <form method="post" action="modifierArticle.php">
                <div class="form-group col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
                    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                    <label for="exampleFormControlInput1">Titre</label>
                    <input type="text" value="<?php echo $row['title']; ?>" name="title" class="form-control" id="exampleFormControlInput1">
                    <label for="exampleFormControlInput1">Auteur</label>
                    <input type="text" value="<?php echo $row['author']; ?>" name="author" class="form-control" id="exampleFormControlInput1">
                    <label for="exampleFormControlInput1">Catégorie</label>
                    <input type="text" value="<?php echo $row['category']; ?>" name="category" class="form-control" id="exampleFormControlInput1">
                </div>

                <div class="form-group col-8 col-sm-8 col-md-8 col-lg-8 ">
                    <label for="exampleFormControlTextarea1">Contenu</label>
                    <textarea class="form-control" name="content" id="exampleFormControlTextarea1" rows="5"><?php echo $row['content'] ?></textarea>
                </div>

                <button  type="submit" name="update"  class="btn btn-success">modifier</button>
            </form>
        </div>
    <?php }

    ?>
    </div>
</body>

</html>