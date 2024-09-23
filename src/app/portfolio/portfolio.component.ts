import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser'; 
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']  // Corrected to styleUrls
})
export class PortfolioComponent implements OnInit {

  projects =  {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService ) {
    this.titleService.setTitle('Sayli Katre - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProject();
    console.log(this.projects); 
  }
}
