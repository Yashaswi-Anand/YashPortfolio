import Cards from '../components/Cards';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import polling from './../assets/projects/poling_img.png';

function Project() {
    const cards = [
        {
            project_name: "Employee Review System",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/RealTime-Chat-Frontend/raw/master/screenshots/Online.png",
            content: ``
        },
        {
            project_name: "Time2Achieve",
            back: "Card 1 Back",
            image: "https://raw.githubusercontent.com/Yashaswi-Anand/Time2Achieve/master/images/new.png"
        },
        {
            project_name: "Polling System API",
            back: "Card 2 Back",
            image: polling
        },
        {
            project_name: "Habit Tracker",
            back: "Card 3 Back",
            image: "https://github.com/Yashaswi-Anand/Habit-Tracker/raw/master/screenshots/habits.png"
        },
        {
            project_name: "Employee Review System",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/EmployeeReviewSystem/raw/master/screenshots/signup.png",
            content: `This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their peformance for gives some feedbacks.`
        }
    ];
    return (
        <div>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Projects</h1></span>
            </div>
            <div className='card-container'>
                {cards && cards.map((card, index) => (
                    <Cards data={card} key={index}/>
                ))}
            </div>

        </div>
    )
}

export default Project