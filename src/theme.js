import {createGlobalStyle} from 'styled-components';
import moon from '../src/assets/images/moon.png';
import sun from '../src/assets/images/sun.png';


export const lightTheme = {
    body: '#fff',
    fontColor: '#fff',
    text:'#000',
    backgroundColor:'#fff',
    backgroundImage: `url(${moon})`


}
export const darkTheme = {
    body: '#000',
    fontColor: '#000',
    text:'#fff',
    backgroundColor:'#303030',
    backgroundImage: `url(${sun})`
 
}
export const GlobalStyles = createGlobalStyle`
body{
    background: ${props => props.theme.body};
}
a, .nav-link, .stake-list-sel select, .hero-text-box h1, .hero-text-box p, .main-heading-center h2, .cat-left-text h3, .cat-left-text p, .text-block-heading h3, .text-block-heading p, .icon-text-block-cri h4, .icon-text-block-cri p, .number-text-box h4, .number-text-box p, .aud-white-box p, .aud-white-box h5, .next-ele li h3, .trust-line-textbox h2, .trust-line-textbox p, .review-box h5, .text-block-heading h5, .sm-text h5, .sm-text p, .ft-nav li, .ft-nav li a, .heading-text-stake h2, .fliter-box h5 b, .fliter-box h5, .heading-text-stake p, .text-person h3, .accordion-button.collapsed  {
    color: ${props => props.theme.text};
  }
  .text-person, .icon-text-block-cri, .step-tabs-box nav .nav-tabs .nav-link.active, .aud-white-box, .review-box, .s-inline-box, .s-icon-box, .moon-icon, .accordion-button.collapsed{
    background-color: ${props => props.theme.backgroundColor};
  }
  .moon-icon{
    background-image: ${props => props.theme.backgroundImage};
    background-repeat: no-repeat;
    background-position: center;
  }
  .s-box h3, .s-box h5, .s-box i{
    color: ${props => props.theme.fontColor};
  }
`