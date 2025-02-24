import AdventureExperience from "../components/AdventureExperience";
import Banner from "../components/Banner";
import BestDeal from "../components/BestDeal";
import DestinationCarousel from "../components/DestinationCarousel";

const Home = () => {
    document.title = 'Home'

    return (
        <div>
            <header className="my-5">
                {/* banner */}
                <Banner/>
            </header>

            <main>
                {/* adventure experience section */}
                <section className="my-20">
                    <h2 className="text-center text-4xl font-bold mb-14">Adventure Experience</h2>
                    <AdventureExperience/>
                </section>

                {/* destination carousel */}
                <section>
                    <DestinationCarousel/>
                </section>

                {/* best deals */}
                <section className="my-20">
                    <BestDeal/>
                </section>
            </main>
            
        </div>
    );
};

export default Home;