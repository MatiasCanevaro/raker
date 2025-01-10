const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.get = async (req, res) => {
        res.render("home");
};