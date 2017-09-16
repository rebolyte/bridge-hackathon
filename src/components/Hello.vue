<template>
  <div class="hello">
    <h1>
      Hello and Welcome to Perspect😆Iv
    </h1>
    <textarea :value="sometext" @input="pushtext" placeholder="write ur junk yo"></textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {

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
    ]),
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
