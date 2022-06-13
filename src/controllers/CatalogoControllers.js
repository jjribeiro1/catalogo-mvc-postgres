const Carros = require('../models/Carros');
const orderById = { order: [["id", "ASC"]] };

let message = "";

// listagem do catalogo
const getAll = async (req, res) => {
    try {
        setTimeout(() => {
            message = "";
          }, 1000)

        const listaCarros = await Carros.findAll(orderById);
        res.render("index", {
            listaCarros,
            carroPut: null,
            carroDel: null,
            message,
            
        });
    }
    catch (err) {//deu erro, venha nesse caminho
        res.status(500).send({ err: err.message });//vem do objeto erro
    };
};

// listagem detalhada
const detalhes = async (req, res) => {
    try {
        const listaCarros = await Carros.findAll(orderById);
        res.render("detalhes", { listaCarros });
    }
    catch (err) {
        res.status(500).send({ err: err.message });
    };
};


// pegar id do carro
const getById = async (req, res) => {
    try {
        const method = req.params.method;
        const listaCarros = await Carros.findAll(orderById);
        const carro = await Carros.findByPk(req.params.id);

        if (method == "put") {
            res.render("index", {
                listaCarros,
                carro,
                carroPut: carro,
                carroDel: null,
                message,
            });
        } else {
            res.render("index", {
                listaCarros,
                carro,
                carroPut: null,
                carroDel: carro,
                message,
            });
        }
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
};

const cadastro = (req, res) => {
    try {
        res.render('cadastro', {message});
    }
    catch (err) {
        res.status(500).send({ err: err.message });
    };
};

// Create
const create = async (req, res) => {
    try {
        const carro = req.body;
        
        if (!carro) {
            return res.redirect('/cadastro')
        };

        await Carros.create(carro)
        message = "Carro criado com sucesso!";
        res.redirect("/");
    }
    catch (err) {
        res.status(500).send({ err: err.message });
    };
};

// Update
const update = async (req, res) => {
    try {
        const carro = req.body
        await Carros.update(carro, { where: { id: req.params.id } });
        message = "Carro atualizado com sucesso!";
        res.redirect("/")
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
};

// Delete 
const remove = async (req, res) => {
    try {
        await Carros.destroy({ where: { id: req.params.id } });
        message = "Carro removido com sucesso!";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
};

module.exports = {
    getAll,
    detalhes,
    getById,
    cadastro,
    create,
    update,
    remove
};