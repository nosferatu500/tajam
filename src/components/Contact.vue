<template>
    <section class="s_contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>give us a good news</h1>
                    <form action="http://formspree.io/nosferatu2995@mail.ru" class="main_form" novalidate target="_blank" method="post">
							<label class="form-group">
								<input type="text" name="name" placeholder="Name" data-validation-required-message="Enter Name" required/>
								<span class="help-block text-danger"></span>
							</label>
							<label class="form-group">
								<input type="email" name="email" placeholder="Email" data-validation-required-message="Enter E-mail" required />
								<span class="help-block text-danger"></span>
							</label>
                            <label class="form-group">
								<input type="email" name="subject" placeholder="Subject" data-validation-required-message="Enter Subject" required />
								<span class="help-block text-danger"></span>
							</label>
							<label class="form-group">
								<textarea name="message" placeholder="Your Message" data-validation-required-message="Enter Message" required ></textarea>
								<span class="help-block text-danger"></span>
							</label>
							<button>Submit</button>
						</form>
                </div>
                <div class="col-md-5">
                    <h1>our happy client</h1>
                    <div class="row">
                        <div class="c_left col-md-2">
                            <img src="../../src/assets/img/contact/zara.png" alt="">
                            <img src="../../src/assets/img/contact/Barneys_New_York.png" alt="">
                            <img src="../../src/assets/img/contact/Calvin_klein.png" alt="">
                            <img src="../../src/assets/img/contact/Converse.png" alt="">
                            <img src="../../src/assets/img/contact/Levis.png" alt="">
                        </div>
                        <div class="c_right col-md-2">
                            <img src="../../src/assets/img/contact/Mango.png" alt="">
                            <img src="../../src/assets/img/contact/Gucci.png" alt="">
                            <img src="../../src/assets/img/contact/NIKE.png" alt="">
                            <img src="../../src/assets/img/contact/Puma.png" alt="">
                            <img src="../../src/assets/img/contact/Billabong.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>

.s_contact
    h1
        padding: 0
        margin: 0
        padding-top: 70px
        padding-bottom: 35px
        font-family: Playfair_Display_Bold
        text-transform: uppercase
        font-size: 22px
    .col-md-6
        float: left
        .form-group
            display: block
            margin-bottom: 20px
            input,
            textarea
                font-family: Roboto_Light
                font-size: 14px
                display: block
                width: 100%
                border: 1px solid #ccc
                line-height: 40px
                text-indent: 20px
                background-color: transparent
            textarea
                height: 200px
        button
            font-family: Hammersmith_One  
            border: 2px solid #00e0d0
            background-color: transparent
            text-transform: uppercase
            color: #00e0d0
            font-size: 16px
            padding: 10px 20px

    .col-md-5
        float: right
        .row
            img
                padding: 0
                margin: 0
                padding-bottom: 50px
            .c_left
                float: left
            .c_right
                float: right
</style>
