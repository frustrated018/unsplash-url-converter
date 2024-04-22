import { Meteors } from "@/components/Meteors";
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
    <main className="min-h-screen w-full">
      <section className="absolute left-[30%] top-[30%] overflow-hidden">
        <Card className="relative">
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
        <Meteors />
      </section>
    </main>
  );
}
