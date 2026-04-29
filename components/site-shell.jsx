import Nav from "@/components/nav";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function SiteShell({ children }) {
  return (
    <div
      data-theme="warm"
      data-fonts="editorial"
      data-photos="on"
      style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100%" }}
    >
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
