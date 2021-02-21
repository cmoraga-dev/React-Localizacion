import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './LocationDisplay'

class App extends React.Component {


    state = {latitude:'', errorMsg:''};

    componentDidMount (){

        //llamada asíncrona
        this.getLatitude();
        console.log('componentdidmount at '+ new Date().getHours() + ':'+new Date().getSeconds()+':'+new Date().getMilliseconds());
    }

    componentDidUpdate (){

        console.log('componentdidupdate at '+ new Date().getHours() + ':'+new Date().getSeconds()+':'+new Date().getMilliseconds());
    }
    
    render() {
    

        if (this.state.latitude && !this.state.errorMsg){
            return <div> <LocationDisplay latitude ={this.state.latitude} /> </div>
        }else if (!this.state.latitude && this.state.errorMsg){
            console.log('Error: ' + this.state.errorMsg);
            return <div>  ¡Oops! tenemos un pequeño error.</div>
        }else {
            return <div>cargando!</div>
        }
        
    }

    getLatitude (){
    
        /*argumentos:
        * 1er call back, llamada con éxito
        * 2do callback, llamada con error
        */
       window.navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({latitude:position.coords.latitude})
        },
        (error) => {
            this.setState({errorMsg:error.message})
        }
        );
    }

}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)