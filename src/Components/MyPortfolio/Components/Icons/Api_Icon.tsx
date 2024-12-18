import { Tooltip } from "@mui/material"
import { api_svg } from "../../../../assets/img"

export const ApiIcon = () => {
    return (
        <Tooltip title='Get-Post' arrow>
            <img
                src={api_svg}
                alt='api_svg'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}