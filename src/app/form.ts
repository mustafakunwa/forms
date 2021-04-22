export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  pattern: string;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];
  errorMessage: { key: string; message: string }[];
  inputType: string;
  placeholder: string;
  hint: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      pattern?: string;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      errorMessage?: { key: string; message: string }[];
      inputType?: string;
      placeholder?: string;
      hint?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.pattern = options.pattern;
    this.errorMessage = options.errorMessage || [];
    this.hint = options.hint || '';
    this.inputType = options.inputType || 'text';
    this.placeholder = options.placeholder || '';
  }
}
