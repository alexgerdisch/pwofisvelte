import { v4 as uuidv4 } from 'uuid';

export class Session {
    constructor(type) {
        this.seshType = type;
        this.seshId = uuidv4();
        this.convo = [];
    }
}