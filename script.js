// ID Card Community System

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("idForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const community = document.getElementById("community").value;

            alert(
                "ID Card Generated Successfully!\n\n" +
                "Name: " + fullname +
                "\nCommunity: " + community
            );
        });
    }
});
