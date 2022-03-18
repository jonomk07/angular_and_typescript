import { Injectable } from '@angular/core';
import { 
    HttpClient, 
    HttpHeaders, 
    HttpParams,
    HttpEventType 
} from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';


interface Post {
    title: string;
    body: string;
    id?: number;
}
  

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    error = new Subject<any>();
    constructor(
        private http: HttpClient
    ){}

    addPost(postData: Post){
        return this.http.post(
            'http://localhost:3004/posts',
            postData,
            {
             headers: new HttpHeaders({
               'Content-type': 'application/json',
               Bear: 'Ring'
             })
            }
          ).pipe(
            tap( 
            response => { this.logSomething();},
            err => {
                this.error.next(err)
            })
          )
    }

    getPosts(){
        // let postParams =  new HttpParams();
        // postParams = postParams.append('_order', 'desc');
        // postParams = postParams.append('_sort', 'id');

        const postParams = new HttpParams({fromString: '_order=asc&_sort=id'});
        return this.http.get(
            'http://localhost:3004/posts',
            {
              params: postParams,
              observe: 'events'
            }
          ).pipe(
              map((event: any) => {
                if (event.type === HttpEventType.Sent) { console.log('started'); }
                if (event.type === HttpEventType.Response ) {
                    console.log('DONE');
                   return event.body;
                }
              }),
              catchError(err => {
                return throwError(err);
              })
          );
    }

    deletePost(id: number ){
        return this.http.delete(
            `http://localhost:3004/posts/${id}`
        ).pipe(
            tap( 
            response => { this.logSomething();},
            err => {
                this.error.next(err)
            })
        )
    }


    logSomething(){
        console.log('...it was deleted');
    }

}