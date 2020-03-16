var personData = [];
var jsDOM = {
    data: {
        firstname: document.getElementById("firstname"),
        lastname: document.getElementById("lastname"),
        email: document.getElementById("email"),
        phonenumber: document.getElementById("phonenumber"),
        city: document.getElementById("city"),
        form: document.getElementById("form")
    },
    btn: {
        addPerson: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
};
var jsFunc = {
    showData: function () {
        var parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        var node = document.createElement("div");
        var nodeHeader = document.createElement("h2");
        var nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        node.appendChild(nodeHeader);
        personData.forEach(function (x) {
            var fullname = x.firstname + " " + x.lastname, email = x.email, phonenumber = x.phonenumber, city = x.city;
            var personData = document.createElement('p');
            var personDataText = document.createTextNode("Name: " + fullname + " Email: " + email + " Phone: " + phonenumber + " City: " + city);
            personData.appendChild(personDataText);
            node.appendChild(personData);
        });
        parentDiv.appendChild(node);
    },
    clearFields: function () {
        jsDOM.data.firstname.value = "";
        jsDOM.data.lastname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phonenumber.value = "";
        jsDOM.data.city.value = "";
    },
    addData: function () {
        jsFunc.validate();
        personData.push({
            firstname: jsDOM.data.firstname.value,
            lastname: jsDOM.data.lastname.value,
            email: jsDOM.data.email.value,
            phonenumber: jsDOM.data.phonenumber.value,
            city: jsDOM.data.city.value
        });
        jsFunc.clearFields();
        console.log(personData);
    },
    validate: function () {
        var alertString = "";
        var alertOn = false;
        if (jsDOM.data.firstname.value.length == 0) {
            alertString += "First name required";
            alertOn = true;
        }
        if (jsDOM.data.lastname.value.length == 0) {
            alertString += "\nLast name required";
            alertOn = true;
        }
        if (jsDOM.data.email.value.length == 0) {
            alertString += "\nEmail address required";
            alertOn = true;
        }
        if (jsDOM.data.phonenumber.value.length == 0) {
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
};
jsDOM.btn.addPerson.addEventListener("click", jsFunc.addData);
jsDOM.btn.showData.addEventListener("click", jsFunc.showData);
