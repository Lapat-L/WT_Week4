<script>
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['chartData'],
  data(){
    return{
      options:{
        legend:{
          labels:{
            fontColor: "#eae0c8",
            fontFamily: "'Itim', cursive",
            fontSize: 20,
            boxWidth: 60
          }
        }
      }
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}
</script>
