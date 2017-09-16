<template>
  <div class="page1">
    <h1>
      Page1 of Perspective
    </h1>
    <div>
      <h2>
        What you typed on homepage {{sometext}}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'page1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:
  {
    ...mapGetters([
      'sometext'
    ]),
  },
  methods: {
    ...mapActions([
    'pushtext',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
