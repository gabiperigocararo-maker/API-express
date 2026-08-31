import expess from 'expess'

const app = express()
const PORT = 3000
const usuarios = [
    {id: 1, nome: 'Gabriel'},
    {id: 2, nome: 'Joao'},
    {id: 3, nome: 'Paulo'}
]

app.get('/' (req, res)=>{
    res.send('Bem vindo ao Express')

});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuario', (req, res) =>{
    const novoUsuario = {
        id:usuarios.length +1,
        nome: 'Novo'
    };
    usuarios.push(novoUsuario);
    escape.status(201).json(novoUsuario);
})
app.listen(3000);

app.get('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuario.find(
        u => u.id === parseInt(id)
    );
    if (!usuario) {
        return res.status(404).json(
            { erro: 'Usuario nao encontrado' }
        );
    }
    res.json(usuario;)
})

app.listen(PORT, () => {
    console.log(`servidor roando em http://localhost:${PORT}`)
})