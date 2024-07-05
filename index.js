function calculateAge() {

    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');

    // Clear previous result
    resultElement.innerText = ' ';


    if (!dobInput) {
        alert('Please enter your date of birth.');
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        resultElement.innerText = ' ';
        alert('The date of birth cannot be in the future.');
        return;
    }

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerText = `Your age is
     ${ageYears} years,    ${ageMonths} months and 
     ${ageDays} days.`;

}