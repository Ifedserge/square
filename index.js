
let windowHeight = document.documentElement.clientHeight;
let halfWindow = windowHeight / 2;
let square = document.querySelectorAll('.square');
let container = document.querySelector('.squares__container');
let squares = document.querySelectorAll('.square__inside');
let rotateIndex = 0;
let deg = 0
let degTwo = 0;
let degThree = 0;

for(let i = 0; i < square.length; i++){
    square[i].style.margin = `calc(${halfWindow}px) 0`;
}


function rotateSquares() {
    document.body.style.overflow = 'hidden'
    document.addEventListener('wheel', function(e){
        e = window.event;
        let delta = e.deltaY;
        let info = document.getElementById('1');
        info.innerHTML = +info.innerHTML + delta;

        if(info.innerHTML > 0){
            info.innerHTML = 0;
            rotateIndex++;
            if(rotateIndex <=90){
                deg++
                squares[0].style.transform = `rotate(${deg}deg)`;
                }else if( rotateIndex > 90 && rotateIndex <= 180){
                    degTwo++
                    squares[1].style.transform = `rotate(${degTwo}deg)`;
                }else if(rotateIndex >= 181 || rotateIndex <= 270){
                degThree++
                if(degThree <=90){
                    squares[2].style.transform = `rotate(${degThree}deg)`
                }else{
                    document.body.style.overflow = 'auto';
                    degThree = 90
                    return rotateIndex = 271;

                }

            }
        }
        if(info.innerHTML < 0) {
            info.innerHTML = 0;
            rotateIndex--
            console.log(rotateIndex);
            if(rotateIndex < 0){
                document.body.style.overflow = 'auto';
                return rotateIndex = 0
            }
            if(rotateIndex <=90){
                console.log(deg);
                deg--
                squares[0].style.transform = `rotate(${deg}deg)`;
                if(rotateIndex < 0){
                    deg = 0;
                    squares[0].style.transform = `rotate(${deg}deg)`;
                }
            }else if(rotateIndex >= 90 && rotateIndex <=180){
                degTwo--;
                squares[1].style.transform = `rotate(${degTwo}deg)`;
            }else if(rotateIndex >= 180){
                degThree--;
                console.log(degThree);
                squares[2].style.transform = `rotate(${degThree}deg)`;
            }

        }
        })
  }
function handleScroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollHeight;
    let containerTop = container.offsetTop;

    if(Math.floor(scrollTop/100) * 100 == Math.floor(container.offsetTop/100) * 100){
        rotateSquares();
    }

}

window.addEventListener('scroll', handleScroll)