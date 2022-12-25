let questions=[
    {
        id:1,
        question:" Mannu can do a piece of work in 9 days while, Naina can do a piece of work in 5 days, The wage of full work is Rs. 420, If they both work together to complete the work then the earnings of mannu is?",
        answer:"150",
        option:[
            "300",
            "150",
            "450",
            "250",
        ]
    },
    {
        id:2,
        question:" A and B can do a job together in 10 days. A is 5/3 times as efficient as B. The same job can be done by A alone in how many days?",
        answer:"16",
        option:[
            "22",
            "23",
            "16",
            "25",
        ]
    },
    {
        id:3,
        question:" A completed a work in 24 days and B completed the same work in 30 days. They started together and worked for 12 days, and after 12 days A left the work and B do the remaining work alone. Then find the number of days to complete the remaining work.",
        answer:"3 days",
        option:[
            "3 days",
            "6 days",
            "8 days",
            "9 days",
        ]
    },
    {
        id:4,
        question:" The ratio of time taken by A, B and C to complete a work alone is 4 ∶ 6 ∶ 3. If they together complete a work in 8 days, then in how many days A will complete 3/4th of the work?",
        answer:"18 days",
        option:[
            "9 days",
            "18 days",
            "27 days",
            "14 days",
        ]
    },
    {
        id:5,
        question:" Raktim can complete 7/16 part of a work in 21 days, then he complete the remaining with the help of Puja in 18 days. How many days will be needed to complete the total work by Raktim and Puja together?",
        answer:"32 days",
        option:[
            "70 days",
            "32 days",
            "24 days",
            "48 days",
        ]
    },
    {
        id:6,
        question:" Samya and Sankha can do a work in 15, and 30 days respectively working 5 hours a day. If they works 10 hours per day, in what time would they complete it together?",
        answer:"5 days",
        option:[
            "3 days",
            "5 days",
            "7 days",
            "15 days",
        ]
    },
    {
        id:7,
        question:" 10 men can do a work in 48 days. If the efficiency ratio of men and women is 3 ∶ 2. Finds how many days it will take 20 women to finish the same work?",
        answer:"36 days",
        option:[
            "40 days",
            "30 days",
            "45 days",
            "36 days",
        ]
    },
    {
        id:8,
        question:" A alone can complete the work in 12 days and B alone can complete the work in 16 days. They both work for 5 days then left the work. The remaining work is completed by C in 6.5 days. In what time A, B, and C can complete 3/4th of the work?",
        answer:"4 days",
        option:[
            "7 days",
            "2 days",
            "4 days",
            "8 days",
        ]
    },
    {
        id:9,
        question:" If 6 men working 12 hours a day can construct a rectangular room of measurement 4m × 3m × 2m in 4 days, how many men will be required to construct a rectangular room of measurement 5m × 3m × 1m by working 5 hours a day in 3 days?",
        answer:"12",
        option:[
            "12",
            "13",
            "14",
            "16",
        ]
    },
    {
        id:10,
        question:" A and B together can complete a piece of work in 40 days, B and C can do it in 60 days and C and A can do it in 30 days. A, B, and C together can complete half of the actual work in-",
        answer:"40/3 days",
        option:[
            "49/3 days",
            "10/3 days",
            "40/3 days",
            "20/3 days",
        ]
    },

]


window.onload=function(){
    show(0);
}


let userName=localStorage.getItem("name");

document.getElementById("nameUser").innerHTML=userName;


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