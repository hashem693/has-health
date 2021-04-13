import React from 'react';
import Blog1 from '../assets/b1.jpg';
import Blog2 from '../assets/b2.jpg';
import Blog3 from '../assets/b3.jpg';
import Blog4 from '../assets/b4.jpg';
import Blog5 from '../assets/b5.jpg';
import Blog6 from '../assets/b6.jpg';
import Blog7 from '../assets/b7.jpg';
import Blog8 from '../assets/b8.jpg';

function Blog() {
    return (
        <section>
            <div className="Blog pb-5 container">
                <div className="Blog__header text-center py-3 mt-5">
                    <h2>Our Blog</h2>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog1} alt=""/>
                            <div className="Blog__item__Caption  position-absolute text-center w-100 py-3">
                                Critical Care
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog2} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Graduate Medical Education
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog3} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Neuroscience
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog4} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Orthopaedic Services
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog5} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Primary Care
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                       <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog6} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Surgery
                            </div>
                       </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog7} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Urgent Care
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="Blog__item position-relative">
                            <img className="img-fluid w-100" src={Blog8} alt=""/>
                            <div className="Blog__item__Caption position-absolute text-center w-100 py-3">
                                Trauma Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Blog
