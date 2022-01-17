import Button from "components/button";
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
        <Button type="submit" title="Senden" />
        {isSent && (
          <p className="ml-4 text-white">
            Danke, deine Nachricht ist angekommen 🥳
          </p>
        )}
      </div>
    </form>
  );
}
