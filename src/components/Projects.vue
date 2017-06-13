<template>

    <div class="background-mars">
      <div class="multicolor-mars">
        <div class="">
          <div id="app">
          <router-link to="/"><button class="myBtn">Home</button></router-link>
            <router-link class="links" to="/Bio"><button class="myBtn">Bio</button></router-link>
            <h1>{{msg}}</h1>

            <div class="card-container" v-for="project in myProjects">
              <div class="card-top" v-bind:class="project.framework">
                <span class="project-type" v-bind:class="project.framework">{{project.framework}}</span>
               <div class="blur"></div>
              </div>
              <div class="card-divider" v-bind:class="project.framework">
                <span></span>
              </div>
              <div class="content">
                <div class="details">
                  <span>  </span>
                  <span>...</span>
                </div>
                <div class="title">{{project.name}}</div>
                <div class="summary">{{project.description}}</div>
                <button class="myBtn">Learn More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'projects',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [],
      myProjects: [
        {
          name: 'Material Studios',
          description: 'something here',
          githubURL: 'https://github.com/alexitaylor/hr-raptors',
          liveURL: 'https://material-gui.herokuapp.com/',
          framework: 'ReactJS',
        },
        {
          name: 'Fridgr',
          description: 'Collaborative pantry/fridge inventory app with individualized shopping lists.',
          githubURL: 'https://github.com/alexitaylor/Fridgr',
          liveURL: 'https://xmen-fridgr.herokuapp.com/',
          framework: 'ReactJS',
        },
        {
          name: 'Photo Hungry',
          description: 'Delicious food photos analyzed and turned into restaurant and recipe recommendations.',
          githubURL: 'https://github.com/alexitaylor/Photo-Hungry',
          liveURL: 'https://hr-xmen.herokuapp.com/',
          framework: 'ReactJS',
          stack: 'General: NodeJS, ExpressJS, Mongo / Mongoose, Flux. Dev Tools: Bundler: Webpack, Testing: Mocha, Chai, Linting: eslint, Airbnb configuration',
        },
        {
          name: 'Cycling Weather App',
          description: 'Help cyclist predict best times to ride based on the users preferences and forecast.',
          githubURL: 'https://github.com/alexitaylor/vue-rideability-app',
          liveURL: '#',
          framework: 'VueJS',
        },
        {
          name: 'Portofolio',
          description: 'My Portofolio.',
          githubURL: 'https://github.com/alexitaylor/my-portfolio',
          liveURL: 'https://alexitaylor.herokuapp.com',
          framework: 'VueJS',
        },
        {
          name: 'Headlines',
          description: 'Get up to date on all the latest news, top stories and trends with the beautifully designed Headlines news app.',
          githubURL: '#',
          liveURL: '#',
          framework: 'VueJS',
        },
        {
          name: 'Gavin the Friendly Bot',
          description: 'A twitter bot that tweets friendly tweets to random users.',
          githubURL: 'https://github.com/alexitaylor/Gavin-The-Bot',
          liveURL: 'https://twitter.com/GavinTheBot',
          framework: 'NodeJS',
        },
      ],
    };
  },
  created() {
    axios.get('https://api.github.com/users/alexitaylor/repos', {
      params: {
        type: 'all',
      },
    })
    .then((res) => {
      console.log('Success Response', res.data);
      const filters = ['Vue-Rideability-App', 'serverFun', 'Fridgr', 'Gavin-The-Bot', 'hr-raptors', 'Photo-Hungry', 'my-portfolio'];
      res.data.forEach((repo) => {
        if (_.includes(filters, repo.name)) {
          this.projects.push({ name: repo.name, url: repo.html_url, language: repo.language });
        }
      });
      this.projects.forEach((repo) => {
        console.log(repo);
        const query = `https://api.github.com/repos/alexitaylor/${repo.name}/stats/contributors`;
        axios.get(query)
          .then((response) => {
            console.log('GOT SOMETHING', response.data);
          })
          .catch((error) => {
            console.log('Error', error);
          });
      });
    })
    .catch((err) => {
      console.log('Error', err);
    });
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
