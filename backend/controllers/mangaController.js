const mangaService = require("../services/mangaService");

async function listMangas(req, res, next) {
    try {
        const mangas = await mangaService.getAllMangas();
        res.json({ data: mangas });
    } catch (error) {
        next(error);
    }
}

async function getManga(req, res, next) {
    try {
        const { id } = req.params;
        const manga = await mangaService.getMangaById(id);

        const ApiError = require("../utils/ApiError");

    if (!manga) {
        return next(ApiError.notFound("Manga not found"));
    }


        res.json({ data: manga });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listMangas,
    getManga
};
