<template>
  <div class="w-full hidden lap:block items-center" v-show="!menuToggle">
    <nav class="flex items-center">
      <a class="px-2 hover:text-whitetheme-50" href="#oquenosmove">
        <span v-if="lang == 'portugues'">O QUE NOS MOVE</span>
        <span v-else>WHAT MOVE US</span>
      </a>
      <a class="px-2 hover:text-whitetheme-50" href="#centrosdeexcelencia">
        <span v-if="lang == 'portugues'">CENTROS DE EXCELÊNCIA</span>
        <span v-else>CENTERS OF EXCELLENCE</span>
      </a>
      <a class="px-2 hover:text-whitetheme-50" href="#nossascompetencias">
        <span v-if="lang == 'portugues'">NOSSAS HABILIDADES</span>
        <span v-else>OUR SKILLS</span>
      </a>
      <a class="px-2 hover:text-whitetheme-50" href="#quemsomos">
        <span v-if="lang == 'portugues'">QUEM SOMOS</span>
        <span v-else>WHO WE ARE</span>
      </a>
      <a class="px-2 hover:text-whitetheme-50" href="#contato">
        <span v-if="lang == 'portugues'">CONTATO</span>
        <span v-else>CONTACT</span>
      </a>
      <a class="px-2 hover:text-whitetheme-50" href="#">
        <div class="flex items-baseline">
          <div>
            <img
              v-if="lang == 'portugues'"
              class="mr-1 my-auto"
              src="@/assets/img/bandeira.jpg"
              width="20"
              height="10"
              @click="changeLang('english')"
            />
            <img
              v-else
              class="mr-1 my-auto"
              src="@/assets/img/english/ptbr.png"
              width="20"
              height="10"
              @click="changeLang('portugues')"
            />
          </div>

          <span v-if="lang == 'portugues'" @click="changeLang('english')">ENGLISH</span>
          <span v-else @click="changeLang('portugues')">PORTUGUÊS</span>
        </div>
      </a>
    </nav>
  </div>
  <div class="flex flex-wrap tab:block lap:hidden items-center">
    <div class="w-full">
      <nav>
        <span>
          <button class="navbar-burger flex items-center text-black p-3" @click="toggleMenu()">
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </span>
      </nav>
    </div>
    <div class="w-full bg-gray-50" v-show="menuToggle">
      <nav class="w-full text-left items-center">
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#oquenosmove">
            <span v-if="lang == 'portugues'">O QUE NOS MOVE</span>
            <span v-else>WHAT MOVE US</span>
          </a>
        </div>
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#centrosdeexcelencia">
            <span v-if="lang == 'portugues'">CENTROS DE EXCELÊNCIA</span>
            <span v-else>CENTERS OF EXCELLENCE</span>
          </a>
        </div>
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#nossascompetencias">
            <span v-if="lang == 'portugues'">NOSSAS HABILIDADES</span>
            <span v-else>OUR SKILLS</span>
          </a>
        </div>
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#quemsomos">
            <span v-if="lang == 'portugues'">QUEM SOMOS</span>
            <span v-else>WHO WE ARE</span>
          </a>
        </div>
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#contato">
            <span v-if="lang == 'portugues'">CONTATO</span>
            <span v-else>CONTACT</span>
          </a>
        </div>
        <div class="my-2">
          <a class="px-2 hover:text-whitetheme-50" href="#">
            <span class="my-auto">
              <span class="float-left">
                <img
                  v-if="lang == 'portugues'"
                  class="mr-1 ml-2 mt-1 my-auto"
                  src="@/assets/img/bandeira.jpg"
                  width="20"
                  height="10"
                  @click="changeLang('english')"
                />
                <img
                  v-else
                  class="mr-1 ml-2 mt-1 my-auto"
                  src="@/assets/img/english/ptbr.png"
                  width="20"
                  height="10"
                  @click="changeLang('portugues')"
                />
              </span>

              <span
                class="float-left"
                v-if="lang == 'portugues'"
                @click="changeLang('english')"
              >ENGLISH</span>
              <span class="float-left" v-else @click="changeLang('portugues')">PORTUGUÊS</span>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { onBeforeMount, reactive, toRefs, inject, defineComponent } from "vue"

const Menu = defineComponent({
  setup() {
    const useLang: any = inject("lang")
    const { lang, changeLang, placeholderNameContact } = useLang
    const state = reactive({
      menuToggle: false
    })
    function toggleMenu() {
      state.menuToggle = !state.menuToggle
    }

    onBeforeMount(() => {

      // if (verifyLangEnglish()) {
      //   setLangState(verifyLangEnglish())
      // }
      // if (state.lang == "english") {
      // } else {
      // }
    })
    return {
      ...toRefs(state),
      lang,
      changeLang,
      placeholderNameContact,
      toggleMenu
    };
  }
});
export default Menu;
</script>
