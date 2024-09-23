import { Component } from '@angular/core';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Project';
import { CarouselModule} from 'ngx-bootstrap/carousel'
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule,
  ModalModule, CarouselModule
],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }



}