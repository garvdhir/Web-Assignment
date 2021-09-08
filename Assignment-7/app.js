var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var body = document.querySelector('body');


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            tempValue = tempValue - 273;

            console.log(Math.floor(tempValue));
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1562806568-a3450b810449?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + (Math.floor(tempValue) + "&#176;C");
            input.value = "";

        })

    .catch(err => alert("Wrong city name!"));
})