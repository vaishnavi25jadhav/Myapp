"use strict"
import React from 'react';

class Symptoms extends React.Component{
    render(){
      
        return(
            <div>
                <section id="opportunities" class="section-spacer section-opp">
                    <div class="container">
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
                                    <img src="src\images\symptoms\breath.png" class="img-fluid" alt="Robotic illustration of how many different things it can do" width="200" height="50%" />
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
                                 <img data-src="images/assets/technologies/fever.png" class="img-fluid" alt="Robotic illustration of how many different things it can do"
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
                                 <img data-src="images/assets/technologies/breath.png" class="img-fluid" alt="Robotic illustration of how many different things it can do"
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
                                 <img data-src="images/assets/technologies/cough.png" class="img-fluid" alt="Robotic illustration of how many different things it can do"
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









            </div>
        );
    }
}
export default Symptoms;