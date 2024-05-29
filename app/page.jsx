import Hero from '@components/Hero';
import ThreeStepBlocks from '@components/ThreeStepBlocks';
import CourseLaunchBlocks from '@components/CourseLaunchBlocks';
import HomePageContent from '@components/HomePageContent';

const Home = () => (
    <div>
        <div className='object-cover'>
        <Hero heading='Southwest Florida | Jet Ski Rentals' message='Where there are open waters, there is Liquid Freedom!' />
        </div>


        <section className="w-full flex-center flex-col">
            <h1 className="text-center mt-5 text-5xl leading-[1.15] text-black sm:text-6xl">
                How it Works?
                <br className="max-sm:hidden" />
                <span className="head_text text-center">Just 3 Easy Steps</span>
            </h1>
            <p className="desc mt-5 text-center">
                Liquid Freedom is a family-owned mobile jet ski rental company, 
                that allows you to rent jet skis with the click of a button, 
                and have them delivered to an arrary of Southwest Florida boat 
                launch locations of your desire!
            </p>
        </section>

        <div>
            <ThreeStepBlocks />
        </div>

        <div className='w-full bg-cyan-900'>
            <CourseLaunchBlocks />
        </div>

        <div>
            <HomePageContent />
        </div>

    </div>
  );

export default Home