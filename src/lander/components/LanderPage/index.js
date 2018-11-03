import React from 'react'
import {withRouter} from 'react-router-dom'
import Hero from './components/hero'
import Flyer from './components/flyer'
import Team from './components/team'
import Gallery from './components/gallery'
import Camp from './components/camp'
import Contact from './components/contact'
import {TweenMax} from 'gsap/TweenMax'
import {Back} from 'gsap/EasePack'

class LanderPage extends React.Component {
  componentDidMount () {
    const {pathname} = this.props.location
    if (pathname === '/contactus') {
      document.querySelector('#contactus').scrollIntoView({
        block: 'start',
        inline: 'nearest'
      })
    }

    this.teachers = Array.from(document.querySelectorAll('.teacher .portrait'));
    this.introEl = document.querySelector('.intro-logo');
    this.campEl = document.querySelector('.campSection .circle')

    this.firstTeacherTime = this.teachers.map(t => true);
    this.firstIntroTime = true;
    this.firstCampTime = true;

    this.handleScroll = debounce(this._onScroll, 0)
    window.addEventListener('scroll', this.handleScroll)

  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  _onScroll = () => {
    // this.teachers.forEach((teacher, idx) => {
    //   if (this.firstTeacherTime[idx] && isVisible(teacher)) {
    //     this.firstTeacherTime[idx] = false;
    //     animateTeacher(teacher);
    //   }
    // })
    if (isVisible(this.introEl) && this.firstIntroTime) {
      this.firstIntroTime = false;
      animateIntro();
    }
    if (isVisible(this.campEl) && this.firstCampTime) {
      this.firstCampTime = false;
      animateCamp();
    }
  }
  render () {
    const {history} = this.props
    return (
      <div>
        <Hero history={history}/>
        <Flyer history={history}/>
        <Team />
        <Gallery />
        <Camp history={history}/>
        <Contact />
      </div>
    )
  }
}

function isVisible (el) {
  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*&& /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

function debounce (fn, delay) {
  var id;
  return function () {
    var args = arguments;
    if (id !== undefined) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      fn.apply({}, args);
    }, delay);
  }
}

function animateIntro () {
  TweenMax.staggerTo('.signalling > *',
    0.5, {delay: 0.3, y: 0, opacity: 1, ease: Back.easeOut}, 0.2)
}

function animateCamp () {
  TweenMax.to('.campSection .circle', 0.5,
    {scale: 1, ease: Back.easeOut, onComplete: function () {
    TweenMax.to('.campSection .info > *', 0.5,
      {opacity: 1, y: 0, ease: Back.easeOut}, 0.2)
  }},)
}

function animateTeacher(el) {
  var bio = el.parentNode.getElementsByClassName('bio')[0];
  TweenMax.staggerTo(Array.from(bio.childNodes), 0.5, {
    y: 0,
    opacity: 1,
    ease: Back.easeOut,
  }, 0.1)

  flipPortrait(el);

  function flipPortrait (target) {
    if (window.innerWidth < 739) {
      return
    }
    var el = target.parentNode.getElementsByClassName('portrait')[0].getElementsByClassName('square')[0]
    TweenMax.to(el, 0.5, {css: {rotationY: 180 }, onStart: fadeInTeacher})
  }
  function fadeInTeacher () {
    var el = this.target.getElementsByTagName('img')[0]
    if (!el) return
    TweenMax.to(el, 0.2, {opacity: 1, delay: 0.3})
  }
}

export default withRouter(LanderPage)
