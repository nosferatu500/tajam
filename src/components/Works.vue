<template>
    <section>
        <div class="s_top">
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <h1>our works</h1>
                    </div>
                    <div class="col-md-3">
                        <h4>See All Project in dribbble</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="s_middle">
            <!--Add Owl.js-->
        </div>
        <div class="s_bottom">
            <button>Load More</button>
        </div>
    </section>
</template>

<style lang="sass" scoped>

.s_top
    padding-bottom: 70px
    .col-md-2
        float: left
        h1
            padding: 0
            margin: 0
            padding-top: 70px
            font-family: Playfair_Display_Bold
            text-transform: uppercase
            font-size: 22px

    .col-md-3
        float: right
        h4
            padding: 0
            margin: 0
            padding-top: 70px
            font-family: Roboto_Light
            font-size: 14px
        
.s_middle
    background-color: grey
    height: 400px
    margin-bottom: 70px

.s_bottom
    text-align: center
    padding-bottom: 70px
    button
        font-family: Hammersmith_One  
        border: 2px solid #00e0d0
        background-color: transparent
        text-transform: uppercase
        color: #00e0d0
        font-size: 16px
        padding: 10px 15px

</style>
