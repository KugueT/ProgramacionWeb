<?php
    include_once($_SERVER["DOCUMENT_ROOT"]."/api/v1/controllers/User.php");
    $userController = new User(false);
    if (!$userController->isLoggedIn()) {
        header("Location: /");
    }
    // session_start(); // This is reqd once on any page you use $_SESSION
    // // Then on your page you can use 
    if (isset($_SESSION['level']) && $_SESSION['level'] === 1) {
        header("Location: /IndexAdm.php");
    }
    
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php
        include_once($_SERVER["DOCUMENT_ROOT"] . "/components/template/head.php");
    ?>
</head>

<body>
    <?php
        include_once($_SERVER["DOCUMENT_ROOT"] . "/components/template/headerLogged.php");
        include_once($_SERVER["DOCUMENT_ROOT"] . "/components/reports.php");
        // include($_SERVER["DOCUMENT_ROOT"]."/components/mapForm.php");
        include_once($_SERVER["DOCUMENT_ROOT"] . "/components/template/footer.php");
    ?>
</body>

</html>