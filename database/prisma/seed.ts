import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Seed Users
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin User',
            password: 'hashed_password_here', // In a real app, hash this!
            role: 'admin',
        },
    })

    const customer = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            name: 'John Doe',
            password: 'hashed_password_here',
            role: 'customer',
        },
    })

    console.log({ admin, customer })

    // Seed Products
    const product1 = await prisma.product.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Smartphone X',
            description: 'Latest model with AI features',
            price: 999.99,
            stock: 50,
            imageUrl: 'https://placehold.co/600x400?text=Smartphone+X',
        },
    })

    const product2 = await prisma.product.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Wireless Headphones',
            description: 'Noise cancelling headphones',
            price: 199.99,
            stock: 100,
            imageUrl: 'https://placehold.co/600x400?text=Headphones',
        },
    })

    console.log({ product1, product2 })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
