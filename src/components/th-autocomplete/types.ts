export interface AutoCompleteType {
  spellcheck?: boolean
  autocapitalize?: string
  placeholder?: string

  source: string[]

  value?: string
  styles?: string

}
