import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DevoirsService {
  private url = "https://my-json-server.typicode.com/micbuffa/hobbies/db";

  constructor(private http: HttpClient) { }

  getDevoirs(): Promise<any> {
    // on va chercher par GET le fichier JSON sur un REST endpoint
    return this.http.get(this.url).toPromise();
  }
}
