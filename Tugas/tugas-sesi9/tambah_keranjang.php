<?php
session_start();
$id = $_GET['id'];
$_SESSION['cart'][$id] = isset($_SESSION['cart'][$id]) ? $_SESSION['cart'][$id] + 1 : 1;
header("Location: cart.php");
?>
