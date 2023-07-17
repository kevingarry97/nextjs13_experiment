import Courses from "@/components/courses";

export default function Home() {
  return (
    <div>
      <h1>Hello, Kevin</h1>
      {/* @ts-expect-error Server Component */}
      <Courses />
    </div>
  );
}
