<template>

    <div class="background">
      <div class="multicolor">
        <div class="container">
          <div id="app">
            <div class="row">
              <div class="col s12 m12 l12">
                <div id="moon">
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
                      <div class="row">
                        <button class="btnRandom">LEARN MORE</button>
                      </div>
                    </section>
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
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Buttons */

  .btnRandom {
    -moz-transition: all, ease-in-out 0.5s;
    -o-transition: all, ease-in-out 0.5s;
    -webkit-transition: all, ease-in-out 0.5s;
    transition: all, ease-in-out 0.5s;
  }

  .btnRandom {
    color: #114b8e;
    font-size: 1em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1em 1.6em;
    margin: 3%;
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    letter-spacing: .0875em;
    font-weight: 500;
    border-radius: 100px;
    outline: 0;
  }


  .btnRandom:hover {
    color: #fff;
    background: #de4f4f;
    text-decoration: none;
    outline: 0;
  }

  .z-depth-1-half,
  .btnRandom {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }

  .z-depth-3,
  .btnRandom:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
  }

</style>
