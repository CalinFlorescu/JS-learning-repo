import React from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core'

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users').then(
            res => {
                const newPersons = res.data;
                this.setState({
                    persons: newPersons,
                    isLoading: false
                })
            }
        )
    }

    render() {
        const firstThree = this.state.persons.splice(0,2);
        return (
            <Grid container sm={12}>
                {this.isLoading ? <p>Loading...</p> : firstThree.map(cur => <Grid item sm> <img src={cur.avatar_url} height={200} width={200}></img></Grid>)}
            </Grid>
        )
    }
}

export default Users;