import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'db', 'foods.json');
export const getFoods = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const foods = JSON.parse(data || '[]');
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};