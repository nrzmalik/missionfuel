// Function to create the chat bubble and the iframe container
const createChatInterface = () => {
  // Set the font family
  const fontFamily = 'Roboto, sans-serif';

  // Create chat bubble
  const chatBubble = document.createElement('div');
  chatBubble.id = 'chatBubble';
  chatBubble.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #262626;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 9999;
    font-family: ${fontFamily};
  `;
  chatBubble.innerText = '💬';

  // Create iframe container
  const iframeContainer = document.createElement('div');
  iframeContainer.id = 'iframeContainer';
  iframeContainer.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 338px;
    height: 807px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid #262626;
    display: none;
    flex-direction: column;
    overflow: hidden;
    z-index: 9999;
  `;

  // Create title bar
  const titleBar = document.createElement('div');
  titleBar.style.cssText = `
    background: #262626;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${fontFamily};
  `;

  // Create logo
  const logo = document.createElement('img');
  logo.src = 'https://mission-fuel.com/wp-content/uploads/2023/07/White-logo.png';
  logo.style.cssText = `
    width: 71px;
    height: 39px;
    background-color: #262626;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  `;
  logo.onclick = () => window.open('https://mission-fuel.com/', '_blank');

  // Create title text container
  const titleTextContainer = document.createElement('div');
  titleTextContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: ${fontFamily};
  `;

  // Create title text
  const titleText = document.createElement('span');
  titleText.innerText = 'ExamPrep Bot';
  titleText.style.cssText = `
    font-weight: bold;
    font-family: ${fontFamily};
  `;

  // Create URL text as a clickable link
  const urlText = document.createElement('a');
  urlText.href = 'https://mission-fuel.com/';
  urlText.innerText = 'www.mission-fuel.com';
  urlText.style.cssText = `
    font-size: 10px;
    color: #fff;
    text-decoration: none;
    font-family: ${fontFamily};
  `;
  urlText.target = '_blank';

  // Append title text and URL text to title text container
  titleTextContainer.appendChild(titleText);
  titleTextContainer.appendChild(urlText);

  // Create minimize button
  const minimizeButton = document.createElement('button');
  minimizeButton.innerText = '-';
  minimizeButton.style.cssText = `
    border: none;
    background-color: #fff;
    color: #262626;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-family: ${fontFamily};
  `;
  minimizeButton.onclick = () => {
    iframeContainer.style.display = 'none';
    chatBubble.style.display = 'flex';
    localStorage.setItem('chatState', 'closed');
  };

  // Append logo and title text container to title bar
  const titleContent = document.createElement('div');
  titleContent.style.cssText = `
    display: flex;
    align-items: center;
    font-family: ${fontFamily};
  `;
  titleContent.appendChild(logo);
  titleContent.appendChild(titleTextContainer);

  titleBar.appendChild(titleContent);
  titleBar.appendChild(minimizeButton);

  // Append title bar to iframe container
  iframeContainer.appendChild(titleBar);

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://articulateusercontent.com/review/items/W70iBQaxC9fYM-Zw/story.html';
  iframe.style.cssText = `
    width: 100%;
    height: calc(100% - 50px);
    border: none;
    font-family: ${fontFamily};
  `;
  iframeContainer.appendChild(iframe);

  // Append elements to the body
  document.body.appendChild(chatBubble);
  document.body.appendChild(iframeContainer);

  // Add event listener to chat bubble
  chatBubble.onclick = () => {
    chatBubble.style.display = 'none';
    iframeContainer.style.display = 'flex';
    localStorage.setItem('chatState', 'open');
  };

  // Check chat state from localStorage
  const chatState = localStorage.getItem('chatState');
  if (chatState === 'open') {
    chatBubble.style.display = 'none';
    iframeContainer.style.display = 'flex';
  } else {
    chatBubble.style.display = 'flex';
    iframeContainer.style.display = 'none';
  }

  // Ensure the chat bubble and iframe container remain in view on window resize
  window.addEventListener('resize', () => {
    chatBubble.style.bottom = '20px';
    chatBubble.style.right = '20px';
    iframeContainer.style.bottom = '80px';
    iframeContainer.style.right = '20px';
  });
};

// Run the function to create the chat interface
createChatInterface();