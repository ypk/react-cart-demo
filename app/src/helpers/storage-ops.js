const LocalStorage = {
    GetItem : (STORAGE_KEY) => localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [], 
    SetItem : (item, STORAGE_KEY) => localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
};

export default LocalStorage;