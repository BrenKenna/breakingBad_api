import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


/**
 * Class to encapsulate consuming the breaking bad API and 
 * aid in routing results to target pages.
 */
export class QueryAPIService {

  // Attribute to hold paths,
  //  easier for now instead of another service
  private _pathsMap = {

    "Episodes": {
      "Tab": `/tabs/episodes`,
      "API": `https://www.breakingbadapi.com/api/episodes`
    },

    "Characters": {
      "Tab": `/tabs/characters`,
      "API": `https://www.breakingbadapi.com/api/characters`
    },

    "Quotes": {
      "Tab": `/tabs/quotes`,
      "API": `https://www.breakingbadapi.com/api/quotes`
    },

    "Deaths": {
      "Tab": `/tabs/quotes`,
      "API": `https://www.breakingbadapi.com/api/death-count`
    }
  };

  /**
   * Construct with restricted http client attribute
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }


  /**
   * Fetch characters
   * 
   * @returns Promise
   */
  fetchCharacters() {
    return this.http.get(`${this._pathsMap.Characters.API}`);
  }


  /**
   * Fetch episodes
   * 
   * @returns Promise
   */
  fetchEpisodes() {
    return this.http.get(`${this._pathsMap.Episodes.API}`);
  }
  

  /**
   * Fetch data from quotes API
   * 
   * @returns Promise
   */
  fetchQuotes() {
    return this.http.get(`${this._pathsMap.Quotes.API}`);
  }


  /**
   * Fetch death count
   * 
   * @returns Promise
   */
  fetchDeathCount() {
    return this.http.get(`${this._pathsMap.Deaths.API}`);
  }


  /**
   * Fetch death by name
   * 
   * @param name 
   * @returns Promise
   */
  getDeath(name) {
    name = name.replace(" ", "+");
    return this.http.get(`${this._pathsMap.Deaths.API}/?name=${name}`);
  }


  /**
   * Fetch character by ID
   * 
   * @param id 
   * @returns 
   */
  getCharacter(id) {
    return this.http.get(`${this._pathsMap.Characters.API}/${id}`);
  }


  /**
   * Fetch quotes by ID
   * 
   * @param id 
   * @returns Promise
   */
  getQuote(id) {
    return this.http.get(`${this._pathsMap.Quotes.API}/${id}`);
  }


  /**
   * Fetch episode by ID
   * 
   * @returns Promise
   */
  getEpisode(id) {
    return this.http.get(`${this._pathsMap.Episodes.API}/${id}`);
  }


  /**
   * Fetch the routing tab for page
   * 
   * @param key - Episode, Characters, Quotes, Deaths
   * @returns Tab path for this application
   */
  getTabPath(key) {
    if ( key in this._pathsMap ) {
      return this._pathsMap[key]['Tab'];
    }
    return null;
  }


  /**
   * Fetch the API endpoint for page
   * 
   * @param key - Episode, Characters, Quotes, Deaths
   * @returns Tab path for this application
   */
   getAPIPath(key) {
    if ( key in this._pathsMap ) {
      return this._pathsMap[key]['API'];
    }
    return null;
  }
}
