export interface LabelForm {
  pageName : string,
  pageID : number,

  inputLabel1 : string,
  inputLabel2 : string,
  inputLabel3 : string,
  inputLabel4 : string,
  inputLabel5 : string,

  selectLabel1 : Select,
  selectLabel2 : Select,
  selectLabel3 : Select,
  selectLabel4 : Select,
  selectLabel5 : Select,

  uniqChoiceLabel1 : string,
  uniqChoiceLabel2 : string,
  uniqChoiceLabel3 : string,
  uniqChoiceLabel4 : string,
  uniqChoiceLabel5 : string,

  multiChoiceLabel1 : string,
  multiChoiceLabel2 : string,
  multiChoiceLabel3 : string,
  multiChoiceLabel4 : string,
  multiChoiceLabel5 : string,
}

export interface Select {
  label: string,
  values: string[]
}
