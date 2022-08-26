function createPerson(name, fatherName, mothername, address) {
    let obj = {
        yourName: name,
        fatherName,
        mothername,
        address,
        sayHello() {
            console.log("Hello " + this.yourName);
        }
    }
    return obj;
}
let person1 = createPerson("Alve", "Ashraf Uddin", "Asma Nur", "Sitakunda")
console.log(person1);

console.log(createPerson("Alve").sayHello());