import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'About Us K K & Sons' },
      { name: 'author', content: 'kkandsons' },
      {
        name: 'keywords', content: `dealing in pipe fittings,
      fasterners, flanges, clamps, general hardware, high tensile, MS, SS Nuts and Bolts`}
    ]);

    this.setTitle('About Page');
  }

  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
