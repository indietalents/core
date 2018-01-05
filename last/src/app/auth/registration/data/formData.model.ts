export class FormData {
    type: string = '';
    subtype: string = '';
    
    name: string = '';
    lastName: string = '';
    email: string = '';


    clear() {
        this.type = '';
        this.subtype = '';
        this.name = '';
        this.lastName = '';
        this.email = '';
    }
}

export class Type {

    musician: 'musician';

}

export class Subtype {

    musician: 'musician';

}

export class MainInfo {

    name: string = '';
    lastName: string = '';
    email: string = '';

}