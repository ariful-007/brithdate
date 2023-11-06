
function calculateAge() {

    const birthdateInput = document.getElementById("birthdate");
    const result = document.getElementById("result");
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const ageInYears = currentDate.getFullYear() - birthdate.getFullYear();
    let ageInMonths = currentDate.getMonth() - birthdate.getMonth();
    let ageInDays = currentDate.getDate() - birthdate.getDate();

    if (currentDate.getDate() < birthdate.getDate()) {
        ageInMonths--;
    }

    if (ageInDays < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageInDays = lastDayOfMonth - birthdate.getDate() + currentDate.getDate();
    }

    result.innerHTML = `Your age is <span>${ageInYears}</span> Years, <span>${ageInMonths}</span> Months, And <span>${ageInDays}</span> Days.`;
}