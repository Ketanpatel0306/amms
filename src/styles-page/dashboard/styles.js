// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

export const cardPosition = () => ({ position: 'relative' })

export const cardContentPadding = () => ({ p: theme => `${theme.spacing(6.75, 7.5)} !important` })

export const typographyMarginBottom = () => ({ mb: 4.5 })

export const boxFontWeight = () => ({ fontWeight: 'bold' })

export const fontWeightStyles = () => ({ fontWeight: 600 })

export const subHeaderLineStyle = () => ({ lineHeight: 1.429 })

export const titleTypographyStyle = () => ({ letterSpacing: '0.15px' })

export const cardContentThemeStyle = theme => ({
  '& .apexcharts-series[rel="2"]': { transform: 'translateY(-8px)' },
  pt: [`${theme.spacing(0)} !important`, `${theme.spacing(0)} !important`, `${theme.spacing(2.5)} !important`],
  '& .apexcharts-canvas .apexcharts-xaxis-label': { letterSpacing: '0.4px', fill: theme.palette.text.secondary }
})

export const gridMargin = () => ({ mb: [4, 4, 7.25] })

export const boxPosition = () => ({ display: 'flex', alignItems: 'center' })

export const customAvatarMargin = () => ({ mr: 4 })

export const boxStylePosition = () => ({ display: 'flex', flexDirection: 'column' })

// ** total visit css

