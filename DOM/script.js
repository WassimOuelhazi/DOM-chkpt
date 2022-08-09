/* get cart total from session on load */
 updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);

document.getElementById("trash").addEventListener("click", RemovefromCart);
document.getElementById("trash2").addEventListener("click", RemovefromCart2);
document.getElementById("trash3").addEventListener("click", RemovefromCart3);
document.getElementById("trash4").addEventListener("click", RemovefromCart4);

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
    //cycles siblings for product info near the add button
    while(elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if(elem.className == "price"){
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
       
        
    }
    console.log("messsage:",getprice);


    //create product object
    var product = {
        productname : getproductName,
        price : getprice
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
        addedToCart(getproductName);
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
        addedToCart(getproductName);
        updateCartTotal();
    }

    
}
/* Calculate Cart Total */
function updateCartTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    
    if(sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;

        
        //loop over cart array
        for (var i = 0; i < 1; i++){

            var Qty = document.getElementById("form1").value;

            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
           
                if (x.productname!==productname) {
                //get property value of price
                price = parseFloat(x.price * Qty) ;                      
                productname = x.productname;
                
                //add price to total
                total += price;
                carttable += "<tr><td>" + productname + "</td><td> TND " + price.toFixed(3) + "</td></tr>";
            
            }
        }
        
      
        
        
    }
    //update total on website HTML
    document.getElementById("total").innerHTML = total.toFixed(3);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
   
}
//user feedback on successful add
function addedToCart(pname) {

    var Qty = document.getElementById("form1").value;
  var message =  + pname + " was added to the cart";
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if(!alerts.classList.contains("message")){
     alerts.classList.add("message");
  }
}
/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}

/* User Manually empty cart */
function RemovefromCart() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}

function RemovefromCart2() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}

function RemovefromCart3() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}


function RemovefromCart4() {
    //remove cart session storage object & refresh cart totals
    if(sessionStorage.getItem('cart')){
        sessionStorage.removeItem('cart');
        updateCartTotal();
      //clear message and remove class style
      var alerts = document.getElementById("alerts");
      alerts.innerHTML = "";
      if(alerts.classList.contains("message")){
          alerts.classList.remove("message");
      }
    }
}


function ChangeClass(id) {
     elem = document.getElementById(id);

if  (elem.classList.contains("fa-heart-o")) 
{
    elem.classList.remove("fa-heart-o");
    elem.classList.add("fa-heart");

} else { 
    
    elem.classList.remove("fa-heart");
    elem.classList.add("fa-heart-o");
    }

}







 
