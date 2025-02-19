import AdventureExperience from "../components/AdventureExperience";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <div>
            <header className="my-5">
                {/* banner */}
                <Banner/>
            </header>

            <main>
                {/* adventure experience section */}
                <section className="my-20">
                    <h2 className="text-center text-4xl font-bold mb-10">Adventure Experience</h2>
                    <AdventureExperience/>
                </section>
            </main>
        </div>
    );
};

export default Home;