import { Tooltip } from "@mui/material"
import { emotion_style } from "../../../../assets/img"

export const EmotionIcon = () => {
    return (
        <Tooltip title='Emotion' arrow>
            <img
                src={emotion_style}
                alt='emotion_style'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}