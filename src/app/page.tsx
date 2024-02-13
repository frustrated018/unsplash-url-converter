import { SubmissionArea } from "@/components/submissionArea";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <section className="h-auto lg:h-[70vh] w-[70%] bg-background rounded-lg border-2">
        <h2 className="text-4xl text-center mt-5">Unsplash URL Changer</h2>
        <SubmissionArea />
      </section>
    </main>
  );
}
