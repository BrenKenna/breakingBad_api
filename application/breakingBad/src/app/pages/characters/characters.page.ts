import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import API service
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  // Holds results from consuming API
  characters: Observable<any>;
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
    this.tabPath = queryAPI.getTabPath("Characters");
    this.apiPath = queryAPI.getAPIPath("Characters");
  }

  ngOnInit() {

    // Fetch api data and sanity check
    this.characters = this.queryAPI.fetchCharacters();

    // Sanity check data is returned
    this.characters.subscribe(data => {
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
  openDetails(character) {
    let characterID = character.char_id;
    console.log(`Attempting to navigate to: ${this.tabPath}/${characterID}`);
    this.router.navigateByUrl(`${this.tabPath}/${characterID}`);
  }

}
