<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// if (!file_exists('phpmailer/src/PHPMailer.php')) {
//   die("❌ PHPMailer.php dosyası bulunamadı.");
// }

// Form verilerini al
$name     = htmlspecialchars($_POST["name"]);
$email    = htmlspecialchars($_POST["email"]);
$phone    = htmlspecialchars($_POST["phone"]);
$message  = htmlspecialchars($_POST["message"]);
$help     = isset($_POST["help"]) ? implode(", ", $_POST["help"]) : '';
$referral = htmlspecialchars($_POST["referral"]);

// PHPMailer başlat
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'aljmahmoud85@gmail.com'; // 🔁 GMAIL ADRESİN
    $mail->Password   = 'fcyl adsv vzsd cjwa';       // 🔐 Gmail uygulama şifresi 
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Gönderen & Alıcı
    $mail->setFrom('aljmahmoud85@gmail.com', 'Klinik Web Sitesi');
    $mail->addAddress('mahmudaljabili@gmail.com');  // Sana gelecek

    // İçerik
    $mail->Subject = 'Yeni Randevu Başvurusu';
    $mail->Body    = "Yeni Başvuru:\n\nAd Soyad: $name\nE-posta: $email\nTelefon: $phone\nKonu: $help\nMesaj: $message\nReferans: $referral";

    $mail->send();
    header("Location: tesekkur.html");
    exit;
} catch (Exception $e) {
    echo "Mesaj gönderilemedi. Hata: {$mail->ErrorInfo}";
}
?>
