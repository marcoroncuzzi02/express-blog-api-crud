const posts = require('../data/postContent');

//index
function index(req, res) {
    res.json(posts);
}
//show
function show(req, res) {
    const id = parseInt(req.params.id)
    
    res.send('Dettagli del post ' + req.params.id);
}
//store
function store(req, res) {
    res.send('Creazione nuovo post');
}
//update
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}
//modify
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}
//destroy
function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }