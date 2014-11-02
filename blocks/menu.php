<div class="mypage" style="width:260px; float:left;"> <!--категорії-->
    <menu>
    <?php
    $sql_cat = "SELECT * FROM categories ORDER BY id_cat ASC";
    $query_cat = mysql_query($sql_cat) or die(mysql_error());
    while($row_cat = mysql_fetch_assoc($query_cat)){
        $str = preg_replace('/([^\s]{20})[^\s]+/', '<span title="$0">$1...</span>', $row_cat['name_cat']);
        ?>
        <li class="mypage" style="width: 100%;list-style-type: none; padding:10px;">
            <a class="button" style="width:180px;" href="?id_cat=<?=$row_cat['id_cat']?>" ><?=$str?></a>
        </li>
        <?php
    }
    ?>
    </menu>

</div><!--категорії-->
