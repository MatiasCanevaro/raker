const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getHome = async (req, res) => {
    res.render("home", { shortUrl: null });
};

exports.createShortURL = async (req, res) => {
    try {
        const { nanoid } = await import('nanoid');
        const { long_url } = req.body;
        const short_url = nanoid(7);

        const newUrl = await prisma.url.create({
            data: {
                long_url,
                short_url,
            },
        });
        
        res.render("home", { shortUrl: newUrl.short_url });

    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).send("An error occurred while creating the short URL.");
    }
};

exports.getWebpage = async (req, res) => {
    const { shortUrl } = req.params;
    const url = await prisma.url.findFirst({
        where: { short_url: shortUrl },
    });

    if (!url) {
        return res.status(404).render("404");
    }

    res.redirect(url.long_url);
};