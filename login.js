import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const baseUrl = "https://vue3-course-api.hexschool.io/v2/";

const app = {
  data(){
    return {
      user: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    login(){
      const signinApi = `${baseUrl}admin/signin`;
      axios.post(signinApi, this.user)
        .then((res) => {
          const { expired, token } = res.data;
          //將 token 存進 cookie
          document.cookie = `violetToken=${token}; expires=${new Date(expired)};`;
          window.location = 'index.html'
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
};
createApp(app).mount("#app");
