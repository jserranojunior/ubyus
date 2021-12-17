<template>
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
</template>
<script lang="ts">import { onBeforeMount, reactive, toRefs, inject } from "vue"

export default {
  setup() {
    const useLang: any = inject("lang")
    const { lang, changeLang, placeholderNameContact } = useLang


    onBeforeMount(() => {
      // if (verifyLangEnglish()) {
      //   setLangState(verifyLangEnglish())
      // }
      // if (state.lang == "english") {
      // } else {
      // }
    })
    return {
      lang,
      changeLang,
      placeholderNameContact
    };
  }
}
</script>