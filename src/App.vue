<template>
  <div id="app">
    <div id="nav">
      <div class="space">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>
      <div class="dayTime">
        <div class="moon"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

#nav {
  padding: 0px;
  margin: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body{
  margin: 0px;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom,#0c164f,black)
}
.space{
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.star{
  position: absolute;
  left: 50%;
  top: 50%;
  height: 8px;
  width: 8px;
  background-color: white;
  border-radius: 100%;
  filter: drop-shadow(0 0 5px #fffcbb);
  animation: soar 3s ease-in-out infinite;
}
@keyframes soar{
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-150px);
    height: 0;
    width: 0;
  }
}
.star:nth-child(1){
  top:70%;
  left:15%;
  animation-delay: 1.6s;
}
.star:nth-child(2){
  top:80%;
  left:60%;
  animation-delay: 1s;
}
.star:nth-child(3){
  top:70%;
  left:30%;
  animation-delay: 1.2s;
}
.star:nth-child(4){
  top:75%;
  left:90%;
  animation-delay: 1.4s;
}
.star:nth-child(5){
  top:65%;
  left:65%;
  animation-delay: 1.5s;
}
.star:nth-child(6){
  top:85%;
  left:20%;
  animation-delay: 1s;
}
.star:nth-child(7){
  top:70%;
  left:50%;
  animation-delay: 2s;
}
.star:nth-child(8){
  top:90%;
  left:75%;
  animation-delay: 1.3s;
}
.star:nth-child(9){
  top:80%;
  left:5%;
  animation-delay: 1.7s;
}
.star:nth-child(10){
  top:95%;
  left:40%;
  animation-delay: 1.2s;
}
.star:nth-child(11){
  top:45%;
  left:5%;
  animation-delay: 1.5s;
}
.moon{
  position: absolute;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 10%;
  left: 42.5%;
  background-color: orangered;
  box-shadow: 0 0 20px rgb(197, 128, 0);
  animation: orbit 15s ease-in-out infinite
}
.dayTime{
  position: absolute;
  width: 27.5%;
  height: 130px;
  background-color: #0c1445;
  left: 70%;
  top: 6.5%;
  animation: time 15s ease-in-out infinite;
  overflow: hidden;
  border-radius: 50%;
}
@keyframes orbit{
  0%{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 50%;
    left: 5%;
    background-color: orangered;
    box-shadow: 0 0 20px rgb(197, 128, 0);
  }
  20%{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 10%;
    left: 42.5%;
    background-color: orangered;
    box-shadow: 0 0 20px rgb(197, 128, 0);
  }
  40%{
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    top: 50%;
    left: 80%;
    background-color: orangered;
  }
  50%{
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    top: 150%;
    left: 80%;
    background-color: #212e81;
    box-shadow: 0 0 0 rgb(197, 128, 0);
  }
  59%{
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    top: 50%;
    left: 5%;
    background-color: #212e81;
    box-shadow: 0 0 0 rgb(197, 128, 0);
  }
  60%{
    height: 30px;
    width: 30px;
    top: 50%;
    left: 5%;
    border-radius: 50%;
    box-shadow: -8px 8px 0 10px #fffcbb;
    background-color: #212e81;
  }
  80%{
    height: 30px;
    width: 30px;
    top: 10%;
    left: 42.5%;
    border-radius: 50%;
    box-shadow: -8px 8px 0 10px #fffcbb;
    background-color: #0c1445;   
  }
  100%{
    height: 0;
    width: 0;
    top: 50%;
    left: 80%;
    border-radius: 50%;
    background-color: #0e1330;   
  }
}
@keyframes time{
  0%{
    background-color: #0e1330;
  }
  20%{
    background-color: orange;
  }
  40%{
    background-color: rgb(211, 106, 36);
  }
  60%{
    background-color: #212e81;
  }
  80%{
    background-color: #0c1445;
  }
  100%{
    background-color: #0e1330;
  }
}
</style>
