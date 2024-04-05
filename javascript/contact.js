// for area code phone input
let input = document.querySelector("#phone-number");
window.intlTelInput(input, {
    initialCountry: "no",
    separateDialCode: true,
    preferredCountries: ["no", "se", "dk", "is", "fi"],
});