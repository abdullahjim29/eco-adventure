const BestDeal = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div id='best-deal' className='bg-cover bg-center py-10 md:py-24 space-y-5 rounded-2xl'>
            <h2 className="text-2xl md:text-5xl font-bold text-center text-white">Get Best Deals</h2>
            <p className='text-center text-gray-200 w-11/12 mx-auto'>Sign up to receive information about our special offers and deals</p>
            <div className='text-center space-x-5 w-10/12 md:w-5/12 mx-auto flex flex-col md:flex-row gap-4'>
            <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered border-white w-full bg-transparent text-white" />
            <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered border-white w-full bg-transparent text-white"/>
            </div>
            <div className="text-center w-10/12 md:w-5/12 mx-auto"><button className="btn btn-primary text-white w-full">Subscribe</button></div>
            </div>

        </div>
    );
};

export default BestDeal;