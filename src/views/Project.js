import Cards from '../components/Cards';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import polling from './../assets/projects/poling_img.png';
import blog_img from './../assets/projects/blog_img.png';

function Project() {
    const cards = [
        {
            project_name: "Tech Blog Portal",
            back: "Card 4 Back",
            image: blog_img,
            content: ``
        },
        {
            project_name: "Real Time Chat Application",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/RealTime-Chat-Frontend/raw/master/screenshots/View.png",
            content: ``
        },
        {
            project_name: "Polling System API",
            back: "Card 2 Back",
            image: polling,
            content: ''
        },
        {
            project_name: "Habit Tracker",
            back: "Card 3 Back",
            image: "https://github.com/Yashaswi-Anand/Habit-Tracker/raw/master/screenshots/habits.png",
            content: `This application that allow to track your habits. Any user register and login this application after that views habit details and track their habits.`
        },
        {
            project_name: "Employee Review System",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/EmployeeReviewSystem/raw/master/screenshots/signup.png",
            content: `This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their peformance for gives some feedbacks.`
        },
        {
            project_name: "Project Management System",
            back: "Card 5 Back",
            image: "https://github.com/Yashaswi-Anand/Project-Management-System/raw/master/screenshots/login2.png",
            content: `This application that allow to manage project and task. Any employee register and login this application after that views project and task details.`
        },
        {
            project_name: "Time2Achieve",
            back: "Card 1 Back",
            image: "https://raw.githubusercontent.com/Yashaswi-Anand/Time2Achieve/master/images/new.png"
        },
    ];
    return (
        <div>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Projects</h1></span>
            </div>
            <div className='card-container'>
                {cards && cards.map((card, index) => (
                    <Cards data={card} key={index} />
                ))}
            </div>

        </div>
    )
}

export default Project