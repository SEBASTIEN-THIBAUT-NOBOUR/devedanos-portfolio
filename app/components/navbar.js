import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  changeMobileMenuVisibility = () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    const buttonMobileMenuClosed = document.querySelector('.nav-main__button-mobile-menu--closed');
    const buttonMobileMenuOpened = document.querySelector('.nav-main__button-mobile-menu--opened');

    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
      buttonMobileMenuClosed.classList.toggle('hidden');
      return buttonMobileMenuOpened.classList.toggle('hidden');
    }
    buttonMobileMenuClosed.classList.toggle('hidden');
    return buttonMobileMenuOpened.classList.toggle('hidden');
  }

  // changeNavbarBackgroundColor = () => {
  //   const navbar = document.querySelector('#navbar');
  //   if (window.scrollY <= 10) {
  //     return navbar.classList.add('bg-white');
  //   }
  //   return navbar.classList.add('bg-transparent');
  // }
}
