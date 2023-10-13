// Define an array of blog card data as JavaScript objects
const blogData = [
    {
      id: 'blog1',
      title: 'Book 1',
      author: 'Author: Rabin Shrestha',
      dateTime: 'Date and Time: 2023-10-01 09:30:00',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1679404108831-417d6561746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      views: 0,
      comments: 0,
      status: 'Drafted',
    },
    {
      id: 'blog2',
      title: 'Book 2',
      author: 'Author: Rabin Shrestha',
      dateTime: 'Date and Time: 2023-10-10 9:30:00',
      imageSrc: 'https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3BlbiUyMGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      views: 0,
      comments: 0,
      status: 'Drafted',
    },
  ];
  
  // Function to create a blog card HTML element
  function createBlogCard(blog) {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    blogCard.id = blog.id;
  
    blogCard.innerHTML = `
      <img src="${blog.imageSrc}" alt="${blog.title}" class="blog-image">
      <div class="blog-title">${blog.title}</div>
      <div class="blog-author">${blog.author}</div>
      <div class="blog-info">${blog.dateTime}</div>
      <div class="blog-info">Views: <span id="views-${blog.id}">${blog.views}</span></div>
      <div class="blog-info">Comments: <span id="comments-${blog.id}">${blog.comments}</span></div>
      <div class="blog-info">Status: <span id="status-${blog.id}">${blog.status}</span></div>
      <button class="status-button" id="status-btn-${blog.id}" onclick="changeStatus('${blog.id}')">Publish</button>
      <button class="status-button" onclick="addComment('${blog.id}')">Add Comment</button>
      <button class="status-button" onclick="simulateVisit('${blog.id}')">Visit</button>
    `;
  
    return blogCard;
  }
  
  // Function to append blog cards to the container
  function appendBlogCards() {
    const blogContainer = document.getElementById('blog-container');
  
    blogData.forEach(blog => {
      const blogCard = createBlogCard(blog);
      blogContainer.appendChild(blogCard);
    });
  }
  
  // Initialize the blog cards
  appendBlogCards();
  
  // Function to change the status of a blog
  function changeStatus(blogId) {
    const statusElement = document.getElementById(`status-${blogId}`);
    const statusButton = document.querySelector(`#status-btn-${blogId}`);
    const currentStatus = statusElement.innerText;
  
    if (currentStatus === 'Published') {
      statusElement.innerText = 'Archived';
      statusButton.innerText = 'Draft';
    } else if (currentStatus === 'Archived') {
      statusElement.innerText = 'Drafted';
      statusButton.innerText = 'Publish';
    } else {
      statusElement.innerText = 'Published';
      statusButton.innerText = 'Archive';
    }
  }
  
  // Function to add a comment to a blog
  function addComment(blogId) {
    const commentsElement = document.getElementById(`comments-${blogId}`);
    const commentsCount = parseInt(commentsElement.innerText);
    commentsElement.innerText = commentsCount + 1;
  }
  
  // Function to simulate a visit to a blog
  function simulateVisit(blogId) {
    const viewsElement = document.getElementById(`views-${blogId}`);
    const viewsCount = parseInt(viewsElement.innerText);
    viewsElement.innerText = viewsCount + 1;
  }
  