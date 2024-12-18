import { Tooltip } from "@mui/material"
import { tailwind_svg } from "../../../../assets/img"

export const TailwindIcon = () => {
    return (
        <Tooltip title='Tailwind' arrow>
            <img
                src={tailwind_svg}
                alt='tailwind_svg'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}