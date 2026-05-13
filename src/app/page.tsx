import Image from "next/image";
import heroImage from "../../image.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[clamp(320px,45vw,680px)] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt="Homepage hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>
    </main>
  );
}
