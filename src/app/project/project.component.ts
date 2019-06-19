import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project.model';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.projectId = params.projectId);

    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
      if (this.projectId){
        for (let proj of projects) {
          if (this.cleanParams(proj.name) === this.projectId){
            this.project = proj;
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
