import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
 
/**
 * Each page has their own private property instead
 *  const STORAGE_KEY = 'favouriteItems';
 */
 

@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  // 
  private _storage: Storage | null = null;


  /**
   * 
   * @param storage 
   */
  constructor(private storage: Storage) {
    this.init();
  }


  /**
   * 
   */
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();

    // Was added to clear out from debugging
    // Left in case useful
    // storage.clear();
    this._storage = storage;
  }


  /**
   * 
   * @param STORAGE_CONTEXT 
   * @returns 
   */
  getAllFavourites(STORAGE_CONTEXT) {
    return this.storage.get(STORAGE_CONTEXT);
  }


  /**
   * 
   * @param itemID 
   * @param STORAGE_CONTEXT 
   * @returns 
   */
  isFavourited(itemID, STORAGE_CONTEXT) {
    return this.getAllFavourites(STORAGE_CONTEXT).then(result => {
      return result && result.indexOf(itemID) !== -1;
    });
  }


  /**
   * 
   * @param itemID 
   * @param STORAGE_CONTEXT 
   * @returns 
   */
  favourite(itemID, STORAGE_CONTEXT) {
    return this.getAllFavourites(STORAGE_CONTEXT).then(result => {
      if (result) {
        console.log(result);
        result.push(itemID);
        return this.storage.set(STORAGE_CONTEXT, result);
      } else {
        return this.storage.set(STORAGE_CONTEXT, [itemID]);
      }
    });
  }


  /**
   * 
   * @param itemID 
   * @param STORAGE_CONTEXT 
   * @returns 
   */
  unfavourite(itemID, STORAGE_CONTEXT) {
    return this.getAllFavourites(STORAGE_CONTEXT)
      .then( result => {
        if (result) {
          var index = result.indexOf(itemID);
          result.splice(index, 1);
          return this.storage.set(STORAGE_CONTEXT, result);
        }
      });
  }
}