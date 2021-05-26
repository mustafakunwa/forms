export interface DynamicFormModelConfig<T> {
  readOnly?: boolean;
  formControlName?: string;
  max?: number ;
  min?: number;
  required?: boolean;
  pattern?: string;
  validators?: any | null;
  errorMessages?: any| null;
}

export abstract class  DynamicFormModel<T> {
  readOnly: boolean;
  required: boolean;
  formControlName: string;
  max: number | null;
  min: number | null;
  pattern: string | null;
  validators?: any | null;
  errorMessages?: any | null;

  protected constructor(config: DynamicFormModelConfig<T>) {
    this.max = config.max !== undefined ? config.max : null;
    this.min = config.min !== undefined ? config.min : null;
    this.formControlName = config.formControlName ? config.formControlName : '';
    this.required = config.required || false;
    this.readOnly = config.readOnly || false;
    this.pattern = config.pattern ? config.pattern : null;
    this.errorMessages = config.errorMessages ? config.errorMessages : null;
    this.validators = config.validators ? config.errorMessages : null;
  }
}
