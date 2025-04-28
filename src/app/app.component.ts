import { Component } from '@angular/core';
import { CodeChallengeComponent } from './components/code-challenge/code-challenge.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CodeChallengeComponent],  
  template: `   
    <app-code-challenge></app-code-challenge>
  `
})
export class AppComponent {
title = "";

}
