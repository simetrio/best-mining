function showBlog() {
    showBlogPosts();
    showBlogTop();
}

// *** Show ***

function showBlogPosts() {
    const element = document.getElementById('blog-posts');
    if (!element) {
        return;
    }

    const posts = window.dataBase.posts;

    element.innerHTML = fillBlogPostsTemplate(blogPostsTemplate, blogPostsItemTemplate, posts);
}

function showBlogTop() {
    const element = document.getElementById('blog-top');
    if (!element) {
        return;
    }

    const posts = window.dataBase.posts.slice(0, 4);

    element.innerHTML = fillBlogPostsTemplate(blogPostsTopTemplate, blogPostsItemTemplate, posts);
}

// *** Fill ***

function fillBlogPostsTemplate(template, templateItem, coins) {
    let posts = fillBlogPostsItemTemplate(templateItem, coins);

    return template
        .replace(new RegExp('{posts}', 'g'), posts)
        ;
}

function fillBlogPostsItemTemplate(template, posts) {
    let postsHtml = '';

    posts.forEach(post => {
        postsHtml += template
            .replace(new RegExp('{id}', 'g'), post.Id)
            .replace(new RegExp('{img}', 'g'), post.Img)
            .replace(new RegExp('{title}', 'g'), post.Title)
            ;
    });

    return postsHtml;
}

// *** Templates ***

const blogPostsTemplate = `
<h1 class="mb-4">Блог компании BestMining</h1>
<div class="row">
    {posts}
</div>
`;

const blogPostsTopTemplate = `
<h2 class="my-4">Блог</h2>
<div class="row">
    {posts}
</div>
`;

const blogPostsItemTemplate = `
<div class="card col-lg-3">
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="/img/tg-channel/{img}" class="img-fluid" />
        <a href="/blog/{id}/">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
    </div>
    <div class="card-body">
        <a href="/blog/{id}/">
            <h5 class="card-title">{title}</h5>
        </a>
    </div>
</div>
`;