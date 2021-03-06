import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../_services/app.service';
import { Panel } from '../_models/panel.model';
import { Observable, Subscription } from 'rxjs';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/project.model';
import { LoaderService } from '../_services/loader.service';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  panelImg: string = '/assets/img/home.jpg';
  panels: Observable<Panel[]>
  _panels: Panel[];
  panelsSubscription: Subscription;

  slogan: string = 'Transforming lives around the world.';
  subslogan: string = 'Doing the right thing is the right thing to do.';
  buttonslogan: string = 'Find out more';

  phoenixProject: Project;

  constructor(private AppService: AppService, 
    private projectService: ProjectService, 
    private loader: LoaderService,
    public router: Router,
    private dialog: MatDialog,
    private meta: Meta) {}

  ngOnInit() {
    this.AppService.getHomePanelsLocally().subscribe(panels => {
      this._panels = panels;
      this.loader.hide();
    });

    this.projectService.getProjectsLocally().subscribe(projects => {
      if (projects) {
        projects.forEach(project => {
          if (project.name === 'The Phoenix Project') {
            this.phoenixProject = project;
          }
        });
        this.loader.hide();
      }
    });

    this.addMetaTags();
  }

  ngOnDestroy() {
    if (this.panelsSubscription){
      this.panelsSubscription.unsubscribe();
    }
  }

  addMetaTags(): void {
    this.meta.addTag({ property: 'og:title', content: 'StMUC - St Mark Universal Care' });
    this.meta.addTag({ property: 'og:url', content: 'https://stmarkuniversalcare.org' });
    this.meta.addTag({ property: 'og:description', content: 'St Mark Universal Care is a UK based charity, founded by members of the Anglo-Coptic community in 2013, with the objective of providing effective healthcare support to deprived communities in the Middle East; where access to healthcare is extremely difficult.' });
  }

}
