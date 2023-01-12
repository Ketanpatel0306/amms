/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { useState, useEffect } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Context and API Imports
import { useDispatch } from 'react-redux'
import { viewStaticPage } from 'src/store/static-page'

// ** Spinner
import Spinner from 'src/@core/components/spinner'

// ** Styles and Styled Components Imports
import * as styles from '@styles-page/static-page/styles'

// Strings Constant
import { strings } from 'src/constants/strings'

const StaticView = id => {
  const dispatch = useDispatch()
  const u_id = id.id
  const [wait, setWait] = useState(true)
  const [staticViewData, setStaticViewData] = useState({})

  useEffect(() => {
    ;(async () => {
      await dispatch(viewStaticPage(u_id)).then(response => {
        const responseData = response.payload.data ?? []
        setStaticViewData(responseData)
        setWait(false)
      })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (wait) {
    return <Spinner />
  } else {
    return (
      <Card>
        <CardHeader
          sx={styles.CardHeaderTitle()}
          title={strings.staticViewTitle}
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Card>
                <CardHeader sx={styles.CardHeaderViewTitle()} title='Title'></CardHeader>
                <CardContent>
                  <Typography sx={styles.Typography()}>
                    <td>{staticViewData.title}</td>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardHeader sx={styles.CardHeaderViewTitle()} title='Description'></CardHeader>
                <CardContent>
                  <Typography sx={styles.Typography()}>
                    <td dangerouslySetInnerHTML={{ __html: staticViewData.details }} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Link href='/static-page' passHref>
                <Button size='large' variant='contained'>
                  {strings.staticViewBackBtn}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

StaticView.acl = {
  action: 'read',
  subject: 'static-page'
}

export async function getServerSideProps(context) {
  const id = context.query.id

  return {
    props: { id }
  }
}

export default StaticView
