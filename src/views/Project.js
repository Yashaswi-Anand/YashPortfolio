import Cards from '../components/Cards';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import polling from './../assets/projects/poling_img.png';
import blog_img from './../assets/projects/blog_img.png';

function Project() {
    const cards = [
        {
            project_name: "Tech Blog Portal",
            back: "Card 4 Back",
            image: blog_img,
            content: `View latest blogs and articles on various technologies. Any user can register and login to this application, after which they can view blog details, create new blogs, and comment on existing blogs.`,
            technologies: `React, Node.js, Express.js, AWS RDS, JWT`,
            github: 'https://github.com/Yashaswi-Anand/Blog-project-frontend',
            live: 'https://thetechkhazana.netlify.app/'
        },
        {
            project_name: "Real Time Chat Application",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/RealTime-Chat-Frontend/raw/master/screenshots/View.png",
            content: `This application allows users to chat in real-time. Users can register, login, and join chat rooms to communicate with others.`,
            technologies: `React, Node.js, Express.js, MongoDB, Socket.io`,
            github: 'https://github.com/Yashaswi-Anand/RealTime-Chat-Frontend',
            live: 'https://realinstachat.netlify.app/login'
        },
        {
            project_name: "Polling System API",
            back: "Card 2 Back",
            image: polling,
            content: `This application allows to create questions and options for voting. Any user can register and login to this application, after which they can create polls, vote on existing polls, and view poll results.`,
            technologies: `Node.js, Express.js, MongoDB`,
            github: 'https://github.com/Yashaswi-Anand/Polling_System_api',
            live: 'https://github.com/Yashaswi-Anand/Polling_System_api'
        },
        {
            project_name: "Habit Tracker",
            back: "Card 3 Back",
            image: "https://github.com/Yashaswi-Anand/Habit-Tracker/raw/master/screenshots/habits.png",
            content: `This application that allow to track your habits. Any user register and login this application after that views habit details and track their habits.`,
            technologies: `React, Node.js, Express.js, MongoDB`,
            github: 'https://github.com/Yashaswi-Anand/Habit-Tracker',
            live: 'https://github.com/Yashaswi-Anand/Habit-Tracker'
        },
        {
            project_name: "Employee Review System",
            back: "Card 4 Back",
            image: "https://github.com/Yashaswi-Anand/EmployeeReviewSystem/raw/master/screenshots/signup.png",
            content: `This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their peformance for gives some feedbacks.`,
            technologies: `React, Node.js, Express.js, MongoDB`,
            github: 'https://github.com/Yashaswi-Anand/EmployeeReviewSystem',
            live: 'https://github.com/Yashaswi-Anand/EmployeeReviewSystem'
        },
        {
            project_name: "Project Management System",
            back: "Card 5 Back",
            image: "https://github.com/Yashaswi-Anand/Project-Management-System/raw/master/screenshots/login2.png",
            content: `This application that allow to manage project and task. Any employee register and login this application after that views project and task details.`,
            technologies: `React, Node.js, Express.js, MongoDB`,
            github: 'https://github.com/Yashaswi-Anand/Project-Management-System',
            live: 'https://github.com/Yashaswi-Anand/Project-Management-System'
        },
        {
            project_name: "Time2Achieve",
            back: "Card 1 Back",
            image: "https://raw.githubusercontent.com/Yashaswi-Anand/Time2Achieve/master/images/new.png",
            content: `View yearly question and answer pdf of Gate, ISRO, IES, SSC, UPSC, and other exams.`,
            technologies: `Android, Java, Firebase`,
            github: 'https://github.com/Yashaswi-Anand/Time2Achieve',
            live: 'https://github.com/Yashaswi-Anand/Time2Achieve'
        },
    ];
    return (
        <div>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: '2.8rem' }} /></span><span><h1>Projects</h1></span>
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