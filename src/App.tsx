
import './App.css'
import MyCard from "./components/MyCard/MyCard.tsx";

const App = () => {
    return (
        <div className="playingCards faceImages">
            <MyCard rank={''} suit=''/>
        </div>
    )
};

export default App
