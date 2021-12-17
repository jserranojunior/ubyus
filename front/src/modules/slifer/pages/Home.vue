<template>
  <div class>
    <div
      class="flex lap:px-20 des:px-60 py-3 justify-between border-b border-gray-100 text-gray-400"
    >
      <div>
        <a href="/">
          <img src="@/assets/img/ubyus.png" alt="ubyus" width="200" />
        </a>
      </div>

      <Menu />
    </div>
    <div class="painelvideoDiv border border-gray-100 bg-gray-50 lap:px-20 des:px-60">
      <div class="flex justify-center center">
        <div class>
          <img
            v-if="lang == 'portugues'"
            src="@/assets/video/ubyus-portugues.gif"
            alt="ubyus"
            class="mx-auto w-full tab:w-full lap:w-1/2 des:w-full"
          />
          <img
            v-else
            src="@/assets/video/ubyus-english.gif"
            alt="ubyus"
            class="mx-auto w-full tab:w-full lap:w-1/2 des:w-full"
          />
        </div>
      </div>
    </div>

    <section id="oquenosmove">
      <Waypoint
        @change="viewHandler"
        :tag="'h2'"
        id="titleoquenosmove"
        :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['titleoquenosmove']}`"
      >
        <span v-if="lang == 'portugues'">O que nos move</span>
        <span v-else>What Move Us</span>
      </Waypoint>
      <div class="flex flex-wrap center px-4 tab:px-20 des:px-60 py-5 justify-between">
        <div
          class="w-full lap:w-1/2 des:w-1/2 tab:1/2 text-justify px-4 tab:px-10 des:px-40 des:text-xl"
        >
          <p v-if="lang == 'portugues'">
            UbyUS expressa o princípio de REPRESENTATIVIDADE, materializado por relações sinceras, profissionais e
            perenes com nossos clientes.
            <br />O cliente (“you”) passa a ser representado pela nossa organização com suas demandas e anseios sendo
            incorporados por nós (“by us”) contando com a nossa PRESENÇA efetiva em todas as etapas do Projeto.
            <br />Temos como propósito a lógica COLABORATIVA no desenvolvimento dos negócios, buscando DIVERSIDADE nas
            inteligências e recursos aplicados, assegurando o aprendizado contínuo e a INOVAÇÃO constante de nossas
            soluções.
            <br />Para nós da UbyUS, é essencial que nossa atuação represente uma contribuição para a construção de um mundo
            cada vez mais plural, solidário e humano.
          </p>
          <p v-else>
            UbyUS expresses the principle of REPRESENTATIVENESS, achieved through sincere, professional and enduring
            relationships with our clients.
            <br />The client (“you”) is represented by our organization, with your demands and desires being incorporated “by
            us,” relying on our effective PRESENCE in all stages of the Project
            <br />Our purpose is to form COLLABORATIVE logic in the development of businesses, seeking DIVERSITY in the
            intelligence and resources applied, ensuring continuous learning and the constant INNOVATION of our
            solutions.
            <br />For UbyUS, it is essential that our efforts represent a contribution to the construction of an increasingly
            plural, inclusive and human world.
          </p>
        </div>
        <div class="w-full tab:w-full lap:w-1/2 des:w-1/2 mt-2 ml-auto px-4 tab:px-20 des:px-60">
          <img class="w-full" src="@/assets/img/imagem-equipe.jpg" />
        </div>
      </div>
    </section>
    <!--   -->
    <section id="oqueentregamos">
      <div class="bg-gray-50 p-5 des:px-60">
        <Waypoint
          @change="viewHandler"
          :tag="'h2'"
          id="titleoqueentregamos"
          :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['titleoqueentregamos']}`"
        >
          <span v-if="lang == 'portugues'">O que entregamos</span>
          <span v-else>What we deliver</span>
        </Waypoint>

        <p v-if="lang == 'portugues'" class="text-center mb-10">
          Esses são nossos Centros de Excelência, com atuação junto a clientes do
          <br />mercado financeiro, tecnologia, indústria, saúde,
          <br />varejo, infraestrutura, dentre outros.
        </p>
        <p v-else class="text-center mb-10">
          These are our Centers of Excellence, working with clients in
          <br />the financial market, technology,
          industry, health,
          <br />retail and infrastructure segments, among others.
        </p>
      </div>
      <img src="@/assets/img/phone.png" width="100%" />
    </section>

    <section id="centrosdeexcelencia">
      <div class="py-5">
        <Waypoint
          @change="viewHandler"
          :tag="'h2'"
          id="titlecentrosexcelencia"
          :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['titlecentrosexcelencia']}`"
        >
          <span v-if="lang == 'portugues'">Centros de excelência</span>
          <span v-else>Centers of Excellence</span>
        </Waypoint>

        <div class="flex center">
          <div
            class="w-full text-center lap:text-left tab:w-full des:w-1/3 lap:w-1/2 px-4 tab:px-20 des:px-60"
          >
            <a href="#">
              <img
                v-if="lang == 'portugues'"
                src="@/assets/img/negocios.png"
                alt="negocios"
                width="170"
                class="tab:mx-auto"
              />
              <img v-else src="@/assets/img/english/businessboton.png" alt="negocios" width="170" />
            </a>

            <p class="my-1">
              <span v-if="lang == 'portugues'">
                Fusões e
                Aquisições
                (M&A)
              </span>
              <span v-else>Mergers and Acquisitions (M&A)</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">
                Estruturação de
                Negócios
              </span>
              <span v-else>Business Structuring</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Turnaround</span>
              <span v-else>Turnaround</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">
                Eficiência em
                Processos e
                Custos
              </span>
              <span v-else>Process & Cost Efficiency</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">
                Planejamento
                Estratégico
              </span>
              <span v-else>Strategic Planning</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">
                Avaliação de
                Empresas
              </span>
              <span v-else>Company Valuation</span>
            </p>
          </div>

          <div
            class="w-full text-center lap:text-left tab:w-full des:w-1/3 lap:w-1/2 px-4 tab:px-20 des:px-60"
          >
            <a href="#">
              <img
                v-if="lang == 'portugues'"
                src="@/assets/img/governanca.png"
                alt="governanca"
                class="tab:mx-auto"
                width="210"
              />
              <img v-else src="@/assets/img/english/governance.png" alt="governanca" width="210" />
            </a>

            <p class="my-3">
              <span v-if="lang == 'portugues'">Ambiental, Social e Governança (ESG)</span>
              <span v-else>Environmental, Social and Governance (ESG)</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Conselho</span>
              <span v-else>Board</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Estrutura de Governança</span>
              <span v-else>Governance Structure</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Gestão de Crise</span>
              <span v-else>Crisis Management</span>
            </p>
          </div>

          <div
            class="w-full text-center lap:text-left tab:w-full des:w-1/3 lap:w-1/2 px-4 tab:px-20 des:px-60"
          >
            <a href="#">
              <img
                v-if="lang == 'portugues'"
                src="@/assets/img/pessoas.png"
                alt="pessoas"
                class="mx-auto"
                width="160"
              />
              <img v-else src="@/assets/img/english/people.png" alt="pessoas" width="160" />
            </a>

            <p>
              <span v-if="lang == 'portugues'">Recursos Humanos</span>
              <span v-else>Human Resources</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Relações Sindicais e Trabalhistas</span>
              <span v-else>Labor and Union Relations</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Cultura Organizacional</span>
              <span v-else>Organizational Culture</span>
            </p>

            <p class="my-5">
              <span v-if="lang == 'portugues'">Desenvolvimento de Pessoas</span>
              <span v-else>People Development</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="nossascompetencias">
      <div class="bg-gray-50 py-5">
        <Waypoint
          @change="viewHandler"
          :tag="'h2'"
          id="titlenossascompetencias"
          :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['titlenossascompetencias']}`"
        >
          <span v-if="lang == 'portugues'">Nossas competências</span>
          <span v-else>Our Skills</span>
        </Waypoint>

        <div class="flex px-2 tab:px-10 lap:px-40 des:px-80 my-20">
          <swiper
            :slidesPerView="4"
            :spaceBetween="15"
            :slidesPerGroup="4"
            :autoplay="{
              'delay': 60000,
              'disableOnInteraction': false
            }"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              'clickable': true
            }"
            :navigation="true"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="overflow-hidden">
                <img class="rounded-md w-full" src="@/assets/img/carousel/equipe.png" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md w-auto" src="@/assets/img/carousel/notebook.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md w-auto" src="@/assets/img/carousel/maos.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md w-auto" src="@/assets/img/carousel/sorriso.jpeg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md w-auto" src="@/assets/img/carousel/reuniao.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md" src="@/assets/img/carousel/equipe.png" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md" src="@/assets/img/carousel/notebook.jpg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img class="rounded-md" src="@/assets/img/carousel/maos.jpg" />
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="rodape center px-28 des:px-60 des:text-xl mt-10">
          <ul class="flex text-center justify-center">
            <li v-if="lang == 'portugues'" class="mx-1">• Experiência</li>
            <li class="mx-1" v-else>• Experience</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Conhecimento</li>
            <li v-else class="mx-1">• Knowledge</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Visão</li>
            <li v-else class="mx-1">• Vision</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Relacionamento</li>
            <li v-else class="mx-1">• Relationship</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Planning</li>
            <li v-else class="mx-1">• Relationship</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Parceria</li>
            <li v-else class="mx-1">• Partnership</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Colaboração</li>
            <li v-else class="mx-1">• Collaboration</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Interlocução</li>
            <li v-else class="mx-1">• Interlocution</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Inovação</li>
            <li v-else class="mx-1">• Innovation</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Construção</li>
            <li v-else class="mx-1">• Construction</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Transformação</li>
            <li v-else class="mx-1">• Transformation</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Execução</li>
            <li v-else class="mx-1">• Execution</li>

            <li v-if="lang == 'portugues'" class="mx-1">• Resultado</li>
            <li v-else class="mx-1">• Results</li>
          </ul>
        </div>

        <div class="rodape2 px-20 des:px-60 des:text-xl mb-10">
          <p v-if="lang == 'portugues'">
            Na UbyUS Advisors reunimos as diferentes competências obtidas ao longo de nossas histórias e as aplicamos em
            nossas soluções. Contudo, muito além das nossas histórias, habilidades e competências, o que nos importa é
            compartilhá-las
            com nossos clientes, produzindo soluções equilibradas e resultados sustentáveis. Nossa equipe está
            pronta para o seu próximo desafio!
          </p>
          <p v-else>
            At UbyUS Advisors, we combine different skill sets, acquired over the course of our individual careers, and
            apply them to our solutions.
            However, far beyond our career paths, skills, and competencies, what matters to us is sharing them with our
            clients, producing balanced solutions and sustainable results. Our team is ready for your next challenge!
          </p>
        </div>
      </div>
    </section>

    <section id="quemsomos">
      <div class="center bg-gray-100 py-5">
        <Waypoint
          @change="viewHandler"
          :tag="'h2'"
          id="titlequemsomos"
          :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['titlequemsomos']}`"
        >
          <span v-if="lang == 'portugues'">Quem Somos</span>
          <span v-else>Who We Are</span>
        </Waypoint>

        <div class="flex justify-center tab:justify-between px-2 tab:px-56 des:px-96 des:text-xl">
          <div class="text-center mb-4 w-full des:w-1/3">
            <div class>
              <a href="#">
                <img class="mx-auto" src="@/assets/img/Joao.png" alt="João" width="250px" />
              </a>
            </div>
            <span class="text-xl text-gray-600 font-bold">João Rached</span>
          </div>

          <div class="text-center mb-4 w-full des:w-1/3">
            <div class>
              <a href="#">
                <img class="mx-auto" src="@/assets/img/eduardo.png" alt="Eduardo" width="230px" />
              </a>
            </div>
            <span class="text-xl text-gray-600 font-bold">Eduardo Beadle</span>
          </div>

          <div class="text-center mb-4 w-full des:w-1/3">
            <div class>
              <a href="#">
                <img class="mx-auto" src="@/assets/img/Nilton.png" alt="Nilton" width="225px" />
              </a>
            </div>
            <span class="text-xl text-gray-600 font-bold">Nilton Junior</span>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-center py-10">
      <div class="slogan justify-center bg-white mx-auto">
        <img v-if="lang == 'portugues'" src="@/assets/img/somosubyusretangulo-150x150.jpg" />
        <img v-else src="@/assets/img/english/somosUbyUs2.png" />
      </div>
    </div>
    <section id="contato">
      <div class="bg-gray-100 py-10">
        <Waypoint
          @change="viewHandler"
          :tag="'h2'"
          id="contato"
          :class="`text-2xl tab:text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10 ${titlesVisibles['contato']}`"
        >
          <span v-if="lang == 'portugues'">Contato</span>
          <span v-else>Contact</span>
        </Waypoint>

        <div class="cx-form flex justify-center">
          <div class="w-full tab:w-full lap:w-1/3 tab-1/3 tab:px-20">
            <div class="flex">
              <label for="nome" class="label-tail text-left">
                <span v-if="lang == 'portugues'">Nome</span>
                <span v-else>Name</span>

                <span class="text-red-600">*</span>
              </label>
              <input
                class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="nome"
                name="nome"
                :placeholder="placeholderNameContact"
                v-model="inputsEmail.name"
              />

              <label for="nome" class="label-tail text-left mt-1">
                Email
                <span class="text-red-600">*</span>
              </label>
              <input
                class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                v-model="inputsEmail.email"
              />
              <label for="nome" class="label-tail text-left mt-1">
                <span v-if="lang == 'portugues'">Mensagem</span>
                <span v-else>Message</span>

                <span class="text-red-600">*</span>
              </label>
              <textarea
                class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mensagem"
                name="mensagem"
                style="height:100px"
                v-model="inputsEmail.message"
              ></textarea>
            </div>
            <div
              v-if="statusSendmail == 'disponivelEnvioEmail' || statusSendmail == 'enviadoComSuccesso'"
            >
              <span v-if="lang == 'portugues'">
                <SBtn value="ENVIAR" @click="sendEmail()" color="yellow" class="bg-whitetheme-50"></SBtn>
              </span>
              <span v-else>
                <SBtn value="ENVIAR" @click="sendEmail()" color="yellow" class="bg-whitetheme-50"></SBtn>
              </span>
            </div>
            <div class="mt-1" v-if="statusSendmail == 'enviandoEmail'">
              <div class="flex alert alert-warning">
                <div class="w-full">
                  <label class="text-center w-full">
                    <i class="fas fa-circle-notch fa-spin mr-1"></i>
                    <span v-if="lang == 'portugues'">Enviando e-mail, por favor aguarde</span>
                    <span v-else>Sending email, please wait</span>
                    ...
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-1" v-if="statusSendmail == 'enviadoComSuccesso'">
              <div class="flex alert alert-success">
                <div class="w-full text-center">
                  <label class="text-center w-full">
                    <span v-if="lang == 'portugues'">
                      Agradecemos pela sua mensagem!
                      <br />Em breve, a equipe da UbyUS Advisors entrará em contato com você!
                    </span>
                    <span class="text-center" v-else>
                      Thanks for contacting us!
                      <br />We will contact you soon.
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-1" v-if="statusSendmail == 'erroAoEnviarEmail'">
              <div class="flex alert alert-error">
                <div class="w-full text-center">
                  <label class="text-center w-full">
                    <span
                      v-if="lang == 'portugues'"
                    >Erro ao enviar e-mail, por favor entre em contato atrávez do e-mail contato@ubyus.com.br</span>
                    <span
                      class="text-center"
                      v-else
                    >Error when sending e-mail, please contact us via e-mail contato@ubyus.com.br</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="flex justify-center">
      <div class="slogan justify-center bg-white mx-auto">
        <img src="@/assets/img/uby.png" alt="ubyus" width="250" />
      </div>
    </div>

    <div class="bg-gray-600 py-5 text-white px-4 tab:px-20">
      <div class="flex justify-between my-5">
        <div class="w-full lap:w-1/3 text-center">
          <p>
            Avenida Dr. Chucri Zaidan, 1550 – cj. 1508
            <br />Vila São Francisco – São Paulo / SP
            <br />CEP: 04711-130
          </p>
        </div>

        <div class="w-full lap:w-1/3 text-center">
          <p>
            <a href="mailto:contato@ubyusadvisors.com">
              <span class="boldwhite">contato@ubyusadvisors.com</span>
            </a>
          </p>
        </div>
        <div class="w-full lap:w-1/3 text-center">
          <p>São Paulo / SP – Brasil</p>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <div class="text-2xl">
          <!-- <i class="text-2xl mx-4 fab fa-facebook-square"></i>
          <i class="text-2xl mx-4 fab fa-instagram"></i>-->
          <a href="https://www.linkedin.com/company/ubyus-advisors/?originalSubdomain=br">
            <i class="text-2xl mx-4 fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="my-4 border border-gray-500"></div>

      <div class="flex center">
        <Menu />
      </div>

      <div class="flex center my-10">
        <p>Copyright © UbyUS</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import "swiper/css/pagination"
import "swiper/css/navigation"

// import './style.css';
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper';
SwiperCore.use([Pagination, Navigation, Autoplay]);

import Menu from "../components/Menu.vue"
import { onBeforeMount, reactive, toRefs, watch, inject, ref, onMounted } from 'vue';

import { Waypoint } from 'vue-waypoint'
export default {
  components: {
    Menu,
    Swiper,
    SwiperSlide,
    Waypoint
  },

  setup() {

    const useLang: any = inject("lang")
    const { lang, placeholderNameContact } = useLang
    const useEmail: any = inject("email")
    const { inputsEmail, sendEmail, statusSendmail } = useEmail

    const state = reactive({
      titlesVisibles: {} as any
    })
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    function viewHandler(waypointState: any) {
      // const titleSelected = document.querySelector(`#${waypointState.el.id}`)
      // waypointState.el.classList.value = waypointState.el.classList.value + ' zoomIn'
      console.log(waypointState.el.id)// 0..1 how much element overlap the viewport
      if (waypointState.going == "IN") {
        const idtitle: string = waypointState.el.id
        state.titlesVisibles[idtitle] = 'zoomIn'
      } else {
        const idtitle: string = waypointState.el.id
        state.titlesVisibles[idtitle] = ''
      }

      console.log(waypointState.going)
    }
    // onMounted(() => {
    //   console.log(isScrolledIntoView(ref("whatwedeliver")))
    // })
    return {
      lang,
      placeholderNameContact,
      onSwiper,
      onSlideChange,
      inputsEmail,
      sendEmail,
      statusSendmail,
      viewHandler,
      ...toRefs(state)

    };
  },
}
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
}
.zoomIn {
  animation-name: zoom-in-zoom-out;
  animation-duration: 2s;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>