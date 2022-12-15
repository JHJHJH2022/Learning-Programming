// source of api: https://metmuseum.github.io/#search
// following this youtube tutorial: https://www.youtube.com/watch?v=AVmGmLFcukM&t=0s&ab_channel=LearnWebCode

async function start(){
    const response = await fetch ("https://collectionapi.metmuseum.org/public/collection/v1/departments")
    const data = await response.json()
    createDepartmentList(data.departments);
}


start()

function createDepartmentList(departmentList){
    document.getElementById("department").innerHTML = `
    <select onchange="loadByDepartment(this.value)">
        <option>Choose a department of The Met</option>
        ${departmentList.map(function(obj){
            return `<option>${Object.values(obj)[0]}${Object.values(obj)[1]}</option>`
        }
        ).join('')}
    </select>   
    `
}




async function loadByDepartment(department){
    let departmentId = getDepartmentId(department)
    if (department != "Choose a department of The Met"){
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentId=${departmentId}`)
        const data = await response.json()
        getImgUrl(data) 
    }
    
}

function getDepartmentId(departmentName){
    return (parseInt(departmentName.charAt(0)))
    
}

function getImgUrl(departmentData){
    let arrId = departmentData.objectIDs
    return (getUrl(arrId[70])) // index need to be updated 
}

async function getUrl(objectID){
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    const data = await response.json()
    console.log(data.primaryImage) // this gives back a string of the url of the index
    // displayImage(data.primaryImage);
}

// function displayImage(imgUrl){
//     document.getElementById("images").innerHTML = `
//     <img src="${imgUrl}">
//     `
// }



// function loadByDepartment(department){
//     let selectedDepartmentObject = jsonData.map(function(a,c){
//         if (Object.values(c)[1] === department){
//             a.push(c)  
//         }
//         return a
//     },[])[0];
//     let departmentId = Objetc.values(selectedDepartmentObject)[0]
//     alert("departmentId")
// }