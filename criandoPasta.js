

const pasta = path.join(__dirname, 'lojas', '201', 'funcionarios');

try {
    await fs.mkdir();
    console.log(pasta, 'criada')
} catch (error) {
    console.log('Pasta já existe');
}

