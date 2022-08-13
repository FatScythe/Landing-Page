import network from "../img/network.png"

const About = () => {
    return (
        <section id="about" className="my-5">
            <div className="container">
                <h1 className="title position-relative my-5 text-center">WHY CHOOSE US</h1>
                <div className="row">
                   <div className="col-md-6">
                        <p className=" h1 fs-2 my-3">Why we're different?</p>
                        <ul className="ms-2">
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                            <li className="my-2">Lorem ipsum dolor sit amet.</li>
                        </ul>
                   </div>
                   <div className="col-md-6">
                        <img src={network} alt="networking" className="img-fluid"></img>
                   </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;