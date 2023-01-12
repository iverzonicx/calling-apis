import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'calling-apis';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if(data instanceof NavigationEnd) {
        console.log(data.url)
      }
    })
  }



  routeToThree() {
    this.router.navigate(['third'], {queryParams: {name: 'jose', age: 25, country: 'PH'}})
  }
}
