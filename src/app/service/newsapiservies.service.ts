import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviesService {
  constructor(private _http: HttpClient) {}

  //newsapiurl

  newsApiUrl =
  ' https://newsapi.org/v2/top-headlines?country=in&apiKey=1afc4dfc0c1f44faa3feeff0af33c42e';

  //technewsapi

  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1afc4dfc0c1f44faa3feeff0af33c42e"

  //businessApiUrl
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1afc4dfc0c1f44faa3feeff0af33c42e"


//newApiurl
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }


//tech

  techNews():Observable<any>
{
  return this._http.get(this.techApiUrl)
}


//bussiness

businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl)
}

}



