// obj -> similar to interface
// union types(A | B)
// intersection types (A & B)

type form = {
    name : string;
    roll_no : number;
    salary :  number;
}

const info : form = {
    name : 'sap',
    roll_no : 456,
    salary :  70000000
}
type status = 'new' | 'paid' | 'pending';

function nextActionCheck(s: status): status {
    switch (s) {
        case 'new':
            return 'new';
        case 'pending':
            return 'pending';
        case 'paid':
            return 'paid';
        // No default needed — TypeScript ensures all cases are covered
    }
}

type mergeAll = status & form