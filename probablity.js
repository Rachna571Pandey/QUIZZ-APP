let questions=[
    {
        id:1,
        question:"  A team of 4 representatives are to be selected from a batch of 5 boys and 6 girls for international seminar. What is the probability that at most 3 boys are present in the team? Also according to rules and regulations no team should be selected consisting of all 4 as girl representatives. ",
        answer:"31/33",
        option:[
            "254/43",
            "221/57",
            "236/22",
            "31/33",
        ]
    },
    {
        id:2,
        question:"A pair of unbiased dice is rolled simultaneously. Find the probability of getting a difference of three.",
        answer:"1/6",
        option:[
            "1/3",
            "1/6",
            "1/36",
            "1/9",
        ]
    },
     {
        id:3,
        question:" 3 dice are rolled thrice having numbers from 1 to 6. Find the probability of getting 1 in any of the dice.",
        answer:"91/216",
        option:[
            "97/216",
            "95/216",
            "93/216",
            "91/216",
        ]
    },
     {
        id:4,
        question:" 3 dice are rolled thrice having numbers from 1 to 6. Find the probability of finding 1 in exactly one of them at a time.",
        answer:"25/72",
        option:[
            "91/216",
            "3/216",
            "1/216",
            "25/72",
        ]
    },
     {
        id:5,
        question:"  A coin is tossed 5 times. What is the probability that at least one toss results in a tail?",
        answer:"",
        option:[
            "1/32",
            "9/32",
            "5/32",
            "31/32",
        ]
    },
     {
        id:6,
        question:"  Two unbiased dice are rolled simultaneously. Find the probability of getting sum greater than 5.",
        answer:"13/18",
        option:[
            "13/18",
            "23/36",
            "7/9",
            "5/9",
        ]
    },
     {
        id:7,
        question:" If 3 coins are tossed simultaneously, what is the probability of getting at least 2 heads? ",
        answer:"1/2",
        option:[
            "1/3",
            "1/2",
            "1/8",
            "7/8",
        ]
    }, 
    {
        id:8,
        question:" All spades and Jacks are removed from a pack of 52 cards and the remaining cards are mixed. One card is drawn from the remaining pack. Find the probability that it is a red king.",
        answer:" 1/18",
        option:[
            "1/16",
            "5/12",
            " 1/18",
            "9/8",
        ]
    },
     {
        id:9,
        question:" A coin is thrown three times. Find the probability of getting at least two head.",
        answer:"1/2",
        option:[
            "2/6",
            "2/7",
            "5/7",
            "1/2",
        ]
    },
     {
        id:10,
        question:" There are 6 boys and 4 girls who have registered themselves on the matrimonial website to get partners. Find the probability of boys who will not get the partner.",
        answer:"1/3",
        option:[
            "2/5",
            "1/3",
            "1/4",
            "2/7",
        ]
    },
]



window.onload=function(){
    show(0);
}



let question_count=0;
let point=0;

function next(){
    let user_answer=document.querySelector("li.option.active").innerHTML;
    
   if(user_answer==questions[question_count].answer){
    //    console.log("wright ans") 
    point=point+1;
    sessionStorage.setItem("points",point);
  
   }
   if(question_count==questions.length-1){
    location.href="end_page.html";
    return;
}
//    else{
//     console.log("wrong ans")
//    }
   
    question_count++;
    show(question_count);
}


let userName=localStorage.getItem("name");

document.getElementById("nameUser").innerHTML=userName;

function prev(){
    if(question_count-1<0){
        return;
    }
    question_count--;
    show(question_count);
}

function show(count){
    let question=document.getElementById("questions");
    question.innerHTML= `
    <h3>Q${question_count+1}${questions[count].question}</h3>
     <ul class="option_group">               
     <li class="option">${questions[count].option[0]}</li>
     <li class="option">${questions[count].option[1]}</li>
     <li class="option">${questions[count].option[2]}</li>
     <li class="option">${questions[count].option[3]}</li>
     </ul>
    `;

    toggleActive();
}



function toggleActive(){
    let option =document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++){
        option[i].onclick=function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }
      
    }
}