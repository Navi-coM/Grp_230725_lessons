import Count from './components/Count';

export default function App() {
    return (
        <>
            <Count/>
        </>
    )
}

const domContainer = document.querySelector('#count');
const root = ReactDOM.createRoot(domContainer);

root.render(<App />)