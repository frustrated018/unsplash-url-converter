import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyIcon, UpdateIcon } from "@radix-ui/react-icons";

export function SubmissionArea() {
  return (
    <section className="mt-10 space-y-5">
      <div className="flex w-2/3 mx-auto space-x-2">
        <Input type="url" placeholder="Paste the url..." />
        <Button type="submit">
          <UpdateIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex w-2/3 mx-auto space-x-2">
        <Input placeholder="Converted Url" />
        <Button>
            <CopyIcon className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
