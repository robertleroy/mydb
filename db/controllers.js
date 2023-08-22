const path = require("path");
const { uid } = require("uid/single");

const { writeDataToFile } = require("../utils");
const data = require("./data.json");

const getData = (req,res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

const getItem = (req,res) => {
  const idx = data.findIndex(el => el.id === req.params.id);
  try {
    if (idx > -1) {
      res.status(200).json(data[idx]);
    } else {
      res.status(404).send("Not found: " + req.params.id);
    }
  } catch (error) {
    console.log(error);
  }
}

const addItem = (req,res) => {
  const dt = Date.now();
  try {
    const newItem = {
      id: uid(12),
      title: req.body.title || "Title",
      content: req.body.content || "",
      completed: false,
      created: dt,
      updated: dt,
      tags: req.body.tags || [],
    }
    data.push(newItem);
    writeDataToFile(path.join(__dirname, "data.json"),data);
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
  }
}

const updateItem = (req,res) => {
  const idx = data.findIndex(el => el.id === req.params.id);
  try {
    if (idx > -1) {
      const { title, content, completed, tags } = req.body;
      data[idx].title = title || data[idx].title;
      data[idx].content = content || data[idx].content;
      data[idx].completed = completed || data[idx].completed;
      data[idx].updated = Date.now();
      data[idx].tags = tags || data[idx].tags;

      writeDataToFile(path.join(__dirname, "data.json"), data);
      res.status(200).json(data[idx]);
    } else {
      res.status(404).send("Not found: " + req.params.id);
    }
  } catch (error) {
    console.log("ERROR: ",error);
  }
}


const deleteItem = (req,res) => {
  const idx = data.findIndex(el => el.id === req.params.id);
  try {
    if (idx > -1) {
      data.splice(idx,1);
      writeDataToFile(path.join(__dirname, "data.json"), data);
      res.status(200).send("Deleted: " + req.params.id);
    } else {
      res.status(404).send("Not found: " + req.params.id);
    }
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getData,
  getItem,
  addItem,
  updateItem,
  deleteItem
}