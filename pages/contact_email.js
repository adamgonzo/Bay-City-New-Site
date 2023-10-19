import { useState } from "react";
import { Telephone } from "@/images/icons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pb-4 pt-20">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Contact Us for Your Glass Needs
        </h1>
        <p className="text-sm mb-3 text-center text-gray-600">
          Reach out to us with details about your project, and we&aposll provide
          you with expert advice and a precise estimate tailored to your
          requirements.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="w-full border p-3 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              className="w-full border p-3 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="w-full border p-3 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we assist you?"
              rows="5"
              required
            />
          </div>

          <button
            className="w-full bg-blue-500 text-white font-bold sm:text-sm md:text-md lg:text-lg p-3 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          <button
            className="w-full bg-blue-200 text-white p-3 mt-3 rounded-md hover-bg-blue-600 transition duration-300"
            type="button"
          >
            <a
              href="tel:+15102587839"
              className="flex justify-center no-underline gap-2 font-bold"
            >
              <div className="flex-col pt-1 text-center">
                <Telephone />{" "}
              </div>
              <div href="tel:+15102587839" className="text-blue-600 font-bold text-md">
                Call Now
              </div>
            </a>
          </button>
        </form>

        {submitted && (
          <div className="mt-4 p-3 bg-green-100 text-green-600 rounded-lg text-center">
            Thank you! We&apos;ll be in touch shortly.
          </div>
        )}
      </div>
    </div>
  );
}
