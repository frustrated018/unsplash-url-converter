"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, CopyIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function SubmissionArea() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");
  const [copyClicked, setCopyClicked] = useState(false);

  const convertUrl = () => {
    // Validation logic for URL
    if (
      !originalUrl.includes("unsplash.com") ||
      !originalUrl.includes("photos/")
    ) {
      // Handle invalid URL
      toast.error("Please enter a valid Unsplash photo URL");
      return;
    }

    //! Conversion logic
    const newUrl = originalUrl
      .replace("unsplash.com", "source.unsplash.com")
      .replace("photos/", "");

    // console.log(newUrl);

    //! Set the converted url
    setConvertedUrl(newUrl);
  };

  const copyUrl = async () => {
    // Copy converted URL to clipboard
    setCopyClicked(true);
    await navigator.clipboard.writeText(convertedUrl);
    toast.success("Copied to clipboard.");

    // Resetting the form afterwards with 2 second delay
    setTimeout(() => {
      setOriginalUrl("");
      setConvertedUrl("");
      setCopyClicked(false);
    }, 3000);
  };

  return (
    <section className="my-5 space-y-5">
      <div className="w-[90%] mx-auto">
        <Label>Copied URL:</Label>
        <div className="flex flex-col md:flex-row gap-2">
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
      </div>
      <div className="w-[90%] mx-auto">
        <Label htmlFor="converted">Converted URL:</Label>
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            id="converted"
            placeholder="Click to copy"
            value={convertedUrl}
            readOnly
          />
          <Button variant="outline" onClick={copyUrl}>
            {copyClicked ? (
              <CheckIcon className="h-5 w-5 text-green-500" />
            ) : (
              <CopyIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
