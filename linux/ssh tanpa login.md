# SSH Tanpa Login

Reference: [SSH login without password](http://www.linuxproblem.org/art_9.html)

## Tujuan saya
Saya ingin login ke SSH dari bash script, jadi tanpa meminta password

## Langkah-langkah
1. Login ke komputer A sebagai user a dan generate pasangan authentication keys. Jangan memasukan passphrase:
```
a@A:~> ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/a/.ssh/id_rsa): 
Created directory '/home/a/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/a/.ssh/id_rsa.
Your public key has been saved in /home/a/.ssh/id_rsa.pub.
The key fingerprint is:
3e:4f:05:79:3a:9f:96:7c:3b:ad:e9:58:37:bc:37:e4 a@A
```
2. Sekarang, gunakan ```SSH``` untuk membuat folder ```~/.ssh``` sebagai user b di komputer B. (Folder mungkin sudah tersedia, tidak masalah):
```
a@A:~> ssh b@B mkdir -p .ssh
b@B's password: 
```
3. Terakhir, tambahkan public key baru ke ```b@B:.ssh/authorized_keys``` dan masukan password b di akhirnya:
```
a@A:~> cat .ssh/id_rsa.pub | ssh b@B 'cat >> .ssh/authorized_keys'
b@B's password: 
```
4. Mulai dari sekarang, kamu bisa login ke komputer B sebagai b dari komputer A sebagai a tanpa password:
```
a@A:~> ssh b@B
```

## Remote SSH dari BASH Script
Reference: [](https://stackoverflow.com/questions/216202/why-does-an-ssh-remote-command-get-fewer-environment-variables-then-when-run-man)
Caranya
```
#!/bin/bash
ssh user@host "bash --login -c 'command arg1 ...'"
```
