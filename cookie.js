/*cookie is a basically kind of storing information. Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network.
  */
 /* A simple function is created down bellow to get cookies */
 const youtube= "PREF=f4=4000000&tz=Asia.Dhaka; SID=Awik9IgQ6TGhCrJ7JywTYcsAutoDkdIpZtreDjWD3PkqPs571ndZRfJDxLUW3ggJofhJRg.; APISID=W3RX-sTGTB7bHy5e/AzR8D-DmDt5_yjEJx; SAPISID=R5rgXKtPmayQKXeb/A0yEHJpityb-HvuCc; __Secure-1PAPISID=R5rgXKtPmayQKXeb/A0yEHJpityb-HvuCc; __Secure-3PAPISID=R5rgXKtPmayQKXeb/A0yEHJpityb-HvuCc; SIDCC=AJi4QfECGM5CQv43bhQ0aFzfA3RpvRfflyi23vN1f_Oityv1LJKCmNJiCj1KjWJmkUu0gPb93w";
 const getCookie = name =>{
     const cookie = document.cookie;
     const getAll = cookie.split(";");
     const eachCookie = getAll.find(coo => coo.includes(name));
     if(eachCookie){
         const devide = eachCookie.split("=");
         const getName = devide[0];
         return getName;
     }
 }