import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from './globals.service';
import { Project } from '../_models/project.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  projects: Observable<Project[]>

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    var projects =  this.http.get<Project[]>(`${globals.BASE_URL}/projects`);
    return projects;
  }

  getProjectsLocally(): Observable<Project[]> {
    var projects = this.http.get<Project[]>(`${globals.LOCAL_URL}/projects.json`);
    return projects;
  }
}