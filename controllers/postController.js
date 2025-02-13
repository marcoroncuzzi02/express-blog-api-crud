const posts = require('../data/postContent');

//index
function index(req, res) {
    res.json(posts);
}
//show
function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);

    if(!post){
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "post non trovato"
        })
    }

    res.json(post);
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
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);

    if(!post){
        
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "post non trovato"
        })
    }

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }