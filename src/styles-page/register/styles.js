export const RegisterIllustrationWrapper = () => ({
  flex: 1,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center'
})

export const rightWrapper = skin =>
  skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}

export const box = () => ({
  p: 7,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.paper'
})

export const boxWrapper = () => ({
  top: 30,
  left: 40,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center'
})

export const typography = () => ({
  ml: 2,
  lineHeight: 1,
  fontWeight: 700,
  fontSize: '1.5rem !important'
})

export const errorMessage = () => ({
  color: 'error.main'
})

export const boxMargin = () => ({
  mb: 6
})

export const formControl = () => ({
  mb: 4
})

export const formMargin = () => ({
  my: 0
})

export const privacyText = () => ({
  color: 'primary.main'
})

export const termsError = () => ({
  mt: 0,
  color: 'error.main'
})

export const signBtn = () => ({
  mb: 7
})

export const signInText = () => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

export const text = () => ({
  mr: 2,
  color: 'text.secondary'
})

export const divider = () => ({
  mt: 5,
  mb: 7.5,
  '& .MuiDivider-wrapper': { px: 4 }
})

export const linkText = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const facebookText = () => ({
  color: '#497ce2'
})

export const twitterText = () => ({
  color: '#1da1f2'
})

export const githubText = () => ({
  color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300])
})

export const googleText = () => ({
  color: '#db4437'
})

export const termsLabelStyle = errors => ({
  color: errors.terms ? 'error.main' : ''
})

export const termsStyle = errors => ({
  ...(errors.terms ? { color: 'error.main' } : null),
  '& .MuiFormControlLabel-label': { fontSize: '0.875rem' }
})
