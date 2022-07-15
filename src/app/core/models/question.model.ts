export interface QuestionModel {
  type: string;
  question: string;
  answer: string;
  options: Option[];
}
export interface Option {
  value: string;
  checked?: boolean;
}
