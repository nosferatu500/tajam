<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="logo">
                        <img src="../../src/assets/img/header/logo.png" alt="">
                        <h1>tajam</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque numquam voluptates laudantium necessitatibus quibusdam fugit quo deleniti atque animi, amet voluptate fuga optio quisquam illum ab ipsam delectus iure quam?</p>
                </div>
                <div class="col-md-4">
                    <h2>our studio</h2>
                    <p>Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - J</p>
                    <p class="phone">(+62) 21-2224 3333</p>
                </div>
                <div class="col-md-4">
                    <h2>stay in touch</h2>
                    <div class="row">
                        <div class="col-md-8">
                            <label class="form-group">
                                <input name="message" placeholder="Subscribe our newsletter" data-validation-required-message="Enter Message" required ></textarea>
                                <span class="help-block text-danger"></span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <h3>Develop by <a href="https://vk.com/nosferatu500">Vitaly Shvetsov</a></h3>
                    <h3>Design by Aji</h3>
                </div>
            </div>
            
        </div>
    </footer>
</template>

<style lang="sass" scoped>

footer
    background-image: url(../../src/assets/img/footer/bg.png)
    background-size: cover
    width: 100%
    padding-top: 70px
    padding-bottom: 50px
    
    .logo
        img
            padding-top: 15px
            width: 45px
            float: left
        h1
            font-family: Roboto_Thin
            font-size: 30px
            color: #3b7fa4
            padding: 0
            margin: 0
            padding-top: 20px
            padding-left: 10px
            float: left
    p
        padding-top: 20px    
        float: left
        color: #fff
    h2
        padding-top: 15px
        color: #fff
        text-transform: uppercase
        font-family: Roboto_Black
        font-size: 15px
    .phone
        padding: 0
        margin: 0
    .form-group
        display: block
        margin-bottom: 20px
        input
            font-family: Roboto_Light
            font-size: 14px
            display: block
            width: 100%
            border: 1px solid #ccc
            line-height: 43px
            text-indent: 15px
            background-color: transparent
            color: #fff
    button
        font-family: Hammersmith_One  
        border: 2px solid #00e0d0
        background-color: transparent
        text-transform: uppercase
        color: #00e0d0
        font-size: 16px
        padding: 10px 20px
        float: right

    h3, a
        padding: 0
        margin: 0
        color: #fff
</style>
