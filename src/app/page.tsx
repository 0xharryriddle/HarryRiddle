import Introduction from "@/components/home/Introduction";
import OpenSourceProject from "@/components/home/OpenSourceProject";
import Timeline from "@/components/home/Timeline";
import PostsRecently from "@/components/home/PostsRecently";

export default function Home() {
  return (
    <main>
      <Introduction />
      <OpenSourceProject />
      <PostsRecently />
      <Timeline />
    </main>
  );
}
