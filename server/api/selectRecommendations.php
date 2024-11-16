<?php

include("connection.php");

$users_id=$_POST["users_id"];

$query = $connection->prepare("SELECT DISTINCT m.id,m.image FROM movies m 
                                    inner JOIN 
                                        ( SELECT m2.categories FROM movies m2 
                                        INNER JOIN clicks c 
                                        ON m2.id = c.movies_id 
                                        WHERE c.users_id = ? 
                                        GROUP BY m2.categories 
                                        ORDER BY COUNT(c.movies_id) DESC 
                                        LIMIT 2 ) top_category 
                                    ON m.categories = top_category.categories 
                                    WHERE m.id NOT IN 
                                        ( SELECT movies_id FROM bookmarks WHERE users_id = ? )
                            ");
$query->bind_param("ii",$users_id,$users_id);
$query->execute();

$result = $query->get_result();



if ($result->num_rows > 0) {
    $movies_array = [];
    while ($resultObject = $result->fetch_assoc()) {
        $movies_array[] = $resultObject;
    }

    echo json_encode($movies_array);
} else {
    
    $query2 = $connection->prepare("SELECT id,image FROM movies order by id desc limit 7");
    $query2->execute();

    $result2 = $query2->get_result();



    if ($result2->num_rows > 0) {
        $movies_array2 = [];
        while ($resultObject2 = $result2->fetch_assoc()) {
            $movies_array2[] = $resultObject2;
        }

        echo json_encode($movies_array2);
    }


}