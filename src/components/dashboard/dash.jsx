// import React, {useState} from "react";
// import "./dash.css";

// function Dashboard() {

//     const [showform, setShowForm] = useState(true)
//   return (
//     <>
//       <section className="dashboard">
//         <div className="dashboard-cont">
//           <div className="dash-title">
//             <div className="title-1">
//               <h2 onClick={setShowForm(true)}>Create a Blog</h2>
//             </div>

//             <div className="title-1">
//               <h2 onClick={setShowForm(false)}>View Blogs</h2>
//             </div>
//           </div>

//           <form className="create-blog">
//             <div className="blog-name">
//               <label className="blog-name-lbl">Blog Image</label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 placeholder="enter the name of the blog"
//               />
//             </div>

//             <div className="blog-name">
//               <label className="blog-name-lbl">Blog Title</label>

//               <input
//                 type="text"
//                 required
//                 placeholder="enter the name of the blog"
//               />
//             </div>

//             <div className="blog-name--">
//               <label className="blog-name-lbl">Blog Description</label>

//               <textarea
//                 type="text"
//                 required
//                 placeholder="enter a brief description of the blog"
//                 // rows='4'
//                 // cols='50'
//               ></textarea>
//             </div>

//             <div className="blog-name">
//               <label>Blog Link</label>
//               <input
//                 type="text"
//                 required
//                 placeholder="enter the link to the blog"
//               />
//             </div>

//             <div className="blog-button">
//               <button className="post-btn">Post</button>
//             </div>
//           </form>

//           <div className='view-blogs'>

//             <h2>yes yes</h2>

//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import "./dash.css";

function Dashboard() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <section className="dashboard">
        <div className="dashboard-cont">
          <div className="dash-title">
            <div className="title-1">
              <h2 onClick={() => setShowForm(true)}>Create a Blog</h2>
            </div>

            <div className="title-1">
              <h2 onClick={() => setShowForm(false)}>View Blogs</h2>
            </div>
          </div>

          <div
            className={`content-container ${
              showForm ? "show-form" : "show-view-blogs"
            }`}
          >
            {showForm ? (
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

                <div className="blog-name--">
                  <label className="blog-name-lbl">Blog Description</label>

                  <textarea
                    type="text"
                    required
                    placeholder="enter a brief description of the blog"
                    // rows='4'
                    // cols='50'
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
                  <button className="post-btn">Post</button>
                </div>
              </form>
            ) : (
              <div className="view-blogs">
                <h2>yes yes</h2>
                
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
