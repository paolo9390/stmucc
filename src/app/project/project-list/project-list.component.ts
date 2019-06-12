import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SingularDialogComponent } from '../../_shared/singular-dialog/singular-dialog.component';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  title: string = 'OUR PROJECTS';

  projects: Project[];

  constructor(public dialog: MatDialog, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectsLocally().subscribe(projects => {
      this.projects = projects;
    });
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
