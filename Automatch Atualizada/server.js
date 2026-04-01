const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Esta é a lista de carros que o seu botão azul vai buscar
const veiculos = [
    { id: 1, modelo: 'Civic G10', marca: 'Honda', preco: '120.000', imagem: 'https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?auto=format&fit=crop&q=80&w=800' },
    { id: 2, modelo: 'Corolla XEi', marca: 'Toyota', preco: '135.000', imagem: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800' },
    { id: 3, modelo: 'Compass Longitude', marca: 'Jeep', preco: '150.000', imagem: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80&w=800' }
];

app.get('/api/veiculos', (req, res) => {
    res.json(veiculos);
});

app.listen(3000, () => {
    console.log('🚀 MOTOR LIGADO! Servidor rodando em http://localhost:3000');
});