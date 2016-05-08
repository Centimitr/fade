import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar';

@Component({
  moduleId: module.id,
  selector: 'fade-app',
  directives:[SidebarComponent],
  templateUrl: 'fade.component.html',
  styleUrls: ['fade.component.css']
})
export class FadeAppComponent {
  title = 'fade works!';
}
