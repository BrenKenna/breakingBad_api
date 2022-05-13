import { Component, OnInit } from '@angular/core';

// Support loading page with input from another page
import { ActivatedRoute } from '@angular/router';
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { FavouriteService } from '../../services/favourites/favourites.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss', '../episodes-details/episodes-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {

  // Attributes
  character: any;
  characterID = null;
  isFavourite = false;
  _STORAGE_CONTEXT = "Characters";
  tabPath: string;
  apiPath: string;

  /**
   * 
   * @param activatedRoute 
   * @param queryAPI 
   * @param favServ 
   */
  constructor(private activatedRoute: ActivatedRoute, private queryAPI : QueryAPIService, private favServ: FavouriteService) {
    this.tabPath = queryAPI.getTabPath("Characters");
    this.apiPath = queryAPI.getAPIPath("Characters");
  };
 

  /**
   * 
   */
  ngOnInit() {
    this.characterID = this.activatedRoute.snapshot.paramMap.get('id');
    this.queryAPI.getCharacter(`${this.characterID}`).subscribe(res => {
      this.character = res[0];
    });

    this.favServ.isFavourited(this.characterID, this._STORAGE_CONTEXT).then(isFav => {
      this.isFavourite = isFav;
    });
  }

  /**
   * 
   */
   favouriteCharacter() {
    this.favServ.favourite(this.characterID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = true;
    });
  }


  /**
   * 
   */
  unfavouriteCharacter() {
    this.favServ.unfavourite(this.characterID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = false;
    });
  }
}
