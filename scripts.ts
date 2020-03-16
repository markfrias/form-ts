let personData = [];
let jsDOM = {
    data: {
        firstname : document.getElementById("firstname")! as HTMLInputElement,
        lastname : document.getElementById("lastname")! as HTMLInputElement,
        email : document.getElementById("email")! as HTMLInputElement,
        phonenumber : document.getElementById("phonenumber")! as HTMLInputElement,
        city : document.getElementById("city")! as HTMLInputElement,
        form : document.getElementById("form")
    },

    btn: {
        addPerson: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')

};

let jsFunc = {
    showData : () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        
        let node = document.createElement("div");
        
        let nodeHeader = document.createElement("h2");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        node.appendChild(nodeHeader);
        
        personData.forEach(x => {
            let fullname = `${x.firstname} ${x.lastname}` , email = x.email, phonenumber= x.phonenumber, city = x.city;

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
 
