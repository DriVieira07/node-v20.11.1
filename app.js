const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/manipulacao-string', (req, res) => {
    const texto = req.body.texto;

    function isPalindrome(str) {
        const cleanStr = str.replace(/\s/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    const palindromo = isPalindrome(texto);

    function countCharacters(str) {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    }

    const ocorrencias_caracteres = countCharacters(texto);

    res.json({ palindromo, ocorrencias_caracteres });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
