export function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Heading
    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    
    //karahi
    const karahi = document.createElement('div');
    const karahiHeading = document.createElement('h1');
    karahiHeading.textContent = "Chicken Karahi";
    const paraKarahi = document.createElement('span');
    paraKarahi.textContent = "Karahi bursts with bold, aromatic spices and tender meat, creating a rich, savory delight that's irresistible with every bite!";
    const priceKarahi = document.createElement('h3');
    priceKarahi.textContent = "5$";
    karahi.classList.add('card');
    karahi.append(karahiHeading, paraKarahi, priceKarahi);
    
    //macaroni 
    const macaroni = document.createElement('div');
    const macaroniHeading = document.createElement('h1');
    macaroniHeading.textContent = "Macaroni";
    const paraMacaroni = document.createElement('span');
    paraMacaroni.textContent = "Macaroni, with its tender pasta and creamy, cheesy goodness, is the ultimate comfort food that warms the soul!";
    const priceMacaroni = document.createElement('h3');
    priceMacaroni.textContent = "3$";
    macaroni.classList.add('card');
    macaroni.append(macaroniHeading, paraMacaroni, priceMacaroni);
    
    //custard 
    const custard = document.createElement('div');
    const custardHeading = document.createElement('h1');
    custardHeading.textContent = "Custard";
    const paraCustard = document.createElement('span');
    paraCustard.textContent = "Custard's silky, creamy texture and sweet, velvety flavor make every spoonful a delightful indulgence!";
    const priceCustard = document.createElement('h3');
    priceCustard.textContent = "2$";
    custard.classList.add('card');
    custard.append(custardHeading, paraCustard, priceCustard);
    
    //chai 
    const chai = document.createElement('div');
    const chaiHeading = document.createElement('h1');
    chaiHeading.textContent = "Chai";
    const paraChai = document.createElement('span');
    paraChai.textContent = "Chai's warm, spiced blend of tea and aromatic spices creates a comforting, flavorful experience in every sip!";
    const priceChai = document.createElement('h3');
    priceChai.textContent = "1$";
    chai.classList.add('card');
    chai.append(chaiHeading, paraChai, priceChai);

    content.append(heading, karahi, macaroni, custard, chai);
}