const curiosityContainer = document.getElementsByClassName('curiosityContainer'),
requiredReadingModal = document.querySelector('.requiredReadingModal'),
openModalBtn = document.getElementById('openRRModal'),
quickModalBtn = document.getElementById('quickRRModal')

linkToContent=(event)=>{
    const target = event.target
    if (target.className === 'curiosityContainer'){
        target.submit()
    } else {
        target.parentNode.submit()
    }
}

colorCuriosityContainer=()=>{
    colors = ['#7FFFD4','#98FB98','#FFDEAD','#FFC0CB','#FF7F50']
    let i;
    for(i=0;i<curiosityContainer.length;i++){
        curiosityContainer[i].style.backgroundColor = colors[i]
    }
}

openModal=()=>{
    requiredReadingModal.classList.remove('HIDE')
}

quickModal=()=>{
    requiredReadingModal.classList.add('HIDE')
}

init=()=>{
    colorCuriosityContainer()
    let i;
    for(i=0;i<curiosityContainer.length;i++){
        curiosityContainer[i].addEventListener('click',linkToContent)
    }
    openModalBtn.addEventListener('click',openModal)
    quickModalBtn.addEventListener('click',quickModal)
}

init()