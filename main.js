/*document.getElementById("button").addEventListener('click', updateInfo);


function updateInfo(){
    let name = document.getElementById("firstname").value + " " + document.getElementById("lastname").value ;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let city = document.getElementById("city").value;

    document.getElementById("nameOutput").innerHTML = `Name: ${name}`;
    document.getElementById("emailOutput").innerHTML = `Email: ${email}`;
    document.getElementById("phoneOutput").innerHTML = `Phone Number: ${phonenumber}`;
    document.getElementById("cityOutput").innerHTML = `City: ${city}`;

}

let person = {
    name: "John",
    age: "26",
    address: {
        houseNo: "619",
        lot: "45",
        barangay: "Puting Kahoy"
    },
    siblings: ["Fromm", "Luther"],
    gender: "M"

}

console.log(person.horoscope); */

let personData = [];
let jsDOM = {
    data: {
        firstname : document.getElementById("firstname"),
        lastname : document.getElementById("lastname"),
        email : document.getElementById("email"),
        phonenumber : document.getElementById("phonenumber"),
        city : document.getElementById("city"),
        form : document.getElementById("form")
    },

    btn: {
        addPerson: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')

};

let jsFunc = {
    updateValue : () => {
        jsDOM.nameOutput.innerHTML = `Name: ${jsDOM.firstname.value + " " + jsDOM.lastname.value}`;
        jsDOM.emailOutput.innerHTML = `Email : ${jsDOM.email.value}`;
        jsDOM.phoneOutput.innerHTML = `Phone Number : ${jsDOM.phonenumber.value}`;
        jsDOM.cityOutput.innerHTML = `City : ${jsDOM.city.value}`;
    },
    showData : () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        
        let node = document.createElement("div");
        
        let nodeHeader = document.createElement("h2");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        node.appendChild(nodeHeader);
        
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}` , email = x.email, phonenumber= x.phonenumber, city = x.city;

            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Name: ${fullname} Email: ${email} Phone: ${phonenumber} City: ${city}` );
            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);
        
    },
    clearFields: () => {
        jsDOM.data.firstname.value = "";
        jsDOM.data.lastname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phonenumber.value = "";
        jsDOM.data.city.value = "";

        

    },
    addData : () => {
        jsFunc.validate();
        personData.push(
        {
            
            firstname: jsDOM.data.firstname.value,
            lastname: jsDOM.data.lastname.value,
            email : jsDOM.data.email.value,
            phonenumber: jsDOM.data.phonenumber.value,
            city: jsDOM.data.city.value,


        }   
            
        )
        jsFunc.clearFields();
        console.log(personData);
    },

    validate : () => {
        let alertString = "";
        let alertOn = false;
        if (jsDOM.data.firstname.value.length == 0){
            alertString += "First name required";
            alertOn = true;

        }

        if (jsDOM.data.lastname.value.length == 0){
            alertString += "\nLast name required";
            alertOn = true;
        }

        if (jsDOM.data.email.value.length == 0) {
            alertString += "\nEmail address required";
            alertOn = true;
        }

        if (jsDOM.data.phonenumber.value.length == 0){
            alertString += "\nPhone number required";
            alertOn = true;

        }
        if (jsDOM.data.city.value.length == 0) {
            alertString += "\nCity required";
            alertOn = true;
        }

        if (alertOn)
        window.alert(alertString);
    }
    
}


jsDOM.btn.addPerson.addEventListener("click", jsFunc.addData);
jsDOM.btn.showData.addEventListener("click", jsFunc.showData);
 
