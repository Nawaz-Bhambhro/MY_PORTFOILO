import '../Style/hero.scss'

const Hero = () => {
    return (
        <section className="hero-wrapper">

            <div className="hero-left">

                <div className='content-wrapper'>
                    <h1>Hello, I’m <br></br> Brooklyn Gilbert</h1>
                    <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                    <button className="primary-btn">Say Hello!</button>
                </div>

   

            </div>

            <div className="hero-right">
                <figure>
                    <img src="https://themewagon.github.io/picto/assets/person-CqOZwXV1.png" alt="Hero Image" />
                </figure>

            </div>

        </section>
    );
};

export default Hero;
