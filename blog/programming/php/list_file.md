#### List File

Pada catatan ini, saya ingin membuat program PHP untuk menampilkan list file di server.

```php
<?php

$title = "List File";
$os_type = PHP_OS;
$os_name = php_uname();
$dirSeparator = "";
$programPath = $_SERVER['REQUEST_URI'];



if(isset($_GET['dir'])){
	echo "
<html>
	<head>
		<title>{$title}</title>
	</head>
	<body>
		<h2>{$title}</h2>
		<hr>
		<pre>
";
	BacaDir($_GET['dir'], CheckOSSeparator($os_type) );
	echo "
		</pre>
		<hr>
		<small>{$title} | Develop by Ana Nurdiana &copy; 2019 | {$os_type} - {$os_name}</small>
	</body>
<html>
";
} else if(isset($_GET['file'])){
	BacaFile($_GET['file'], CheckOSSeparator($os_type));
} else {
	echo "
<html>
	<head>
		<title>{$title}</title>
	</head>
	<body>
		<h2>{$title}</h2>
		<hr>
		<pre>
";
	if($os_type == "WINNT"){
		BacaDir("C:\\", CheckOSSeparator($os_type) );
	} else if($os_type == "Linux"){
		BacaDir("/", CheckOSSeparator($os_type) );
	}
	echo "
		</pre>
		<hr>
		<small>{$title} | Develop by Ana Nurdiana &copy; 2019 | {$os_type} - {$os_name}</small>
	</body>
<html>
";
}



function BacaDir($dir, $dirSeparator){
	$programPath = $_SERVER['REQUEST_URI'];
	$programPath = explode("?",$programPath);
	$programPath = $programPath[0];
	$files1 = scandir($dir);
	for($i = 0; $i < count($files1); $i++){
	if( is_dir($dir.$files1[$i]) ){
			if($files1[$i] == '.'){
				echo "D\t<a href='#'>{$dir}{$files1[$i]}</a> \n";
			}else if($files1[$i] == '..'){
				echo "D\t<a href='#' onclick='window.history.back();'>{$dir}{$files1[$i]}</a> \n";
			} else {
				echo "D\t<a href='{$programPath}?dir={$dir}{$files1[$i]}{$dirSeparator}'>{$dir}{$files1[$i]}</a>\n";
			}
		} else {
			echo "F\t<a href='{$programPath}?file={$dir}{$files1[$i]}' target='__blank'>{$dir}{$files1[$i]}</a>\n";
		}
	}
}

function BacaFile($file){
	if (file_exists($file)) {
		header('Content-Description: File Transfer');
		header('Content-Type: application/octet-stream');
		header('Content-Disposition: attachment; filename="'.basename($file).'"');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		header('Content-Length: ' . filesize($file));
		readfile($file);
		exit;
	}
}

function CheckOSSeparator($os_type){
	if($os_type == "WINNT"){
		return "\\";
	} else if($os_type == "Linux"){
		return "/";
	}
}

```

Berikut [link program](https://ananurdiana.github.io/programming/php/list_file.php) lengkapnya.
