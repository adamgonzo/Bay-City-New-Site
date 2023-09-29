import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setLoading(false);

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="w-full border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full border p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <textarea
            className="w-full border p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {submitted && (
        <div className="p-3 bg-green-100 text-green-600 rounded-lg mt-4">
          Thank you! Your message has been sent.
        </div>
      )}
    </div>
  );
}
