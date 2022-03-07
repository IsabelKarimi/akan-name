let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();


    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    weekday = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    weekday = parseInt(weekday);

    let akanName;

    femaleNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
    maleNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

    let Day;

    if (weekday == 0 && gender == "female") {
        Day = "Saturday";
        akanName = femaleNames[0];
    } else if (weekday == 0 && gender == "male") {
        Day = "Saturday";
        akanName = maleNames[0];


    } else if (weekday == 1 && gender == "female") {
        Day = "Sunday";
        akanName = femaleNames[1];
    } else if (weekday == 1 && gender == "male") {
        Day = "Sunday";
        akanName = maleNames[1];


    } else if (weekday == 2 && gender == "female") {
        Day = "Monday";
        akanName = femaleNames[2];
    } else if (weekday == 2 && gender == "male") {
        Day = "Monday";
        akanName = maleNames[2];


    } else if (weekday == 3 && gender == "female") {
        Day = "Tuesday";
        akanName = femaleNames[3];
    } else if (weekday == 3 && gender == "male") {
        Day = "Tuesday";
        akanName = maleNames[3];


    } else if (weekday == 4 && gender == "female") {
        Day = "Wednesday";
        akanName = femaleNames[4];
    } else if (weekday == 4 && gender == "male") {
        Day = "Wednesday";
        akanName = maleNames[4];


    } else if (weekday == 5 && gender == "female") {
        Day = "Thursday";
        akanName = femaleNames[5];
    } else if (weekday == 5 && gender == "male") {
        Day = "Thursday";
        akanName = maleNames[5];


    } else if (weekday == 6 && gender == "female") {
        Day = "Friday";
        akanName = femaleNames[6];
    } else if (weekday == 6 && gender == "male") {
        Day = "Friday";
        akanName = maleNames[6];
    }

    let result = document.getElementById("reveal-result").innerHTML = "You were born on a " + Day + " so your akan name is " + akanName + "!"
    document.getElementById("akanName").reset();
});
