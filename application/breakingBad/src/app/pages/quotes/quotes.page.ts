// 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// Import API service
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  // Holds results from consuming API
  quotes: Observable<any>;
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
    this.tabPath = queryAPI.getTabPath("Quotes");
    this.apiPath = queryAPI.getAPIPath("Quotes");
  }

   ngOnInit() {

    // Fetch api data and sanity check
    this.quotes = this.queryAPI.fetchQuotes();

    // Sanity check data is returned
    this.quotes.subscribe(data => {
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
   openDetails(quote) {
    let quoteID = quote.quote_id;
    console.log(`Attempting to navigate to: ${this.tabPath}/${quoteID}`);
    this.router.navigateByUrl(`${this.tabPath}/${quoteID}`);
  }
}
