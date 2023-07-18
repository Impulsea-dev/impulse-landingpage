import axios from "axios";
const url="/dapi/v1/auth";

class Register{
     static createUser(datos){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.post(url,datos,
              { headers: { "Content-Type": "application/json"}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });   
    }

    static Login(datos){
      return new Promise(async (resolve, reject) => {
          try {
            const res = await axios.post(url+'/login',datos,
            { headers: { "Content-Type": "application/json"}});
            const data = res.data;
            resolve(data);
          } catch (e) {
            reject(e);
          }
        });   
  }

  static createPass(datos){
    return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post(url+'/verify',datos,
          { headers: { "Content-Type": "application/json"}});
          const data = res.data;
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });   
}

    static getDatabyToken(datos){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.get(url+'/'+datos,
              { headers: { "Content-Type": "application/json"}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
    }

    static sendEmailbyResetPW(email){
      return new Promise(async (resolve, reject) => {
          try {
            const res = await axios.post(url+'/rpwd',email,
            { headers: { "Content-Type": "application/json"}});
            const data = res.data;
            resolve(data);
          } catch (e) {
            reject(e);
          }
        });   
  }
  
  static resetPassword(datos){
    return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.post(url+'/rupwd',datos,
          { headers: { "Content-Type": "application/json"}});
          const data = res.data;
          resolve(data);
        } catch (e) {
          reject(e);
        }
      });   
  }

    
}
export default Register