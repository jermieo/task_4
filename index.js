

const fetch_1 = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await url.json();
    let containe = document.getElementsByClassName('container')[0];
   
    data.forEach(element => {
        console.log(element)
        let pelement = document.createElement('p')
        let pelement1 = document.createElement('p')
        let pelement2 = document.createElement('p')
        let pelement3 = document.createElement('p')
        let div1 = document.createElement('div')
        pelement.innerHTML  = `<b>Name:  </b>` + `<b>${element.name}</b>`
        pelement1.innerHTML = "Email:  " +element.email
        pelement2.innerHTML = "Street:  " +element.address.street
        pelement3.innerHTML = "City:  " +element.address.city
        div1.appendChild(pelement) 
        div1.appendChild(pelement1) 
        div1.appendChild(pelement2) 
        div1.appendChild(pelement3) 
        containe.appendChild(div1)
        div1.style =
            `border: 2px solid aqua; 
             height: 200px; 
             width:  300px;
             margin-top: 10px;
             background-color: aqua;
             border-radius: 4px;
             box-shadow: 2px 2px 2px 2px lightblue;
             text-align: justify;
             padding: 18px;
             margin-left: 100px;
             margin-bottom: 20px;
             `
    });
}
fetch_1()