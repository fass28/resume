import '../../App.css'
import '../../index.css'
import { Item } from './Components'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { List, ListItem } from '@mui/material'

import {
  page_shopify,
  page_inproymel,
  page_pokemon,
  page_todo,
  page_my_resume,
  page_marketplace,
  react_svg,
  java_script_svg,
  type_script_svg,
  tailwind_svg,
  api_svg,
  bootstrap_svg,
  emotion_style,
  graphql,
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
        >
          <Item sx={{ maxWidth: 345 }}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='200'
                  image={page_marketplace}
                  alt='page_pokemon'
                  onClick={() => console.log('click')}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Market-Place
                  </Typography>
                  <List sx={{ display: 'flex' }}>
                    <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                      <img
                        src={react_svg}
                        alt='react_svg'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                      <img
                        src={type_script_svg}
                        alt='java_script_svg'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                      <img
                        src={emotion_style}
                        alt='emotion_style'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                      <img
                        src={graphql}
                        alt='graphql'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                      <img
                        src={api_svg}
                        alt='bootstrap_svg'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card >
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
                    <List sx={{ display: 'flex' }}>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={react_svg}
                          alt='react_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={java_script_svg}
                          alt='java_script_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={tailwind_svg}
                          alt='tailwind_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={api_svg}
                          alt='api_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card >
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
                    image={page_inproymel}
                    alt='page_shopify'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Inproymel
                    </Typography>
                    <List sx={{ display: 'flex' }}>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={react_svg}
                          alt='react_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={java_script_svg}
                          alt='java_script_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={bootstrap_svg}
                          alt='bootstrap_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card>
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
                    <List sx={{ display: 'flex' }}>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={react_svg}
                          alt='react_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={java_script_svg}
                          alt='java_script_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={bootstrap_svg}
                          alt='bootstrap_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card>
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
                    <List sx={{ display: 'flex' }}>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={react_svg}
                          alt='react_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={type_script_svg}
                          alt='java_script_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={emotion_style}
                          alt='emotion_style'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px', objectFit: 'cover' }}>
                        <img
                          src={api_svg}
                          alt='bootstrap_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Item>
          <Item sx={{ maxWidth: 345 }}>
            <Card>
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
                    <List sx={{ display: 'flex' }}>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={react_svg}
                          alt='react_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={java_script_svg}
                          alt='java_script_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={tailwind_svg}
                          alt='tailwind_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                      <ListItem sx={{ height: '60px', width: '60px' }}>
                        <img
                          src={api_svg}
                          alt='api_svg'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </ListItem>
                    </List>
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
