import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Home K K & Sons' },
      { name: 'author', content: 'kkandsons' },
      {
        name: 'keywords', content: `dealing in pipe fittings,
      fasterners, flanges, clamps, general hardware, high tensile, MS, SS Nuts and Bolts`}
    ]);

    this.setTitle('Home Page');
  }

  public setTitle(newTitle: string): void {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
