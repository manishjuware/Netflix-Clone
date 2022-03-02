let ques = document.getElementsByClassName('faq-button');
let ans = document.getElementsByClassName('faq-ans')

for (let index = 0; index < ques.length; index++) {

    
    ques[index].addEventListener('click' , () => {
        if (ans[index].style.display === "none") {
            ans[index].style.display = "block";
        } else {
            ans[index].style.display = "none";
        }
    });
}
