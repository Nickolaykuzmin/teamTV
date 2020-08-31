import {Injectable} from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";

@Injectable({
  providedIn: 'root'
})
export class LastVisitedService {
  private readonly STORAGE_KEY = 'last-visited';

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  addLastVisitToStorage(show: any) {
    const lastVisitedArr = this.getFromStorage();
    if (this.isExistLastVisit(lastVisitedArr, show.id)) {
      lastVisitedArr.push(show);
      this.localStorage.set(this.STORAGE_KEY, JSON.stringify(lastVisitedArr));
    }
  }

  isExistLastVisit(arr, checkId) {
    return arr.some(visit => visit.id === checkId);
  }

  getFromStorage() {
    return JSON.parse(this.localStorage.get(this.STORAGE_KEY)) || []
  }

}
