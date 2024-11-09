function scrollToCourses() {
    document.getElementById("courses").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
});
