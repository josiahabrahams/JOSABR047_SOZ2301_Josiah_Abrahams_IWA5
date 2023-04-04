const FREE_WARNING = 'Free shipping only applies to single customer orders';
 const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

 let shipping;
let customers = '1'
let location = 'RSA'
let currency = "R"

if (location == 'RSA'){
  shipping = 400 
  currency = 'R'


}else if (location == 'NAM'){
                     shipping = 600 
                     currency = '$'
 }else{ 
 shipping = 800
 }

let shoes = 300 * 1
let toys = 400 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 


<<<<<<< HEAD
if (shoes + toys + batteries + pens + shirts >= 1000 && location === 'NAM'   ) {
=======
	

if (shoes + toys + batteries + pens + shirts >= 1000 && location === 'NAM')   {
>>>>>>> 477ad23b40c4d423db1a9118702c4f3f1d2a14cf
	
		    shipping = 0 
	
}else if (shoes + toys + batteries + pens + shirts >= 1000 &&  location === 'RSA' ) {
	
  shipping = 0 

}

<<<<<<< HEAD

if (shipping === 0 && customers > 1) { console.log(FREE_WARNING) }

=======
if (shoes + toys + batteries + pens + shirts >= 1000 && location === 'RSA')   {
	
		    shipping = 0 
	
}
if (shipping === 0 && customers === 1 ) { console.log(WARNING) }
>>>>>>> 477ad23b40c4d423db1a9118702c4f3f1d2a14cf

if (location === 'NK' ){
                      console.log(BANNED_WARNING)}else{
                     
 console.log('price', currency, toys + shoes + batteries + pens + shirts + shipping)
} 
