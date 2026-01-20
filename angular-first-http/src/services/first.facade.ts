import { inject, Injectable } from "@angular/core";
import { First } from "./first";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class FirstFacade {
  private readonly firstService = inject(First);

  private onPostsWithFirstForService() {
    return this.firstService.onPostsWithFirst().subscribe({
        next: (data) => {
            console.log("Data post with First: ", data);
            return;
        },
        error: (err: HttpErrorResponse) => {
            console.error(`Problem with status: ${err.status}`);
            
            return;
        }
    })
  }

  private onPostsNoFirstForService() {
    return this.firstService.onPostsNoFirst().subscribe(
        {
            next: (data) => {
                console.log("Data Post no using First: ", data);
                return;
            },
            error: (err: HttpErrorResponse) => {
                console.error(`Problem with status: ${err.status}`);
            }
        }
    )
  }
}