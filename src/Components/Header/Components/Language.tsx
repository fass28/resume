import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import { useParams } from 'react-router-dom'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Avatar from '@mui/material/Avatar'
import { usa_lng, esp_lng } from '../../../assets/img'
import { useState } from 'react'

type LanguageProps = {
  handleRedirect: (lng: string) => void
}

export const Language: React.FC<LanguageProps> = ({ handleRedirect }) => {
  const { lang } = useParams()
  const [lng, setLng] = useState(lang ? lang : 'en-USA')

  const handleLng = (
    _event: React.MouseEvent<HTMLElement>,
    newLng: string | null
  ) => {
    if (newLng) {
      setLng(newLng)
      handleRedirect(newLng)
    }
  }

  return (
    <Stack direction='row' spacing={2}>
      <ToggleButtonGroup
        exclusive
        value={lng}
        onChange={handleLng}
        aria-label='language'
        sx={{ height: '40px', width: '40px' }}
      >
        <ToggleButton
          value='en-USA'
          aria-label='en-USA'
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'lightgreen',
              color: 'white',
              '&:hover': {
                backgroundColor: 'green',
              },
            },
          }}
        >
          <Avatar alt='en-USA' src={usa_lng} />
        </ToggleButton>
        <ToggleButton
          value='es-PE'
          aria-label='es-PE'
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'lightgreen',
              color: 'white',
              '&:hover': {
                backgroundColor: 'green',
              },
            },
          }}
        >
          <Avatar alt='es-PE' src={esp_lng} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}
