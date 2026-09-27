import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-lg-6 col-sm-12'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <div>
                        <h3>Customer-first always</h3>
                        <p className='text-muted  mb-5'>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div>
                        <h3>No spam or gimmicks</h3>
                        <p className='text-muted mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div>
                        <h3>The Zerodha universe</h3>
                        <p className='text-muted mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h3>Do better with money</h3>
                        <p className='text-muted mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-10'>
                    <img src='media/ecosystem.png' style={{ width: '100%'}} />
                    <div className='text-center'>
                        <a href='' className='mx-4' style={{textDecoration:'none'}}>Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' className='mx-3' style={{textDecoration:'none'}}>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;