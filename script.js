function calculateAge() {
    const birthdateValue = document.getElementById('birthdate').value; 
    const birthdate = new Date(birthdateValue);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display the result correctly using template literals
    document.getElementById('result').innerText = `Your age is ${age} Years.`
}