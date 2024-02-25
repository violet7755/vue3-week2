import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


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
      const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios.post(apiUrl, this.user)
        .then((res) => {
          const { expired, token } = res.data;
          console.log(expired, token);
          //將 token 存進 cookie
          document.cookie = `violetToken=${token}; expires=${new Date(expired)}; path=/`;
          window.location = 'index.html'
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
};
createApp(app).mount("#app");
