// ** React Imports
import { useEffect, useCallback, useRef, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import MuiDialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import ListItemButton from '@mui/material/ListItemButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiAutocomplete from '@mui/material/Autocomplete'

// ** Icons Imports
import Tab from 'mdi-material-ui/Tab'
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

import TargetAccount from 'mdi-material-ui/TargetAccount'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import AccountWrenchOutline from 'mdi-material-ui/AccountWrenchOutline'
import { ShapeOutline } from 'mdi-material-ui'
import AccountTie from 'mdi-material-ui/AccountTie'
import ChartDonut from 'mdi-material-ui/ChartDonut'

import LockOutline from 'mdi-material-ui/LockOutline'

import BankOutline from 'mdi-material-ui/BankOutline'
import FileRemoveOutline from 'mdi-material-ui/FileRemoveOutline'
import { CurrencyInr } from 'mdi-material-ui'
import FormatListCheckbox from 'mdi-material-ui/FormatListCheckbox'

import ChartTimelineVariant from 'mdi-material-ui/ChartTimelineVariant'
import SubdirectoryArrowLeft from 'mdi-material-ui/SubdirectoryArrowLeft'

import PlaylistEdit from 'mdi-material-ui/PlaylistEdit'

// ** Third Party Imports
import axios from 'axios'

// ** Configs Imports
import themeConfig from 'src/configs/theme-config'

// ** Custom Components Imports
import UserIcon from 'src/layouts/components/user-icon'

// ** Styles Imports
import * as styles from '@styles-layout/components/styles'

// ** API Icon Import with object
import { autocompleteIconObj } from './auto-complete-icon-obj'

import _ from 'lodash'

const defaultSuggestionsData = [
  {
    category: 'Staff Management',
    suggestions: [
      {
        suggestion: 'Employee',
        link: '/employee/',
        icon: <AccountTie fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Roles',
        link: '/roles-permissions/roles',
        icon: <LockOutline fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Permissions',
        link: '/roles-permissions/permissions',
        icon: <FormatListCheckbox fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Expenses Management',
    suggestions: [
      {
        suggestion: 'Category',
        link: '/expense/category',
        icon: <FormatListCheckbox fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Expense',
        link: '/expense/expense-sub',
        icon: <CurrencyInr fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Customer Management',
    suggestions: [
      {
        suggestion: 'Customer',
        link: '/customer',
        icon: <AccountOutline fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Inquiry Management',
    suggestions: [
      {
        suggestion: 'Inquiry',
        link: '/inquiry',
        icon: <PlaylistEdit fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Product Management',
    suggestions: [
      {
        suggestion: 'Category',
        link: '/product-management/category',
        icon: <FormatListCheckbox fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Sub Category ',
        link: '/product-management/subcategory',
        icon: <FormatListCheckbox fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Brand',
        link: '/product-management/brand',
        icon: <ShapeOutline fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Product',
        link: '/product-management/product',
        icon: <ShapeOutline fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Account Management',
    suggestions: [
      {
        suggestion: 'Bank',
        link: '/account/bank',
        icon: <BankOutline fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Company',
        link: '/account/company',
        icon: <ChartTimelineVariant fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Payment Method',
        link: '/account/payment-method',
        icon: <CurrencyInr fontSize='small' sx={styles.iconStyle()} />
      },
      {
        suggestion: 'Tax',
        link: '/account/tax',
        icon: <ChartDonut fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Target Management',
    suggestions: [
      {
        suggestion: 'Monthly Target',
        link: '/target',
        icon: <TargetAccount fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  },
  {
    category: 'Service Management',
    suggestions: [
      {
        suggestion: 'Services',
        link: '/service-management',
        icon: <AccountWrenchOutline fontSize='small' sx={styles.iconStyle()} />
      }
    ]
  }
]

const categoryTitle = {
  dashboards: 'Dashboards',
  appsPages: 'Apps & Pages',
  userInterface: 'User Interface',
  formsTables: 'Forms & Tables',
  chartsMisc: 'Charts & Misc'
}

// ** Styled Autocomplete component
const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  '& fieldset': {
    border: 0
  },
  '& + .MuiAutocomplete-popper': {
    borderTop: `1px solid ${theme.palette.divider}`,
    '& .MuiAutocomplete-listbox': {
      paddingTop: 0,
      height: '100%',
      maxHeight: 'inherit',
      '& .MuiListSubheader-root': {
        top: 0,
        fontWeight: 400,
        lineHeight: '15px',
        fontSize: '0.75rem',
        letterSpacing: '1px',
        color: theme.palette.text.disabled,
        padding: theme.spacing(3.75, 6, 0.75)
      }
    },
    '& .MuiAutocomplete-paper': {
      border: 0,
      height: '100%',
      borderRadius: 0,
      boxShadow: 'none'
    },
    '& .MuiListItem-root.suggestion': {
      padding: 0,
      '& .MuiListItemSecondaryAction-root': {
        display: 'flex'
      },
      '&.Mui-focused.Mui-focusVisible, &:hover': {
        backgroundColor: theme.palette.action.hover
      },
      '& .MuiListItemButton-root: hover': {
        backgroundColor: 'transparent'
      },
      '&:not(:hover)': {
        '& .MuiListItemSecondaryAction-root': {
          display: 'none'
        },
        '&.Mui-focused, &.Mui-focused.Mui-focusVisible:not(:hover)': {
          '& .MuiListItemSecondaryAction-root': {
            display: 'flex'
          }
        },
        [theme.breakpoints.down('sm')]: {
          '&.Mui-focused:not(.Mui-focusVisible) .MuiListItemSecondaryAction-root': {
            display: 'none'
          }
        }
      }
    },
    '& .MuiAutocomplete-noOptions': {
      display: 'grid',
      minHeight: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(10)
    }
  }
}))

// ** Styled Dialog component
const Dialog = styled(MuiDialog)({
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(4px)'
  },
  '& .MuiDialog-paper': {
    overflow: 'hidden',
    '&:not(.MuiDialog-paperFullScreen)': {
      height: '100%',
      maxHeight: 550
    }
  }
})

const NoResult = ({ value, setOpenDialog }) => {
  return (
    <Box sx={styles.resultBoxStyle()}>
      <FileRemoveOutline sx={styles.fileRemoveStyle()} />
      <Typography variant='h6' sx={styles.resultTypography()}>
        No results for
        <Typography variant='h6' component='span' sx={styles.noResultTypographyStyle()}>
          {`"${value}"`}
        </Typography>
      </Typography>
    </Box>
  )
}

const AutocompleteComponent = ({ hidden, settings }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [options, setOptions] = useState([])
  const [jasonData, setJasonData] = useState(defaultSuggestionsData)

  // ** Hooks & Vars
  const theme = useTheme()
  const router = useRouter()
  const { layout } = settings
  const wrapper = useRef(null)
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('sm'))

  // Get all data using API

  const DefaultSuggestions = ({ setOpenDialog }) => {
    return (
      <Grid container spacing={6} sx={styles.gridContainerStyle()}>
        {jasonData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography component='p' variant='overline' sx={styles.listTypography()}>
              {item.category}
            </Typography>
            <List sx={styles.listSuggestionsStyle()}>
              {item.suggestions.map((suggestionItem, index2) => (
                <ListItem key={index2} sx={styles.listItemStyle()} disablePadding>
                  <Link passHref href={suggestionItem.link}>
                    <Box component='a' onClick={() => setOpenDialog(false)} sx={styles.listBoxStyle()}>
                      {suggestionItem.icon}
                      <Typography variant='body2' sx={styles.listBoxTypographyStyle()}>
                        {suggestionItem.suggestion}
                      </Typography>
                    </Box>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    )
  }

  useEffect(() => {
    let obj = []
    jasonData.map(item => {
      item.suggestions.map(index => {
        obj.push(index)
      })
    })

    // let newfilter = obj.some(item => item.suggestion)

    // let filtered_array = _.filter(obj, function (o) {
    //   return searchValue === o.suggestion
    // })

    if (searchValue !== '') {
      let dataFilter = obj.filter(item =>
        Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
      )

      setOptions(dataFilter)
    } else {
      setOptions(jasonData)
    }

    // axios
    //   .get('/app-bar/search', {
    //     params: { q: searchValue }
    //   })
    //   .then(response => {
    //
    //     if (response.data && response.data.length) {
    //       setOptions(response.data)
    //     } else {
    //       setOptions([])
    //     }
    //   })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])
  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  // Handle click event on a list item in search result
  const handleOptionClick = obj => {
    setSearchValue('')
    setOpenDialog(false)
    if (obj.url) {
      router.push(obj.url)
    }
  }

  // Handle ESC & shortcut keys keydown events
  const handleKeydown = useCallback(
    event => {
      // ** Shortcut keys to open searchbox (Ctrl + /)
      if (!openDialog && event.ctrlKey && event.which === 191) {
        setOpenDialog(true)
      }
    },
    [openDialog]
  )

  // Handle shortcut keys keyup events
  const handleKeyUp = useCallback(
    event => {
      // ** ESC key to close searchbox
      if (openDialog && event.keyCode === 27) {
        setOpenDialog(false)
      }
    },
    [openDialog]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp, handleKeydown])
  if (!isMounted) {
    return null
  } else {
    return (
      <Box ref={wrapper} onClick={() => !openDialog && setOpenDialog(true)} sx={styles.autoCompleteListBoxStyle()}>
        <IconButton color='inherit' sx={styles.iconBtn(hidden, layout)}>
          <Magnify />
        </IconButton>
        {!hidden && layout === 'vertical' ? <Typography sx={styles.disabledStyle()}>Search (Ctrl+/)</Typography> : null}
        <Dialog fullWidth open={openDialog} fullScreen={fullScreenDialog} onClose={() => setOpenDialog(false)}>
          <Box sx={styles.listDialogBoxStyle()}>
            <Autocomplete
              autoHighlight
              disablePortal
              options={options}
              id='appBar-search'
              isOptionEqualToValue={() => true}
              onInputChange={(event, value) => setSearchValue(value)}
              onChange={(event, obj) => handleOptionClick(obj)}
              noOptionsText={<NoResult value={searchValue} setOpenDialog={setOpenDialog} />}
              getOptionLabel={option => option.suggestion}
              groupBy={option => (searchValue.length ? jasonData[option.suggestion] : '')}
              sx={styles.appBarSearchStyle(searchValue, fullScreenDialog)}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    value={searchValue}
                    onChange={event => {
                      setSearchValue(event.target.value)
                    }}
                    inputRef={input => {
                      if (input) {
                        if (openDialog) {
                          input.focus()
                        } else {
                          input.blur()
                        }
                      }
                    }}
                    InputProps={{
                      ...params.InputProps,
                      sx: styles.appBarSearchInputStyle(theme),
                      startAdornment: (
                        <InputAdornment position='start' sx={styles.listBoxTypographyStyle()}>
                          <Magnify />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          onClick={() => setOpenDialog(false)}
                          sx={styles.autoCompleteListBoxStyle()}
                        >
                          {!hidden ? <Typography sx={styles.titleAutocompleteTypography()}>[esc]</Typography> : null}
                          <IconButton size='small' sx={styles.iconButtonStyle()}>
                            <Close fontSize='small' />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )
              }}
              renderOption={(props, option) => {
                const IconTag = autocompleteIconObj[option.icon] || themeConfig.navSubItemIcon

                return searchValue.length ? (
                  <ListItem
                    {...props}
                    key={option.suggestion}
                    className={`suggestion ${props.className}`}
                    onClick={() => handleOptionClick(option)}
                    secondaryAction={<SubdirectoryArrowLeft fontSize='small' sx={styles.autoCompleteListItemStyle()} />}
                  >
                    <ListItemButton sx={styles.appBarSearchListStyle(theme)}>
                      <UserIcon
                        icon={IconTag}
                        componentType='search'
                        iconProps={{ fontSize: 'small', sx: styles.iconStyle() }}
                      />
                      <Typography variant='body2' sx={styles.listBoxTypographyStyle()}>
                        {option.suggestion}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ) : null
              }}
            />
          </Box>
          {searchValue.length === 0 ? (
            <Box sx={styles.searchValueBoxStyle(theme, fullScreenDialog)}>
              <DefaultSuggestions setOpenDialog={setOpenDialog} />
            </Box>
          ) : null}
        </Dialog>
      </Box>
    )
  }
}

export default AutocompleteComponent
