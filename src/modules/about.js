export function about() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Heading
    const heading = document.createElement('h1');
    heading.textContent = "About";
    
    //shani
    const shani = document.createElement('div');
    const shaniHeading = document.createElement('h1');
    shaniHeading.textContent = "Chicken Karahi";
    const shaniTitle = document.createElement('span');
    shaniTitle.textContent = "Chef";
    const shaniPhone = document.createElement('h3');
    shaniPhone.textContent = "555-555-5555";
    const shaniEmail = document.createElement('h3');
    shaniEmail.textContent = "totallyRealEmail@notFake.com";
    shani.classList.add('card');
    shani.append(shaniHeading, shaniTitle, shaniPhone, shaniEmail);


    content.append(heading, shani);
}