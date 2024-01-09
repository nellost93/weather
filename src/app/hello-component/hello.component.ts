import {Component} from '@angular/core';
import {NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet
  ]
})
export class HelloComponent {

}
