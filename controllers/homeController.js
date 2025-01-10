const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.get = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.render("home", {
            title: "Home",
            categories: categories
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("An error occurred while fetching categories.");
    }
};