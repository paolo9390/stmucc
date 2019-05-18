import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  title: string = 'OUR PROJECTS';

  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  fundraise: string = '/assets/img/projects/fundraise-icon.png';

  projects: Project[];

  constructor(public dialog: MatDialog, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
    })
  }

  viewMore(project): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '80%',
      data: {project: project}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
