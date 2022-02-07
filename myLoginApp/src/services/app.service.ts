import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private toastCtrl: ToastController) { }

  public getData(actionMethod: string): Observable<any> {
    return this.http.get(baseUrl + actionMethod);
  }

  public postData(actionMethod: string, data: any): Observable<any> {
    return this.http.post(baseUrl + actionMethod, data);
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss().then(() => {
      console.log('Dismissed toast');
    });

    await toast.present();
  }
}

