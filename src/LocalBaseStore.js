import Localbase from "localbase";

export class LocalBaseStore
{
    constructor(collection) {
        this.db = new Localbase(collection);
    }

    async add(document, data) {
        return await this.db.collection(document).add(data)
    }

    async get(collection){
        return await this.db.collection(collection).get();
    }
}