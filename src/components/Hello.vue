<template>

    <div class="background">
      <div class="multicolor">
        <div class="container">
          <div id="app">
            <div class="row">
              <div class="col s12 m12 l12">
              <div v-if="isProjects">
                <div id="moon" v-bind:class="{ 'spin-in': isSpin, show: isSlideOut }" v-on:click="isProjects = !isProjects">
                  <div class="content">
                    <section id="intro">
                      <section id="name">
                        <div id="name-first">Alexi</div>
                        <div id="name-last">Taylor</div>
                      </section>
                      <section id="title">
                        <div id="title-first">Web</div>
                        <div id="title-second">Developer</div>
                      </section>
                      <section id="subtitle">
                        <div id="name-first">Lets Make The Web More Beautiful,</div>
                        <div id="name-last">One Pixel At A Time</div>
                      </section>
                      <div class="row">
                        <section id="links">
                          <a target="_blank" href="mailto:alexi@bluesunrise.com"><i class="fa fa-envelope fa-size" aria-hidden="true"></i></a>
                          <a target="_blank" href="https://github.com/alexitaylor"><i class="fa fa-github fa-size" aria-hidden="true"></i></a>
                          <a target="_blank" href="https://www.linkedin.com/in/alexitaylor/"><i class="fa fa-linkedin fa-size" aria-hidden="true"></i></a>
                        </section>
                      </div>
                    </section>
                    <div class="row">
                      <button class="btnRandom" v-on:click="isSlideOut = !isSlideOut">LEARN MORE</button>
                    </div>
                  </div>
                </div>
                </div>
                <div v-else>
                <router-link class="links" to="/Projects"><button class="btnRandom" v-bind:class="{ 'hide-projects': isProjects }" v-on:click="isSlideOut = !isSlideOut">Projects</button></router-link>
                <router-link class="links" to="/Bio"><button class="btnRandom" v-bind:class="{ 'hide-projects': isProjects }" v-on:click="isSlideOut = !isSlideOut">Bio</button></router-link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isSlideOut: false,
      isSpin: true,
      isProjects: true,
    };
  },
  methods: {
    slide: () => {
      console.log(this.isSlideOut);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hide-projects {
    opacity: 0;
  }

</style>
