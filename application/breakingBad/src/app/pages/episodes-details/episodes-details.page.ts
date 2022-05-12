import { Component, OnInit } from '@angular/core';

// Support loading page with input from another page
import { ActivatedRoute } from '@angular/router';
import { QueryAPIService } from '../../services/queryAPI/query-api.service';
import { FavouriteService } from '../../services/favourites/favourites.service';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.page.html',
  styleUrls: ['./episodes-details.page.scss'],
})
export class EpisodesDetailsPage implements OnInit {

  // Attributes
  episode: any;
  episodeID = null;
  isFavourite = false;
  _STORAGE_CONTEXT = "Episodes";
  tabPath: string;
  apiPath: string;

  /**
   * 
   * @param activatedRoute 
   * @param queryAPI 
   * @param favServ 
   */
  constructor(private activatedRoute: ActivatedRoute, private queryAPI : QueryAPIService, private favServ: FavouriteService) {
    this.tabPath = queryAPI.getTabPath("Episodes");
    this.apiPath = queryAPI.getAPIPath("Episodes");
  };
 

  /**
   * 
   */
  ngOnInit() {
    this.episodeID = this.activatedRoute.snapshot.paramMap.get('id');
    this.queryAPI.getEpisode(`${this.apiPath}/${this.episodeID}`).subscribe(res => {
      this.episode = res;
    });

    this.favServ.isFavourited(this.episodeID, this._STORAGE_CONTEXT).then(isFav => {
      this.isFavourite = isFav;
    });
  }


  /**
   * 
   */
  favouriteEpisode() {
    this.favServ.favourite(this.episodeID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = true;
    });
  }


  /**
   * 
   */
  unfavouriteEpisode() {
    this.favServ.unfavourite(this.episodeID, this._STORAGE_CONTEXT).then(() => {
      this.isFavourite = false;
    });
  }

}
