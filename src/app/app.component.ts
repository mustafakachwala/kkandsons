import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private router: Router, private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Contact Us K K & Sons' },
      { name: 'author', content: 'kkandsons' },
      {
        name: 'keywords', content: `dealing in pipe fittings,
      fasterners, flanges, clamps, general hardware, high tensile, MS, SS Nuts and Bolts`}
    ]);

    this.setTitle('K K and Sons');
  }

  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  public navigateToContact(): void {
    window.scrollTo(0, 0);
    this.router.navigate(['/contact-us']);
  }
}
