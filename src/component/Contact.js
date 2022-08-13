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
                    <img src={fb} alt="facebook"></img>
                    <img src={insta} alt="instagram"></img>
                    <img src={twitter} alt="twitter"></img>
                    <img src={whatsapp} alt="whatsapp"></img>
                    <img src={linkedin} alt="linkedIn"></img>
                    <img src={sc} alt="snapchat"></img>
                </div>
            </div>
           

        </section>
    );
}
 
export default Contact;