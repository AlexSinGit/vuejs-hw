class LStorage{
  #key = 'tasks';
  #id = 1;
  constructor(){
    let data = this.getAllItems();
    if(data.length > 0) this.#id = 1 + ( +data.at(-1).id );
  }

  #getIndexById(data, id){
    return data.findIndex(({id: todoItemId}) => todoItemId === id);
  }

  getAllItems(){
    return JSON.parse(localStorage.getItem(this.#key) ?? '[]');
  }

  addItem(item){
    let data = this.getAllItems();
    item = { ...item, id: this.#id }
    data.push(item);
    localStorage.setItem(this.#key, JSON.stringify(data));
    return this.getAllItems().at(-1);
  }

  removeItem(id){
    let data = this.getAllItems();
    let index = this.#getIndexById(data, id);
    let removedItem = data.splice(index, 1)[0];
    localStorage.setItem(this.#key, JSON.stringify(data));
    return removedItem;
  }

  updateItem(id, fields){
    let data = this.getAllItems();
    let index = this.#getIndexById(data, id);
    data[index] = {
      ...data[index],
      ...fields
    };
    localStorage.setItem(this.#key, JSON.stringify(data));
    return data[index];
  }
}

const storage = new LStorage();

export default storage;