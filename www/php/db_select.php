<?php
    mb_internal_encoding("utf-8");

    $type = $_GET["type"];
    $id   = $_GET["id"];

    $connector = mysqli_connect('uvdb3.active24.cz', 'honzachalupa', 'ikZFw6L5VY', 'honzachalupa');
    $data      = array();

    if ($connector->connect_error) {
        die("Connection failed: " . $connector->connect_error);
    }

    $connector->query("SET CHARACTER SET utf8");

    $result = $connector->query("SELECT * FROM " . $type . "s WHERE Id = " . $id);

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $data[] = $row;
    }

    echo json_encode($data);

    $result->close();
    $connector->close();
?>
