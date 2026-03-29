console.log("index.js script connected");

let currentTab = 'all';

const tabActive = ['bg-blue-500','border-blue-500','text-white'];
const tabInactive = ['bg-transparent','text-slate-700','border-slate-200'];

const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');

console.log(allContainer,interviewContainer,rejectedContainer);

function switchTab(tab){
    console.log(tab);

    const tabs = ['all','interview','rejected']

    for (const t of tabs) {
        const tabName = document.getElementById("tab-"+t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.add(...tabInactive);
            tabName.classList.remove(...tabActive);            
        }
    }

    const pages = [allContainer,interviewContainer,rejectedContainer];
    for (const section of pages) {
        section.classList.add('hidden');
    }

    if(tab === 'all'){
        allContainer.classList.remove('hidden');
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove('hidden');
    }
    else{
        rejectedContainer.classList.remove('hidden');
    }
}

// state update
const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectedStat = document.getElementById('stat-rejected');

totalStat.innerText = allContainer.children.length;

switchTab(currentTab);

document.getElementById("job-container")
    .addEventListener('click',function(event){
        // console.log(event.target);

        
        const clickElement = event.target;
        // console.log(clickElement.parentNode.parentNode.parentNode);
        const card = clickElement.closest(".cards");
        // console.log(card);
        const parent = card.parentNode;
        const status = card.querySelector(".stats");

        if(clickElement.classList.contains('interview')){
            status.innerText="Interview";
            interviewContainer.append(card);
        }
        if(clickElement.classList.contains('rejected')){
            status.innerText = "Rejected";
            rejectedContainer.append(card);
        }
        if(clickElement.classList.contains('delete')){
            parent.removeChild(card);
             
        }
    })