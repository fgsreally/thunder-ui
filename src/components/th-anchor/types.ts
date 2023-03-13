import type { Component, PropType } from 'vue'

export interface AnchorType {
  to?: string
  exact?: boolean
  blank?: boolean
  label?: string
  icon?: PropType<Component | null>
  svg?: PropType<Component | null>
  color?: string
  reverse?: boolean
  disabled?: boolean

}
