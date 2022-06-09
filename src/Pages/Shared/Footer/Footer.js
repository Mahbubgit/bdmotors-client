import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            {/* <!-- Footer --> */}
            <footer class="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div class="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>

                        {/* <!-- Github --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                    <hr />

                    {/* <!-- Section: Links --> */}
                    <section class="">
                        {/* <!--Grid row--> */}
                        <div class="row">

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">About BDMOTORS</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores alias sapiente, delectus ratione neque eos, aliquid consectetur possimus, quisquam dolor. Magni eligendi ducimus deserunt vel amet! Sequi doloremque tenetur esse laborum sapiente? Cupiditate alias maxime optio labore enim totam eius hic, impedit error fugiat modi eos ab tenetur iusto.</p>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Our Collections</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="/home" class="text-white">Home</a>
                                    </li>
                                    <li>
                                        <a href="/gallery" class="text-white">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/blogs" class="text-white">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="/featuredProduct" class="text-white">Featured Product</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Contact</h5>
                                <p>01712552255</p>
                                <h5 class="text-uppercase">Address</h5>
                                <p>Dhaka, Bangladesh</p>
                                <h5 class="text-uppercase">Phone</h5>
                                <p>02668855</p>
                                <h5 class="text-uppercase">Email</h5>
                                <p>bdmotors@gmail.com</p>

                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);" */}
                <div className='text-center p-3 bg-secondary text-white' >
                    © {year} Copyright -
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;