import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "../payment.css";

export default function Payment_Details() {
  return (
    <>
      <h1 className="payment_details">PAYEMENT DETAILS</h1>

      <h4>Lorem Ipsum</h4>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4"></div>
          <div class="col-12">
            <div class="card p-3">
              <div class="card-body border p-0">
                <p>
                  {" "}
                  <a
                    class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    {" "}
                    <span class="fw-bold">Credit Card</span>{" "}
                    <span class="">
                      {" "}
                      <span class="fab fa-cc-amex"></span>{" "}
                      <span class="fab fa-cc-mastercard"></span>{" "}
                      <span class="fab fa-cc-discover"></span>{" "}
                    </span>{" "}
                  </a>{" "}
                </p>
                <div class="collapse show p-3 pt-0" id="collapseExample">
                  <div class="row">
                    <div class="col-lg-5 mb-lg-0 mb-3">
                      <p class="h4 mb-0">Summary</p>
                      <p class="mb-0">
                        <span class="fw-bold">Technician:</span>
                        <span class="c-green">: Name of Technician</span>{" "}
                      </p>
                      <p class="mb-0">
                        {" "}
                        <span class="fw-bold">Price:</span>{" "}
                        <span class="c-green">:$452.90</span>{" "}
                      </p>
                      <p class="mb-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque nihil neque quisquam aut repellendus, dicta
                        vero? Animi dicta cupiditate, facilis provident
                        quibusdam ab quis, iste harum ipsum hic, nemo qui!
                      </p>
                    </div>
                    <div class="col-lg-7">
                      <form action="" class="form">
                        <div class="row">
                          <div class="col-12">
                            <div class="form__div">
                              {" "}
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />{" "}
                              <label for="" class="form__label">
                                Card Number
                              </label>{" "}
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form__div">
                              {" "}
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />{" "}
                              <label for="" class="form__label">
                                MM / yy
                              </label>{" "}
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form__div">
                              {" "}
                              <input
                                type="password"
                                class="form-control"
                                placeholder=" "
                              />{" "}
                              <label for="" class="form__label">
                                cvv code
                              </label>{" "}
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              {" "}
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                              />{" "}
                              <label for="" class="form__label">
                                name on the card
                              </label>{" "}
                            </div>
                          </div>
                          
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="btn btn-primary payment"> Make Payment </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
