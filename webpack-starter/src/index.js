
import './styles/scss/main.scss';
import '../src/style.css';
import webpackgif from './assets/images/webpack.gif';

import { Header } from './app/header';
let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

document.getElementById('webpack-gif').setAttribute('src', webpackgif)
// import { Footer } from './app/footer'; let footer = new Footer();let footerText = footer.getFooterText();console.log(footerText); 