const a1 : number[] = [1,2,3]
const a2 : Array<number> = [1,2,3]

const score = [1,2,3]
// score.push("34") error

const mix : (String|number)[] = [ 1,'2',4]

// example 1

type contact = {
  name: string;
  email: string;
  phone: number;
  favorite: boolean;
};

const contacts: contact[] = [
  {
    name: "ssdsd",
    email: "fdfsam",
    phone: 35425,
    favorite: false,
  },
  {
    name: "ssdrfsd",
    email: "gdfdfsam",
    phone: 3543425,
    favorite: false,
  },
  {
    name: "sshthdsd",
    email: "fsdfdfsam",
    phone: 35489625,
    favorite: true,
  },
];

function printContact(contact: contact): void {
  console.log(contact.name);
  console.log(contact.email);
}

const firstContact = contacts[0];

if (firstContact) {
  printContact(firstContact);
}


function getFavorites(contacts:contact[]):contact[]{
   return contacts.filter((contact)=>{contact.favorite === true})
}

function getEmails(contact: contact[]): string[] {
  return contact.map((items)=>items.email)
}

function findContact(contacts: contact[], name: string): contact | undefined {
    
  return contacts.find((i)=>{i.favorite === true})
}

function countFavorites(contacts:contact[]):number{
    return contacts.filter((contact)=>contact.favorite).length
}

const emails = getEmails(contacts);
console.log(emails);


const fav = getFavorites(contacts);
console.log(fav)





const result = findContact(contacts, "ssdsd");
console.log(result);




const total = countFavorites(contacts)
console.log(total)

function getFavoriteEmails(contacts: contact[]): string[] {
  return contacts
        .filter((i)=>i.favorite)
        .map((contact)=>contact.email)
}


    // “Keep only favorite contacts” → filter
    // “Get each contact’s email” → map

