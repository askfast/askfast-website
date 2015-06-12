<?php

/*
$contactName = isset($_REQUEST['contactName'])?$_REQUEST['contactName']:"";
$contactEmail = isset($_REQUEST['contactEmail'])?$_REQUEST['contactEmail']:"";
$contactSubject = isset($_REQUEST['contactSubject'])?$_REQUEST['contactSubject']:"";
$contactMessage = isset($_REQUEST['message'])?$_REQUEST['message']:"";
*/

$contactEmail = "noreply <noreply@ask-fast.com>";

$toEmail = "info@ask-fast.com";

$isDebug = true;

function sendMail() {
        global $toEmail;
        $header =
                'From: '.$contactEmail. "\r\n";
                'Reply-To: info@ask-fast.com' . "\r\n";
                'Return-Path: info@ask-fast.com' . "\r\n";

        //risky custom data
        $query = explode('&', $_SERVER['QUERY_STRING'] );
        $message = "";
        foreach($query AS $q )
        {
                $kv = explode('=', $q );
                $k = mysql_real_escape_string( $kv[0] );
                $v = mysql_real_escape_string( urldecode($kv[1] ) ); // somewhere endlines get lost
                $message .= $k.' = '.$v ."\n";
        }

        if( $message == '' )return "FALSE";


        global $isDebug;
        if( $isDebug)
        {
                mail("sstam@ask-cs.com",  'sendMail form', $message, $header );
        }


        $ret = mail($toEmail,'contact-formulier',$message ); //,$header);

        if( $ret ){
                return "TRUE";
        }else{
                return "FALSE";
        }


}

echo sendMail();

?>
