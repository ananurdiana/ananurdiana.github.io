#### Cara Menampilkan Database Size di MySQL / MariaDB
Jalankan query berikut di query editor:
```sql
SELECT
    table_schema AS 'DB Name',
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) AS 'DB Size in MB'
FROM
    information_schema.tables
GROUP BY
    table_schema;
```

Query tersebut akan menampilkan ukuran dari setiap database dari koneksi saat ini.

Jika ingin menampilkan ukuran dari satu database saja, tambahkan `WHERE` kedalam query:
```sql
SELECT
    table_schema AS 'DB Name',
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) AS 'DB Size in MB'
FROM
    information_schema.tables
WHERE
    table_schema = 'db_name'
GROUP BY
    table_schema;
sql
```
