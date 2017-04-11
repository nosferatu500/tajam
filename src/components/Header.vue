<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="logo col-md-2">
          <img src="../../src/assets/img/header/logo.png" alt="">
          <h1>tajam</h1>
        </div>
        <div class="col-md-7">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Expertise</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">People Say</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="s_middle">
          <h1>We Are Awesome Creative Agency</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos vero labore magnam, eveniet quae dicta molestias, officia laboriosam ab fugiat quidem inventore quod impedit doloribus exercitationem commodi aspernatur quis.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </header>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

header
  background-image: url(../../src/assets/img/header/backgroung.png)
  background-size: cover
  width: 100%
  .logo
    img
      padding-top: 15px
      width: 45px
      float: left
    h1
      font-size: 30px
      color: #3b7fa4
      padding: 0
      margin: 0
      padding-top: 20px
      padding-left: 10px
      float: left

.col-md-7
  float: right
  ul
    padding-top: 35px
    li
      display: inline-block
      a
        padding: 0
        margin: 0
        padding-top: 30px
        padding-left: 12px
        padding-right: 12px
        color: #fff
        text-transform: uppercase
        font-size: 12px

.s_middle
  padding-top: 170px
  padding-bottom: 200px
  text-align: center
  h1
    font-size: 32px
  p
    font-size: 14px
    padding-bottom: 50px
  h1, p
    color: #fff
  button
    border: 2px solid #3b7fa4
    background-color: transparent
    text-transform: uppercase
    color: #3b7fa4
    font-size: 16px
    padding: 10px 15px

</style>
