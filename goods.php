<?php session_start();
$session_id = session_id();
 ?>
<?php  include_once 'admin/blocks/bd.php'; ?>
<?php require 'blocks/sum.php';?>
<?php include 'blocks/header.php';?>
<p align="left">
<input class="button gray" type="button" onclick="history.back()" value="<== ?????">
</p>
<div> <!--???????-->

<h4>??????? ? <a class="button gray" href="basket.php">???????</a>: <span style="color:red;"><?= $count?> </span>   ?? ????: <span style="color:red;"><?= $sum ?></span> ???.</h4>
</div><!--???????-->
<?php include 'blocks/begintable.php';?>
??? ?????<br>

<?php
if(isset($_GET)){
$id_good = $_GET['id_good'];

if (!isset($_COOKIE['view_'.$id_good])) {
    setcookie("view_".$id_good, 1, time()+3600);
    mysql_query("UPDATE goods SET views = views+1 WHERE id_good='$id_good'");
}

$id_cat = $_GET['id_cat'];
$p = $_GET['p'];

$sql_good ="SELECT * FROM goods WHERE id_good='$id_good' ORDER BY id_good ASC";
$query_good = mysql_query($sql_good) or die(mysql_error());
$row_good = mysql_fetch_row($query_good);


echo "??????????: ".$row_good[5];



  /*  $sql_basket = "SELECT * FROM goods, basket WHERE customer='$session_id' AND goods.id_good = basket.id_good";
    $query_basket = mysql_query($sql_basket) or die(mysql_error());
    if (mysql_num_rows($query_basket)>0) { echo "?";}else{echo "????";};*/
$str = preg_replace('/([^\s]{20})[^\s]+/', '<span title="$0">$1...</span>', $row_good[2]);
echo '<h4 style="color:red;" align="center">'.$str.'</h4>';
$str = preg_replace('/([^\s]{20})[^\s]+/', '<span title="$0">$1...</span>', $row_good[3]);
?>
<a class="button blue" style="width:50px; height:25px;" href="add_basket.php?id_good=<?=$id_good?>&id_cat=<?=$id_cat?>&p=<?=$_GET['p']?>">? ???????</a>
<br/>
<?php
echo 'ֳ??: '.$str.' ???.'.'<br/>';

?>

<div class="mypage" style="width:95%; background-color:#FDFDFD; font-family:'Times New Roman', Times, serif;">
<?php
echo $row_good[4];
echo ('</div>');
} else{
	header('Location: index.php');
}

?>


	<?php

require 'blocks/footer.php';
include 'blocks/endtable.php';?>