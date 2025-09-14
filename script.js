document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialText = document.querySelector('.testimonial-text p');
    const guestName = document.querySelector('.guest-name');

    const testimonials = [
        {
            author: "Sampada Mahajan",
            text: "The property is amazing, no words can actually do justice to its beauty and maintenance. At first we were skeptical after reading certain google reviews but the owner stayed connected and made sure we do not face any hassles. The overall maintenance and services were top notch. Even the staff was just a bell away for anything and everything we needed during the stay. All in all, I would recommend everyone to visit this property without any second thoughts."
        },
        {
            author: "Sanal Vij",
            text: "Our staycation at Pinewood Retreat was nothing less than a hit! We had an amazing time as a family — the place is perfect for a relaxing getaway. Safety was never a concern, and we really appreciated the thoughtful arrangements made to address issues like monkeys and insects."
        },
        {
            author: "Sadaf Siddiqui",
            text: "We went to this farm house yesterday and I must say it's worth it, The experience was really nice , cooperative staff and hygienic environment They provide all the necessary things without asking Best place to enjoy in summer heat"
        },
        {
            author: "Varun Midha",
            text: "It's an amazing Farmhouse, very well maintained and beautifully done. No issues of parking or security. Well designed with all amenities one can ask for in a farmhouse stay. We have had multiple engagements here including overnight stay with friends or day time birthday parties, and all formats were amazing experience. The pool has got a waterfall which is enjoyed by folks of all ages. The bamboo room at the top is an amazing camping experience. Food and service is surely great. Highly recommended."
        },
        {
            author: "Arpit Mittal",
            text: "Amazing property, food and services. I have been to a lot of farm houses near gurgaon but this one really stands out. The host was very cooperative as the number of guests increased at the last minute. Also the property was well maintained and perfectly clean."
        }
    ];

    let currentTestimonialIndex = 0;

    function updateTestimonial() {
        testimonialText.innerHTML = testimonials[currentTestimonialIndex].text;
        guestName.textContent = testimonials[currentTestimonialIndex].author;
    }

    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });

        nextArrow.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial();
        });

        updateTestimonial();
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.querySelector('.chatbot');
    let chatbotOpen = false;

    if (chatbot) {
        chatbot.addEventListener('click', () => {
            chatbotOpen ? closeChatbot() : openChatbot();
            chatbotOpen = !chatbotOpen;
        });
    }

    function openChatbot() {
        const chatWindow = document.createElement('div');
        chatWindow.classList.add(
            'chat-window',
            'fixed',
            'bottom-12',
            'right-4',
            'w-80',
            'h-100',
            'bg-white',
            'shadow-lg',
            'rounded-2xl',
            'flex',
            'flex-col',
            'overflow-hidden',
            'z-50'
        );

        chatWindow.innerHTML = `
      <div class="chat-header bg-gray-400 h-12 text-white p-4 flex justify-between items-center">
      <div class="chatbot text-black z-50 fixed  float-right top-[100vw] md:top-[50vh] md:h-[5vw] md:w-[5vw] w-[20vw] h-[20vw] right-4 p-3 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <img src="/assets/robotic.png" alt="Chatbot Icon" class="md:h-[5vw] md:w-[5vw] w-[20vw] h-[20vw] object-contain ">
    </div>
        <p class="text-lg font-semibold font-family-Sans">Pine Bot, here to help!!</p>
        <button class="close-chatbot text-3xl text-white">&times;</button>
      </div>
      <div class="chat-messages flex-col flex p-4 h-full overflow-y-auto space-y-2">
        <div class="message bot-message mb-2 bg-black text-sm w-32 float-left text-white p-2 rounded">
          <p>Hello! How can I assist you today?</p>
        </div>
      </div>
      <div class="chat-input flex items-center flex-row justify-between gap-2 p-4 border-t">
        <input type="text" class="p-2 h-12 border rounded" placeholder="Type your message..." />
        <button class="submit bg-gray-500 h-12 text-white px-4 rounded hover:text-black hover:bg-white">Send</button>
      </div>
    `;

        document.body.appendChild(chatWindow);

        const closeBtn = chatWindow.querySelector('.close-chatbot');
        closeBtn.addEventListener('click', closeChatbot);


        const submitBtn = chatWindow.querySelector('.submit');
        submitBtn.addEventListener('click', () => {
            const userInput = chatWindow.querySelector('.chat-input input');
            const message = userInput.value.trim();
            if (message) {
                appendMessage('user', message);
                userInput.value = '';
                getBotResponse(message);
            }
        });
        
    }

    function closeChatbot() {
        const chatWindow = document.querySelector('.chat-window');
        if (chatWindow) chatWindow.remove();
        chatbotOpen = false;
    }

    function appendMessage(sender, message) {
        const chatMessages = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'mb-2', 'p-2', 'rounded');
        if (sender === 'user') {
            messageDiv.classList.add('user-message', 'text-sm', 'w-40', 'float-left', 'bg-blue-500', 'text-white', 'self-end');
        } else {
            messageDiv.classList.add('bot-message', 'text-sm', 'bg-black', 'w-40', 'float-right', 'text-white', 'self-start');
        }
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    function poppUpMessage() {
        const chatbot = document.querySelector('.chatbot');
        const popMessage = document.createElement('div');
        popMessage.classList.add('poppup-message', 'absolute', 'bottom-24', 'right-0', 'bg-white', 'text-black', 'p-2', 'rounded', 'shadow-lg', 'text-sm', 'w-48', 'text-center', 'transition', 'ease-in-out', 'duration-500');
        popMessage.textContent = "Hi there! How can I help you today?";
        chatbot.appendChild(popMessage);
    }
    setTimeout(() => { poppUpMessage() }, 2000);
    setTimeout(() => {
        const popMessage = document.querySelector('.poppup-message');
        if (popMessage) popMessage.remove();
    }, 10000);
 let bookingFlow = 0;
