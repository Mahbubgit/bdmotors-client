import React from 'react';
import './Footer.css';
import copyright from './../../../Images/copyright.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer className="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://www.facebook.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='facebook'
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://twitter.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='twitter'
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://www.google.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='google'
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='instagram'
                        ><i className="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://bd.linkedin.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='linkedin'
                        ><i className="fab fa-linkedin-in"></i
                        ></a>

                        {/* <!-- Github --> */}
                        <a className="btn btn-outline-light btn-floating m-1" 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noreferrer" 
                        role="button"
                        title='github'
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                    <hr />

                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">About BDMOTORS</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores alias sapiente, delectus ratione neque eos, aliquid consectetur possimus, quisquam dolor. Magni eligendi ducimus deserunt vel amet! Sequi doloremque tenetur esse laborum sapiente? Cupiditate alias maxime optio labore enim totam eius hic, impedit error fugiat modi eos ab tenetur iusto.</p>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Link</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="/home" className='text-decoration-none text-white'>Home</a>
                                    </li>
                                    <li>
                                        <a href="/gallery" className='text-decoration-none text-white'>Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/blogs" className='text-decoration-none text-white'>Blogs</a>
                                    </li>
                                    <li>
                                        <a href="/featuredProduct" className='text-decoration-none text-white'>Featured Product</a>
                                    </li>
                                    <li>
                                        <a href="/about" className='text-decoration-none text-white'>About</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Contact</h5>
                                <p>01712552255</p>
                                <h5 className="text-uppercase">Address</h5>
                                <p>Dhaka, Bangladesh</p>
                                <h5 className="text-uppercase">Phone</h5>
                                <p>02668855</p>
                                <h5 className="text-uppercase">Email</h5>
                                <p>bdmotors@gmail.com</p>

                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);" */}
                <div className='text-center p-3 bg-secondary text-white' >
                    <img src={copyright} alt="copyright" width={25} />
                    {year} Copyright -  <span>BDMOTORS</span> - <small>All Right Reserve</small>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;