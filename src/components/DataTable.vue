<template>
  <div>
      <table class="center">
          <thead>
              <tr>
                  <th style="border-right-style: solid;border-color:white;border-bottom-style: solid">Date (M/D/Y)</th>
                  <th style="border-right-style: solid;border-color:white;border-bottom-style: solid">Info</th>
                  <th style="border-right-style: solid;border-color:white;border-bottom-style: solid">Total</th>
                  <th style="border-bottom-style: solid;border-color:white">Status</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="data in paid" :key="data.id">
                  <td style="border-right-style: solid;border-color:white">{{ data.date }}</td>
                  <td style="border-right-style: solid;border-color:white">{{ data.info }}</td>
                  <td style="border-right-style: solid;border-color:white">{{ data.total }}</td>
                  <td>{{ data.status }}</td>
              </tr>
          </tbody>
      </table>
      <cal :paid="paid"/>
      <br>
      <pie-chart :chart-data="datacollection" class="pie"/>
      <div class="dateCom">
            <div class="from">
                <label for="from">Between </label>
                <input type="date" name="from" v-model="dateCom.from">
            </div>
            <div class="to">
                <label for="to">and </label>
                <input type="date" name="to" v-model="dateCom.to">
            </div>
      </div>
      <div>
          <h3>รายรับ - รายจ่่าย ในช่วงเวลา(นับวันหัวท้าย)</h3>
          <span style="padding-right:15px">รายรับ: {{ total.income }}</span>
          <span>รายจ่าย: {{ total.outcome }}</span>
      </div>
  </div>
</template>

<script>
import Cal from "@/components/Cal"
import Data from "@/store/index"
import PieChart from "@/components/PieChart"
import moment from "moment"

export default {
    components:{
        PieChart,
        Cal
    },
    data() {
        return{
            paid: [],
            form: {
                date: "",
                info: "",
                total: 0
            },
            total: {
                income: 0,
                outcome: 0,
            },
            datacollection: null,
            dateCom:{
                from: "",
                to: ""
            }
        }
    },
    beforeUpdate() {
        this.totalCal()
        this.graph()
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            await Data.dispatch("fetchData")
            this.paid = Data.getters.dataPaid
            this.totalCal()
            this.graph()
        },
        totalCal(){
            this.total = {
                income: 0,
                outcome: 0,
            }
            this.paid.forEach((element) =>{
                if(this.dateCom.from==""||this.dateCom.to==""){
                    if(element.status === "รายรับ"){
                        this.total.income+= element.total
                    }else{
                        this.total.outcome+= element.total
                    }
                }else{
                    if(moment(moment(this.dateCom.from).format('MM/DD/YYYY')).isBefore(moment(this.dateCom.to).format('MM/DD/YYYY'))){
                        if(moment(element.date).isBetween(moment(this.dateCom.from).format('MM/DD/YYYY'),moment(this.dateCom.to).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }else if(moment(element.date).isSame(moment(this.dateCom.from).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }else if(moment(element.date).isSame(moment(this.dateCom.to).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }
                    }else if(moment(moment(this.dateCom.from).format('MM/DD/YYYY')).isAfter(moment(this.dateCom.to).format('MM/DD/YYYY'))){
                        if(moment(element.date).isBetween(moment(this.dateCom.to).format('MM/DD/YYYY'),moment(this.dateCom.from).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }else if(moment(element.date).isSame(moment(this.dateCom.from).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }else if(moment(element.date).isSame(moment(this.dateCom.to).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }
                    }else{
                        if(moment(element.date).isSame(moment(this.dateCom.from).format('MM/DD/YYYY'))){
                            if(element.status === "รายรับ"){
                                this.total.income+= element.total
                            }else{
                                this.total.outcome+= element.total
                            }
                        }
                    }
                }
            })
        },
        graph(){
            this.datacollection = {
                labels: ["รายรับ", "รายจ่าย"],
                datasets: [
                    {
                        data: [this.total.income, this.total.outcome], 
                        backgroundColor: [
                            "#77CEFF",
                            "#F2ACB9"
                        ],
                        borderWidth:0,
                    }
                ]
            }
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
    table.center {
        font-family: 'Itim', cursive;
        margin-top: 70px;
        margin-left:auto; 
        margin-right:auto;
        text-align: center;
        width: 90%;
        grid-row: 1/3;
        border-spacing: 0px;
    }
    div{
        font-family: 'Itim', cursive;
        color: #eae0c8;
    }
    span{
        font-size: 1.5em;
    }
    .pie{
        width: 300px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Itim', cursive;
        color: white;
    }
    tbody tr:hover{
        background-color: #fffcbb;
        color: #0c164f;
    }
    .dateCom{
        margin-top: 30px;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .from{
        text-align: right;
    }
    .to{
        padding-left: 10px;
        text-align: left;
    }
</style>