import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

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
