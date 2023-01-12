import { useContext } from 'react'
import { SettingsContext } from 'src/@core/context/settings-context'

export const useSettings = () => useContext(SettingsContext)
