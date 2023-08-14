const addToCartButton = document.querySelectorAll('.addToCart')
const adminEditBtn = document.querySelectorAll('.adminEdit')
const adminDeleteBtn = document.querySelectorAll('.adminDelete')

const adminAddButton = document.getElementById('adminAddBtn')
const adminEditButton = document.getElementById('adminEditBtn')
const adminPreviewButton = document.getElementById('adminPreviewBtn')

const adminAddSection = document.getElementById('adminAddSection')
const adminEditSection = document.getElementById('adminEditSection')

adminAddButton.addEventListener('click', ()=>{
    adminAddSection.style.removeProperty('display')
    adminEditSection.style.display = 'none'
})
adminEditButton.addEventListener('click', ()=>{
    adminEditSection.style.removeProperty('display')
    adminAddSection.style.display = 'none'
})

Array.from(addToCartButton).forEach((el)=>{
    el.addEventListener('click', addToCart)
})

Array.from(adminEditBtn).forEach((btn)=>{
    btn.addEventListener('click', adminEdit)
})

Array.from(adminDeleteBtn).forEach((btn)=>{
    btn.addEventListener('click', adminDelete)
})

async function addToCart(){
    const plantId = this.parentNode.parentNode.parentNode.dataset.id //see if you can simplify this at all
    console.log(plantId)
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

async function adminDelete(){
    const plantId = this.dataset.id
    console.log(plantId)
    try{
        const response = await fetch('admin/adminDelete', { 
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

function adminEdit(){
    const plantId = this.dataset.id
    let current = this.parentNode.parentNode
    let done = this
    this.innerText = "done"
    current.classList.add('table-success')

    const commonName = current.querySelector('#commonName')
    const scientificName = current.querySelector('#scientificName')
    const description = current.querySelector('#description')
    const price = current.querySelector('#price')
    const quantity = current.querySelector('#quantity')
  

    console.log(commonName)
    
    commonName.setAttribute("contenteditable", true);
    scientificName.setAttribute("contenteditable", true);
    description.setAttribute("contenteditable", true);
    price.setAttribute("contenteditable", true);
    quantity.setAttribute("contenteditable", true);

    done.addEventListener('click', ()=> {
        this.innerText = "edit_note"
        current.classList.remove('table-success')
        commonName.setAttribute("contenteditable", false);
        scientificName.setAttribute("contenteditable", false);
        description.setAttribute("contenteditable", false);
        price.setAttribute("contenteditable", false);
        quantity.setAttribute("contenteditable", false);

        editPlant(plantId)
    })

    async function editPlant(id){
        
        // const newName = this.parentNode.previousElementSibling.previousElementSibling.value
        console.log(id)
        const newCommonName = commonName.innerText
        const newScientificName = scientificName.innerText
        const newDescription = description.innerText
        const newPrice = price.innerText
        const newQuantity = quantity.innerText
        try{
            const response = await fetch('admin/adminEdit', { 
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'plantIdFromJSFile': id,
                    'newCommonNameFromJSFile': newCommonName,
                    'newScientificNameFromJSFile': newScientificName,
                    'newDescriptionFromJSFile': newDescription,
                    'newPriceFromJSFile': newPrice,
                    'newQuantityFromJSFile': newQuantity,
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


