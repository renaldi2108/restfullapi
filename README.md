# Web Service with Authentication From JWT(JSON Web Token)

Use package: jsonwebtoken, mongoose, express, morgan, dan body-parser.

Note:

*Menggunakan database NoSQL atau MongoDB

*Menggunakan nama database "datamongo"

*Menggunakan port 1998 (tanggal lahir gue)

*Untuk penggunaannya pastikan sudah terkoneksi dengan node pada projectnya dan juga databasenya

-Insert sendiri pada collection "users" dengan format json:

username:"misalkan"

password:"misal"

admin:true

-Tools untuk testing yang saya gunakan adalah Postman dari ekstensi chrome

-Di bagian bawah url ada Authorization, Headers, Body, dll.

-Yang diisi untuk verifikasi adalah pada bagian body.

-Pastikan menggunakan method post untuk memasukkan username dan password authenticationnya. Dan pastikan username dan passwordnya sama persis dengan ada yang di database, karena authenticationnya terkhusus untuk akun yang sudah ada di database mongodb dengan collection users

-Jangan di close dulu setelah autentikasinya berhasil, masukkan sesuatu di bagian headers yang ada di bawah url itu dengan format:
x-access-token:(isi dengan token yang kalian dapat)

-Hapus tanda kurung dengan token yang kamu dapat saat autentikasi tersebut.

-Setelah melewati autentikasi dan berhasil, maka bisa melihat, menginput, dan mengedit data sesuka hatimu.

*Untuk schema databasenya yang lengkapnya kalian bisa melihat schema databasenya di folder "model".


Jika ada penjelasan yang kurang jelas untuk kamu, silahkan mention pada akun twitter saya atau bisa mengirimkan inbox message pada sosial media facebook.

Thanks ...


Abaikan: <a href="https://seo.renaldirey.id/">SEO Service</a>, <a href="https://seo.renaldirey.id/">Jasa SEO</a>, <a href='https://renaldirey.id/ahli-dan-pakar-seo-indonesia/' title='Ahli SEO'>Ahli SEO</a>, <a href='https://renaldirey.id/ahli-dan-pakar-seo-indonesia/' title='Pakar SEO'>Pakar SEO</a>, <a href='https://renaldirey.id/ahli-dan-pakar-seo-indonesia/' title='Master SEO'>Master SEO</a>, <a href='https://renaldirey.id/ahli-dan-pakar-seo-indonesia/' title='Mastah SEO'>Mastah SEO</a>, <a href='https://renaldirey.id/ahli-dan-pakar-seo-indonesia/' title='Praktisi SEO'>Praktisi SEO</a>