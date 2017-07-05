import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Template</h1>
  <li *ngFor="let currentTemplate of exampleTemplate">{{currentTemplate.name}}</li>
  `
})

export class AppComponent {

exampleTemplate: Template[] = [
  new Template('here', 5),
  new Template('there', 2),
  new Template('anywhere', 5)
]

selectedTemplate: Template = this.exampleTemplate[0];

}


export class Template{
  constructor(public name: string, public number: number) {}
}
