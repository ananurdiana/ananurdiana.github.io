# Belajar Postscript
PostScript (PS) adalah sebuah bahasa komputer untuk membuat gambar vektor. Bahasa ini bertipe dinamis, konkatenatif dan dibuat oleh John Warnock, Charles Geschke, Doug Brotz, Ed Taft and Bill Paxton pada tahun 1982. Bahasa ini digunakan sebagai sebuah bahasa deskripsi halaman di lingkungan penerbitan elektronik dan komputer meja.

 - Extensi file*.ps

Contoh file (Hello World): 
```
%!PS
 /Courier             % name the desired font
 20 selectfont        % choose the size in points and establish 
                      % the font as the current one
 72 500 moveto        % position the current point at 
                      % coordinates 72, 500 (the origin is at the 
                      % lower-left corner of the page)
 (Hello world!) show  % stroke the text in parentheses
 showpage             % print all on the page
```

## Membuat pdf dengan command gs
Contoh: 
```
gs -o coba2.pdf -sDEVICE=pdfwrite -g5950x8420 -c /Times-Roman findfont 32 scalefont setfont -c 0.1 0.1 0.1 0.5 setcmykcolor -c 40 rotate -c 200 200 moveto -c \("Belajar membuat PDF"\) show -c showpage
```

## Watermark di pdf
Contoh:
```
pdftk file-input.pdf background file-watermark.pdf file-output output.pdf
```

## Referensi
- [Wikipedia](https://en.wikipedia.org/wiki/PostScript)
- [Paul Bourke](http://paulbourke.net/dataformats/postscript/)
- [gs (Ghostscript)](https://linux.die.net/man/1/gs)
- [pdftk](https://linux.die.net/man/1/pdftk)