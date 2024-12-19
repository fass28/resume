import '../../App.css'
import '../../index.css'
import { Item } from './Components'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { ReactIcon, TypeScriptIcon, EmotionIcon, GraphqlIcon, ApiIcon, TailwindIcon, BootstrapIcon, JavaScriptIcon } from './Components/Icons'
import { ListItemIcon, ListIcon } from './MyPortolio'

import {
  page_shopify,
  page_inproymel,
  page_pokemon,
  page_todo,
  page_my_resume,
  page_marketplace,
} from '../../assets/img/'
import { Link } from '@mui/material'

export const MyPortfolio = () => {
  return (
    <section className=' section bg-custom-gray' id='portfolio'>
      <div className='container'>
        <h1 className='mb-5 '>
          <span className='text-danger'>My</span> Portfolio
        </h1>
        <Grid
          container
          columns={{ xs: 2, sm: 12, lg: 4, }}
          gap={3}
          justifyContent={{ xs: 'center', sm: 'center', lg: 'center' }}
        >
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }} >
              <CardActionArea>
                <Link
                  href=''
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    width='200'
                    image={page_marketplace}
                    alt='page_marketplace'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Market-Place
                    </Typography>
                    <ListIcon>
                      <ListItemIcon >
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <TypeScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <EmotionIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <GraphqlIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <ApiIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <Link
                  href='https://inproymel.com/'
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={page_inproymel}
                    alt='page_shopify'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Inproymel
                    </Typography>
                    <ListIcon>
                      <ListItemIcon >
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <JavaScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <BootstrapIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <Link
                  href='https://shopfass.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={page_shopify}
                    alt='page_shopify'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Shopi
                    </Typography>
                    <ListIcon>
                      <ListItemIcon>
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <JavaScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <TailwindIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <ApiIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <Link
                  href=''
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={page_pokemon}
                    alt='page_pokemon'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Pokemon Game
                    </Typography>
                    <ListIcon>
                      <ListItemIcon>
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <JavaScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <BootstrapIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <Link
                  href='https://freddy-resume.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={page_my_resume}
                    alt='page_pokemon'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      My Resume
                    </Typography>
                    <ListIcon>
                      <ListItemIcon>
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <TypeScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon>
                        <EmotionIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card sx={{ width: 300 }}>
              <CardActionArea>
                <Link
                  href='https://todo-app-react-axios.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                  underline='none'
                  sx={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <CardMedia
                    component='img'
                    height='200'
                    image={page_todo}
                    alt='page_todo'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Todo App
                    </Typography>
                    <ListIcon>
                      <ListItemIcon >
                        <ReactIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <JavaScriptIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <TailwindIcon />
                      </ListItemIcon>
                      <ListItemIcon >
                        <ApiIcon />
                      </ListItemIcon>
                    </ListIcon>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </div>
    </section>
  )
}
