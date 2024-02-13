import { SubmissionArea } from "@/components/submissionArea";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <section className="h-auto lg:h-[50vh] w-[70%] bg-background rounded-lg border-2">
        <h2 className="text-4xl text-center mt-5">Unsplash Link Changer</h2>
        <div className="mt-2 text-center text-muted-foreground">
          Copy Link form{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            className="hover:text-primary underline"
          >
            unsplash
          </a>{" "}
          and paste it
        </div>
        <SubmissionArea />
      </section>
    </main>
  );
}
