/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http'; // LA NECESITO PONER AQUI PARA EL PROVIDER???
import {FORM_PROVIDERS} from 'angular2/common';

import {GHApi} from './providers/ghapi';
import {Title} from './providers/title'; // FUERA!!!

import {XLarge} from './directives/x-large';
import {Home} from './home/home';
import {Fight} from './fight/fight';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [FORM_PROVIDERS, Title, GHApi],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ROUTER_DIRECTIVES, XLarge],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [`
    .title {
      font-family: Arial, Helvetica, sans-serif;
    }
    main {
      padding: 1em;
    }

  `],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/fight', component: Fight, name: 'Fight' }
])
export class App {
  url: string = 'https://twitter.com/AngularClass';
  constructor(public title: Title) { }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
