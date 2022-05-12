// Core page level
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import API service
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})


/**
 * Class to support using the API service to fetch episode related data from target API
 */
export class EpisodesPage implements OnInit {

  // Holds results from consuming API
  episodes: Observable<any>;
  tabPath: string;
  apiPath: string;


  /**
   * Construct Episode pages with HTTP client and API serivce to fetch results, 
   * so that a specific page can be inspected via the routing module
   * 
   * @param router - Router
   * @param queryAPI - QueryAPIService, Custom
   */
  constructor(private router: Router, private queryAPI: QueryAPIService) {
    this.tabPath = queryAPI.getTabPath("Episodes");
    this.apiPath = queryAPI.getAPIPath("Episodes");
  }


  /**
   * Lazy load promise
   */
  ngOnInit() {

    // Fetch api data and sanity check
    this.episodes = this.queryAPI.fetchEpisodes();

    // Sanity check data is returned
    this.episodes.subscribe(data => {
      console.log(
        `Data from "${this.apiPath}" contains "${data.length}" values and a value will be routed to "${this.tabPath}"`);
    });
  }


  /**
   * Navigate to epsiode page
   * 
   * @param episode 
   */
  openDetails(episode) {
    let split = episode.url.split('/');
    let episodeID = split[split.length-2];
    console.log(`Attempting to navigate to: ${this.tabPath}/${episodeID}`);
    this.router.navigateByUrl(`${this.tabPath}/${episodeID}`);
  }
}
