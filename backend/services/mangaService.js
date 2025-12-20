// backend/services/mangaService.js

const mangaModel = require("../models/mangaModel");

async function getAllManga() {
    // пока что заглушка под БД
    return mangaModel.getAll();
}

async function getMangaById(id) {
    return mangaModel.getById(id);
}

module.exports = {
    getAllManga,
    getMangaById
};
