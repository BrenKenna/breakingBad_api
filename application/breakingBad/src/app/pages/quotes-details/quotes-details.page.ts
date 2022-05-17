// 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// Import API service
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { FavouriteService } from '../../services/favourites/favourites.service';


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.page.html',
  styleUrls: ['./quotes-details.page.scss'],
})
export class QuotesDetailsPage implements OnInit {

  // Attributes
  quote: any;
  quoteID = null;
  isFavourite = false;
  _STORAGE_CONTEXT = "Quotes";
  tabPath: string;
  apiPath: string;

  /**
   * 
   * @param activatedRoute 
   * @param queryAPI 
   * @param favServ 
   */
  constructor(private activatedRoute: ActivatedRoute, private queryAPI : QueryAPIService, private favServ: FavouriteService) {
    this.tabPath = queryAPI.getTabPath("Quotes");
    this.apiPath = queryAPI.getAPIPath("Quotes");
  };
 

  /**
   * 
   */
  ngOnInit() {
    this.quoteID = this.activatedRoute.snapshot.paramMap.get('id');
    this.queryAPI.getQuote(`${this.quoteID}`).subscribe(res => {
      this.quote = res[0];
    });

    this.favServ.isFavourited(this.quoteID, this._STORAGE_CONTEXT).then(isFav => {
      this.isFavourite = isFav;
    });
  }

  /**
   * 
   */
   favouriteCharacter() {
    this.favServ.favourite(this.quoteID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = true;
    });
  }


  /**
   * 
   */
  unfavouriteCharacter() {
    this.favServ.unfavourite(this.quoteID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = false;
    });
  }

}
