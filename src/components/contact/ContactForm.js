import { useState, useEffect } from "react";
import "./contact.css";
import { toast } from "react-toastify";
import API from "./api";
const toastConfig = {
  position: "top-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
export default function ContactForm({ scarabPosition, color }) {
  const handleSubmit = async () => {
    try {
      let fields = ["name", "email", "phone", "message"];
      let contactObj = {};
      fields.map((field) => {
        let value = document.getElementById(field).value;
        contactObj[field] = value;
      });
      let contactEventObj = {
        actor_email: contactObj.email,
        actor_name: contactObj.name,
        target_name: contactObj.message,
        message: contactObj.message,
        group: "https://mazonsoliman.me",
        location: contactObj.phone,
        action: {
          name: "contactMsg_mazensoliman.me",
        },
        occurred_at: new Date(),
        metadata: JSON.stringify({ developed_by: "MAZOONIT" }),
      };
      await API.post("/events", {
        ...contactEventObj,
      });
      toast("🦄 Thank you for contacting me!", toastConfig);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong :(", toastConfig);
    }
  };
  let devs = [
    { color: "lightgreen" },
    { color: "grey" },
    { color: "blue" },
    { color: "skyblue" },
  ];
  const [id, setId] = useState(null);
  const handleActive = (e) => {
    setId(e.target.id);
    e.target.style.backgroundColor = "#f00";
  };
  return (
    <>
      <div
        id="contactDev"
        style={{
          height: "400px",
          width: "450px",
          borderRadius: "10px",
          backgroundColor: color,
          padding: "20px",
          paddingTop: "40px",
          position: "absolute",
          left: 100,
          top: scarabPosition.z < 300 ? 80 : -500,
          opacity: 0.9,
          zIndex: 5,
          textAlign: "center",
        }}
      >
        <input type="text" placeholder="Name" id="name" />
        <br />
        <input type="email" placeholder="Email" id="email" />
        <br />
        <input type="text" placeholder="Phone" id="phone" />
        <br />
        <textarea placeholder="Write your message." id="message" />
        <br />
        <button
          type="submit"
          className="button-54"
          onClick={() => {
            handleSubmit();
          }}
        >
          Send
        </button>
        <div style={{ textAlign: "right", marginTop: "15px" }}>
          <img src="/bird.png" style={{ height: "50px" }} />
        </div>
        {/*
        <dev>
          <dev
            style={{
              backgroundColor: "#ccc",
              height: "100px",
              width: "300px",
              display: "block",
              margin: "auto",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div class="in">
              <input />
            </div>
            <button class="in but">Filters</button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "stretch",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p class="ap">ACTOR</p>
              </div>
              <div>
                <p class="ap">ACTION</p>
              </div>
              <div>
                <p class="ap">DATE</p>
              </div>
            </div>
          </dev>
          {devs.map((dev, index) => {
            if (id == index) {
              return (
                <div
                  class="d accc"
                  style={{ backgroundColor: dev.color }}
                ></div>
              );
            } else {
              return (
                <dev
                  class="d"
                  style={{ backgroundColor: dev.color }}
                  onClick={handleActive}
                  id={index}
                ></dev>
              );
            }
          })}
          <dev
            style={{
              backgroundColor: "#ccc",
              height: "30px",
              width: "300px",
              display: "block",
              margin: "auto",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              padding: "5px",
            }}
          >
            <p style={{ margin: 0, fontSize: "smaller" }}>LOAD MORE</p>
          </dev>
        </dev>
          */}
      </div>
    </>
  );
}
