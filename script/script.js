// get the containers
const cards= document.getElementById("cards");
const interview= document.getElementById("interview");
const rejected= document.getElementById("rejected");

// toggle-funtionality
function showOnly(id, btnName) {
    
    // 1- hide everything
    cards.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    // 2- show exact id element
    const selected= document.getElementById(id);
    selected.classList.remove("hidden");
    
    // btn-functionality

    const allBtn= document.getElementById("btn-all");
    const interviewBtn= document.getElementById("btn-interview");
    const rejectedBtn= document.getElementById("btn-rejected");
    
    // 1- hide first
    allBtn.classList.remove("btn-primary");
    interviewBtn.classList.remove("btn-primary");
    rejectedBtn.classList.remove("btn-primary");

    // 2- add style
    if(btnName == "btn-all"){
        allBtn.classList.add("btn", "btn-primary");
        status.innerText = ` `;
    }else if(btnName == "btn-interview"){
        interviewBtn.classList.add("btn", "btn-primary");
        status.innerText = `${interview.querySelectorAll(".job-card").length} of`;
    }else{
        rejectedBtn.classList.add("btn", "btn-primary");
        status.innerText = `${rejected.querySelectorAll(".job-card").length} of`;
    }

}

// Update card status
const countAll= document.getElementById("count-all");
const countInterview= document.getElementById("count-interview");
const countRejected= document.getElementById("count-rejected");
const status = document.getElementById("status");
const cardCount = document.getElementById("cardCount");


// Send cards
const noJobAll = document.getElementById("no-job-all");
const noJobInt = document.getElementById("no-job-int");
const noJobRej = document.getElementById("no-job-rej");


document.getElementById("cards-container").addEventListener('click', function(event){
    

    const targetElement = event.target;
    const card = targetElement.closest(".card");
    const parent = card.parentNode;
    const activeStat = card.querySelector(".active-stat");

    activeStat.classList.remove("bg-slate-300", "text-green-500", "bg-green-100",  "border-green-500", "text-red-500", "bg-red-100", "border-red-500");

    if(targetElement.closest(".interview")) {

        activeStat.innerText = "Interview";
        activeStat.classList.add("text-green-500",  "border-green-500", "bg-green-100", "border");
        
        interview.appendChild(card);
        UpdateState();
    }else if(targetElement.closest(".rejected")) {
        // console.log("rejected");
        activeStat.innerText = "Rejected";
        activeStat.classList.add("text-red-500",  "border-red-500", "bg-red-100", "border");
        
        rejected.appendChild(card);
        UpdateState();
    }else if(targetElement.closest(".delete")) {
        console.log("delete");
        parent.removeChild(card);
        UpdateState();
    
    } 
    
    // job count status 
    cardCount.innerText = document.querySelectorAll(".job-card").length;

})


// update card status
function UpdateState(){

// Set value
countAll.innerText = document.querySelectorAll(".job-card").length; 
countInterview.innerText = interview.querySelectorAll(".job-card").length;
countRejected.innerText = rejected.querySelectorAll(".job-card").length;

noJobMessage(cards, noJobAll);
noJobMessage(interview, noJobInt);
noJobMessage(rejected, noJobRej);

cardCount.innerText = document.querySelectorAll(".job-card").length;


}

// toggle the no jobs
function noJobMessage (container, messageElement) {
    const jobs = container.querySelectorAll(".job-card");

    if(jobs.length > 0){
        messageElement.classList.add("hidden");
    }else{
        messageElement.classList.remove("hidden");      
    }
}





