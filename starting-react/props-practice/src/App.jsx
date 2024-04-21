import Card from "./components/Card";

export default function App() {
    return (
        <div className="App">
            <Card
                img="../src/assets/images/katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="United States"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    );
}
