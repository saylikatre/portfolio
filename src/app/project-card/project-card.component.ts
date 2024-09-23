import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { ModalModule, BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  openProjectModal() {
    // Ensure this only runs in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      const modalOptions: ModalOptions = {
        class: 'modal-lg',
        initialState: {
          project: this.project
        }
      };

      // Open the modal and pass the project data (if needed)
      this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
    }
  }
}
