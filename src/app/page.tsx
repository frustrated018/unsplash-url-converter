import { SubmissionArea } from "@/components/submissionArea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* <section className="h-auto lg:h-[50vh] w-[67%] bg-background rounded-lg border-2">
        <h2 className="text-2xl lg:text-4xl text-center mt-5 font-semibold">
          Unsplash URL Converter
        </h2>
        <div className="mt-2 text-sm md:text-base text-center text-muted-foreground">
          Copy image url form{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            className="hover:text-primary underline"
          >
            unsplash.com
          </a>{" "}
          and paste it in the form below.
        </div>
        <SubmissionArea />
      </section> */}

      <Card>
        <CardHeader>
          <CardTitle>Unsplash URL Converter</CardTitle>
          <CardDescription>
            {" "}
            Copy image url form{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              className="hover:text-primary underline"
            >
              unsplash.com
            </a>{" "}
            and paste it in the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionArea />
        </CardContent>
      </Card>
    </main>
  );
}
