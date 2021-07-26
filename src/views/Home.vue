<template>
  <div>
    <h1>รายรับ - รับจ่าย</h1>
    <div  class="container">
      <data-table></data-table>
      <add-info></add-info>
    </div>
  </div>
</template>

<script>
  import DataTable from "@/components/DataTable"
  import AddInfo from "@/components/AddInfo"
  export default{
    components:{
      DataTable,
      AddInfo
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@keyframes changecolor{
  0%{ 
    background-color: burlywood;
    color: darkorange;
  }
  25%{ 
    background-color: blanchedalmond;
    color: firebrick;
  }
  50%{ 
    background-color: rgb(241, 212, 132);
    color: dodgerblue;
  }
  75%{ 
    background-color: rgb(255, 251, 236);
    color: darksalmon;
  }
  100%{ 
    background-color: rgb(241, 195, 135);
    color: darkmagenta;
  }
}
  h1{
    border: 0px;
    font-family: 'Itim', cursive;
    margin: 0px;
    padding: 0.4em;
    background-color: burlywood;
    animation-name: changecolor;
    animation-duration: 10s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
  .container{
    display: grid;
    grid-template-columns: 70% 30%;
  }
</style>
