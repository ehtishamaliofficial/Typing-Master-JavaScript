const paragraphArry=["Proper mental health is essential in every stage of life – from childhood and teenage to adulthood. Throughout a lifetime, an individual can experience mental health issues at any point. This affects not only their mood and behavior but also changes their way of thinking, of looking at life, and facing challenges.","Global warming is the latest alarm bell for the earth’s environment. Global warming refers to the increase in the average temperature of the earth’s surface during the last century, from 1900-2000.","Demo: Racism was something that he was acutely aware of as he grew up. Right from the age of six, his friendship with a white boy was taken away when his parents decided that they did not want their son to associate with a black boy.","Born on April 14th, 1891, Bhimrao Ramji Ambedkar was an Indian nationalist, jurist, Dalit leader, and Buddhist revivalist. But most importantly, he was the chief architect of the Indian constitution. Born into a poor family, he spent his entire life fighting social discrimination against the lower castes.","Born into a Jewish family on 14th March 1879 in Germany, Einstein had early speech difficulties, still he was a topper at the elementary school. His father, Hermann Einstein was a salesman and engineer.","The American entrepreneur, philanthropist, and the Chairman of Microsoft was born on 28th October 1955 into a wealthy Seattle family.As a student, Gates excelled in elementary school, particularly in Mathematics and Sciences.","The Taj Mahal is the materialized vision of love and marks a perfect indelible remark on its Mughal Architecture.","Having a healthy lifestyle is all about choosing to live your life in the healthiest way possible.There are a few things you have to do to start living your life in this way, i.e., the healthy way. This means doing some amount of exercise daily, such as jogging, yoga, playing sports, etc."," Self-confidence is a state of mind where someone pushes their boundaries and encourages belief from the very beginning, and this comes from a place of self-love. You ought to love yourself to gain that freedom from doubting your actions.","Learning Touch Typing is a long process you must have good patience because typing every day the same text is a very annoying task. But keep your goals in mind and try to reach your required speed and accuracy. There are people like you who have achieved 100+ wpm speed by following the same steps and strategies."];
 const h2=document.getElementById('paragraph')
const btn=document.getElementById('btn')
const textArea=document.getElementById('words')
var startTime ,endTime,wrongCharacter;
wrongCharacter=0;
const getParagrph = ()=>{
    const num=Math.floor(Math.random()*paragraphArry.length)
    const paragraph=paragraphArry[num]
    return paragraph
}
const checkWords=(str1,str2)=>{
  let prawords=str1.split(" ");
  let wrtienWords=str2.split(" ");
  
  for(var a=0;a<=prawords.length;a++){
    console.log(prawords[a])
    console.log(wrtienWords[a])
       if(prawords[a]!=wrtienWords[a]){
        wrongCharacter=wrongCharacter+1;
       }
  }
}
btn.addEventListener('click',function() {
    const date=new Date();

    if (this.innerText==="Start") {
       startTime= date.getTime();
       console.log(startTime)
        this.innerText="Done";
        h2.innerHTML=getParagrph()
    }
    else{
        endTime=date.getTime();
        this.innerText="Start";
        if (textArea.value!=="") {
            checkWords(h2.innerText,textArea.value);
            const totaltime=((endTime-startTime)/1000);
            h2.innerHTML=`You Completed the paragraph in ${totaltime}s you entered Wrong Character ${wrongCharacter}`;
             
            textArea.value="";
        }
        else{
            h2.innerHTML="You Does'nt Complete the Pragraph!"
        }
    }
})
