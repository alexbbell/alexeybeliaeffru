var resetClass = ()=> {
    document.querySelectorAll('.lng').forEach(
        (e)=> {
            e.classList.remove('langSelected');
            }        
        );
};

document.querySelectorAll('.lng')[0].addEventListener('click', (el) => {   
    resetClass();
    el.target.classList.add('langSelected');
});
document.querySelectorAll('.lng')[1].addEventListener('click', (el) => {
    resetClass();
    el.target.classList.add('langSelected');

});


// ) querySelectorAll('.lng').forEach(el =>el.click( 
//     console.log('1:::' , el.target)
// ));