import { Tooltip } from "@mui/material"
import { graphql } from "../../../../assets/img"

export const GraphqlIcon = () => {
    return (
        <Tooltip title='Graph-ql' arrow>
            <img
                src={graphql}
                alt='graphql'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </Tooltip>
    )
}