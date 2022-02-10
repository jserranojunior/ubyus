import { reactive, toRefs } from "vue";
import axios from "axios";

const instance = axios.create({
      baseURL: 'https://ubyusadvisors.com',
            // baseURL: 'https://ubyus.alvitre.com.br',

});


export const useEmail = () => {
  const state = reactive({
    inputsEmail: {
      name: "",
      email: "",
      message: "",
    },
    statusSendmail: "disponivelEnvioEmail",
  });

  async function sendEmail() {
    state.statusSendmail = "enviandoEmail";
    const url = `/wp-content/themes/dist/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}`;
    // const url = `/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}`;

    instance
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data)
        state.statusSendmail = "enviadoComSuccesso";
        state.inputsEmail.name = "";
        state.inputsEmail.email = "";
        state.inputsEmail.message = "";

        return true;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        state.statusSendmail = "erroAoEnviarEmail";
        return false;
      });
  }

  return { sendEmail, ...toRefs(state) };
};
