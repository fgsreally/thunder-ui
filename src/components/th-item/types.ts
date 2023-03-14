import type { Component } from 'vue'

export interface ItemType {
//   to: {
//     type: String
//     default: ''
//   }

  to?: string
  exact?: boolean
  blank?: boolean
  label?: string
  description?: string
  icon?: object | null | Component // It is a component!
  svg?: object | null | Component
  infoIcon?: object | null | Component
  /**
   * @default false
   */
  disabled?: boolean

  loading?: boolean

  reverse?: boolean

  outline?: boolean

  shortcut?: string[]
  active?: boolean

  activeInfoIcon?: boolean

}
