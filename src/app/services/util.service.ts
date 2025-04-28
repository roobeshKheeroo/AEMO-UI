import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpClient: HttpClient) { }

  subTextSearch(mainText: string, subText: string): Observable<number[]> {   
    let params = new HttpParams()
      .set('mainText', mainText)
      .set('subText', subText);
      
    let url = `https://localhost:7065/api/textutil/search`;
    return this.httpClient.get<number[]>(url, {params}) 
  }

  subTextSearchLocal(mainText: string, subText: string): Observable<number[]> {   
    let result : number[] = []; 
    return of(result);
  }

}
