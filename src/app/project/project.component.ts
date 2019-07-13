import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project.model';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  project: Project;
  projectId: string;

  fundraise: string = '/assets/img/projects/fundraise-icon.png';

  constructor(private projectService: ProjectService, 
    private loader: LoaderService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.projectId = params.projectId);

    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
      if (this.projectId){
        for (let proj of projects) {
          if (this.cleanParams(proj.name) === this.projectId){
            this.project = proj;
            this.loader.hide();
          }
        }      
      }
    });
  }

  cleanParams(parameter): string {
    if (parameter && typeof parameter === 'string') {
      parameter = parameter.replace(/[^a-zA-Z0-9]/g, '-');
      return parameter.toLowerCase();
    }
    return parameter;
  }

}
