<?php

if (isset($_POST['Name'])){
        $name = $_POST['Name'];
        $contacts = $_POST['Phone'];
        $to='user@example.com';
        $subject='=?utf-8?B?'.base64_encode('Тест').'?=';
        $message=chunk_split(base64_encode("Имя: $name Телефон: $contacts"));
        $headers='MIME-Version: 1.0'."\r\n".
                 'Content-Transfer-Encoding: base64'."\r\n".
                 'Content-Type: text/plain; charset=utf-8';
        mail($to,$subject,$message,$headers);
        } 
 ?>