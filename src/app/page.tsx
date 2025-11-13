import Main from "@/components/main";
import SideBar from "@/components/SideBar";

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-100">
      <header className="flex justify-between p-2">
        <span className="font-mono">sih.log</span>
      </header>
      <Main />
      <SideBar />
    </div>
  );
}
