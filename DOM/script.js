/* get cart total from session on load */
 updateCartTotal();

/* button event listeners */
document.getElementById("trash").addEventListener("click", emptyCart);



var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {addToCart(this);});
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
    var stringCart;
    var getquantity;
    var getimagesource;

    

    //cycles siblings for product info near the add button
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.className == "price"){
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        if (elem.className == "quantity") {
            getquantity = elem.innerText;
        }
        if (elem.className == "ProdDesc") {
            getimagesource = elem.outerHTML;
        }

        
        sibs.push(elem);
       
  
      
    }
  


    //create product object
    var product = {
        productname : getproductName,
        price : getprice,
        quantity : getquantity,
        img : getimagesource
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */
    
    if(!sessionStorage.getItem('cart')){
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem('cart', stringCart);
       
        
        updateCartTotal();
    }
    else {
        //get existing cart data from storage and convert back into array
       cart = JSON.parse(sessionStorage.getItem('cart'));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage 
        sessionStorage.setItem('cart', stringCart);
       
        updateCartTotal();
    }
    window.scrollTo(0,document.body.scrollHeight);
   



    

   



    
}
/* Calculate Cart Total */
function updateCartTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    var quantity;
    var imagetab;  
    var array= [];
       
    if(sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;
       
        //loop over cart array
       
        
        for (var i = 0; i < items; i++){ 
            
            
            //convert each JSON product in array back into object                     
            var x = JSON.parse(cart[i]);
            var y = array.find((el) => el.productname == x.productname);
            array.push(x);
   
            //convert each JSON product in array back into object    
            productname = x.productname;      
            quantity=x.quantity;
            price = parseFloat(x.price * quantity) ;   
            var imagetab = x.img;
            // modification de la taille de limage
            var ImgWidthEdit= imagetab.replace ("200","50")

                 
            if(y==undefined ) {
            total += price;
            carttable += "<tr><td>" + quantity + "</td><td>"+ ImgWidthEdit + "</td><td>"  + productname + "</td><td>"  + price.toFixed(3) + "TND</td></tr>";
            }
            
        }   

        if(y!==undefined ) { 
            alert("item already added to the cart !! ");
          exit;
        }
                     
    }           
       
        document.getElementById("total").innerHTML = total.toFixed(3);
        //insert saved products to cart table
        document.getElementById("carttable").innerHTML = carttable;

    //update total on website HTML
    
   
}

/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        console.log(sessionStorage.getItem('cart'))
        updateCartTotal();
   

   
      
    }
}







function ChangeClass(id) {
     elem = document.getElementById(id);

if  (elem.classList.contains("fa-heart-o")) 
{
    elem.classList.remove("fa-heart-o");
    elem.classList.add("fa-heart");
    alert("item moved to wish list")

} else { 
    
    elem.classList.remove("fa-heart");
    elem.classList.add("fa-heart-o");
    alert("item removed from wish list")
    }

}

function addButt(id) {

    var elem=parent.document.getElementById(id);
    
    
   
    
        elem.innerHTML++;
        
  
    

}

function SubButt(id) {

    var elem=parent.document.getElementById(id);
    
    if(elem.innerHTML>=1){
    
    elem.innerHTML--;
    
   
    }}
