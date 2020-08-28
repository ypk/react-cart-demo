const LocalStorage = {
    GetItems : (STORAGE_KEY) => localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [], 
    SetItem : (items, STORAGE_KEY) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items.length > 0 ? items: []))
};

export default LocalStorage;