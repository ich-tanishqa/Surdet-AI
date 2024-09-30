import { Footer } from "@/components/footer";
import { Header } from "@/components/header";



const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <>
            <Header />
            <script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>65c9174fba6ee4f7ad6a7fd2,65c91741d9011844e3a6eb08</script>
            <main className="flex-1 -mt-12">
                {children}
            </main>
            <Footer />
        </>
     );
}
 
export default BrowseLayout;