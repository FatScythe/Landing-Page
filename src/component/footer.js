import wave from "../img/wave2.png";
import logo from "../img/demo-logo.png";

const Footer = () => {
    return (
        <section id="footer">
            <img src={wave} alt="wave" className="img-fluid wave"></img>
            <div className="container text-white">
                <div className="row ">
                    <div className="col-md-4 p-3">
                        <img src={logo} alt="logo" className="w-50 mb-3"></img>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat minus praesentium dicta nostrum voluptatibus, quia ipsa omnis facilis soluta porro!</p>
                    </div>

                    <div className="col-md-4 p-3">
                        <p><b>CONTACT US</b></p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 fs-4 text-center pt-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                            Admiralty way, Agege, Lagos
                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 fs-4 text-center pt-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
                        </svg>
                            +234 7036573306
                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 fs-4 text-center pt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                        </svg>
                            holadayo28@gmail.com
                        </p>
                    </div>

                    <div className="col-md-4 p-3">
                        <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                        <input
                        type="email"
                        className = "form-control mx-auto mt-2"
                        placeholder = "Your Email"
                        ></input>
                        <button type="button" className="btn btn-primary mt-2">Subscribe</button>
                    </div>
                    <hr className="bg-light"></hr>
                    <p className="text-center mb-3">&copy; Made by FatScythe</p>
                </div>
                
            </div>
        </section>
    );
}
 
export default Footer;