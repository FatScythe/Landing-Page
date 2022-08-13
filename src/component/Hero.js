import play from '../img/play.png';
import hero from '../img/home2.png';
import wave from '../img/wave1.png';

const Hero = () => {
    return (
        <section id="hero" className='text-white pt-4'>
            <div className='container'>
                <div className="row align-items-center p-3">
                    <div className="col-md-6 hero-text text-left mb-3">
                        <h1 className='mb-4 '>Make Full Website</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius, praesentium aspernatur et deserunt accusamus sapiente, esse assumenda id labore recusandae facere ipsum, rem nesciunt voluptas tempora quasi perspiciatis suscipit.</p>
                        <a href="#" className='text-white fs-5 text-decoration-none'><img src={play} alt="play icon" className='me-2'></img>Watch Tutorials</a>
                    </div>
                    <div className="col-md-6 align-self-end hero-img">
                        <img src={hero} alt="Tutor and student" className=" text-center img-fluid"></img>
                    </div>
                </div>
            </div>
            <img src={wave} alt="wave" className="text-center img-fluid wave"></img>
        </section>
    );
}
 
export default Hero;