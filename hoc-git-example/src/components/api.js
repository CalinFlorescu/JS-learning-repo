import React from 'react'
import axios from 'axios'

const ApiCall = (PassedComponent) => {
    class Api extends React.Component {
        constructor() {
            super();

            this.state = {
                persons: []
            }
        }

        componentDidMount() {
            axios.get(`https://api.github.com/users`).then(res => {
                const persons = res.data;
                this.setState({
                    persons
                });
            });
        }

        render() {
            console.log(this.state.persons);
            return(
                <div>
                    asdsa
                </div>
            );
        }

    }
}

export default ApiCall;

