let emailCollectorForm = document.getElementById("Email-Collector")
// console.log(emailCollectorForm)
emailCollectorForm.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("event is firing");

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")

    // console.log(ourFormData.get("firstName"))

    let updatedHtmlContent = `
        <h2>Congratulations ${userFirstName}!</h2>
        <p>You are on your way to becoming a Frontend Developer</p>
        <p class="fine-print">
            We'll never share your information without your permission
        </p>
    `
    let ourMainContent = document.getElementById("Main-Content")
    ourMainContent.innerHTML = updatedHtmlContent
})
