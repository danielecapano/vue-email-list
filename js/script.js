const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Lista mail Utenti",
      mails: [],
    };
  },
  methods: {
    fetchMails() {
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((res) => {
            // console.log(res, res.data);
            const mail = res.data.response;
            // console.log(mail);
            this.mails.push(mail);
          });
      }
      console.log(this.mails);
    },
  },
  created() {
    this.fetchMails();
  },
}).mount("#app");
