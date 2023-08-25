const carePage = document.getElementById('carePage')

function changeURL(id){
    location.href = `http://localhost:3000/care` + `/${id}`
}

const addToCartButton = document.querySelectorAll('.addToCart')

const careLink = document.querySelectorAll('.careLink')

const commonName = document.querySelector('#commonName')
const scientificName = document.querySelector('#scientificName')
const description = document.querySelector('#description')
const price = document.querySelector('#price')
const img = document.querySelector('#img')
const waterReq = document.querySelector('#waterReq')
const waterNotes = document.querySelector('#waterNotes')
const lightReq = document.querySelector('#lightReq')
const lightNotes = document.querySelector('#lightNotes')
const toxicity = document.querySelector('#toxicity')
const toxicityNotes = document.querySelector('#toxicityNotes')

Array.from(careLink).forEach((link)=>{
    link.addEventListener('click', getCareSheet)
})

function loadCarePage(){
    var clickedId = localStorage.getItem("clickedId");
    if(clickedId !== ' '){
        choosePlantFromCare(clickedId)
    } else {
        const plantCareMission = document.getElementById('plantCareMission')
        plantCareMission.style.removeProperty('visibility')
    }
}
function getTotal(){
    const itemPrices = document.querySelectorAll('.itemPrice')
    const totalPrices = document.querySelectorAll('.totalPrice')
    let totalPrice=0
    
    Array.from(itemPrices).forEach((item)=>{
        totalPrice = totalPrice + Number(item.innerText)
    })
    console.log(totalPrice)
    Array.from(totalPrices).forEach((total)=>{
        total.innerText = `$ ${totalPrice}.00`
    })
}




async function addToCart(plantId){
    try{
        const response = await fetch('shop/addToCart', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function removeFromCart(plantId){
    try{
        const response = await fetch('cart/removeFromCart', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function getShopSheet(plantId) {
   try{
        const response = await fetch(`/care/${plantId}`) 
        const data = await response.json() //reading response and setting to data variable
        console.log(data) //confirmation
        document.querySelector('#shopCommonName').innerText = data.commonName
        document.querySelector('#shopPrice').innerText = data.price
   }catch(err){ 
           console.log(err) //print error if error 
    }
}


//////// ADMIN FUNCTIONS SETTING FEATURED/NOT FEATURED AND ACTIVE/INACTIVE ////////

async function adminSetFeatured(plantId){
    try{
        const response = await fetch('/admin/setFeatured', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function adminRemoveFeatured(plantId){
    try{
        const response = await fetch('/admin/removeFeatured', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function adminSetActive(plantId){
    try{
        const response = await fetch('/admin/setActive', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function adminSetInActive(plantId){
    try{
        const response = await fetch('/admin/setInActive', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//////// ADMIN DELETE ////////

async function adminDelete(plantId){
    try{
        const response = await fetch('/admin/adminDelete', { 
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'plantIdFromJSFile': plantId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


//////// ADMIN EDIT PAGE TO EDIT DATABASE DOCUMENTS ////////
function adminEdit(plantId){
    const editBtn = document.getElementById(`editBtn-${plantId}`);
    const table = document.getElementById(`table-${plantId}`);
    console.log(editBtn)
    editBtn.classList.add('bi-check-square')
    editBtn.classList.remove('bi-pencil-square')
    table.classList.add('table-success')


    const commonName = document.getElementById(`commonName-${plantId}`)
    const scientificName = document.getElementById(`scientificName-${plantId}`)
    const type = document.getElementById(`type-${plantId}`)
    const description = document.getElementById(`description-${plantId}`)
    const img = document.getElementById(`img-${plantId}`)
    const price = document.getElementById(`price-${plantId}`)
    const waterReq = document.getElementById(`waterReq-${plantId}`)
    const waterNotes = document.getElementById(`waterNotes-${plantId}`)
    const lightReq = document.getElementById(`lightReq-${plantId}`)
    const lightNotes = document.getElementById(`lightNotes-${plantId}`)
    const toxicity = document.getElementById(`toxicity-${plantId}`)
    const toxicityNotes = document.getElementById(`toxicityNotes-${plantId}`)

    commonName.setAttribute("contenteditable", true);
    scientificName.setAttribute("contenteditable", true);
    type.setAttribute("contenteditable", true);
    description.setAttribute("contenteditable", true);
    img.setAttribute("contenteditable", true);
    price.setAttribute("contenteditable", true);
    waterReq.setAttribute("contenteditable", true);
    waterNotes.setAttribute("contenteditable", true);
    lightReq.setAttribute("contenteditable", true);
    lightNotes.setAttribute("contenteditable", true);
    toxicity.setAttribute("contenteditable", true);
    toxicityNotes.setAttribute("contenteditable", true);

  

    editBtn.addEventListener('click', ()=> {
        editBtn.classList.remove('bi-check-square')
        editBtn.classList.add('bi-pencil-square')
        commonName.setAttribute("contenteditable", false);
        scientificName.setAttribute("contenteditable", false);
        type.setAttribute("contenteditable", false);
        img.setAttribute("contenteditable", false);
        description.setAttribute("contenteditable", false);
        price.setAttribute("contenteditable", false);
        waterReq.setAttribute("contenteditable", false);
        waterNotes.setAttribute("contenteditable", false);
        lightReq.setAttribute("contenteditable", false);
        lightNotes.setAttribute("contenteditable", false);
        toxicity.setAttribute("contenteditable", false);
        toxicityNotes.setAttribute("contenteditable", false);

        editPlant(plantId)
    })

    async function editPlant(id){
        
    // commonName
    // scientificName
    // type
    // description
    // price
    // waterReq
    // waterNotes
    // lightReq
    // lightNotes
    // toxicity
    // toxicityNotes

        try{
            const response = await fetch('/admin/adminEdit', { 
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'plantIdFromJSFile': id,
                    'newCommonNameFromJSFile': commonName.innerText,
                    'newScientificNameFromJSFile': scientificName.innerText,
                    'newTypeFromJSFile': type.innerText,
                    'newImgFromJSFile': img.innerText,
                    'newDescriptionFromJSFile': description.innerText,
                    'newPriceFromJSFile': price.innerText,
                    'newWaterReqFromJSFile': waterReq.innerText,
                    'newWaterNotesFromJSFile': waterNotes.innerText,
                    'newLightReqFromJSFile': lightReq.innerText,
                    'newLightNotesFromJSFile': lightNotes.innerText,
                    'newToxicityFromJSFile': toxicity.innerText,
                    'newToxicityNotesFromJSFile': toxicityNotes.innerText,
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
}



