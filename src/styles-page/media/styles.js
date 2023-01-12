export const Grid = () => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingLeft: '10px',
  paddingRight: '5px',
  paddingBottom: '8px'
})

export const Card = () => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  paddingBottom: '5px'
})

export const CardContent = () => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  pt: '0',
  margin: '0px 10px 10px 10px',
  maxWidth: '210px',
  minWidth: '210px',
  border: '1px solid #282A42',
  borderRadius: '10px',
  cursor: 'pointer'
})

export const Icon = () => ({
  cursor: 'pointer',
  width: '100px',
  height: '100px',
  alignSelf: 'center',
  justifySelf: 'center'
})

export const Name = () => ({ textTransform: 'capitalize', textAlign: 'center' })

export const AddMedia = () => ({
  marginLeft: '10px'
})

export const ListButtonDiv = () => ({
  display: 'flex',
  justifyContent: 'space-between'
})

export const ButtonDiv = () => ({
  padding: '1.25rem'
})

export const GridId = () => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '5px',
  paddingLeft: '10px',
  cursor: 'pointer'
})

export const ImageId = () => ({ width: '150px', height: '150px', borderRadius: '10px' })

export const CardContentId = () => ({
  padding: '0px',
  border: '1px solid #696969',
  borderRadius: '10px',
  margin: '0px 10px 10px 10px'
})

export const CardContentNoImage = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const SpanId = () => ({
  position: 'absolute',
  left: '6%',
  bottom: '6%',
  width: '88%',
  backgroundColor: 'black',
  textAlign: 'center',
  color: 'white',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px'
})

export const DivId = () => ({
  position: 'relative',
  paddingBottom: 0
})

export const CheckboxId = item => ({
  position: 'absolute',
  right: '0px',
  top: '-11px',
  visibility: item === true ? 'visible' : 'hidden'
})

export const BoxAdd = () => ({
  display: 'flex',
  flexWrap: 'warp',
  flexDirection: 'column'
})

export const BoxAddSecond = () => ({
  position: 'relative',
  marginRight: '12px'
})

export const DivAdd = () => ({
  display: 'flex',
  overflowX: 'auto',
  height: '180px',
  width: '100%',
  marginBottom: '10px',
  paddingTop: '8px'
})

export const ImgAdd = () => ({
  marginTop: '-7px',
  width: '15px',
  height: '15px',
  cursor: 'pointer',
  position: 'absolute',
  marginLeft: '-2px',
  filter: 'inherit'
})

export const ImgStyledAddSecond = () => ({
  marginLeft: '0px'
})

export const InputSecondAdd = () => ({
  display: 'none'
})

export const ResetButtonStyledAdd = () => ({
  ml: 2,
  mt: 0
})

export const TypographyAdd = () => ({
  mt: 4
})

export const FormHelperTextAdd = () => ({
  color: 'error.main',
  marginLeft: '0'
})

export const ButtonAdd = () => ({
  mr: 4
})

export const ImgStyledAdd = item => ({
  width: '150px',
  height: '150px',
  marginRight: '-8px',
  border: item?.fileSize === true ? '3px solid #00000030' : '3px solid #FF4D49'
})
