import Hero from "../Section/Hero"
import About_wraper from "../Section/About_wraper"
import Work_process from "../Section/Work_process"
import Portfolio_cards from "../Section/Portfolio_cards"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Hero />
            <About_wraper />
            <Work_process />
        </div>
    )
}

export default Home
