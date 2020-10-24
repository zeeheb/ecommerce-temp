const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//mongoose
//.connect('mongodb+srv://zeeheb:admin@donut-cluster-16dsd.mongodb.net/dnt-crud?retryWrites=true&w=majority', { useNewUrlParser: false})
//.then(() => console.log('mongodb connected !!!!!!!!!'))
//.catch(err => console.log(err));



///////////// ENDPOINTS DONUT

const Item = require('./models/Item');


app.post('/item', (req, res) => {
    console.log(req.body);

    const newItem = new Item({
        preco: req.body.preco,
        descricao: req.body.descricao
    });

    newItem.save().then(() => res.send('Item salvo com sucesso!!'))
});


app.get('/item', async (req, res) => {
    const items = await Item.find({});

    res.send(items);
})



/////////////

const port = 3001;

app.listen(process.env.PORT || port, () => console.log('Server running ...........!!!'));