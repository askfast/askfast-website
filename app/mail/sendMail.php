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
                'From: webform@ask-fast.com'. "\r\n";
                'Reply-To: info@ask-fast.com' . "\r\n";
        //risky custom data
        $query = explode('&', $_SERVER['QUERY_STRING'] );
        $message = "";
        foreach($query AS $q )
        {
                $kv = explode('=', $q );
                $k = mysql_escape_string( $kv[0] );
                $v = mysql_escape_string( urldecode($kv[1] ) ); // somewhere endlines get lost
                $message .= $k.' = '.$v ."\n";
        }
        if( $message == '' )return "FALSE";
        global $isDebug;
        if( $isDebug)
        {
                mail("lvdinten@ask-cs.com", 'sendMail form', $message, $header );
                //mail("xmao@ask-cs.com", 'sendMail form', $message, $header );
//              mail("tdejonge@ask-cs.com", "sendMail form", $message, $header );
                //mail("skroon@ask-cs.com",  'sendMail form', $message, $header );
                //mail("hvrooijen@ask-cs.com",  'sendMail form', $message, $header );
        }
        $ret = mail($toEmail,'contact-formulier',$message ); //,$header);
        $handle = fopen( 'mail.log', 'ab');
        fwrite( $handle, $message."\n".$header );
        fwrite( "\n\n" );
        fclose($handle);
        if( $ret ){
                return "TRUE";
        }else{
                return "FALSE";
        }
}
echo sendMail();
?>