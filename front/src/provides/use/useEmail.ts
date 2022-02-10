import { reactive, toRefs } from "vue";
import axios from "axios";
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
    // const url = `https://ubyusadvisors.com/wp-content/themes/dist/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}`;
    const url = `https://ubyus.alvitre.com.br/back?name=${state.inputsEmail.name}&email=${state.inputsEmail.email}&message=${state.inputsEmail.message}`;

    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        state.statusSendmail = "enviadoComSuccesso";
        state.inputsEmail.name = "";
        state.inputsEmail.email = "";
        state.inputsEmail.message = "";

        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        state.statusSendmail = "erroAoEnviarEmail";
        return error;
      });
  }

  return { sendEmail, ...toRefs(state) };
};
