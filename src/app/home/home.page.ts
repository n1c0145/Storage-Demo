import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  albums: any[] = [];
  constructor(
    private router: Router,
    private StorageService: StorageService,
  ) { }

  async ngOnInit() {
    await this.StorageService.init()
    this.StorageService.get("albums").then(albums => {
      this.albums = albums
      console.log(albums);
      
    }).catch(error => {
      console.log("Existe un error", error);

    })
  }
  /**
   * Navega al formulario de creacion de un album
   */
  navigateToAlbumForm() {
    this.router.navigate(['/new-item'])
  }

}
