import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { LeftPane } from './LeftPane'
import { RightPane} from './RightPane'
import { MiddlePane } from './MiddlePane'

const style = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        height: '93%'
    }
}

export default props =>
    <Grid container style={{height: "87%"}}>
        <Grid item sm>
            <LeftPane styles={style}/>
        </Grid>
        <Grid item sm>
            <MiddlePane styles={style}/>
        </Grid>
        <Grid item sm>
            <RightPane styles={style}/>
        </Grid>
    </Grid>