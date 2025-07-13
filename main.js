if (document.getElementById("latest-blog")) {
  const latest = blogPosts[0];
  document.getElementById("latest-blog").innerHTML = `
    <h3>${latest.title}</h3>
    <p>${latest.content}</p>
  `;
}
if (document.getElementById("blog-list")) {
  blogPosts.forEach(post => {
    document.getElementById("blog-list").innerHTML += `
      <article>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </article>
    `;
  });
}
if (document.getElementById("project-gallery")) {
  projects.forEach(p => {
    document.getElementById("project-gallery").innerHTML += `
      <div class="project">
        <img src="${p.img}" loading="lazy" alt="${p.title}" />
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `;
  });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formStatus").innerText = "Thanks for contacting!";
    contactForm.reset();
  });
}