const itemRepository = require('../repository/itemRepository');

const createItem = async item => {
  try {
    const newUser = await itemRepository.createItem(item);
    return newUser;
  } catch (error) {
    throw { status: error.status, message: error.message || error }
  }
}

const deleteItem =  async id => {
  try {
    const deletedItem = await itemRepository.deleteItem(id);
    console.log('itemService: deletedItem returned ', deletedItem);
    return true
  } catch(error) {
    throw { status: error.status, message: error.message || error }
  }
}

const getItemsData = async id => {
  try {
    const itemsData = await itemRepository.findAllItems(id);
    return itemsData;
  } catch (error) {
    throw { status: error.status, message: error.message || error }
  }
}

const getOneItem = async id => {
  try {
    const currentItem = await itemRepository.findItem(id);
    return currentItem;
  } catch(error){
    throw { status: error.status, message: error.message || error }
  }
}

const updateItem = async item => {
  try {
    const currentItem = await itemRepository.findItem(item.id);
    if (!currentItem) {
      return null
    }
    const updateData = await itemRepository.updateItem(item);
    return updateData;
  } catch (error) {
    throw { status: error.status, message: error.message || error };
  }
}

module.exports = {
  createItem,
  deleteItem,
  getItemsData,
  getOneItem,
  updateItem,
};