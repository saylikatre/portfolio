import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'PTFW',
      summary: 'Pool model in Times Fashion Week',
      pictures: ["../../assets/IMG_0692.JPG","../../assets/IMG_0701.JPG","../../assets/IMG_0694.JPG"]
    },
    {
      id: 1,
      name: 'Portfolio Photoshoot',
      summary: 'Photoshoot',
      pictures: ["../../assets/first.jpg","../../assets/second.jpg","../../assets/third.jpg","./../assets/fourth.jpg","../../assets/fifth.jpg","../../assets/sixth.jpg"]
    },
    {
      id: 2,
      name: 'Traditional Shoot',
      summary: 'Traditional Photoshoot',
      pictures: ["../../assets/IMG_1820.JPG","../../assets/IMG_1828.JPG","../../assets/IMG_1821.JPG"]
    }
  ];  
  // ,"../../asssets/CC Dec'232064.jpg","../../asssets/CC Dec'232085.jpg","./../asssets/CC Dec'232064.jpg","./../asssets/CC Dec'232382.jpg"
  constructor() { }

  GetProject() {
    return this.projects;
  }

  GetProjectById(id:number) : Project {
    let project = this.projects.find(project => project.id === id )

    if(project === undefined) {
      throw new TypeError('There is no project that matches the id: ' +id);
    }

    return project;
  }
}
