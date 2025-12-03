const { useState, useEffect } = React;

function Timer() {
    const [seconds, setSeconds] = useState(0);  // hook 

    // seconds = 0
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval);
    }, [])
    return (
        <div сlassName="block">
            Пройшло { seconds } секунд.
        </div>
    )
}


const domContainer = document.querySelector('#count');
const root = ReactDOM.createRoot(domContainer);

root.render(<Timer />)