import React, { useState, useEffect } from "react";
import "./dash.css";
import Dummy from "../../Images/Logo.png";
import UpdateModal from "./updateModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const createBlog = async (e) => {
    e.preventDefault();

    if (!image || !name || !description) {
      toast.error("Please fill all the fields");

      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);

      formData.append("upload_preset", "pq4z6rjr");

      const imageData = await axios.post(
        "https://api.cloudinary.com/v1_1/djgk2k4sw/image/upload",
        formData
      );

      // console.log(imageData)

      const blogData = {
        image: imageData.data.secure_url,
        name: name,
        description: description,
        link: link,
      };

      const response = await axios.post(
        "https://informed-perspective.onrender.com/api/blogs/createblog",
        blogData
      );

      // console.log(response)

      toast.success("Blog created Successfully");

      setLoading(false);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      // console.log(err)

      if (err.response.status === 500) {
        toast.error("A problem with our servers, hang on");
      } else if (err.response.status === 400) {
        toast.error("Bad request");
      }
    } finally {
      setLoading(false);
    }
  };

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const GetBlogs = async () => {
      try {
        const getBlogs = await axios.get(
          "https://informed-perspective.onrender.com/api/blogs/getblogs"
        );

        // console.log(getBlogs.data.blogs)

        setBlogs(getBlogs.data.blogs);
      } catch (err) {
        // console.log(err)

        if (err.response.status === 500) {
          return toast.error("A problem with the server, hang on");
        }
      }
    };

    GetBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);

      const deleteBlog = await axios.delete(
        `https://informed-perspective.onrender.com/api/blogs/deleteblog/${id}`
      );

      // console.log(deleteBlog);
      setLoading(false);
      toast.success("Blog was deleted successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      // console.log(err);
      if (err.response.status === 500) {
        toast.error("A problem with our servers, hang on");
      } else if (err.response.status === 404) {
        toast.error("The Blog cannot seem to be found");
      } else {
        toast.error("Check your network connection");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="dashboard">
        <div className="dashboard-container">
          <p className="p-create-blog">Create Blog</p>

          <form className="post-form" onSubmit={createBlog}>
            <div className="image">
              <label>Blog Image</label>
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

            <div className="image">
              <label>Blog Name</label>
              <input
                type="text"
                placeholder="enter the name of the blog"
                required
                value={name}
                onChange={handleName}
              />
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
                value={description}
                onChange={handleDescription}
              ></textarea>
            </div>

            <div className="image">
              <label>Blog Link</label>
              <input
                type="text"
                placeholder="enter the Link of the blog"
                value={link}
                onChange={handleLink}
              />
            </div>

            <div className="post-div">
              <button>
                {loading ? (
                  <AiOutlineLoading3Quarters className="loading-icon" />
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </form>

          <div className="view-blogs">
            <p className="view-blogs-p">View Posted Blogs</p>

            <div className="blog-cont">
              {blogs.map((item) => (
                <div className="blog-cont---" key={item._id}>
                  <div className="blog-cont-img">
                    <img src={item.image} className="image-blog" alt="blog" />
                    <p className="blog-name">{item.name}</p>
                    <p className="blog-desc">{item.description}</p>
                  </div>

                  <div className="blog-details-cont">
                    <div>
                      <p className="update" onClick={() => OpenModal(item._id)}>
                        Update
                      </p>
                    </div>
                    <div>
                      <p
                        className="delete"
                        onClick={() => handleDelete(item._id)}
                      >
                        {loading ? (
                          <AiOutlineLoading3Quarters className="loading-icon" />
                        ) : (
                          "Delete"
                        )}
                      </p>
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