let name = '';
let contactNumber = '';

function getBotResponse(userMessage) {
  let botMessage = "I'm sorry, I didn't understand that. Can you please rephrase?";
  const text = userMessage.toLowerCase();

  if (text.includes('hello') || text.includes('hi')) {
    botMessage = "Hello! How can I assist you today?";
  }
  else if (text.includes('price') || text.includes('cost')) {
    botMessage = "Our pricing varies based on the season and type of accommodation. Would you like to know about our current rates?";
  }
  else if (text.includes('amenities') || text.includes('facilities') || text.includes('services')) {
    botMessage = "We offer a range of amenities including a swimming pool, free Wi-Fi, complimentary breakfast, and more. Would you like to know more?";
  }
  else if (text.includes('location') || text.includes('where')) {
    botMessage = "We are located in the serene outskirts of Gurgaon, providing a perfect escape from the city hustle. Would you like directions?";
  }
  else if (text.includes('book') || text.includes('reservation') || text.includes('reserve') || text.includes('stay')) {
    botMessage = "Do You Want to Book a Stay with Us?";
  }
  else if (text.includes('yes') || text.includes('sure') || text.includes('yea')) {
    const parentDiv = document.querySelector('.chat-messages');
    if (parentDiv && parentDiv.children.length >= 2) {
      const secondLastChild = parentDiv.children[parentDiv.children.length - 2];

      if (
        secondLastChild &&
        (secondLastChild.textContent.includes('Do You Want to Book a Stay with Us?') ||
         secondLastChild.textContent.includes('current rates?') ||
         secondLastChild.textContent.includes('Would you like to know more?'))
      ) {
        botMessage = "Great! May I know your name?";
        bookingFlow = 1;
      }
      else if (secondLastChild && secondLastChild.textContent.includes('Would you like directions?')) {
        window.location.replace("https://maps.app.goo.gl/sVYZJKZ6XC1e9bS9A");
        botMessage = "Redirecting you to Google Maps for directions.";
      }
    }
  }
  else if (bookingFlow === 1) {
   
    name = userMessage;
    botMessage = "Thank you! Could you please provide your contact number?";
    bookingFlow = 2;
  }
  else if (bookingFlow === 2) {
    
    if (text.match(/^\d{10}$/)) {
      contactNumber = userMessage;
      insertToTable('ChatBot'); 
      botMessage = "Thanks! Our team will reach out to you shortly to confirm your booking. May I assist you with anything else?";
      bookingFlow = 0; 
    } else {
      botMessage = "Please provide a valid 10-digit contact number.";
    }
  }
  else if (text.includes('no') || text.includes('not now') || text.includes('nope')) {
    botMessage = "Alright! If you have any other questions, feel free to ask.";
  }

  setTimeout(() => appendMessage('bot', botMessage), 100);
}

const bookingForm = document.querySelector('.booking-form');
const bookNowBtn  = document.querySelector('.book-now-btn');

function insertToTable(source) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let body;
  if (source === 'ChatBot') {
    body = JSON.stringify([
      [name, contactNumber, 'N/A', 'N/A', source]
    ]);
  } else {
    
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());
    body = JSON.stringify([
      [data.name, data.phone, data.email, data.dates || 'N/A', source]
    ]);
  }

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body
  };

  fetch("https://v1.nocodeapi.com/pinewoodretreat/google_sheets/eCqylQaOhITcGQci?tabId=Sheet1", requestOptions)
    .then(res => res.text())
    .then(result => {
      console.log('Success:', result);
      if (source === 'WebForm') alert('Booking successful! We will get back to you soon.');
    })
    .catch(err => {
      console.error('Error:', err);
      if (source === 'WebForm') alert('There was an error submitting your booking. Please try again.');
    });
}

bookNowBtn.addEventListener('click', e => {
  e.preventDefault();
  insertToTable('WebForm');
});
});