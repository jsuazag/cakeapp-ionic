import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage = null;

  constructor(private storage: Storage) {
    this.init();
  }

  private async init () {
    this._storage = await this.storage.create();
  }

  public async set (key: string, value: any) {
    await this._storage.set(key, value);
  }

  public async get (key: string) {
    return await this._storage.get(key);
  }

  public async clear () {
    await this._storage.clear();
  }

}
