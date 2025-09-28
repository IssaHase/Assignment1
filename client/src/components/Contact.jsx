import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Last Name
          <input
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Contact Number
          <input name="phone" value={form.phone} onChange={onChange} />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            required
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
