import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'db', 'orders.json');

export const getOrders = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const orders = JSON.parse(data || '[]');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addOrder = (req, res) => {
    try {
        const { clientId, foodId, count } = req.body;

        const orderCount = Number(count);
        if (!orderCount || orderCount < 1 || orderCount > 10) {
            return res.status(400).json({ 
                message: "Buyurtma miqdori kamida 1ta va kopi bilan 10 ta bolishi kerak!" 
            });
        }

        const data = fs.readFileSync(filePath, 'utf-8');
        const orders = JSON.parse(data || '[]');

        const newOrder = {
            id: orders.length ? orders[orders.length - 1].id + 1 : 1,
            clientId: Number(clientId),
            foodId: Number(foodId),
            count: orderCount
        };

        orders.push(newOrder);
        fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

        res.status(201).json({ message: "Buyurtma qo'shildi", order: newOrder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};