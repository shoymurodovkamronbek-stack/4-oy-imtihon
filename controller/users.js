import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(),'db', 'users.json');

export const getUsers = (req, res) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(data || '[]');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addClient = (req, res) => {
    try {
        const { username, telephone } = req.body;
        const data = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(data || '[]');

        const newClient = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            username: String(username),
            phonenum: String(telephone)
        };

        users.push(newClient);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

        res.status(201).json({ message: 'Mijoz qoshildi', client: newClient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};