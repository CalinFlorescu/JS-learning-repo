import React from 'react'
import {Tabs, Paper} from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { MiddlePane } from '../Exerciser/MiddlePane'

const style = {
    Paper: {
        backgroundColor: 'secondary',
        height: '20%'
    }
}

export default props =>
    <Router>
        <Paper style={{backgroundColor: '#00829A'}}>
            <Tabs
                value={0}
                indicatorColor="black"
                textColor="yellow"
                centered
            >
                <Link to='/leftpane'><Tab label="Left pane" /></Link>
                <Link to='/middlepane'><Tab label="Middle pane" /></Link>
                <Link to='/rightpane'><Tab label="Right pane" /></Link>
            </Tabs>
        </Paper>
    </Router>