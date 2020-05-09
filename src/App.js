import React from 'react';

import { Cards, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/virus.webp'
import Footer from './components/footer';
import headache  from './images/symptoms/headache.png';
import cough  from './images/symptoms/cough.png';
import fever  from './images/symptoms/fever.png';
import breath  from './images/symptoms/breath.png';
import fir from './images/symptoms/01.png';
import mask from './images/symptoms/mask.png';
import so from './images/symptoms/socialdistancing.png';
import Header from './components/header';

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
                <Header />
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                <Cards data={data} />

                
                
                
                <section id="opportunities" class="section-spacer section-opp">
                    <div class="container">

                        <h1><center><b> COVID-19</b></center></h1>
                        <header class="section-header text-center">
                            <h2 class="section-title-custom wow fadeInUp">Symptoms</h2>
                        </header>
                        <center>
                            <p>These symptoms may appear 2-14 days after exposure (based on the incubation period of MERS-CoV viruses).
                                </p>
                        </center>
                        
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="">
                                <div class="card-body wow fadeInUp">
                                    <ul>
                                        <li>Headache :
                                <center>
                                    <img src={headache} class="img-fluid" alt="Robotic illustration of how many different things it can do" width="200" height="50%" />
                                </center>
                                
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="">
                        <div class="card-body wow fadeInUp">
                            <ul>
                                <li>Fever :
                                <center>
                                 <img src={fever} class="img-fluid" alt="Robotic illustration of how many different things it can do"
                                 width="200" height="50%" />
                                 </center>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="">
                        <div class="card-body wow fadeInUp">
                            <ul>
                                <li>Shortness of breath :
                                <center>
                                 <img src={breath} class="img-fluid" alt="Robotic illustration of how many different things it can do"
                                 width="200" height="50%" />
                                 </center>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="">
                        <div class="card-body wow fadeInUp">
                            <ul>
                                <li>Cough :
                                <center>
                                 <img src={cough} class="img-fluid" alt="Robotic illustration of how many different things it can do"
                                 width="200" height="50%"/>
                                 </center>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>





    <section id="technologies" class="section-spacer">
        
        <div class="container">
            <header class="section-header text-center">
                <h2 class="section-title wow fadeInUp">How to Prevent Yourself</h2>
                <p class="section-subtitle">You need to follow the below given tips to protect yourself from Corona Virus.</p>
                <br/>
            </header>
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="feature-list-image">
                        <img src={fir} class="img-fluid" alt="Official android logo"
                            width="200" height="50%"/>
                    </div>
                </div>
                <div class="col-sm-5 ml-auto wow fadeInUp">
                    <div class="feature-list-wrapper">
                        <div class="content-header">
                            <h2 class="content-title">Wash Your Hand Regularly</h2>
                            <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for atleast 20 seconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-spacer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="feature-list-image">
                        <img src={so} alt="Developer building a progressive web app"
                            class="img-fluid"  width="200" height="50%"/>
                    </div>
                </div>
            </div>
            <div class="col-sm-5 ml-auto wow fadeInUp">
                    <div class="feature-list-wrapper">
                        <div class="content-header">
                            <h2 class="content-title">Maintain Social Distancing</h2>
                            <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
                            </p>
                        </div>
                    </div>
                </div>
                
        </div>
    </section>
    <section id="hip" class="section-spacer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <div class="feature-list-image">
                        <img src={mask} class="img-fluid" alt="Illustration of data uploading to the cloud"
                            width="200" height="50%"/>
                    </div>
                </div>
                <div class="col-sm-5 ml-auto wow fadeInUp">
                    <div class="feature-list-wrapper">
                        <div class="content-header">
                            <h2 class="content-title">Wear Mask</h2>
                            <p>A mask helps to capture some of an ill person’s cough particles that might otherwise spread to other people. It is very useful to stop the spreading of Corona Virus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    -----------------------------------------------------------------------------------------------------------------------------------
                

    <Footer />





                
            </div>
        )
    }
}

export default App;