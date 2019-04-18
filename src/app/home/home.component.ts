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

  phoenixProject: any = {
    title: 'The Phoenix Project',
    description: 'Working with Warrington Disability Partnership, we are refurbishing mobility equipment and independent living aids for people with chronic health conditions in Egypt, together with those living in Syrian refugee camps and a centre for children with disabilities in Thailand. Wheelchairs, walking frames, hoists, medical beds and chairs, and specialist mattresses are among the items donated. The ongoing programme is also generating employment in the local Warrington area by recycling and refurbishing equipment that would otherwise have been destined for UK landfill sites.'
  };

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
