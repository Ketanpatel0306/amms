// ** MUI Import
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Link from 'next/link'
import MuiTab from '@mui/material/Tab'

import { styled } from '@mui/material/styles'

// ** Styled Components
export const Div = styled(Card)(({ theme }) => ({
  width: '45%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    width: '80%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

export const DivContent = styled(CardContent)(() => ({
  paddingTop: '50px',
  paddingBottom: '0px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}))

export const BoxContent = styled(Box)(() => ({
  display: 'flex',
  marginBottom: '8px',
  alignItems: 'baseline'
}))

export const ContentActions = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '25px'
}))

export const CardTitle = styled(Typography)(() => ({
  padding: '5px 5px',
  marginRight: '2px',
  fontWeight: 500,
  fontSize: '0.875rem'
}))

export const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

export const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

export const ImgStyled = styled('img')(({ theme }) => ({
  width: 150,
  height: 150,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(4),
  borderRadius: theme.shape.borderRadius
}))

export const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

export const AvatarWithImageLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3)
}))

export const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

export const Tab = styled(MuiTab)(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

export const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))
