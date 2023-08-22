import axios from "axios";

class Blog{
    static saveBlog(blog){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.post('https://leads.impulse.ky/dapi/v1/blog',blog,
              { headers: { "Content-Type": "application/json","Authorization":blog.authorization.authorization}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }

      static getBlogs(){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.get('https://leads.impulse.ky/dapi/v1/blog',
              { headers: { "Content-Type": "application/json"}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }

      static getBlog(auth){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.get('https://leads.impulse.ky/dapi/v1/blog/'+auth,
              { headers: { "Content-Type": "application/json"}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }

      static deleteBlog(blog){
   
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.delete('https://leads.impulse.ky/dapi/v1/blog',
              {
                 headers: {
                   "Content-Type": "application/json",
                   "Authorization":blog.authorization.authorization
                  },
                  data: blog
                  
              },
              );
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }
}

export default Blog