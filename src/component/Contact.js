import fb from "../img/facebook-icon.png";
import sc from "../img/snapchat-icon.png";
import twitter from "../img/twitter-icon.png";
import whatsapp from "../img/whatsapp-icon.png";
import insta from "../img/instagram-icon.png";
import linkedin from "../img/linkedin-icon.png";

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container text-center">
                <p className="fs-3 mb-3 h2">FIND US ON SOCIAL MEDIA</p>

                <div className="social">
                    <a href="#"><img src={fb} alt="facebook"></img></a>
                    <a href="#"><img src={insta} alt="instagram"></img></a>
                    <a href="#"><img src={twitter} alt="twitter"></img></a>
                    <a href="#"><img src={whatsapp} alt="whatsapp"></img></a>
                    <a href="#"><img src={linkedin} alt="linkedIn"></img></a>
                    <a href="#"><img src={sc} alt="snapchat"></img></a>
                </div>
            </div>
           

        </section>
    );
}
 
export default Contact;