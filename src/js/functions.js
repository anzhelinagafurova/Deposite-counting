function showResult(value){   
    addMoneyValues(value);
    addCoins(value);   
    setAnchors();
    setPopups(); 
    showHiddenBlocks(); 
}
function addMoneyValues(value){
    resultValue.innerHTML = value;
    const benefit = calculateBenefit(value);
    const nodes = document.querySelectorAll(".result");
    for (let i=0; i < nodes.length; i++){              
        nodes[i].innerHTML = `~ ${formatNumber(benefit[i])} ₽`     
    }
}

function addCoins(value){
    const coins = calculateCoins(value);
    const nodes = document.querySelectorAll(".money");

    nodes.forEach(e => e.innerHTML = null);
    
    for(let i=0; i < nodes.length; i++){      
        for(let j=0; j < coins[i]; j++){          
            let img = document.createElement("img");
            img.src = "./src/img/money.png";
            nodes[i].append(img);
        }      
    }
}

function calculateBenefit(money){
    const firstYear = money * 12 + (money * 12 * 0.0689);
    const secondYear = firstYear + money * 12 + (firstYear + money * 12) * 0.0689;
    const thirdYear = secondYear + money * 12 + (secondYear + money * 12) * 0.0689;

    return [
        money * 36,
        thirdYear,
        (money * 36 + (money * 36) * 0.7121)
    ]
}

function formatNumber(value){
    return value.toFixed().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
}

function calculateCoins(value){
    const maxValue = calculateBenefit(50000);
    let result = [];
    maxValue.forEach( e => result.push(Math.ceil(value * 36/ (e / 10))));
    return result;
}



function setAnchors(){
    window.location.href="#finalDisplay";   
    document.querySelectorAll(".statistics__intro")[1].onclick = function(){
        document.querySelector(".statistics").open = false;
    }
    document.querySelector(".statistics__intro").onclick = function(){
        window.location.href="#info";
    }
}

function showHiddenBlocks(){
    document.querySelector(".final-display").style.display = "block";
    document.querySelector(".statistics").style.display = "flex";
    document.querySelector(".outro").style.display = "flex";
}

function setRangeSlider(){
    const rangeSlider = sliderForm.slider;
    const value = rangeSlider.value;
    const indicator = sliderForm.sliderValue;
    const width = rangeSlider.getBoundingClientRect().width;
    const coords = width / 50000 * value;

    indicator.value = `${formatNumber(+value)} ₽`;
    indicator.style.left = coords + "px";
}

function setPopups(){
    const popupButttons = document.querySelectorAll(".final-display__popup-button");
    const popupMessages = document.querySelectorAll(".final-display__popup-message");
    
    for(let i = 0; i < popupButttons.length; i++){
        popupButttons[i].onclick = () => {
            if(!popupMessages[i].hidden) popupMessages[i].hidden = true;
            else{
                popupMessages.forEach(e => e.hidden = true);
                popupMessages[i].hidden = false;
            }  
        }
    }
}

export {showResult, setRangeSlider};