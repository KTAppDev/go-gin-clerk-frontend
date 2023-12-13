import { UserButton } from "@clerk/nextjs";
import { getTokenServer } from "./lib/getTokenServer";
export default async function Home() {
  let data = await getTokenServer();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lets Gooo Baby!!</h1>
      <UserButton afterSignOutUrl="/" />
      <div className="text-2xl">{JSON.stringify(data)}</div>
    </main>
  );
}
