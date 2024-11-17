import karahiImage from '../karahi.jpg';

export function home() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Heading
    const heading = document.createElement('h1');
    heading.textContent = "Shani's Karachi Restaurant";
    
    // Image
    const image = document.createElement('img');
    image.src = karahiImage;
    image.alt = "Delicious Karahi Dish";
    
    // Description
    const para = document.createElement('p');
    para.textContent = "Shani's serves the best chicken karahi in town! The vibrant spices, warm atmosphere, and authentic hospitality will transport you straight to the heart of South Asia. This is the kind of place you'll crave to visit again and again!";
    
    // Timings section
    const timingDiv = document.createElement('div');
    timingDiv.id = "timings";
    
    const hours = document.createElement('p');
    hours.textContent = 'Hours:';
    
    const timings = document.createElement('ul');
    const weekDays = [
        'Monday: 2pm - 12am',
        'Tuesday: 2pm - 12am',
        'Wednesday: 2pm - 12am',
        'Thursday: 2pm - 12am',
        'Friday: 5pm - 12am',
        'Saturday: 2pm - 12am',
        'Sunday: 2pm - 12am'
    ];
    
    weekDays.forEach(day => {
        const li = document.createElement('li');
        li.textContent = day;
        timings.appendChild(li);
    });
    
    timingDiv.append(hours, timings);
    
    // Address section
    const address = document.createElement('div');
    address.id = "address";
    
    const locationHeading = document.createElement('div');
    locationHeading.textContent = 'Location:';
    
    const locationText = document.createElement('p');
    locationText.textContent = 'Port Of Karachi, Karachi, Karachi City, Sindh';
    
    address.append(locationHeading, locationText);
    
    // Add everything to content
    content.append(heading, image, para, timingDiv, address);
}