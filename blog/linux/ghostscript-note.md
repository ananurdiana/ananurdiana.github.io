#### Ghostscript Note

##### Membuat password untuk file PDF
```
  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dBATCH -dNOPROMPT -dNOPAUSE -dQUIET -sOwnerPassword=aaa -sUserPassword=111 -sOutputFile=out.pdf in.pdf
```
#### Print file (pdf of ps)
- Menggunakan GS
```
gswin32c.exe -sDEVICE=mswinpr2 -dBATCH -dNOPAUSE -dNOPROMPT -dNoCancel -dPDFFitPage -sOutputFile="%printer%\\[printer_servername]\[printername]" "[filepath_to_pdf]"
```
- Menggunakan Plugin
```
gsbatchprint.exe -P "NAMA_PRINTER" -F "NAMA_FILE"
```
