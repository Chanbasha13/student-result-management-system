function addStudent() {

    var name = document.getElementById("name").value;
    var regno = document.getElementById("regno").value;

    var maths = Number(document.getElementById("maths").value);
    var java = Number(document.getElementById("java").value);
    var os = Number(document.getElementById("os").value);
    var aiml = Number(document.getElementById("aiml").value);
    var eiot = Number(document.getElementById("eiot").value);


    /* Check empty fields */

    if (name == "" || regno == "") {

        alert("Please enter student details");

        return;
    }


    /* Check marks */

    if (
        maths < 0 || maths > 50 ||
        java < 0 || java > 50 ||
        os < 0 || os > 50 ||
        aiml < 0 || aiml > 50 ||
        eiot < 0 || eiot > 50
    ) {

        alert("Marks should be between 0 and 50");

        return;
    }


    /* Calculate total */

    var total = maths + java + os + aiml + eiot;


    /* Calculate percentage */

    var percentage = (total / 250) * 100;


    /* Calculate grade */

    var grade;

    if (percentage >= 90) {

        grade = "A+";

    } else if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "F";
    }


    /* Calculate pass or fail */

    var status;

    if (
        maths >= 20 &&
        java >= 20 &&
        os >= 20 &&
        aiml >= 20 &&
        eiot >= 20
    ) {

        status = "Pass";

    } else {

        status = "Fail";
    }


    /* Add result to table */

    var table = document.getElementById("studentTable");

    var row = table.insertRow();


    row.insertCell(0).innerHTML = regno;

    row.insertCell(1).innerHTML = name;

    row.insertCell(2).innerHTML = maths;

    row.insertCell(3).innerHTML = java;

    row.insertCell(4).innerHTML = os;

    row.insertCell(5).innerHTML = aiml;

    row.insertCell(6).innerHTML = eiot;

    row.insertCell(7).innerHTML = total;

    row.insertCell(8).innerHTML =
        percentage.toFixed(2) + "%";

    row.insertCell(9).innerHTML = grade;

    row.insertCell(10).innerHTML = status;


    /* Change status color */

    if (status == "Pass") {

        row.cells[10].className = "pass";

    } else {

        row.cells[10].className = "fail";
    }


    /* Clear form */

    clearForm();
}


function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("regno").value = "";

    document.getElementById("maths").value = "";

    document.getElementById("java").value = "";

    document.getElementById("os").value = "";

    document.getElementById("aiml").value = "";

    document.getElementById("eiot").value = "";
}