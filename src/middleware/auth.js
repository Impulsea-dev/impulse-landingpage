export default function auth ({ next, store }){
    console.log(sessionStorage.getItem("auth"))

    if (sessionStorage.getItem("auth")) {
      return next();
    } 
    return next({ name: "login" });
  }