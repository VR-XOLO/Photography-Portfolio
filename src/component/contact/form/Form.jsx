import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        send("service_fencpsg", "template_ettmfiq"   , data, "IjRVkDP93YlodVf-b")
            .then((response) => {
                console.log("SUCCESS", response.status, response.text);
                formSucess();
            })
            .catch((err) => {
                console.log("FAILED", err);
            });
    };

    const formSucess = () => {
        toast("thanks for submitting your query!");
        document.getElementById("queryForm").reset();
    };

    return (
        <>
            <div className="query-form">
                <ToastContainer />
                <form
                    id="queryForm"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="input-field">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            {...register("from_name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.from_name?.message && (
                            <p className="errors">{errors.from_name?.message}</p>
                        )}
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            name="reply_to"
                            placeholder="Email"
                            {...register("reply_to", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invaild Email Address",
                                },
                            })}
                        />
                         {errors.reply_to?.message && (
                            <p className="errors">{errors.reply_to?.message}</p>
                        )}
                    </div>
                    <div className="input-field">
                        <input
                            type="number"
                            name="phone_number"
                            placeholder="Phone"
                            {...register("phone_number", {
                                required: "Phone number is required",
                                minLength: {
                                    value: 8,
                                    message: "Phone number is not valid",
                                },
                                maxLength:{
                                    value: 10,
                                    message :"Phone number must be under 10 digits "
                                }
                            })}
                        />
                          {errors.phone_number?.message && (
                              <p className="errors">{errors.phone_number?.message}</p>
                          )}
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            {...register("subject", {
                                required: "Subject number is required",
                                minLength: {
                                    value: 10,
                                    message: "Minimum 10 characters required",
                                },
                            })}
                        />
                         {errors.subject?.message && (
                              <p className="errors">{errors.subject?.message}</p>
                          )}
                    </div>

                    <div className="input-field full-width">
                        <textarea
                            className="textarea"
                            name="message"
                            placeholder="Your Message"
                            {...register("message", {
                                required: "Subject number is required",
                                minLength: {
                                    value: 20,
                                    message: "Minimum 20 characters required",
                                },
                                maxLength: {
                                    value: 500,
                                    message: "Maximum 500 characters required",
                                },
                            })}
                        />
                        {errors.message?.message && (
                              <p className="errors">{errors.message?.message}</p>
                          )}
                    </div>
                    <button type="submit" className="aaquib">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;
