// There are many methods to intarect with user some of them are discussed later

// alert method
// we can send an alert to the user by using alert method in the browser
// alert('javascript will graspe the whole web')

// we can get response using another method which prompt method
// where user can type a message 



// prompt("do you love javascript");

// 

// lets try one

// const response = prompt("Javascript is in love with you . do you love her ?")
// if( response === "yes"){
//     alert(" thanks you will get other framework as a gift")
//     console.log(true);
// }
// else{
//     alert("You will not get any framework to use ")
// }

/* confirm */

// there is another method to get reach with user . which is confirm method. To confirm with any message we use confirm . the response which we get from user via confirm come as true or false . Thats mean if a user click yes the response will be count as true else if the user click no the response will be count as false

const getConfirmation = ()=>{
    const response = confirm("do you want to atted meeting?")
    if (response === true) {
        alert("extra snacks are waiting for you ")
        
    }
    else{
        alert("you will not get any snacks !!")
    }
}
