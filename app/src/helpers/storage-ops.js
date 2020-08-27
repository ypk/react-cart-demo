const STORAGE_KEY = "MMT-STORE-CART";

const LocalStorage = {
    GetItems : () => localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [], 
    SetItem : (items) => localStorage.setItem(STORAGE_KEY, JSON.stringify(items.length > 0 ? items: []))
};

export default LocalStorage;