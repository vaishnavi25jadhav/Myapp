import React from 'react';

import { Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/virus.webp'

class App extends React.Component {
    state = {
        data: {},
        country:'',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country});
        
    }

    render(){
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                <Cards data={data} />
                
                
            </div>
        )
    }
}

export default App;