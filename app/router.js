import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demos', function() {
    this.route('mut');
    this.route('array-helper');
    this.route('hash-helper');
    this.route('let-and-mod');
    this.route('template-only-components');
    this.route('contextual-components');
    this.route('compare-compiled-output');
  });
});

export default Router;
