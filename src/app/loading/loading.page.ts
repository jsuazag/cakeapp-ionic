import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage-service/storage.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.validateSession();
  }

  private async validateSession () {
    const token = await this.storageService.get('token');
    console.log('token', token);
  }

}
