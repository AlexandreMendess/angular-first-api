import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostDto } from '../models/post.dto';
import { environment } from '../environments/environment.development';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class First {
  private readonly http = inject(HttpClient);

  onPostsWithFirst() {
    return this.http.get<PostDto>(environment.JSON_URL + "posts").pipe(
      first()
    );
  }

  onPostsNoFirst() {
    return this.http.get<PostDto>(environment.JSON_URL + "posts");
  }
}
