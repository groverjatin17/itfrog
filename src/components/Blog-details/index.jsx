/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

const BlogDetails = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendComment = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/blog2.png" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                          In today's digital age, the use of technology and
                          digitization is rapidly increasing, and businesses can
                          benefit greatly from this trend. Digitization refers
                          to the process of converting information into a
                          digital format, making it easier to access, store, and
                          share. Here are some ways that digitization can help
                          your business grow:
                        </p>
                      </div>

                      {/* <h6>- We all intend to plan ahead.</h6> */}

                      <p>
                        Here are few parameters below that can significantly
                        impact your business.
                      </p>

                      <ul>
                        <li>
                          01. Improved efficiency: Digitizing your business
                          processes can help you streamline your operations and
                          increase efficiency. By automating tasks, you can
                          reduce the time and effort required to complete them,
                          freeing up resources to focus on other areas of the
                          business.
                        </li>
                        <li>
                          02. Increased productivity: Digitization can also
                          improve productivity by enabling your employees to
                          work more effectively. Digital tools and systems can
                          help them to collaborate more easily, communicate more
                          effectively, and access information more quickly.
                        </li>
                        <li>
                          03. Enhanced customer experience: Digital technologies
                          can help you provide a better customer experience by
                          making it easier to interact with your business. For
                          example, you can use social media and other digital
                          channels to engage with customers, offer personalized
                          recommendations, and provide quick and efficient
                          service.
                        </li>
                        <li>
                          04. Data-driven decision making: Digitization can help
                          you collect and analyze data more easily, providing
                          valuable insights into your business. This can help
                          you make more informed decisions, identify
                          opportunities for growth, and optimize your
                          operations.
                        </li>
                        <li>
                          05. Increased competitiveness: In today's digital
                          marketplace, businesses that embrace technology and
                          digitization are better positioned to compete. By
                          leveraging digital tools and systems, you can
                          differentiate your business and offer new products and
                          services that meet evolving customer needs.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          There is no alternative to digital transformation.
                          Visionary companies will carve out new strategic
                          options for themselves – those that don’t adapt will
                          fail.
                        </p>
                      </div>
`                      {/* <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                      </div>` */}
                      {/* <p>
                        There is no alternative to digital transformation.
                        Visionary companies will carve out new strategic options
                        for themselves – those that don’t adapt will fail.
                      </p> */}
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                          <a href="#0">ThemesCamp</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendComment(500);
                      alert(JSON.stringify(values, null, 2));

                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button className="btn-curve btn-color btn-lg">
                                <span>Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
