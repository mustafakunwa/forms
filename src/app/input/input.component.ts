import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { DynamicInputModel } from '../models/input.model';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() model!: DynamicInputModel;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
