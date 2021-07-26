<template>
  <div class="addPg">
      <h2>เพิ่ม รายรับ - รายจ่าย</h2>
      <div  class="addInfo">
          <div>
          <label for="date">วันที่ </label>
          <input type="date" name="date" v-model="form.date">
      </div>

      <div>
          <label for="detail">รายละเอียด </label>
          <input type="text" name="info" v-model="form.info">
      </div>

      <div>
          <label for="money">จำนวนเงิน </label>
          <input type="number" name="total" v-model="form.total">
      </div>

      <div>
          <label for="status">สถานะ (รายรับ/รายจ่าย) </label>
          <!-- <input type="text" name="status" v-model="form.status"> -->
          <select name="type" id="types" v-model="form.status">
              <option value="รายรับ">รายรับ</option>
              <option value="รายจ่าย">รายจ่าย</option>
          </select>
      </div>
      </div>
      <br>
      <div class="addBt">
          <button @click="addData">เพิ่ม</button>
      </div>
  </div>
</template>

<script>
import Data from "@/store/index"
import moment from "moment"
export default {
    data(){
        return{
            form:{
                date: "",
                info: "",
                total: 0,
                status: "รายรับ"
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date: "",
                info: "",
                total: 0,
                status:"รายรับ"
            }
        },
        addData() {
            let payload = {
                date: moment(this.form.date).format('MM/DD/YYYY'),
                info: this.form.info,
                total: parseInt(this.form.total),
                status: this.form.status
            }
            Data.dispatch("addData", payload)
            this.clearForm()
        }
    }

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
    .addInfo{
        padding-top: 30px;
        font-family: 'Itim', cursive;
    }
    .addInfo >div{
        margin-bottom: 20px;
        text-align:left;
        padding-left: 30px;
        color: gold
    }   
    h2{
        font-family: 'Itim', cursive;
        margin: 0px;
        padding-top: 30px;
        text-align: left;
        padding-left: 30px;
        color: gold
    } 
    button{
        font-family: 'Itim', cursive;
        font-size: 1em;
        padding: 10px 20px;
        border-radius: 10%;
        color: gold;
        background-color: #1167b1
    }
    button:hover{
        color: palegoldenrod;
        background-color: brown;
    }
    .addBt{
        text-align: left;
        padding-left: 150px;
    }
    input{
        font-family: 'Itim', cursive;
        padding-left: 5px;
        margin-left: 10px;
        color: gold;
        background-color: #1167b1
    }
    .addPg{
        margin-top: 130px;
        background-color: #dc4afc;
        padding-bottom: 20px;
        margin-right: 50px;
        border-color: #f1bafd;
        border-style: solid;
        border-width: 8px;
        width: 360px;
        height: 320px;
    }
</style>