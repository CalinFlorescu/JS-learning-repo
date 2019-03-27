import React from 'react'
import ApiCall from './components/api'
import Title from './components/title'

class App extends React.Component {

    render() {
        const Hy = ApiCall(Title);
        console.log(Hy);
        return(
            <div>
                <Hy/>
            </div>
        );
    }

}

export default App;
