import React from 'react'
import {Paper, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from '@material-ui/core'
import Users from './GitUsersApi'

export const LeftPane = props =>
    <Paper style={props.styles.Paper}>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"/></svg>}>
                <Typography>Suricataa!!</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <img src='http://blog.alexolivan.com/content/images/2018/10/suricata.jpg' height='100%' width='100%'></img>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"/></svg>}>
                <Typography>Some latin text</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"/></svg>}>
                <Typography>Users Profiles</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Users />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </Paper>