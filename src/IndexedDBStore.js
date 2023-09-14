// const dbName = 'contacts';
// let request= window.indexedDB.open(dbName, 1),db,tx,store,index;
//
// request.onupgradeneeded = () => {
//     let db = request.result,
//         store = db.createObjectStore('contactStore', { keyPath: "id"}),
//         index = store.createIndex("email", "email");
// }
//
// request.onsuccess = () => {
//     db = request.result;
//     tx = db.transaction("contactStore", "readwrite");
//     store = tx.objectStore("contactStore");
//     index = store.index("id");
//
//     tx.oncomplete = function () {
//         db.close;
//     }
// }
//
// request.

class IndexedDBStore
{
    constructor()
    {
        this.request = indexedDB.open("library");
        this.db = this.request.result;

        this.init();
    }

    init() {
        const store = this.db.createObjectStore("contacts", {keyPath: "id"});
        store.createIndex("email", "email", {unique: true});
        store.createIndex("name", "name");
    }

    store(data) {
        console.log('Start');
        const tx = this.db.transaction("contacts", "readwrite");
        const store = tx.objectStore("contacts");

        store.put(
            {name: data.name, email: data.email}
        );
        console.log('Stored');

        tx.oncomplete = () => {
            console.log('Done');
            this.db.close();
        }
    }

    read() {

    }
}

export default new IndexedDBStore();