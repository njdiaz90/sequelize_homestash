const Stash = require('../models/Stash');
const Item = require('../models/Item');

const createStash = async (name, id) => {
  try {
    let createdStash = await Stash.create({ name: name, createdById: id });
    newStash = createdStash.dataValues;
    return newStash;
  } catch(error) {
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const getAllStashes = async () => {
  try{
    const results = await Stash.findAll(
      {
        include: [{ model: Item}]
      }
    );
    return results;
  } catch(error){
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

const findStash = async id => {
  try {
    const searchResults = await Stash.findByPk(id);
    if (searchResults && searchResults.dataValues) {
      const stash = searchResults.dataValues;
      return stash;
    }
    return null;
  } catch (error) {
    console.log('this is a repo error', error);
    throw { status: 500, message: 'Internal Server Error' };
  }
}

module.exports = {
  createStash,
  findStash,
  getAllStashes,
}