import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class QueryAPIService {

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
    return this.http.get(`https://www.breakingbadapi.com/api/characters/`);
  }


  /**
   * Fetch episodes
   * 
   * @returns Promise
   */
  fetchEpisodes() {
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/`);
  }
  

  /**
   * Fetch data from quotes API
   * 
   * @returns Promise
   */
  fetchQuotes() {
    return this.http.get(`https://www.breakingbadapi.com/api/quotes`);
  }


  /**
   * Fetch death count
   * 
   * @returns Promise
   */
  fetchDeathCount() {
    return this.http.get(`https://www.breakingbadapi.com/api/death-count`);
  }


  /**
   * Fetch death by name
   * 
   * @param name 
   * @returns Promise
   */
  getDeath(name) {
    name = name.replace(" ", "+");
    return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`);
  }


  /**
   * Fetch character by ID
   * 
   * @param id 
   * @returns 
   */
  getCharacter(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  }


  /**
   * Fetch quotes by ID
   * 
   * @param id 
   * @returns Promise
   */
  getQuote(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
  }


  /**
   * Fetch episode by ID
   * 
   * @returns Promise
   */
  getEpisodes(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
  }
}
