import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;


  constructor(private storage: Storage) {
    this.init();
  }
  /**
   * Inicializa el storage
   */
  async init(){
      if (!this._storage) {
        const storage = await this.storage.create()
        this._storage = storage;
      }
  }

  /**
   * Crear/Actualizar Registro
   * @param key clave
   * @param value valor
   */
  public set (key : string, value : any) {
    this._storage?.set(key, value);
  }
  
  /**
   * Obtener el valor de una clase
   */
public async get(key: string){
  try {
    if (this._storage) {
      const value = await this._storage.get(key)
      return value
    }else{
      console.log("storage no se inicializo");
      
    }
  } catch (error) {
    console.error("Error al acceder al storage", error);
    
  }
}
public remove(key:string){
  this._storage?.remove(key);
}

}
