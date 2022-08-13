import services1 from "../img/service1.png";
import services2 from "../img/service2.png";
import services3 from "../img/service3.png";

const Services = () => {
    return (
        <section id="services">
            <div className="container text-center">
                <h1 className="my-5 position-relative title">WHAT WE DO?</h1>
                
                <div className="row m-4">
                    <div className="col-md-4 my-2">
                        <img src={services1} alt="services" className="w-25"></img>
                        <h2 className="my-4">Growth Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi quam eligendi commodi, dolorem nihil nemo neque culpa corporis odit.</p>
                    </div>
                    <div className="col-md-4 my-2">
                    <img src={services2} alt="services" className="w-25"></img>
                        <h2 className="my-4">Online Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi quam eligendi commodi, dolorem nihil nemo neque culpa corporis odit.</p>
                    </div>
                    <div className="col-md-4 my-2">
                    <img src={services3} alt="services" className="w-25"></img>
                        <h2 className="my-4">Animated Ads</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi quam eligendi commodi, dolorem nihil nemo neque culpa corporis odit.</p>
                    </div>
                </div>
                <button className="btn btn-primary">All Service</button>

            </div>
        </section>
    );
}
 
export default Services;