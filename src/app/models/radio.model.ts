import { DynamicFormModel, DynamicFormModelConfig } from './form.model';

export interface DynamicRadioModelConfig extends DynamicFormModelConfig<any> {
  id: string;
  label: string;
  options: option[];
  value?: string;
}

export class DynamicRadioModel extends DynamicFormModel<any> {
  id: string;
  label: string;
  options: option[];
  value?: string;

  constructor(object: DynamicRadioModelConfig) {
    super(object);
    this.id = object.id || '';
    this.label = object.label || '';
    this.options = object.options || [];
    this.value = object.value || '';
  }
}

export class option {
  label: string;
  value: string;
  id: string;

  constructor(object: option) {
    this.id = object.id || '';
    this.label = object.label || '';
    this.value = object.value || '';
  }
}
