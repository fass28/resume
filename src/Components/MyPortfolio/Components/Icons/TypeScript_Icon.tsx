import { Tooltip } from "@mui/material"
import { type_script_svg } from "../../../../assets/img"

export const TypeScriptIcon = () => {
    return (
        <Tooltip title='TypeScript' arrow>
            <img
                src={type_script_svg}
                alt='type_script_svg'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}