import React, { useState } from "react"
// import Layout from "../components/layout/layout"
// import SEO from "../components/seo"
import axios from "axios"
import settings from "../../settings.json"
import Img from "gatsby-image"
import { useGallary } from "../../hooks/gallary-hook"
import sparePartsJson from "../../gallaries/spare-parts/spare-parts.json"
import diction from "../../diction.json"

function CasioService() {
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [sparePartsDetails, setSparePartsDetails] = useState("")

  const { allImagesFixed } = useGallary("spareParts")

  const resetForm = () => {
    setName("")
    setMobile("")
    setEmail("")
    setSparePartsDetails("")
  }

  const sendEmail = (evt) => {
    evt.preventDefault()
    const data = {
      subject: settings.subject,
      text: "From: ".concat(
        email,
        "\r\n",
        "Name: ",
        name,
        "\r\n",
        "Mobile: ",
        mobile,
        "\r\n",
        "Spare-Parts: ",
        sparePartsDetails
      ),
    }

    axios
      .post(settings.emailHost, data)
      .then((res) => resetForm())
      .catch((err) => console.log(err))
  }

  function getSparePartsImage() {
    const allImages = []
    sparePartsJson.forEach((j, index) => {
      allImages.push(
        <div key={index} className="image">
          <Img fixed={allImagesFixed[j.image]}></Img>
          <div className="image-name">{j.name}</div>
        </div>
      )
    })
    return allImages
  }

  return (
    <div className="casio-service-container">
      <div className="header">
        Capital Electronics: Casio Authorized Service Center
      </div>
      We repair and service Casio products such as Calculators, Music
      instruments and Watches, projectors in-warranty and out of warranty.
      <div>
        {" "}
        <b>
          We sell original Casio spare parts for Casio musical instruments and
          watches at best prices.
        </b>{" "}
      </div>
      For more information please email us at{" "}
      <strong>capitalch@gmail.com</strong>
      <div className="contact-image-container">
        <div className="image-container">{getSparePartsImage()}</div>
        <div className="contact-container">
          <form onSubmit={sendEmail}>
            <table className="contact-table">
              <tbody>
                <tr>
                  <td>
                    <label>
                      Name <span className="highlight">*</span>
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Mobile <span className="highlight">*</span>
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      required
                      name="mobile"
                      minLength={10}
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Email <span className="highlight">*</span>
                    </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      required
                      pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Spare Parts <span className="highlight">*</span>
                    </label>
                  </td>
                  <td>
                    <textarea
                      rows={6}
                      required
                      name="sparePartsDetails"
                      value={sparePartsDetails}
                      onChange={(e) => setSparePartsDetails(e.target.value)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="submit" className="mailButton">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="notes">
            {" "}
            Fields marked with <span className="highlight">*</span> are required
          </div>
        </div>
      </div>
    </div>
  )
}

export {CasioService}
