var questions = [
  {
    question:
      "Html Stands For ______________________________________________________________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

var currentquestion = document.getElementById("currentquestion");
var totalquestion = document.getElementById("totalquestion");
var question = document.getElementById("question");
var displayoption = document.getElementById("displayoption");
var index = 0;
var score = 0;
var submitbtn= document.getElementById("submit").disabled=true
var Result= document.getElementById("result")

function initrender() {
  displayoption.innerHTML = "";
  currentquestion.innerHTML = index + 1;
  totalquestion.innerHTML = questions.length;
  question.innerHTML = questions[index].question;
  

  for (var i = 0; i < questions[index].options.length; i++) {
    displayoption.innerHTML += `<div class="col-12 col-sm-12 col-md-12 col-lg-6 my-1 btn-lg">
    <button onclick='check(questions[index].correctAns , questions[index].options[${i}])' type="button" class=" rounded-pill py-2"> ${questions[index].options[i]}</button></div>`;  
  }
  
}

initrender();

function check(a,b) {
  if (a==b) {
    score++
    console.log(score);
  }
  if(currentquestion.innerHTML !== totalquestion.innerHTML) {
    nextquestion()
  }
  
}


function nextquestion() {
  index++
  initrender()
  if (currentquestion.innerHTML == totalquestion.innerHTML) {
    var submitbtn = document.getElementById("submit")
    submitbtn.disabled = false
    
  }

}

function submit(){
  var parent=document.getElementById("parent")
  parent.style.display="none"
  Result.style.display="block"
  result()
}




var img=document.getElementById("img")
var stat=document.getElementById("status")
var percent=document.getElementById("percent")
var msg =document.getElementById("msg")

function result(){
  var percentage = Math.round(score/questions.length*100) +  "%" + " Score"
  percent.innerHTML= percentage
  if(score >= 3){
    img.innerHTML='<i class="fa-solid fa-trophy"></i>'
    img.style.color="#ffa200"
    stat.innerHTML="Pass"
    msg.innerHTML="Congrats!"
    percent.style.color="green"

  }
 
  
  else{
    img.innerHTML='<i class="fa-solid fa-heart-crack"></i>'
    img.style.color="red"
    stat.innerHTML ="Fail"
    msg.innerHTML="Sorry"
    percent.style.color="red"
  }

}
