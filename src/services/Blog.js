import axios from "axios";

class Blog{
    static saveBlog(blog){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.post('/dapi/v1/blog',blog,
              { headers: { "Content-Type": "application/json","Authorization":blog.authorization.authorization}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }

      static getBlogs(auth){
        return new Promise(async (resolve, reject) => {
            try {
              const res = await axios.get('/dapi/v1/blog',
              { headers: { "Content-Type": "application/json","Authorization":auth}});
              const data = res.data;
              resolve(data);
            } catch (e) {
              reject(e);
            }
          });
      }
}

export default Blog