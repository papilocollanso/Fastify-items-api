const {getItems, getItem, addItem, deleteItem, updateItem } = require('../controllers/items');
 

//Item schema

const Item = {
     
  type: "object",
  properties: {
  id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items:Item,
      },
    },
  },
  handler: getItems,
};


const getItemOpsts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};


const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },

    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts ={
      schema: {
       200: {
          type: 'object',
          properties: {
          message:{type: 'string'}
          },
       },
  
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: updateItem,
};






function itemRoutes(fastify, options, done) {
  // GET all items
  fastify.get("/items", getItemsOpts);

  // GET single items

  fastify.get("/items/:id", getItemOpsts);

  // Add item
  fastify.post("/items", postItemOpts);

  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);

  // update item
  fastify.put("/items/:id", updateItemOpts);

  done();
};


module.exports = itemRoutes;
