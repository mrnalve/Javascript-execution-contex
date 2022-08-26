function createPerson(name, fatherName, mothername, address) {
    this.Name = name,
    this.FatherName = fatherName,
    this.Mothername = mothername,
    this.Address = address
}
let person1 = new createPerson("Alve", "Ashraf Uddin", "Asma Nur", "Sitakunda")
console.log(person1);