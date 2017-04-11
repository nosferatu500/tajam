import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Team from '@/components/Team'
import Works from '@/components/Works'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Header,
        about: About,
        expertise: Expertise,
        team: Team,
        works: Works,
        testimonials: Testimonials,
        contact: Contact,
        footer: Footer
      }
    }
  ]
})
