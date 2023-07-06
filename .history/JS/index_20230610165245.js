const url= 'https://648343d1f2e76ae1b95c3956.mockapi.io/users'


//To construct the table after getting the data
 function constructTable(data){
    let tbody = document.getElementById('table-body')
    tbody.innerHTML=""
    data.forEach(e => {
        let tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.gender}</td>
    <td>${e.country}</td>
    <td>${e.city}</td>
    <td>${e.mobile}</td>
    <td>${e.email}</td>
    <td>${e.active}</td>
    <td> <button class="btn btn-primary"onclick="navigate(${e.id})">Edit</button>
    <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button></td>

    `
    tbody.appendChild(tr)

    });
    
}

function navigate(id){
    // navigate to view.html with query params
    window.location.href = `./../HTML/view.html?id=${id}`
}

async function deleteData(id)
{
    let res = await fetch(`${url}/${id}`,{ 
        method:'DELETE'
    })
    getData()
    // window.location.reload()
}
//To get the data from mockapi
async function getData(){

    try{
        let res = await fetch(url)
    let data = await res.json()
    constructTable(data)

    } catch (error){
        console.log(error)
    }

}

getData()

