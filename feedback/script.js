const input = document.querySelector("input");

input.addEventListener("input", (e) => {
    console.log(e.target.validity);
})

// const input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//     if (!e.target.checkValidity()) {
//         e.target.reportValidity();
//     }
// })


// const input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//     if (!e.target.checkValidity()) {
//         e.target.setCustomValidity(
//             "You must use a company email address that ends in @sampleCompany.com"
//         );
//     }
// });