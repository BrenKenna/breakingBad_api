import { Component, OnInit } from '@angular/core';

// Support loading page with input from another page
import { ActivatedRoute } from '@angular/router';
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { FavouriteService } from '../../services/favourites/favourites.service';


@Component({
  selector: 'app-deaths-details',
  templateUrl: './deaths-details.page.html',
  styleUrls: ['./deaths-details.page.scss'],
})
export class DeathsDetailsPage implements OnInit {

  // Attributes
  person: any;
  personID = null;
  isFavourite = false;
  _STORAGE_CONTEXT = "Deaths";
  tabPath: string;
  apiPath: string;

  /**
   * 
   * @param activatedRoute 
   * @param queryAPI 
   * @param favServ 
   */
  constructor(private activatedRoute: ActivatedRoute, private queryAPI : QueryAPIService, private favServ: FavouriteService) {
    this.tabPath = queryAPI.getTabPath("Deaths");
    this.apiPath = queryAPI.getAPIPath("Deaths");
  };
 

  /**
   * 
   */
  ngOnInit() {
    this.personID = this.activatedRoute.snapshot.paramMap.get('id').replace("/", "");
    this.queryAPI.getDeath(`${this.personID}`).subscribe(res => {
      this.person = res[0];
      console.dir(this.person, {depth: null});
    });

    this.favServ.isFavourited(this.personID, this._STORAGE_CONTEXT).then(isFav => {
      this.isFavourite = isFav;
    });
  }


  /**
   * 
   */
   favouriteCharacter() {
    this.favServ.favourite(this.personID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = true;
    });
  }


  /**
   * 
   */
  unfavouriteCharacter() {
    this.favServ.unfavourite(this.personID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = false;
    });
  }
}
