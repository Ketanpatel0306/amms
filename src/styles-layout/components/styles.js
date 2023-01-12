export const boxStyle = () => ({
  py: 2,
  px: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: 'text.secondary'
  }
})

export const badgeStyle = () => ({
  ml: 2,
  cursor: 'pointer'
})

export const avatarStyle = () => ({
  width: 40,
  height: 40
})

export const menuStyle = () => ({
  '& .MuiMenu-paper': { width: 270, marginTop: 4 }
})

// ** AutoComplete

export const iconStyle = () => ({
  mr: 2.5,
  color: 'text.primary'
})

export const iconButtonStyle = () => ({
  p: 1
})

export const fileRemoveStyle = () => ({
  mb: 2.5,
  fontSize: '5rem',
  color: 'text.primary'
})

export const resultBoxStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const resultTypography = () => ({
  mb: 11.5,
  wordWrap: 'break-word'
})

export const noResultTypographyStyle = () => ({
  wordWrap: 'break-word'
})

export const titleTypography = () => ({
  mb: 2.5,
  color: 'text.disabled'
})

export const titleAutocompleteTypography = () => ({
  mr: 2.5,
  color: 'text.disabled'
})

export const listTypography = () => ({
  lineHeight: 1.25,
  color: 'text.disabled'
})

export const listStyle = () => ({
  py: 0
})

export const listSuggestionsStyle = () => ({
  py: 2.5
})

export const listItemStyle = () => ({
  py: 2
})

export const disabledStyle = () => ({
  color: 'text.disabled'
})

export const listBoxStyle = () => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover > *': { color: 'primary.main' }
})

export const listBoxTypographyStyle = () => ({
  color: 'text.primary'
})

export const listDialogBoxStyle = () => ({
  top: 0,
  width: '100%',
  position: 'sticky'
})

export const autoCompleteListBoxStyle = () => ({
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center'
})

export const autoCompleteListItemStyle = () => ({
  cursor: 'pointer',
  color: 'text.disabled'
})

export const gridContainerStyle = () => ({
  ml: 0
})

export const iconBtn = (hidden, layout) => (!hidden && layout === 'vertical' ? { mr: 1, ml: -2.75 } : {})

export const searchValueBoxStyle = (theme, fullScreenDialog) => ({
  p: 10,
  display: 'grid',
  overflow: 'auto',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  height: fullScreenDialog ? 'calc(100vh - 69px)' : '100%'
})

export const appBarSearchStyle = (searchValue, fullScreenDialog) => ({
  '& + .MuiAutocomplete-popper': {
    ...(searchValue.length && {
      overflow: 'auto',
      maxHeight: 'calc(100vh - 69px)',
      height: fullScreenDialog ? 'calc(100vh - 69px)' : 481
    })
  }
})

export const appBarSearchInputStyle = theme => ({
  p: `${theme.spacing(3.75, 6)} !important`
})

export const appBarSearchListStyle = theme => ({
  py: 2.5,
  px: ` ${theme.spacing(6)} !important`
})

export const boxPosition = () => ({
  pt: 2,
  pb: 3,
  px: 4
})

export const boxBadgeStyle = () => ({
  display: 'flex',
  alignItems: 'center'
})

export const secAvatarStyle = () => ({
  width: '2.5rem',
  height: '2.5rem'
})

export const box = () => ({
  display: 'flex',
  marginLeft: 3,
  alignItems: 'flex-start',
  flexDirection: 'column'
})

export const typographyTextName = () => ({
  fontWeight: 600,
  textTransform: 'capitalize'
})

export const typographyAdminText = () => ({
  fontSize: '0.8rem',
  color: 'text.disabled'
})

export const dividerPosition = () => ({
  mt: 0,
  mb: 1
})

export const menuItemPosition = () => ({
  p: 0
})

export const menuItemMargin = () => ({
  marginRight: 2
})

export const menuItemPadding = () => ({
  py: 2
})

export const logoutVariant = () => ({
  marginRight: 2,
  fontSize: '1.375rem',
  color: 'text.secondary'
})

export const verticalAppBarContentBox = () => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const actionsLeftBoxStyle = () => ({
  mr: 2,
  display: 'flex',
  alignItems: 'center'
})

export const iconBtnStyle = () => ({
  ml: -2.75
})

export const actionsRightBox = () => ({
  display: 'flex',
  alignItems: 'center'
})
