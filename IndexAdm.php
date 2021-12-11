<?php
    include_once($_SERVER["DOCUMENT_ROOT"]."/api/v1/controllers/User.php");
    $userController = new User(false);
    if (!$userController->isLoggedIn()) {
        header("Location: /");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
        include_once($_SERVER["DOCUMENT_ROOT"]."/components/template/head.php");
    ?>
</head>
<body>
    <?php
        include_once($_SERVER["DOCUMENT_ROOT"]."/components/template/headerLogged.php");
        include_once($_SERVER["DOCUMENT_ROOT"]."/components/reportsAdm.php");
        // include($_SERVER["DOCUMENT_ROOT"]."/components/mapForm.php");
        include_once($_SERVER["DOCUMENT_ROOT"]."/components/template/footer.php");
    ?>
</body>
</html>