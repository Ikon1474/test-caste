
import Link from "next/link";

export default function Home() {
  const certNo = "90500001334816";
  return (
    <main style={{padding:40}}>
      <h1>Certificate Demo</h1>
      <Link href={`/verify/${certNo}`}>View Certificate</Link>
    </main>
  );
}
