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
            return `<option>${Object.values(obj)[0]}: ${Object.values(obj)[1]}</option>`
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
    return (getUrl(arrId[3380])) // index need to be updated 
}

async function getUrl(objectID){
    let currentPosition = 0;
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    const data = await response.json()
    let objectID1 = objectID+1;
    const response1 = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID1}`)
    const data1 = await response1.json()
    displayImage(data.primaryImage, data1.primaryImage)

    currentPosition += 2
    setInterval(nextSlide, 5000)

    function nextSlide(){
        document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${imgUrl1}')"></div>`)
        setTimeout(()=>{
            document.querySelector(".slide").remove()
        }, 1000)

    }
}



function displayImage(imgUrl1, imgUrl2){
    console.log(imgUrl1); // this gives back a string of the url of the index
    console.log(imgUrl2); // this gives back a string of the url of the index
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${imgUrl1}')"></div>
    <div class="slide" style="background-image: url('${imgUrl2}')"></div>
    `
}

// function getImgUrl(departmentData){
//     let arrId = departmentData.objectIDs
//     let currentPosition = 65;
//     let imgUrl1 = getUrl(arrId[currentPosition])// index need to be updated 
//     let imgUrl2 = getUrl(arrId[currentPosition+1])
//     displayImage(imgUrl1, imgUrl2);
// }

// async function getUrl(objectID){
//     const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
//     const data = await response.json()
//     return data.primaryImage
// }

// function displayImage(imgUrl1, imgUrl2){
//     console.log(imgUrl1); // this gives back a string of the url of the index
//     console.log(imgUrl2); // this gives back a string of the url of the index
//     document.getElementById("slideshow").innerHTML = `
//     <div class="slide" style="background-image: url('${imgUrl1}')"></div>
//     <div class="slide" style="background-image: url('${imgUrl2}')"></div>
//     `
// }
