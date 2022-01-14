import Input from "components/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const initialData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [isSent, setIsSent] = useState(false);
  const { name, email, phone, message } = data;
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const is = !!name && !!email && !!phone && !!message;
    setIsValid(is);
  }, [name, email, phone, message]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;
    const value = e.target.value;

    const newData = {
      ...data,
      [field]: value,
    };

    setData(newData);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) return;

    const body = JSON.stringify({ text: JSON.stringify(data) });

    const reqInit: RequestInit = {
      method: "POST",
      body,
      headers: new Headers({
        "Content-type": "application/x-www-form-urlencoded",
      }),
    };
    await fetch(
      "https://hooks.slack.com/services/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",
      reqInit
    );
    setIsSent(true);
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
          <Input
            value={name}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            value={email}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="E-Mail"
            onChange={handleChange}
          />
          <Input
            value={phone}
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            placeholder="Telefon"
            onChange={handleChange}
          />
          <Input
            value={message}
            type="textarea"
            id="message"
            name="message"
            placeholder="Nachricht"
            onChange={handleChange}
          />

          <div className="flex justify-between items-end">
            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Senden
            </button>
            {isSent && (
              <p className="ml-4">Danke, deine Nachricht ist angekommen 🥳</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
