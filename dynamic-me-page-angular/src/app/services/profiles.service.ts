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
  
    getUrl(profile : Profile, sectionType : sectionTypes, section: any ): string{
      const url = this.apiUrl + profile.id + "/" + sectionType.valueOf + "/" + section.id;
      return url
    }

    getProfiles(): Observable<Profile[]>{
      return this.http.get<Profile[]>(this.apiUrl)
    }

  
    deleteElement(profile : Profile, section : sectionTypes, element: any ): Observable<any>{
      const url = this.getUrl(profile, section, element)
      return this.http.delete<any>(url)
    }
  

    // deleteSection(task: Task): Observable<Task>{
    //   const url = this.apiUrl+ task.id;
    //   return this.http.delete<Task>(url)
    // }

    updateElement(profile : Profile, section : sectionTypes, element: any ): Observable<any>{
      const url = this.getUrl(profile, section, element)
      return this.http.put<any>(url, element, httpOptions)    
    }
    
    AddElement(profile : Profile, section : sectionTypes, element: any ): Observable<any>{
      const url = this.getUrl(profile, section, element)  
      return this.http.post<any>(url, element, httpOptions) ;
    }

    // AddSection(task: Task): Observable<Task>{
    //   return this.http.post<Task>(this.apiUrl, task, httpOptions) ;
    // }

}
