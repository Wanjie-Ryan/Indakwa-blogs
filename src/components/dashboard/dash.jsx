import React, { useState } from "react";
import "./dash.css";
import Dummy from "../../Images/Logo.png";
import UpdateModal from "./updateModal";

function Dash() {
  const images = Array(15).fill(Dummy);

  const [updateModal, setupdateModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const OpenModal = (item) => {
    setSelectedBlog(item);
    setupdateModal(true);
  };

  const CloseModal = () => {
    setupdateModal(false);
  };

  return (
    <>
      <section className="dashboard">
        <div className="dashboard-container">
          <p className="p-create-blog">Create Blog</p>

          <form className="post-form">
            <div className="image">
              <label>Blog Image</label>
              <input
                type="file"
                accept="image/*"
                placeholder="enter the image of the blog"
              />
            </div>

            <div className="image">
              <label>Blog Name</label>
              <input type="text" placeholder="enter the name of the blog" />
            </div>

            <div className="image">
              <div>
                <label className="ta-label">Blog Description</label>
              </div>

              <textarea
                type="text"
                required
                placeholder="enter a brief description of the blog"
                rows="4"
                cols="50"
              ></textarea>
            </div>

            <div className="image">
              <label>Blog Link</label>
              <input type="text" placeholder="enter the Link of the blog" />
            </div>

            <div className="post-div">
              <button>Post</button>
            </div>
          </form>

          <div className="view-blogs">
            <p className="view-blogs-p">View Posted Blogs</p>

            <div className="blog-cont">
              {images.map((image, index) => (
                <div className="blog-cont---" key={index}>
                  <div className="blog-cont-img">
                    <img src={image} className="image-blog" alt="blog" />
                    <p className="blog-name">Informed Perspectives</p>
                    <p className="blog-desc">Informed Perspectives</p>
                  </div>

                  <div className="blog-details-cont">
                    <div>
                      <p className="update" onClick={() => OpenModal(index)}>
                        Update
                      </p>
                    </div>
                    <div>
                      <p className="delete">Delete</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <UpdateModal
        isOpen={updateModal}
        onClose={CloseModal}
        selectedItem={selectedBlog}
      />
    </>
  );
}

export default Dash;
