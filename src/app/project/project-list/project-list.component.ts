import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SingularDialogComponent } from '../../_shared/singular-dialog/singular-dialog.component';
import { ProjectService } from '../../_services/project.service';
import { Project } from '../../_models/project.model';
import { LoaderService } from '../../_services/loader.service';

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
    private loader: LoaderService) { }

  ngOnInit() {
    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
      this.loader.hide();
    });
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
