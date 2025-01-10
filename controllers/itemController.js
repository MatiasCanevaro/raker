const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllCategoryItems = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await prisma.category.findUnique({
            where: { id: categoryId },
        });
        const items = await prisma.item.findMany({
            where: {
              category_id: categoryId,
            },
        });
        res.render("items", {
            title: "Items",
            category: category,
            items: items
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("An error occurred while fetching categories.");
    }
};