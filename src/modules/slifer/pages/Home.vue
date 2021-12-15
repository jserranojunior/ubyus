<template>
  <div>
    <div class="flex px-20 py-3 justify-between border-b border-gray-100 text-gray-400">
      <div>
        <a href="/">
          <img src="@/assets/img/ubyus.png" alt="ubyus" width="200" />
        </a>
      </div>

      <Menu />
    </div>

    <div class="painelvideoDiv border border-gray-100 bg-gray-100">
      <div class="flex center">
        <img src="@/assets/video/ubyus-portugues.gif" alt="ubyus" width="500" />
      </div>
    </div>
  </div>

  <section id="oquenosmove">
    <h2
      class="text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10"
    >O que nos move</h2>

    <div class="flex flex-wrap center px-20 justify-between">
      <div class="w-1/2 text-justify px-10">
        <p>
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
      </div>
      <div class="w-1/2 ml-auto px-10">
        <img src="@/assets/img/imagem-equipe.jpg" width="100%" />
      </div>
    </div>
  </section>
  <hr />
  <section id="oqueentregamos">
    <div class>
      <h2
        class="text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10"
      >O que entregamos</h2>

      <p class="text-center mb-10">
        Esses são nossos Centros de Excelência, com atuação junto a clientes do
        <br />mercado financeiro, tecnologia, indústria, saúde,
        <br />varejo, infraestrutura, dentre outros.
      </p>
    </div>
    <img src="@/assets/img/phone.png" width="100%" />
  </section>

  <section id="centrosdeexcelencia">
    <div class="bg-gray-50 py-5">
      <h2
        class="text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10"
      >Centros de excelência</h2>

      <div class="flex center">
        <div class="f-margin">
          <a href="#">
            <img src="@/assets/img/negocios.png" alt="negocios" width="150" />
          </a>

          <p class="my-5">
            Fusões e
            Aquisições
            (M&A)
          </p>

          <p class="my-5">
            Estruturação de
            Negócios
          </p>

          <p class="my-5">Turnaround</p>

          <p class="my-5">
            Eficiência em
            Processos e
            Custos
          </p>

          <p class="my-5">
            Planejamento
            Estratégico
          </p>

          <p class="my-5">
            Avaliação de
            Empresas
          </p>
        </div>

        <div class="f-margin">
          <a href="#">
            <img src="@/assets/img/governanca.png" alt="governanca" width="200" />
          </a>

          <p class="my-5">Ambiental, Social e Governança (ESG)</p>

          <p class="my-5">Conselho</p>

          <p class="my-5">Estrutura de Governança</p>

          <p class="my-5">Gestão de Crise</p>
        </div>

        <div class="f-margin">
          <a href="#">
            <img src="@/assets/img/pessoas.png" alt="pessoas" width="150" />
          </a>

          <p>Recursos Humanos</p>

          <p class="my-5">Relações Sindicais e Trabalhistas</p>

          <p class="my-5">Cultura Organizacional</p>

          <p class="my-5">Desenvolvimento de Pessoas</p>
        </div>
      </div>
    </div>
  </section>

  <section id="nossascompetencias">
    <div class="py-5">
      <h2
        class="text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10"
      >Nossas competências</h2>

      <div class="flex px-40 my-20">
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

      <div class="rodape center px-28 mt-10">
        <ul>
          <li>• Experiência</li>
        </ul>

        <ul class="mx-1">
          <li>• Conhecimento</li>
        </ul>

        <ul class="mx-1">
          <li>• Visão</li>
        </ul>

        <ul class="mx-1">
          <li>• Relacionamento</li>
        </ul>

        <ul class="mx-1">
          <li>• Planejamento</li>
        </ul>

        <ul class="mx-1">
          <li>• Parceria</li>
        </ul>

        <ul class="mx-1">
          <li>• Colaboração</li>
        </ul>

        <ul class="mx-1">
          <li>• Interlocução</li>
        </ul>

        <ul class="mx-1">
          <li>• Inovação</li>
        </ul>

        <ul class="mx-1">
          <li>• Construção</li>
        </ul>

        <ul class="mx-1">
          <li>• Transformação</li>
        </ul>

        <ul class="mx-1">
          <li>• Execução</li>
        </ul>

        <ul class="mx-1">
          <li>• Resultado</li>
        </ul>
      </div>

      <div class="rodape2 px-20 mb-10">
        <p>
          Na UbyUS Advisors reunimos as diferentes competências obtidas ao longo de nossas histórias e as aplicamos em
          nossas soluções. Contudo, muito além das nossas histórias, habilidades e competências, o que nos importa é
          compartilhá-las
          com nossos clientes, produzindo soluções equilibradas e resultados sustentáveis. Nossa equipe está
          pronta para o seu próximo desafio!
        </p>
      </div>
    </div>
  </section>

  <section id="quemsomos">
    <div class="center bg-gray-100 py-5">
      <h2 class="text-4xl text-center titulo-section text-whitetheme-50 font-bold my-10">Quem Somos</h2>

      <div class="flex justify-between px-56">
        <div class="text-center">
          <div>
            <a href="#">
              <img src="@/assets/img/Joao.png" alt="João" width="250px" />
            </a>
          </div>
          <span class="text-xl text-gray-600 font-bold">João Rached</span>
        </div>

        <div class="text-center">
          <div>
            <a href="#">
              <img src="@/assets/img/eduardo.png" alt="Eduardo" width="230px" />
            </a>
          </div>
          <span class="text-xl text-gray-600 font-bold">Eduardo Beadle</span>
        </div>

        <div class="text-center">
          <div>
            <a href="#">
              <img src="@/assets/img/Nilton.png" alt="Nilton" width="225px" />
            </a>
          </div>
          <span class="text-xl text-gray-600 font-bold">Nilton Junior</span>
        </div>
      </div>
    </div>
  </section>

  <div class="flex justify-center py-10">
    <div class="slogan justify-center bg-white mx-auto">
      <img src="@/assets/img/somosubyusretangulo-150x150.jpg" />
    </div>
  </div>
  <section id="contato">
    <div class="bg-gray-100 py-10">
      <h2 class="text-4xl text-center titulo-section text-whitetheme-50 font-bold">Contato</h2>

      <div class="cx-form flex justify-center">
        <div class="w-1/3">
          <div class="flex">
            <label for="nome" class="label-tail text-left">
              Nome
              <span class="text-red-600">*</span>
            </label>
            <input
              class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome completo"
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
            />
            <label for="nome" class="label-tail text-left mt-1">
              Mensagem
              <span class="text-red-600">*</span>
            </label>
            <textarea
              class="mb-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mensagem"
              name="mensagem"
              style="height:100px"
            ></textarea>
          </div>
          <div>
            <SBtn value="ENVIAR" color="yellow" class="bg-whitetheme-50"></SBtn>
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

  <div class="bg-gray-600 py-5 text-white px-20">
    <div class="flex justify-between my-5">
      <div class="w-1/3 text-center">
        <p>
          Avenida Dr. Chucri Zaidan, 1550 – cj. 1508
          <br />Vila São Francisco – São Paulo / SP
          <br />CEP: 04711-130
        </p>
      </div>

      <div class="w-1/3 text-center">
        <p>
          <a href="mailto:contato@ubyusadvisors.com">
            <span class="boldwhite">contato@ubyusadvisors.com</span>
          </a>
        </p>
      </div>
      <div class="w-1/3 text-center">
        <p>São Paulo / SP – Brasil</p>
      </div>
    </div>
    <div class="flex justify-center my-4">
      <div class="text-2xl">
        <i class="text-2xl mx-4 fab fa-facebook-square"></i>
        <i class="text-2xl mx-4 fab fa-instagram"></i>
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
export default {
  components: {
    Menu,
    Swiper,
    SwiperSlide,

  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
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
</style>