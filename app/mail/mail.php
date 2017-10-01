<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

/**********************  Settings ****************************/

$admin_email    = "aga-franch@yandex.ru";

// SMTP
// $email_host     = "smtp.yandex.ru";
// $email_port     = "465";
// $email_login    = "";
// $email_password = "";

$subject = "Заявка с сайта «АзияГрандАвто - Франшиза»";

$user = array(
	// Основные поля
	'name'  => isset($_POST["name"])  ? $_POST["name"]   : "",
	'phone' => isset($_POST["phone"]) ? $_POST["phone"]  : "",
	'email' => isset($_POST["email"]) ? $_POST["email"]  : "",
	'city'  => isset($_POST["city"])  ? $_POST["city"]   : "",
	'text'  => isset($_POST["text"])  ? $_POST["text"]   : "",
);

$dict = array(
	// Основные поля
	'name'  => 'Имя',
	'phone' => 'Телефон',
	'email' => 'Email',
	'city'  => 'Город',
	'text'  => 'Сообщение',
);

$body  = "<!DOCTYPE html>";
$body .= "<html><head>";
$body .= "<meta charset='UTF-8' />";
$body .= "<title>".$subject."</title>";
$body .= '</head><body><table cellspacing=0 style="border:1px solid #ccc;">';

foreach ($user as $key => $value) {
	if ( !$value ) continue;

	$body .= '<tr><td style="padding:5px 30px 5px 10px;border:1px solid #ccc;font-weight:bold;">' . $dict[$key] . ': </td>';
	$body .= '<td style="padding:5px 30px 5px 10px;border:1px solid #ccc;">' . $value . '</td></tr>';
}

$body .= "</table></body></html>";

/************************************************************/

date_default_timezone_set("Europe/Moscow");

require "mailer/PHPMailerAutoload.php";
$mail = new PHPMailer();

if ( file_exists("/language/phpmailer.lang-ru.php") ) 
	$mail->SetLanguage("ru", "/language/");
else 
	$mail->SetLanguage("en", "/language/");

// SMTP
// $mail->isSMTP();
// $mail->Host = $email_host;
// $mail->Port = $email_port;
// $mail->SMTPAuth = true;
// $mail->Username = $email_login;
// $mail->Password = $email_password;

$mail->CharSet = "UTF-8";
$mail->setFrom($admin_email, $admin_email);
$mail->addReplyTo($admin_email, $admin_email);
$mail->Subject = $subject;
$mail->isHTML(true);

$mail->msgHTML($body);

if ( isset($_FILES['file1']) ) {
	if($_FILES['file1']['error'] == 0) {
		$mail->AddAttachment($_FILES['file1']['tmp_name'], $_FILES['file1']['name']); 
	} 
}

$mail->addAddress($admin_email, $admin_email);
// $mail->addAddress('wamag@mail.ru', 'wamag@mail.ru');
// $mail->addAddress('cde3@mail.ru', 'cde3@mail.ru');

if ( !$mail->send() ) {
	$output = $mail->ErrorInfo;
} else {
	$output = "Mail send OK";
}



$token = '360040844:AAHmdgcqz1EheLNS2HJH_eH3cdfFT0OOS2o';
$chat_id = '-200154786';
$text = '
Заявка с сайта «АзияГрандАвто - Франшиза»

Имя: '.$user['name'].'
Телефон: '.$user['phone'].'
Город: '.$user['city'].'
'; 

$url = "https://api.telegram.org/bot".$token."/sendMessage?disable_web_page_preview=true&chat_id=".$chat_id."&text=".urlencode($text);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);



echo $output;