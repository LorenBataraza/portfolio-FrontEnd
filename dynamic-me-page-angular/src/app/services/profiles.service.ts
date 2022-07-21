import { Injectable } from '@angular/core';
import { Profile } from 'src/assets/intervafaces/Profile';
import { Experience } from 'src/assets/intervafaces/Experience';
import { Project } from 'src/assets/intervafaces/Project';

import { Observable, of } from 'rxjs';
import{ HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
    private apiUrl = 'http://localhost:4001/profiles/'

    constructor(
      private http:HttpClient
    ) { }
  
    getProfiles(): Observable<Profile[]>{
      return this.http.get<Profile[]>(this.apiUrl)
    }
  
    deleteElement(profile : Profile, sectionType : sectionTypes, section: any ): Observable<Task>{
      const url = this.apiUrl+ profile.id + "/" + sectionType + "/" + section.id;
      return this.http.delete<Task>(url)
    }
  

    // deleteSection(task: Task): Observable<Task>{
    //   const url = this.apiUrl+ task.id;
    //   return this.http.delete<Task>(url)
    // }

    // update(task: Task): Observable<Task>{
    //   const url = this.apiUrl+ task.id;
    //   return this.http.put<Task>(url, task, httpOptions)    
    // }
    
    // AddElement(task: Task): Observable<Task>{
    //   return this.http.post<Task>(this.apiUrl, task, httpOptions) ;
    // }

    // AddSection(task: Task): Observable<Task>{
    //   return this.http.post<Task>(this.apiUrl, task, httpOptions) ;
    // }

}
