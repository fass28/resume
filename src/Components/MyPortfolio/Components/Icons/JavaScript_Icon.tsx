import { Tooltip } from "@mui/material"
import { java_script_svg } from "../../../../assets/img"

export const JavaScriptIcon = () => {
    return (
        <Tooltip title='JavaScript' arrow>
            <img
                src={java_script_svg}
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