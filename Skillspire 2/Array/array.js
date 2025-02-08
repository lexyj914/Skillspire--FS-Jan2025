let contacts = ["Jon Snow", "Arya", "Tyrion Lannister"]



function printContacts(){
    console.log("All Contacts:");
}
function addContact(name){
    contacts.push(name);
}

addContact("Wayne")


for(let i = 0; i < contacts.length;i++){
    console.log("Contact: " , contacts[i])
}

printContacts()
