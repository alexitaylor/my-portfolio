<template>

    <div class="background-mars screencast">
      <div class="multicolor-mars screencast">
        <div class="container">
          <div id="app">
          <router-link class="links" to="/"><button class="myBtn">Home</button></router-link>
            <router-link class="links" to="/Projects"><button class="myBtn">Projects</button></router-link>
            <h4>{{msg}}</h4>
            <h5>{{skills}}</h5>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'bio',
  data() {
    return {
      msg: 'As an autonomous engineer with exposure to working in a collaborative environment; I am experience in exchanging software layers across the stack while producing maintainable, well-design applications.',
      skills: 'Front-end: JavaScript ES5 & ES6, HTML5, CSS3, ReactJS, VueJS, AngularJS, Vuex, Flux, Redux and AJAX Back-end: NodeJS (ExpressJS), NPM and Yarn Databases: SQL (mySQL, SQLite, PostgreSQL), NoSQL (Redis, MongoDB) Others: Git, Heroku, Bootstrap, Material Design, Mocha, Chai, Webpack, Gulp, JQuery',
      isSlideOut: false,
      isSpin: true,
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
  /* Buttons */

  .myBtn {
    -moz-transition: all, ease-in-out 0.5s;
    -o-transition: all, ease-in-out 0.5s;
    -webkit-transition: all, ease-in-out 0.5s;
    transition: all, ease-in-out 0.5s;
  }

  .myBtn {
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


  .myBtn:hover {
    color: #fff;
    background: #de4f4f;
    text-decoration: none;
    outline: 0;
  }

  .z-depth-1-half,
  .myBtn {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }

  .z-depth-3,
  .myBtn:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
  }

</style>
