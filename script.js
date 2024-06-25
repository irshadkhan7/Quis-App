const quizDB = [
    {
        question: "Q1 : What is tha full form of HTML?",
        a: "Hellow to My Linkden",
        b: "Hey Text Markep Lunguage",
        c: "Hyper Text Makeup Language",
        d: " Hypertext Markup Language",
        ans: "ans1"
    },

{
    question: "Q2 : What is tha full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cascading Style Some",
    d: " Cascading Shart Sum",
    ans: "ans1"

},

{
    question: "Q3 : What is tha full form of HTTP?",
    a: "Hypertext Transfer Point",
    b: "Hey Trust Protocol",
    c: "Hypertext Transfer Portal",
    d: " Hypertext Transfer Protocol",
    ans: "ans4" 
},

{
    question: "Q4 : What is tha full form of JS?",
        a: "JavaScript",
        b: "Javasuperkey",
        c: "JavaSuqr",
        d: " JointScript",
        ans: "ans1"
},


{
    question: "Q5 : What is tha full form of GST?",
        a: "Gaverment service text",
        b: "governer supere time",
        c: "Goverment super text",
        d: " govermet service tool",
        ans: "ans1"
},

{
    question: "Q6 : What is tha full form of ISRO?",
        a: "Indian Sapce Recherch Organization",
        b: "India Sould Root Off",
        c: "Indian Space Rserve Open",
        d: " Indian Space Rechersh OPtimize",
        ans: "ans1"
},

{
    question: "Q7 : What is tha full form of CBI?",
        a: "Central Bound Infracture",
        b: "Centeral Bureao of Investigation",
        c: "Centrel brush investigation",
        d: " Central Bourd Inter",
        ans: "ans2"
},

{
    question: "Q8 : What is tha full form of CPU?",
        a: "Sooon Point Unit",
        b: "Some Print Unit",
        c: "Centerl Processing Unit",
        d: " Centeral pool Unit",
        ans: "ans3"
},

{
    question: "Q9 : What is tha full form of IK?",
        a: "Irshad  Khan",
        b: "Irshad Ali kurish",
        c:  "Irshad kumbali",
        D: "Irshad Khan",
    
        ans: "ans1"
},
{
    question: "Q10 : What is tha full form of RA?",
        a: "Rijvan Anvri",
        b: "Rijvan anshari",
        c: "Rijvan Ali",
        d: " Rijvan Alam",
        ans: "ans3"
},

{
    question: "Q11 : What is tha full form of DA?",
        a: "Dilshad Ali",
        b: "Dilshad anshari",
        c: "Diljle Ali",
        d: " Dk Alam",
        ans: "ans1"
},
{
    question: "Q12 : What is tha full form of MMA?",
        a: "Md Mehfooz Anvri",
        b: "Mohammad Mehfoz  Alam",
        c: "Mahfooz MD Ali",
        d: "Mehfooz Alam Ali",
        ans: "ans2"
},

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {


    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    }); 
return answer;

};

const deselectAll = () => {
 answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () =>  {
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer === quizDB[questionCount].ans){
    score++;

};

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else{
      
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} ✌</h3>

    <button class="btn" onclick="location.reload()"> play again</button> `;
    showScore.classList.remove('scoreArea');

        }
        
});