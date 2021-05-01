const  laptopModel = require('../model/laptop')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    laptopModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil menginput penjualan laptop'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal menginput penjualan laptop'
    }))
})

exports.showAllData = () =>
new Promise((resolve, reject) =>{
    laptopModel.find()
        .then(result => {
            resolve({
                status : true,
                pesan : 'Berhasil menampilkan semua data penjualan laptop',
                data : result
            })
        }).catch(() => reject({
            status : false,
            pesan : 'Gagal menampilkan semua data penjualan laptop',
            data : []
        }))
})

exports.showDataById = (id) =>
new Promise((resolve, reject) =>{
    laptopModel.findOne({
        _id: objectId(id)
    }).then(result =>{
        resolve({
            status : true,
            pesan : 'Berhasil menampilkan semua data sesuai id penjualan laptop',
            data : result
        })  
    }).catch(() => reject({
        status : false,
        pesan : 'Gagal menampilkan semua data sesuai id penjualan laptop',
        data : null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) =>{
    laptopModel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil mengubah data penjualan laptop'
    })).catch(() => reject({
        status: false,
        pesan: 'gagal mengubah data penjualan laptop'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) =>{
    laptopModel.deleteOne({
        _id : objectId(id)
    }).then(() => resolve({
        status: true,
        pesan: 'Berhasil menghapus data penjualan laptop'
    })).catch(() =>({
        status: false,
        pesan: 'Gagal Menghapus data penjualan laptop'
    }))
})
