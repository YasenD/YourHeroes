import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
////
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink = "/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'Tour of Heroes';
}

//hey test for trial push

