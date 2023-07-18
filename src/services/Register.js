import axios from "axios";
const url="/api/v1/auth";

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

    
}
export default Register