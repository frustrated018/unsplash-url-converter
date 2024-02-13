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
