import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
	this.route('products', {path: '/products'});
	this.route('price', {path: '/price'});
	this.route('about', {path: '/about'});
	this.route('contact', {path: '/contact'});
});
