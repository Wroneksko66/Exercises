import {Component} from '@angular/core';
import {Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component {
  persons = [
    {
      id: 1,
      name: "Jan Kowalski"
    }, {
      id: 2, name: "John Doe"
    }, {
      id: 3,
      name: "Jarek Kaczka"
    }
  ];

  ages = [
    {
      person: 1,
      age: 18
    }, {
      person: 2,
      age: 24
    }, {
      person: 3,
      age: 666
    }
  ];

  locations = [
    {
      person: 1,
      country: "Poland"
    }, {
      person: 3,
      country: "Poland"
    }, {
      person: 1,
      country: "USA"
    }
  ];

  persons$ = of(this.persons);
  ages$ = of(this.ages);
  locations$ = of(this.locations);
  idsOfPeopleFromPoland: number[] = [];
  avarageAgeOfPeopleLivingInPoland$: Observable<number> = new Observable<number>();

  ngOnInit(): void {
    this.avarageAgeOfPeopleLivingInPoland$ = this.locations$.pipe(switchMap((locations) => {
        this.idsOfPeopleFromPoland = locations.filter((location) => location.country === 'Poland').map(location => location.person);
        return this.ages$;
      }), switchMap((ages) => {
        const agesOfPeopleThatLiveInPoland = ages.filter(ages => this.idsOfPeopleFromPoland.includes(ages.person));
        const numberPeopleFromPoland = agesOfPeopleThatLiveInPoland.length;
        const sumOfAgesOfPeopleThatLiveInPoland = agesOfPeopleThatLiveInPoland.map((age) => age.age).reduce((a,b) => a + b, 0);
        return of(sumOfAgesOfPeopleThatLiveInPoland / numberPeopleFromPoland)
      })
    );
  }

}

