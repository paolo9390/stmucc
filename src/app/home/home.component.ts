import { Component, OnInit, OnDestroy } from '@angular/core';
import { PanelService } from '../_services/panel.service';
import { Panel } from '../_models/panel.model';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  panelImg: string = '/assets/img/heal.jpeg';
  panels: Observable<Panel[]>
  _panels: Panel[];
  panelsSubscription: Subscription;

  slogan: string = 'Transforming lives around the world.';
  subslogan: string = 'Doing the right thing is the right thing to do.';
  buttonslogan: string = 'Find out more';

  phoenixProject: Project;

  constructor(private panelService: PanelService, private projectService: ProjectService) {}

  ngOnInit() {
    this.panelService.getPanelsLocally().subscribe(panels => {
      this._panels = panels;
    });

    this.projectService.getProjectsLocally().subscribe(projects => {
      if (projects) {
        projects.forEach(project => {
          if (project.title === 'The Phoenix Project') {
            this.phoenixProject = project;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.panelsSubscription){
      this.panelsSubscription.unsubscribe();
    }
  }

}