export const totalCardContentStyle = () => ({
  mb: 6.5,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

export const boxPositionStyle = () => ({ display: 'flex', alignItems: 'center' })

export const typographyColor = () => ({ color: 'success.main' })

export const boxDisplayStyle = () => ({ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' })

export const itemDirection = () => ({ display: 'flex', flexDirection: 'column' })

export const boxItemStyle = () => ({ mb: 2.5, display: 'flex', alignItems: 'center' })

export const customAvatarMarginStyle = () => ({ mr: 1.5, height: 24, width: 24, borderRadius: '6px' })

export const tabletAndroidStyle = () => ({ fontSize: '0.875rem' })

export const typographyTextColor = () => ({ color: 'text.disabled' })

export const divider = () => ({ m: 0 })

export const customTextStyle = () => ({ height: 24, width: 24, fontSize: '0.6875rem', color: 'text.secondary' })

export const desktopBoxStyle = () => ({ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' })

export const typographyStyle = () => ({ mr: 1.5 })

export const customItemStyle = () => ({ height: 24, width: 24, borderRadius: '6px' })

export const linearProgressStyles = () => ({
  height: 10,
  '&.MuiLinearProgress-colorPrimary': { backgroundColor: 'primary.main' },
  '& .MuiLinearProgress-bar': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'warning.main'
  }
})

// ** total revenue css

export const boxDisplay = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center' })

export const itemMargin = () => ({ mr: 1.5 })

export const errorMessage = () => ({ color: 'error.main' })

// ** Analytics Sessions css

export const boxSecondDisplay = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center' })

export const itemSecondMargin = () => ({ mr: 1.5 })

export const errorSecondMessage = () => ({ color: 'success.main' })

// ** Sales Overview css

export const boxPositionSecStyle = () => ({ display: 'flex', alignItems: 'center' })

export const customAvatarSecMargin = () => ({ mr: 4 })

export const itemSecDirection = () => ({ display: 'flex', flexDirection: 'column' })

export const fontWeightSecStyles = () => ({ fontWeight: 600 })

export const cardPaddingStyle = () => ({ pb: 3.25 })

export const typographyMarginRight = () => ({ mr: 1.5 })

export const successColor = () => ({ color: 'success.main' })

// ** sales overview with tab css

export const tableRowStyle = () => ({ '& .MuiTableCell-root': { py: theme => `${theme.spacing(2.5)} !important` } })

export const whiteSpace = () => ({ whiteSpace: 'nowrap' })

export const tableThemeStyle = () => ({
  '& .MuiTableCell-root': {
    border: 0,
    py: theme => `${theme.spacing(1.5)} !important`
  },
  '&:first-of-type .MuiTableCell-body': {
    pt: theme => `${theme.spacing(3)} !important`
  },
  '&:last-child .MuiTableCell-body': {
    pb: theme => `${theme.spacing(3)} !important`
  }
})

export const imgStyle = () => ({ width: 34, height: 34 })

export const typographyText = () => ({ fontWeight: 600, whiteSpace: 'nowrap', color: 'text.primary' })

export const customChipStyle = () => ({
  height: 20,
  fontWeight: 500,
  '& .MuiChip-label': { px: 1.625, lineHeight: 1.539 }
})

export const tableCellStyle = () => ({
  fontWeight: 600,
  textAlign: 'right',
  whiteSpace: 'nowrap',
  color: 'text.primary'
})

export const tabListStyle = () => ({
  mb: 2.5,
  px: 5,
  '& .MuiTab-root:not(:last-child)': { mr: 4 },
  '& .MuiTabs-indicator': { display: 'none' }
})

export const tabPadding = () => ({ p: 0 })

export const avatarBoxStyle = () => ({
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '8px',
  alignItems: 'center',
  color: 'action.active',
  justifyContent: 'center',
  backgroundColor: theme => hexToRGBA(theme.palette.secondary.main, 0.12)
})

// ** most sales css

export const chevronDownStyle = () => ({ color: 'error.main' })

export const chevronUpStyle = () => ({ color: 'success.main' })

export const titleMostSales = () => ({ lineHeight: '2rem !important', letterSpacing: '0.15px !important' })

export const cardPadding = () => ({ pb: theme => `${theme.spacing(1.75)} !important` })

export const boxPositionStyles = () => ({ mb: 5, display: 'flex', flexDirection: 'column' })

export const boxTextStyle = () => ({ mb: 1.25, display: 'flex', alignItems: 'center' })

export const textMarginStyle = () => ({ mr: 3.5 })

export const customChipText = () => ({ height: 20, fontSize: '0.75rem', fontWeight: 500 })

export const tableRowTitleStyle = () => ({
  '&:last-of-type td': { border: 0, pb: 0 },
  '&:first-of-type td': { borderTop: theme => `1px solid ${theme.palette.divider}` },
  '& .MuiTableCell-root': {
    '&:last-of-type': { pr: 0 },
    '&:first-of-type': { pl: 0 },
    py: theme => `${theme.spacing(2.75)} !important`
  }
})

export const titleText = () => ({ display: 'flex', alignItems: 'center' })

export const titleFontSize = () => ({ fontSize: '0.875rem' })

export const salesText = () => ({ fontWeight: 600, fontSize: '0.875rem' })

export const trendNumberBox = () => ({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' })

export const typographyTrendNumber = () => ({ mr: 1.5, fontWeight: 600, fontSize: '0.875rem' })

// ** InquiryByDay css

export const subHeader = () => ({ lineHeight: 1.429 })

export const titleTypography = () => ({ letterSpacing: '0.15px' })

export const cardContentStyle = theme => ({
  '& .apexcharts-canvas .apexcharts-text': { fill: theme.palette.text.secondary }
})

export const boxStyle = () => ({ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' })

export const boxTextPosition = () => ({ display: 'flex', flexDirection: 'column' })

export const typoText = () => ({ mb: 0.75, fontWeight: 600 })

// ** line chart css

export const chartStyle = () => ({
  flexDirection: ['column', 'row'],
  alignItems: ['flex-start', 'center'],
  '& .MuiCardHeader-action': { mb: 0 },
  '& .MuiCardHeader-content': { mb: [2, 0] }
})

// ** AnalyticsOverview css

export const overViewStyle = () => ({ '& .apexcharts-canvas .apexcharts-text': { fontWeight: 600, fontSize: '1rem' } })

export const textStyle = () => ({ display: 'flex', flexWrap: 'wrap', alignItems: 'center' })

export const typoMargin = () => ({ mr: 1.5 })

export const successTypoColor = () => ({ color: 'success.main' })
