class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);

        // если productsLocalStorage не null, то выполнить парсинг содержимого
        if (productsLocalStorage !== null && productsLocalStorage !== "") {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }
    putProducts(id) {
        const products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products };
    }

}


const localStorageUtil = new LocalStorageUtil();

