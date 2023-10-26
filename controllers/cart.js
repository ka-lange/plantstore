const Plant = require('../models/Plant')
const Cart = require('../models/Cart')
module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const UserCart = await Cart.find()
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('cart.ejs', {plants: Plants, page_name:'cart'})
            // res.render('cart.ejs', {plants: Plants, cart: UserCart, products: UserCart.products, page_name:'cart'})

        }catch(err){
            console.log(err)
        }
    },
    // addToCart: async (req,res)=>{
    //     // res.render('index.ejs') //renders ejs file and reponds with it
    //     try{
    //         // res.render('shop.ejs', {plants: Plants})
    //         await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
    //             inCart: true 
    //         })
    //         console.log('Added to Cart')
    //         res.json('Added to Cart')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // addToCart: async (req, res) => {
    //     const plantId = req.body.plantIdFromJSFile;
    //     // const { productId, commonName, price } = req.body;
      
    //     const userId = req.user._id; //TODO: the logged in user id
    //     // const PlantAdded = await Plant.find({ plantId }, 'commonName price');

        
    //     try {
    //       let cart = await Cart.findOne({ userId }); //finds cart if user has one
    //     //   let plantAdded = await Plant.findOne({ plantId }, {'commonName', 'price'}); //finds cart if user has one
    //       if (cart) {
    //         //cart exists for user
    //         // let itemIndex = cart.products.findIndex(p => p.plantId == plantId);
      
    //         // if (itemIndex > -1) {
    //         //   //product exists in the cart, update the quantity
    //         //   let productItem = cart.products[itemIndex];
    //         //   productItem.quantity = quantity;
    //         //   cart.products[itemIndex] = productItem;
    //         // } else {
    //           //product does not exists in cart, add new item
    //           cart.products.push({ plantId });
    //         // }
    //         cart = await cart.save();
    //         return res.status(201).send(cart);
    //       } else {
    //         //no cart for user, create new cart
    //         const newCart = await Cart.create({
    //           userId,
    //           products: [{ plantId }]
    //         });
      
    //         return res.status(201).send(newCart);
    //       }
    //     } catch (err) {
    //       console.log(err);
    //       res.status(500).send("Something went wrong");
    //     }
    //   },
    removeFromCart: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                inCart: false 
            })
            console.log('Removed to Cart')
            res.json('Removed to Cart')
        }catch(err){
            console.log(err)
        }
    },
    
}