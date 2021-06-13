import {Component, OnInit} from '@angular/core';
import {Position} from '../../model/employee/position';
import {PositionService} from '../../service/employee/position.service';
import {EducationDegree} from '../../model/employee/education-degree';
import {EducationDegreeService} from '../../service/employee/education-degree.service';

@Component({
  selector: 'app-education-degree',
  templateUrl: './education-degree.component.html',
  styleUrls: ['./education-degree.component.css']
})
export class EducationDegreeComponent implements OnInit {

  educationDegrees: EducationDegree[] = [];

  constructor(private educationDegreeService: EducationDegreeService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.educationDegreeService.getAll().subscribe(educationDegrees => {
      this.educationDegrees = educationDegrees;
    });
  }

}
