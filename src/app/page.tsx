import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
