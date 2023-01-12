// ** React Imports
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import FormHelperText from '@mui/material/FormHelperText'
import { useForm, Controller } from 'react-hook-form'
import { Button, CardContent, CardHeader, FormControl, TextField } from '@mui/material'

// Import Sun Editor's CSS File
import 'suneditor/dist/css/suneditor.min.css'

// ** Spinner
import Spinner from 'src/@core/components/spinner'

// ** Context and API Imports
import { viewStaticPage, updateStaticPage } from 'src/store/static-page'
import { useDispatch } from 'react-redux'

// Strings Constant
import { strings } from 'src/constants/strings'
import { route } from 'src/constants/route'

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false
})

const StaticEdit = id => {
  const dispatch = useDispatch()
  const [wait, setWait] = useState(true)
  const u_id = id.id

  const defaultValues = {
    title: '',
    details: '',
    slug: ''
  }
  useEffect(() => {
    ;(async () => {
      await dispatch(viewStaticPage(u_id)).then(response => {
        const responseData = response?.payload?.data ?? []
        setValue('title', responseData.title)
        setValue('details', responseData.details)
        setValue('slug', responseData.slug)
        setWait(false)
      })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ** Hooks
  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues })

  const router = useRouter()

  const onSubmit = async data => {
    const body = { data: data, u_id: u_id }
    setWait(true)
    await dispatch(updateStaticPage(body))
    setWait(false)
    router.push(route.staticPageEditRoute)
  }

  if (wait) {
    return <Spinner />
  } else {
    return (
      <Card>
        <CardHeader title={strings.staticEditTitle} titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Controller
                    name={strings.staticEditName}
                    control={control}
                    rules={{
                      required: strings.staticEditNameRules
                    }}
                    render={({ field: { value, onChange } }) => (
                      <SunEditor defaultValue={value} height='200px' onChange={onChange} />
                    )}
                  />
                  {errors.details && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-discount-price'>
                      {errors.details?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name={strings.staticEditNameTitle}
                    control={control}
                    rules={{
                      required: strings.staticEditNameTitleRules
                    }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label={strings.staticEditNameTitleLabel}
                        autoComplete='off'
                        onKeyUp={() => {
                          trigger('title')
                        }}
                        onChange={onChange}
                        placeholder={strings.staticEditNameTitlePlaceHolder}
                        error={Boolean(errors.title)}
                      />
                    )}
                  />
                  {errors.title && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                      {errors.title?.message}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl fullWidth>
                  <Controller
                    name={strings.staticEditSlugTitle}
                    control={control}
                    rules={{
                      required: strings.staticEditSlugTitleRules
                    }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label={strings.staticEditSlugTitleLabel}
                        sx={{ marginTop: '20px' }}
                        autoComplete='off'
                        onKeyUp={() => {
                          trigger('slug')
                        }}
                        onChange={onChange}
                        placeholder={strings.staticEditSlugTitlePlaceholder}
                        error={Boolean(errors.slug)}
                      />
                    )}
                  />
                  {errors.slug && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-name'>
                      {errors.slug?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button size='large' type='submit' variant='contained' color='success' sx={{ mr: 4 }}>
                  {strings.submit}
                </Button>

                <Link href='/static-page/' passHref>
                  <Button size='large' variant='contained' color='error'>
                    {strings.staticEditCancelBtn}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    )
  }
}

StaticEdit.acl = {
  action: 'read',
  subject: 'static-page'
}

export async function getServerSideProps(context) {
  const id = context.query.id

  return {
    props: { id }
  }
}

export default StaticEdit
