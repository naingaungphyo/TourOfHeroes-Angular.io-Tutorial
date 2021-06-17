import { Component, OnInit, Input } from '@angular/core';
// Tutorial 5
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// Tutorial 3
import { Hero } from '../hero';
// Tutorial 5
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // Tutorial 5 del
  @Input() hero?: Hero;

  // Tutorial 5
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  // Tutorial 5
  ngOnInit(): void {
    this.getHero();
  }

  // Tutorial 5
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // Tutorial 5
  goBack(): void {
    this.location.back();
  }


  // Tutorial 6
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
