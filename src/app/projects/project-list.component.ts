import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  title: string = 'OUR PROJECTS';
  
  whatwedo: string = '/assets/img/about/whatwedo.jpg';
  fundraise: string = '/assets/img/projects/fundraise-icon.png';

  projects: any[] = [
    {
      title: "My Health Programme",
      description: "The development of a new polyclinic in Faqous, northern Egypt, marks the first major project in the charity’s My Health programme, which was created following extensive evaluation of regional healthcare facilities in Egypt. The plan is to construct and equip four international hospitals and three healthcare centres, in areas of greatest medical need. Having opened Faqous, work is now underway on our first international hospital in Qous, with the main building work complete, and fit-out underway. Each development will offer specialist support, tailored to the particular health requirements of the local population. In addition to Faqous, sites are also being developed in Aswan, Qena, Menia, Giza and Behira in Egypt. A number of the sites are already in construction phase. The completed Faqous project has created an impressive healthcare centre, providing a day surgery centre, outpatient facility and radiology services in a deprived, rural part of the country, where thousands of residents are unable to pay for healthcare. Together with planning and construction, through trusted regional contractors, we are also developing strategic partnerships on the ground, and are engaged in training programmes to guarantee that each new development has the skilled staff to ensure that it is fully operational from day one. As a result of the generosity of supporters, millions of people will benefit from the medical services which will be delivered through the seven new centres in the programme. The ‘My Health’ programme is supported by His Holiness, Pope Tawardros III, leader of the Coptic Orthodox Church."
    },
    {
      title: "Medicine Distribution Programme",
      description: "Deprived areas of Upper Egypt and Cairo now benefit from the expansion of the St Mark Universal Copts Care programme, which distributes prescriptions to chronically ill patients living below the poverty line. Each month over 1,500 prescriptions are issued to patients."
    },
    {
      title: "Medical and Nursing Skills Training",
      description: "St Mark Universal Copts Care is supporting the training of medical staff for new healthcare facilities in Egypt. Under the programme, a group of volunteer doctors in the UK supports skills training, which has seen 60 junior doctors attend training given by consultants across eight areas of specialism."
    },
    {
      title: "International Health Partners",
      description: "Collaboration with IHP, Europe’s largest facilitator of product donations from healthcare companies to aid agencies, has enabled St Mark Universal Copts Care to access surplus medicine in Europe, in a safe and regulated manner, and get it to those people who need it most. Our first shipment to Cairo’s largest public hospital, Om El Masriyeen, was dispensed by the hospital in 2017 for the treatment of people who simply would not have been able to access medicine if it were not for our efforts and those who support us. Additional shipments have since been received by Cairo’s Children’s Cancer Hospital."
    },
    {
      title: "Cancer Research Library",
      description: "Amongst our other work, we are also dedicated to helping medical professionals in poorer countries gain access to the latest medical research information, and to this end, have funded a research library at the children’s cancer hospital in Cairo, with the help of valuable donations received from companies and individual donors."
    },
    {
      title: "The Phoenix Project",
      description: "Working with Warrington Disability Partnership, we are refurbishing mobility equipment and independent living aids for people with chronic health conditions in Egypt, together with those living in Syrian refugee camps and a centre for children with disabilities in Thailand. Wheelchairs, walking frames, hoists, medical beds and chairs, and specialist mattresses are among the items donated. The ongoing programme is also generating employment in the local Warrington area by recycling and refurbishing equipment that would otherwise have been destined for UK landfill sites."
    },
    {
      title: "Project Happiness",
      description: "Project Happiness was a successful collaboration project with Cheshire community group, No Rain, No Rainbows, providing workshops, coaching and support for people affected by stress, loneliness, depression, anxiety, addiction or lack of self-worth. St Mark Universal Copts Care supported the group to enable it to roll-out more workshops for school children, youth groups, and groups such as vulnerable women and children with autism. Designed to be fun and engaging, the workshops helped to improve mental health conditions in those people living with a range of psychological issues. At a time when depression is set to become the UK’s second most common medical condition, Project Happiness proved a timely and effective support mechanism."
    },
    {
      title: "The Happy Heart",
      description: "The Happy Heart is a new centre in Naqada, treating children with learning disabilities. It is currently helping around 50 children every day."
    },
    {
      title: "Physiotherapy Centre – Naqada",
      description: "Naqada is also home to an important project that has seen us fit out and equip a physiotherapy and rehabilitation centre for people with neurological conditions. Serving a local population of around 24,000 it is providing vital support to over 200 patients a month."
    },
    {
      title: "Socio-Economic Projects",
      description: "We support communities in Der Mawas, Egypt by helping individuals to establish sustainable micro business enterprises as a means of supporting their families, and in the longer term, perhaps being able to generate employment opportunities. Many of these rural enterprises have involved the funding of successful, small-scale cattle projects."
    },
    {
      title: "Partnerships",
      description: "Working in partnership with other charities, we’ve been able to complete projects such as the establishment of a vital nursery project in Om Dorman, Sudan, in association with ‘Copts in Need.’ In addition, by working with St Cyril Trust and the diocese of Old Cairo we’ve been able to assist in the funding of university tuition fees for over 120 students from some of the poorest backgrounds."
    },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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
