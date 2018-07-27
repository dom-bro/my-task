import axios from 'axios'
export default {
  methods: {
    open (url) {
      const vm = this
      vm.$router.push(url)
    },
    axios,
  },
}
