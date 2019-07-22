import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SingularDialogComponent } from '../../_shared/singular-dialog/singular-dialog.component';
import { ProjectService } from '../../_services/project.service';
import { Project } from '../../_models/project.model';
import { LoaderService } from '../../_services/loader.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  title: string = 'OUR PROJECTS';

  projects: Project[];

  constructor(public dialog: MatDialog, 
    private projectService: ProjectService,
    private loader: LoaderService,
    private meta: Meta) { }

  ngOnInit() {
    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
      this.loader.hide();
    });

    this.addMetaTags();
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'StMUCC - Projects' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcoptscare.org/projects' });
    this.meta.addTag({ property: 'og:description', content: 'Our focus is primarily on healthcare projects and we run a wide range of initiatives, both overseas and in the UK.' });
  }

  cleanParams(parameter): string {
    if (parameter && typeof parameter === 'string') {
      parameter = parameter.replace(/[^a-zA-Z0-9]/g, '-');
      return parameter.toLowerCase();
    }
    return parameter;
  }

  viewMore(project): void {
    const dialogRef = this.dialog.open(SingularDialogComponent, {
      width: '80%',
      data: {info: project}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
