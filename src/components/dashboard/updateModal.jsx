import React, { useState } from "react";
import "./updateModal.scss";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout({ isOpen, onClose, selectedItem }) {
  //   console.log(selectedItem);

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  const updateBlog = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!image) {
        toast.error("Please ul=pload an image");

        return;
      }

      const formData = new FormData();
      formData.append("file", image);

      formData.append("upload_preset", "pq4z6rjr");

      const imageData = await axios.post(
        "https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload",
        formData
      );

      //   console.log(imageData);

      const blogData = {
        image: imageData.data.secure_url,
        name: name,
        description: description,
        link: link,
      };

      const response = await axios.patch(
        `https://informed-perspective.onrender.com/api/blogs/updateblog/${selectedItem}`,
        blogData
      );

      //   console.log(response);

      toast.success("Blog updated Successfully");

      setLoading(false);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      if (err.response.status === 500) {
        toast.error("A problem with our servers, hang on");
      } else if (err.response.status === 400) {
        toast.error("Bad request");
      } else if (err.response.status === 404) {
        toast.error("No Blog Found");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Contact Modal"
        className="modal-contents "
        overlayClassName="modal-overlay"
      >
        <main className="contact">
          <nav className="contact__contact-nav">
            <div className="contact__contact-nav__nav-title">
              <h2>Update Blog</h2>
            </div>

            <div className="contact__contact-nav__nav-close">
              <AiOutlineClose
                className="contact__contact-nav__nav-close__class-icon"
                onClick={onClose}
              />
            </div>
          </nav>

          <form className="contact__contact-container" onSubmit={updateBlog}>
            <div className="contact__contact-container__name">
              <label>Blog Image:</label>
              <input
                type="file"
                accept="image/*"
                required
                placeholder="enter the image of the blog"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <div className="contact__contact-container__name">
              <label>Name</label>
              <input
                type="text"
                required
                placeholder="enter the blog name"
                value={name}
                onChange={handleName}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Description</label>
              <input
                type="text"
                required
                placeholder="enter blog description"
                value={description}
                onChange={handleDescription}
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Link</label>
              <input
                type="text"
                placeholder="enter the link of the blog"
                required
                value={link}
                onChange={handleLink}
              />
            </div>

            <button className="contact__okay-btn">
              {loading ? (
                <AiOutlineLoading3Quarters className="loading-icon" />
              ) : (
                "Okay"
              )}
            </button>
          </form>
        </main>
      </Modal>
    </>
  );
}

export default Checkout;
