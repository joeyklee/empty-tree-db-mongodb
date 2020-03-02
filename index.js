const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
// config variables
const config = require('./config');
const PORT = config.PORT;
const mongoose = require('mongoose');

const MONGODB_URI = config.MONGODB_URI;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

const treeDB = require('./models/tree');

if (
  process.env.NODE_ENV !== 'PRODUCTION' ||
  process.env.NODE_ENV !== 'production'
) {
  app.use(logger('dev'));
}


// middleware for data
// 4. define your middleware: request handling
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// 4. define your middleware: result handling
app.use(bodyParser.json());
// middleware for static file server
// 4. Get the path to your public directory
const publicURL = path.resolve(`${__dirname}/public`);
// 5. Define the folder which will host your static files
app.use(express.static(publicURL));

// Views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// API endpoints

// '/api/v1/trees'
/**
 * GET
 */
app.get('/api/v1/trees', async (req, res, next) => {
  try {
    const data = await treeDB.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    res.json({ error: JSON.stringify(error) });
  }
});

/**
 * POST
 */
app.post('/api/v1/trees', async (req, res, next) => {
  try {
    const newPost = {
      latitude: Number(req.body.latitude),
      longitude: Number(req.body.longitude),
      empty: Boolean(req.body.empty),
    };
    const newData = await treeDB.create(newPost);
    res.json(newData);
  } catch (error) {
    res.json({ error: JSON.stringify(error) });
  }
});

// '/api/v1/trees:id'
/**
 * GET:id
 */
app.get('/api/v1/trees/:id', async (req, res, next) => {
  try {
    const selected = await treeDB.findOne({_id:req.params.id});
    res.json(selected);
  } catch (error) {
    res.json({ error: JSON.stringify(error) });
  }
});

/**
 * PUT
 */
app.put('/api/v1/trees/:id', async (req, res, next) => {
  try {
    const updatedPost = {
      latitude: Number(req.body.latitude),
      longitude: Number(req.body.longitude),
      empty: Boolean(req.body.empty)
    };

    const updatedData = await treeDB.findOneAndUpdate({_id:req.params.id}, updatedPost, {new: true})
    res.json(updatedData);
  } catch (error) {
    res.json({ error: JSON.stringify(error) });
  }
});

/**
 * DELETE
 */
app.delete('/api/v1/trees/:id', async (req, res, next) => {
  try {
  const deletedDocument = await treeDB.findOneAndDelete(req.params.id);
  res.json({"message":"successfully removed item", "data": JSON.stringify(deletedDocument) });
  } catch (error) {
    res.json({ error: JSON.stringify(error) });
  }
});


// Run the server
app.listen(PORT, () => {
  console.log(`the app is running at: http://localhost:${PORT}`);
});
