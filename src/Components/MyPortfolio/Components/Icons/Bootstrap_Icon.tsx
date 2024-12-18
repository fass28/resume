import { Tooltip } from "@mui/material"
import { bootstrap_svg } from "../../../../assets/img"

export const BootstrapIcon = () => {
    return (
        <Tooltip title='Bootstrap' arrow>
            <img
                src={bootstrap_svg}
                alt='bootstrap_svg'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}