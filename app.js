var btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {

    //fetch request to API
    
    fetch('https://corona.lmao.ninja/v2/countries')
        .then(response => {
            return response.json();
        })
        .then(jsonData => {

            var results = document.getElementById('results');

            var template = `
                <h4 class="mt-4">Covid Cases</h4>
            `

            jsonData.forEach(element => {
                template += `
                
                    <ul class="list-group mb-4">
                        <li class="list-group-item"><strong>Country: ${element.country} </strong></li>
                        <li class="list-group-item"><strong>Cases: ${element.cases} </strong></li>
                        <li class="list-group-item"><strong>Deaths: ${element.deaths} </strong></li>
                    </ul>

                `
            });

            results.innerHTML = template;

            console.log(jsonData);
        })

})