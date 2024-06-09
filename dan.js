// Create the chat bubble and the iframe container
const createChatInterface = () => {
  // Create chat bubble
  const chatBubble = document.createElement('div');
  chatBubble.style.position = 'fixed';
  chatBubble.style.bottom = '20px';
  chatBubble.style.right = '20px';
  chatBubble.style.width = '60px';
  chatBubble.style.height = '60px';
  chatBubble.style.backgroundColor = '#43ae28';
  chatBubble.style.borderRadius = '50%';
  chatBubble.style.display = 'flex';
  chatBubble.style.alignItems = 'center';
  chatBubble.style.justifyContent = 'center';
  chatBubble.style.color = '#fff';
  chatBubble.style.fontSize = '24px';
  chatBubble.style.cursor = 'pointer';
  chatBubble.innerText = '💬';
  chatBubble.id = 'chatBubble';
  
  // Create iframe container
  const iframeContainer = document.createElement('div');
  iframeContainer.style.position = 'fixed';
  iframeContainer.style.bottom = '80px';
  iframeContainer.style.right = '20px';
  iframeContainer.style.width = '338px';
  iframeContainer.style.height = '807px';
  iframeContainer.style.backgroundColor = '#fff';
  iframeContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  iframeContainer.style.borderRadius = '10px';
  iframeContainer.style.border = '1px solid #43ae28';
  iframeContainer.style.display = 'none';
  iframeContainer.style.flexDirection = 'column';
  iframeContainer.style.overflow = 'hidden';
  iframeContainer.id = 'iframeContainer';

  // Create title bar
  const titleBar = document.createElement('div');
  titleBar.style.background = 'linear-gradient(to right, #43ae28, #54CF36)';
  titleBar.style.color = '#fff';
  titleBar.style.padding = '10px';
  titleBar.style.fontSize = '18px';
  titleBar.style.fontFamily = 'Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif';
  titleBar.style.display = 'flex';
  titleBar.style.alignItems = 'center';
  titleBar.style.justifyContent = 'space-between';
  //titleBar.style.borderTopLeftRadius = '10px';
  //titleBar.style.borderTopRightRadius = '10px';

  // Create logo
  const logo = document.createElement('img');
  logo.src = 'https://mission-fuel.com/wp-content/uploads/2023/07/White-logo.png';
  logo.style.width = '71px'; // Adjusted width (286 / 4)
  logo.style.height = '39px'; // Adjusted height (156 / 4)
  logo.style.backgroundColor = '#001259';
  logo.style.padding = '5px';
  logo.style.borderRadius = '5px';
  logo.style.cursor = 'pointer';
  logo.onclick = () => {
    window.open('https://mission-fuel.com/', '_blank');
  };

  // Create title text container
  const titleTextContainer = document.createElement('div');
  titleTextContainer.style.display = 'flex';
  titleTextContainer.style.flexDirection = 'column';
  titleTextContainer.style.marginLeft = '10px';

  // Create title text
  const titleText = document.createElement('span');
  titleText.innerText = 'Quiz Bot';
  titleText.style.fontWeight = 'bold';

  // Create URL text as a clickable link
  const urlText = document.createElement('a');
  urlText.href = 'https://mission-fuel.com/';
  urlText.innerText = 'https://mission-fuel.com/';
  urlText.style.fontSize = '12px';
  urlText.style.color = '#d3d3d3';
  urlText.style.textDecoration = 'none';
  urlText.target = '_blank';

  // Append title text and URL text to title text container
  titleTextContainer.appendChild(titleText);
  titleTextContainer.appendChild(urlText);

  // Create minimize button
  const minimizeButton = document.createElement('button');
  minimizeButton.innerText = '-';
  minimizeButton.style.border = 'none';
  minimizeButton.style.backgroundColor = '#fff';
  minimizeButton.style.color = '#43ae28';
  minimizeButton.style.borderRadius = '50%';
  minimizeButton.style.width = '30px';
  minimizeButton.style.height = '30px';
  minimizeButton.style.cursor = 'pointer';
  minimizeButton.onclick = () => {
    iframeContainer.style.display = 'none';
    chatBubble.style.display = 'flex';
  };

  // Append logo and title text container to title bar
  const titleContent = document.createElement('div');
  titleContent.style.display = 'flex';
  titleContent.style.alignItems = 'center';
  titleContent.appendChild(logo);
  titleContent.appendChild(titleTextContainer);

  titleBar.appendChild(titleContent);
  titleBar.appendChild(minimizeButton);
  
  // Append title bar to iframe container
  iframeContainer.appendChild(titleBar);
  
  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://articulateusercontent.com/review/items/3BBJkjBr_H3LJ6Ga/story.html';
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100% - 50px)'; // Adjust height to fit under the title bar
  iframe.style.border = 'none';
  iframeContainer.appendChild(iframe);

  // Append elements to the body
  document.body.appendChild(chatBubble);
  document.body.appendChild(iframeContainer);
  
  // Add event listener to chat bubble
  chatBubble.onclick = () => {
    chatBubble.style.display = 'none';
    iframeContainer.style.display = 'flex';
  };
};

// Run the function to create the chat interface
createChatInterface();
