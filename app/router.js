import EmberRouter from '@embroider/router';
import config from 'devedanos-portfolio/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// eslint-disable-next-line array-callback-return
Router.map(function () {
  this.route('legal-notices');
  this.route('resume');
});
