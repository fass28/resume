import { Tooltip } from "@mui/material"
import { react_svg } from "../../../../assets/img"

export const ReactIcon = () => {
    return (
        <Tooltip title='React' arrow>
            <img
                src={react_svg}
                alt='react_svg'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}