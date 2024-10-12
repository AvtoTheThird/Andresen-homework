class DataHandler {
  constructor() {
    this.posts = new Map();
  }

  fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.clearPosts();
        data.forEach((post) => {
          this.posts.set(post.id, post);
        });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        throw error;
      });
  }

  listPosts() {
    return Array.from(this.posts.values())
    .sort((a, b) =>a.title.localeCompare(b.title));
  }

  getPost(id) {
    return this.posts.get(id) || null;
  }

  clearPosts() {
    this.posts.clear();
  }
}
