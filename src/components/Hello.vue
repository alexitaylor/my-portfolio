<template>

    <div class="background screencast">
      <div class="multicolor screencast">
          <div id="app">
            <div class="row">
              <div class="col s12 m12 l12">
                <div id="moon" v-bind:class="{ 'spin-in': isSpin, show: isSlideOut }">
                  <div class="top_right">
                    <ul>
                      <li>{{moment}}</li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div class="hello-content">
                    <section id="intro">
                      <section id="name">
                        <div id="name-first">Alexi</div>
                        <div id="name-last">Taylor</div>
                      </section>
                      <section id="title">
                        <div id="title-first">Full-Stack</div>
                        <div id="title-second">Engineer</div>
                      </section>
                      <section id="subtitle">
                        <div id="name-first">Lets Make The Web More Beautiful,</div>
                        <div id="name-last">One Pixel At A Time</div>
                      </section>
                      <div class="row">
                        <section id="links">
                          <a target="_blank" href="mailto:alexi@bluesunrise.com" class="icons"><i class="fa fa-envelope fa-size" aria-hidden="true"></i></a>
                          <a target="_blank" href="https://github.com/alexitaylor" class="icons"><i class="fa fa-github fa-size" aria-hidden="true"></i></a>
                          <a target="_blank" href="https://www.linkedin.com/in/alexitaylor/" class="icons"><i class="fa fa-linkedin fa-size" aria-hidden="true"></i></a>
                        </section>
                      </div>
                    </section>
                    <div class="row">
                      <router-link class="links" to="/Nav"><button class="myBtn" v-on:click="isSlideOut = !isSlideOut">LEARN MORE</button></router-link>
                    </div>

                    <div class="bottom">
                      <ul class="list">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform:rotate(90deg)">
                            <path d="M0 0h24v24h-24z" fill="none" />
                            <path d="M3 4l9 16 9-16h-18zm3.38 2h11.25l-5.63 10-5.62-10z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24h-24z" fill="none" />
                            <path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24h-24z" fill="none" />
                            <path d="M19 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-14v-14h14v14z" />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

</template>

<script>
import moment from 'moment';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isSlideOut: false,
      isSpin: true,
      isProjects: true,
      moment: moment().format('LTS'),
    };
  },
  mounted() {
    this.currentMoment();
  },
  methods: {
    slide() {
      console.log(this.isSlideOut);
    },
    currentMoment() {
      this.moment = moment().format('LTS');
      setInterval(this.currentMoment, 1000);
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
