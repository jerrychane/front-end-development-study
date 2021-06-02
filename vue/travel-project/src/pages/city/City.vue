<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import axios from "axios"
import CityHeader from "./components/Header"
import CitySearch from "./components/Search"
import CityList from "./components/List"
import CityAlphabet from "./components/Alphabet"
export default {
  name: "city",
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get("/api/city.json").then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      let data = res.data
      console.log(data)
      if (data.ret && data.data) {
        this.cities = data.data.cities
        this.hotCities = data.data.hotCities
      }
    },
    handleLetterChange (letter) {
      console.log("letter", letter)
      this.letter = letter
    }
  }
}
</script>
<style type="stylus" scoped>

</style>
