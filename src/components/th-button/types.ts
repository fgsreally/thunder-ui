import type { Component } from 'vue'

export interface ButtonType {
  to?: string
  exact?: boolean
  blank?: boolean
  label?: string
  icon?: object | null | Component // It is a component!
  svg?: object | null | Component // It is a component!
  color?: string
  disabled?: boolean
  loading?: boolean
  large?: boolean
  shadow?: boolean
  reverse?: boolean
  rounded?: boolean
  gradient?: boolean
  outline?: boolean
  shortcut?: string[]
}
