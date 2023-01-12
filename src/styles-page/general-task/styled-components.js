// ** MUI Import
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'
import MuiTab from '@mui/material/Tab'

// ** Styled component for the link inside menu
export const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

// ** Styled Tab component
export const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))
