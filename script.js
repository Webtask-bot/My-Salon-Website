

function animateCounter(id, target, speed) {
    let count = 0;
    let element = document.getElementById(id);

    let interval = setInterval(() => {
        count++;
        element.innerText = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, speed);
}

let started = false;

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            animateCounter("counter1", 97, 30);
            animateCounter("counter2", 5, 200);
            started = true;
        }
    });
}, {
    threshold: 0.5 // aadha section dikhe tab start
});

observer.observe(document.querySelector("#counter1"));

// Ye WhatsApp par Messege send karne Vali Javascript hai 
document.getElementById("BookingForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("serviceSelect").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let messege = `New Appointment Booking:%0A
    Name: ${name}%0A
    Phone: ${phone}%0A
    Service: ${service}%0A
    Date: ${date}%0A
    Time: ${time}`;
    let whatsappNumber = "918401495597";
    let url = `https://wa.me/${whatsappNumber}?text=${messege}`;
    window.open(url,"_blank");

});
