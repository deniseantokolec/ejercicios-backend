const { mysqldatabase } = require('./mysql')
const knex = require('knex')(mysqldatabase);

// knex.schema.createTable('datos', table => {
//     table.increments('id')
//     table.string('title')
//     table.integer('price')
//     table.string('img')
// })
// .then(()=> console.log('tabla creada'))
// .catch((err) => {console.log(err); throw err })
knex('datos').insert([
    {title: 'Laptop'},
    {price: 12000},
    {img: 'https://images.fravega.com/f1000/5ab6af9703136da67b83d8ffa568ecf0.jpg.webp'}
])

knex('datos').insert([
    {title: 'tv32'},
    {price: 12000},
    {img: 'https://medias.musimundo.com/medias/00543026-146105-146105-01-146105-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2Nzk4NnxpbWFnZS9qcGVnfGhkZi9oODMvMTAzOTA2OTM0MTI4OTQvMDA1NDMwMjYtMTQ2MTA1LTE0NjEwNV8wMS0xNDYxMDVfMDEuanBnX3NpemU1MTV8MzA0YjBkYjBiYTIwMzViNGI2OWNhMWFhNWM3NDMxOTA1ODg1N2RiNTA5NzE2MjhkZjRjODUxNWYzM2RkOTIwMA'}
])

knex('datos').insert([
    {title: 'Lavarropas'},
    {price: 12000},
    {img: 'https://images.fravega.com/f1000/b2b41234345073e24bbec07b45ed84fe.jpg.webp'}
])

knex.from('datos').select('*')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['title']} ${row['price']} ${row['img']}`);
        }
    }).catch((err) => {console.log(err); throw err})

