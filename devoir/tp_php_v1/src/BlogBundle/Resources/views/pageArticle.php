<?php
session_start();
$username = $_SESSION["username"];
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
    <link rel="stylesheet" href="/tp_php_v1/web/css/main.css">
    <link rel="stylesheet" href="/tp_php_v1/web/css/bootstrap.min.css">
    <title>Saisir Data</title>
</head>

<body>
    <div class="wrapper">
        <?php
        include 'nav.php';
        ?>
    </div>
    <div class="containeur-fluid">
        <form action="pageArticle.php" method="post">
            <div class="form-group col-6 col-md-4">
                <label for="exampleFormControlInput1">Titre</label>
                <input type="disabled" class="form-control" id="exampleFormControlInput1" name="titre">
                <label for="exampleFormControlInput1">Auteur</label>
                <input type="disabled" class="form-control" id="exampleFormControlInput1" name="auteur">
                <!-- <label for="disabledI">créé par</label> -->
                <input type="hidden" class="form-control" id="disabledI" name="createdBy" value="<?php echo $username; ?>">
                <label for="exampleFormControlInput1">Catégorie</label>
                <input type="disabled" class="form-control" id="exampleFormControlInput1" name="categorie">
            </div>
            <div class="form-group col-8">
                <label for="exampleFormControlTextarea1">Contenue</label>
                <textarea class="form-control" name="content" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            
                <button type="submit" name="valider" class="btn btn-success" >Ajouter</button>
            
        </form>

    </div>
    <?php
    if (isset($_POST['valider'])) {
        $titre = $_POST['titre'];
        $auteur = $_POST['auteur'];
        $categorie = $_POST['categorie'];
        $createdBy = $_POST['createdBy'];
        $content = $_POST['content'];

        $date = date("y-m-d");

        define( '__ROOT__', dirname('../../../../app/config/mysqli_connect.php'));
        require_once( __ROOT__ . '/mysqli_connect.php');

        $sql = "INSERT INTO article(title, author, category, content, createdAt, createdBy) VALUES ('" . $titre . "', '" . $auteur . "', '" . $categorie . "', '" . $content . "', '" . $date . "', '" . $createdBy . "')";

        if (mysqli_query($dbc, $sql)) {
            echo "Enregistrement Effectuer avec Succes";
        } else {
            echo "Erreur" . $sql . mysqli_error($dbc);
        }
        
    }
    ?>

</body>

</html>