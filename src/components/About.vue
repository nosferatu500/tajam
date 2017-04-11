<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="logo col-md-5">
                    <img src="../../src/assets/img/about/logo.png" alt="">
                </div>
                <div class="s_story col-md-7">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde voluptatem eaque id sunt. Iste, esse consectetur quidem. Illum deleniti eaque esse, laudantium suscipit eveniet modi aliquam eius vel expedita!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam unde voluptatem eaque id sunt. Iste, esse consectetur quidem. Illum deleniti eaque esse, laudantium suscipit eveniet modi aliquam eius vel expedita!</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        <div class="s_video">
            <div class="container">
                <img src="../../src/assets/img/about/play.png" alt="">                            
                <h1>watch our story</h1>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>

.logo
    text-align: center
    img
        padding-top: 70px

.s_story
    float: left
    padding-bottom: 70px
    h1
        padding: 0
        margin: 0
        padding-top: 70px        
        font-size: 22px
        padding-bottom: 30px
        text-transform: uppercase
    p
        padding: 0
        margin: 0
        font-size: 14px
        padding-bottom: 30px
    button
        border: 2px solid #3b7fa4
        background-color: transparent
        text-transform: uppercase
        color: #3b7fa4
        font-size: 16px
        padding: 10px 15px

.s_video
    text-align: center
    background-image: url(../../src/assets/img/about/video.png)
    background-size: cover
    width: 100%
    img
        padding-top: 200px
        padding-bottom: 30px
    h1
        color: #fff
        font-size: 16px
        text-transform: uppercase
        padding-bottom: 200px

</style>
