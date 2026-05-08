import Hero from "../Section/Hero"
import About_wraper from "../Section/About_wraper"
import grid_content from "../Section/grid_content"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Hero />
            <About_wraper />
            <grid_content />
        </div>
    )
}

export default Home
