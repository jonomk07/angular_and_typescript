import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { articlesRoute, contactRoute } from './routes';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface ReqParams {
  _sort?: string;
  _order?: string; // desc asc
  _start?: number;
  _end?: number;
  _limit?: number;
}

export interface Articles {
  id: number;
  title: string;
  content: string;
  image: string;
  description: string;
  created: number;
}

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
   ) {}
   
  getArticles(vars: ReqParams) {
    const filters = this.generateFilter(vars);
    const articleParams = new HttpParams({ fromString: filters });

    return this.http.get<Articles[]>(`${articlesRoute}`, {
      params: articleParams
    });
  }

  getArticle(params: { id: number }) {
    return this.http.get<Articles>(`${articlesRoute}/${params.id}`);
  }


  generateFilter(vars: ReqParams | any ) {
    let query = '';

    Object.keys(vars).forEach((value, index) => {
      query += `${value}=${vars[value]}`;
      if ( index !== Object.keys(vars).length - 1 ) {
        query += '&';
      }
    });

    return query;
  }

  sendMessage(message: any) {
    return this.http.post(`${contactRoute}`, message).pipe(
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
  
}
