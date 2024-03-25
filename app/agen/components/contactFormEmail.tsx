import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function ContactEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    const fileInput = document.getElementById("file") as HTMLInputElement;
    const file =
      fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null;
    if (file) {
      formData.append("file", file);
    }
    try {
      await axios.post(process.env.API_URL + "/api/email", formData);
      alert("Email sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      if (fileInput.value) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-5">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-72 mb-5"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-72 mb-5"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-96 mb-5"
          />
          <label htmlFor="file">CV:</label>
          <input type="file" id="file" name="file" />
          <Button type="submit" className="w-24 mt-5">
            Send
          </Button>
        </div>
      </form>
    </>
  );
}
