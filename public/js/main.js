const addToCartButton = document.querySelectorAll('.addToCart')

Array.from(addToCartButton).forEach((el)=>{
    el.addEventListener('click', addToCart)
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