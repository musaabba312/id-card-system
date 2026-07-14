const member = {
    name: "Musa Muhammad",
    id: "CCG001",
    position: "Member",
    phone: "08000000000",
    photo: "https://via.placeholder.com/120"
};

document.getElementById("name").textContent = member.name;
document.getElementById("id").textContent = member.id;
document.getElementById("position").textContent = member.position;
document.getElementById("phone").textContent = member.phone;
document.getElementById("photo").src = member.photo;
