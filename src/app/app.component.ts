import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subtitles = {
    '/login': 'login',
    '/signup': 'signup',
    '/migration': 'migration',
    '/home': 'home',
    '/metadata/pull': 'pull',
    '/metadata/push': 'push',
    '/metadata/download': 'download',
    '/backup': 'backup',
    '/myorg': 'my organizations'
  };

  constructor(public router: Router) {}
}
