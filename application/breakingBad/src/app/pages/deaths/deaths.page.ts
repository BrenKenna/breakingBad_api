import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// Import API service
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  // Holds results from consuming API
  persons: Observable<any>;
  tabPath: string;
  apiPath: string;


  /**
   * Construct Character pages with HTTP client and API serivce to fetch results, 
   * so that a specific page can be inspected via the routing module
   * 
   * @param router - Router
   * @param queryAPI - QueryAPIService, Custom
   */
  constructor(private router: Router, private queryAPI: QueryAPIService) {
    this.tabPath = queryAPI.getTabPath("Deaths");
    this.apiPath = queryAPI.getAPIPath("Deaths");
  }


  /**
   * Initialize page with promise
   */
  ngOnInit() {

    // Fetch api data and sanity check
    this.persons = this.queryAPI.fetchCharacters();

    // Sanity check data is returned
    this.persons.subscribe(data => {
      console.log(
        `Data from "${this.apiPath}" contains "${data.length}" values and a value will be routed to "${this.tabPath}"`
      );
      console.dir(data[0], {depth: null});
    });
  }


  /**
   * Navigate to epsiode page
   * 
   * @param episode 
   */
  openDetails(person) {
    let name = person.name;
    console.log(`Attempting to navigate to: ${this.tabPath}/${name}`);
    // console.dir(person, {depth: null});
    this.router.navigateByUrl(`${this.tabPath}/${name}`);
  }
}
