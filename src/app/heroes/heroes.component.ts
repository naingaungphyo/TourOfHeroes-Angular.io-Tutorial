import { Component, OnInit } from '@angular/core';

// Tutorial 1
import { Hero } from '../hero';
// Tutorial 2
import { HEROES } from '../mock-heroes';
// Tutorial 4
import { HeroService } from '../hero.service';
// Tutorial 4
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // Tutorial 1
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // Tutorial 2
  // heroes = HEROES;
  // Tutorial 5 del
  // selectedHero?: Hero;

  // Tutorial 4
  heroes: Hero[] = [];

  // Tutorial
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Tutorial 5 del
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
