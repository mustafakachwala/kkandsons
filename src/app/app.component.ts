import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'K K & Sons';

  constructor(private router: Router) { }

  public navigateToContact(): void {
    window.scrollTo(0, 0);
    this.router.navigate(['/contact-us']);
  }
}
