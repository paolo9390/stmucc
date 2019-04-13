import { Component, OnInit, OnDestroy } from '@angular/core';
import { PanelService } from '../_services/panel.service';
import { Panel } from '../_models/panel.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  panelImg: string;
  panels: Observable<Panel[]>
  _panels: Panel[];
  panelsSubscription: Subscription;

  slogan: string = 'Transforming lives around the world.';
  subslogan: string = 'Doing the right thing is the right thing to do.';
  buttonslogan: string = 'Find out more';

  constructor(private panelService: PanelService) {

    this.panelImg = '/assets/img/heal.jpeg'

   }

  ngOnInit() {
    this.panelService.getPanels().subscribe(panels => {
      this._panels = panels;
    })
  }

  ngOnDestroy() {
    if (this.panelsSubscription){
      this.panelsSubscription.unsubscribe();
    }
  }

}
