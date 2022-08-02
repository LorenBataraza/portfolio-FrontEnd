 import { Injectable } from '@angular/core';
 import { Profile } from 'src/assets/intervafaces/Profile';
 import { Experience } from 'src/assets/intervafaces/Experience';
 import { Project } from 'src/assets/intervafaces/Project';
 import { Observable, of } from 'rxjs';
 import{ HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
 import { sectionTypes } from 'src/assets/intervafaces/sectionTypes';
 import { dataBaseProfiles } from 'src/profileMock';

 const httpOptions = {
   headers: new HttpHeaders({
     'Content-type' : 'application/json'
   })
 }
 @Injectable({
   providedIn: 'root'
 })

 export class ProfilesService {
  sectionTypesEnum = sectionTypes ; 
  profiles: Observable<Profile[]> = new Observable( subscriber  => subscriber.next(dataBaseProfiles))

     private apiUrl = 'http://localhost:4001/profiles/';
     constructor(
       private http:HttpClient
     ) { }


     itemExtractor(profile : Profile, sectionType : sectionTypes,): any{
      // Extract the items to show and expand indicator from the profile
      switch (sectionType) {
        case this.sectionTypesEnum.About:
           return profile.about;
    
          case this.sectionTypesEnum.Experiences:
            return profile.experiences;
          
          case this.sectionTypesEnum.Projects:
            return profile.projects;
          
          case this.sectionTypesEnum.Skills:
            return profile.skills;
      }
      }
    
      isExpandedExtractor(profile : Profile, sectionType : sectionTypes,): any{
        // Extract the items to show and expand indicator from the profile
        switch (sectionType) {
          case this.sectionTypesEnum.About:
             return profile.show_about;
      
            case this.sectionTypesEnum.Experiences:
              return profile.show_experiences;
            
            case this.sectionTypesEnum.Projects:
              return profile.show_projects;
            
            case this.sectionTypesEnum.Skills:
              return profile.show_skills;
        }
        }
  

    getUrl(profile : Profile, sectionType : sectionTypes, section: any ): string{
       const url = this.apiUrl + profile.id + "/" + sectionType.valueOf + "/" + section.id;
       return url
     }

    getMuckUpProfile(): Observable<Profile[]>{
      return this.http.get<Profile[]>(this.apiUrl)
     }

     getProfiles(): Observable<Profile[]>{
       return this.http.get<Profile[]>(this.apiUrl)
     }
  
     getProfileByID(id: number, profiles: Profile[]): Profile{
      return this.ifNotUndefined(profiles.find(obj=> obj.id == id),1);
     }


     ifNotUndefined(object_1 : any, object_2 : any){
      if(object_1 != undefined){
        return object_1;
      }
      else{
        console.log("UNDEFINED!")
        return object_2;
      }
    }

//     deleteElement(profile : Profile, section : sectionTypes, element: any ): Observable<any>{
//       const url = this.getUrl(profile, section, element)
//       return this.http.delete<any>(url)
//     }  
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
    }
  