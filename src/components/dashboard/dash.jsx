import React from "react";
import "./dash.css";

function Dashboard() {
  return (
    <>
      <section className="dashboard">
        <div className="dashboard-cont">
          <div className="dash-title">
            <div className="title-1">
              <h2>Create a Blog</h2>
            </div>

            <div className="title-1">
              <h2>View Blogs</h2>
            </div>
          </div>

          <form className="create-blog">
            <div className="blog-name">
              <label className="blog-name-lbl">Blog Image</label>

              <input
                type="file"
                accept="image/*"
                placeholder="enter the name of the blog"
              />
            </div>

            <div className="blog-name">
              <label className="blog-name-lbl">Blog Title</label>

              <input
                type="text"
                required
                placeholder="enter the name of the blog"
              />
            </div>

            <div className="blog-name">
              <label className="blog-name-lbl">Blog Description</label>

              <textarea
                type="text"
                required
                placeholder="enter the name of the blog"
              ></textarea>
            </div>

            <div className="blog-name">
              <label>Blog Link</label>
              <input
                type="text"
                required
                placeholder="enter the link to the blog"
              />
            </div>

            <div className="blog-button">
              <button>Post</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
