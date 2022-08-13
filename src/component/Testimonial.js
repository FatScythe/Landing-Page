import user1 from "../img/user1.jpg"
import user2 from "../img/user2.jpg"

const Testimonial = () => {
    return (
        <section id="testimonial" className="my-4">
            <div className="container">
                <h1 className="title position-relative my-5 text-center">WHAT CLIENTS SAY </h1>
                <div className="row justify-content-center ms-1 ps-2">
                    <div className="col-md-5 mb-5">
                        <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus recusandae voluptate? Possimus sed earum architecto, hic saepe exercitationem voluptas.</p>
                        <img src={user1} alt="customers" className="user rounded-circle"></img>
                        <p className="d-inline-block ms-3 name"><b>Claire Dunphy</b><br/> Director at Pritchett Closets</p>
                    </div>
                    <div className="col-md-5 mb-5">
                        <p className="testimony">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus recusandae voluptate? Possimus sed earum architecto, hic saepe exercitationem voluptas.</p>
                        <img src={user2} alt="customers" className="user rounded-circle"></img>
                        <p className="d-inline-block ms-3 name"><b>David Seaman</b><br/> IT Support</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
 
export default Testimonial;