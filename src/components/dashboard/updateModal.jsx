import React, { useState } from "react";
import "./updateModal.scss";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout({ isOpen, onClose }) {
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

          <form className="contact__contact-container">
            <div className="contact__contact-container__name">
              <label>Blog Image:</label>
              <input
                type="file"
                accept="image/*"
                placeholder="enter the image of the blog"
              />
            </div>
            <div className="contact__contact-container__name">
              <label>Name</label>
              <input type="text" required placeholder="enter the blog name" />
            </div>

            <div className="contact__contact-container__name">
              <label>Description</label>
              <input
                type="text"
                required
                placeholder="enter blog description"
              />
            </div>

            <div className="contact__contact-container__name">
              <label>Link</label>
              <input
                type="text"
                placeholder="enter the link of the blog"
                required
              />
            </div>

            <button className="contact__okay-btn">Okay</button>
          </form>
        </main>
      </Modal>
    </>
  );
}

export default Checkout;
