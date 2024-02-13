"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, CopyIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function SubmissionArea() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");

  const [copyClicked, setCopyClicked] = useState(false);

  const convertUrl = () => {
    // Conversion logic

    const newUrl = originalUrl
      .replace("unsplash.com", "source.unsplash.com")
      .replace("photos/", "");

    // console.log(newUrl);

    //! Set the converted url
    setConvertedUrl(newUrl);
  };

  const copyUrl = () => {
    // Copy converted URL to clipboard
    setCopyClicked(true);
    navigator.clipboard.writeText(convertedUrl);
  };

  const performReset = () => {
    setOriginalUrl("");
    setConvertedUrl("");
    setCopyClicked(false);
  };

  return (
    <section className="my-10 space-y-5">
      <div className="flex flex-col md:flex-row w-2/3 mx-auto gap-2">
        <Input
          type="url"
          placeholder="Paste the url..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <Button variant="outline" onClick={convertUrl}>
          <UpdateIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex flex-col md:flex-row w-2/3 mx-auto gap-2">
        <Input placeholder="Converted Url" value={convertedUrl} readOnly />
        <Button variant="outline" onClick={copyUrl}>
          {copyClicked ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <CopyIcon className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="grid place-items-center">
        <Button variant="outline" onClick={performReset}>
          Reset
        </Button>
      </div>
    </section>
  );
}
