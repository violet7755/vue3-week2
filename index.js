import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const baseUrl = "https://vue3-course-api.hexschool.io/v2/";
const apiPath = 'violet7755';

const app = {
  data(){
    return {
      tempProduct: {},
      products: {}
    }
  },
  methods: {
    checkAdmin() {
      const url = `${baseUrl}api/user/check`;
      axios.post(url)
        .then(() => {
          this.getProducts();
        })
        .catch((err) => {
          alert(err.response.data.message);
          window.location = 'login.html';
        })
    },
    getProducts(){
      const url = `${baseUrl}api/${apiPath}/admin/products/all`;
      axios.get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    openProduct(item) {
      this.tempProduct = item;
    }
  },
  mounted(){
    //取出 token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)violetToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin()
  }
}
createApp(app).mount('#app');
