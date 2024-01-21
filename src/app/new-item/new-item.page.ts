import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage {

  albums: any[] = [];
  formData: any = {
    title: "",
    artist: "",
    genre: "",
    coverUrl: ""
  }

  constructor(private storageService: StorageService, private router: Router) { }

  /**
   * Almacena os datos del formulario
   */
  onSubmit() {
    this.storageService.get('albums').then((albums: any) => {
      if (!albums) {
        albums = [];
      }
      albums.push(this.formData);
      this.storageService.set('albums', albums);
      this.router.navigate(['/']);
    }).catch(error => {
      console.error("Error al agregar el álbum", error);
    });
  }
  


}
