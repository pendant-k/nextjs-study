import { Metadata } from "next";
import Navigation from "../components/navigation";

// metadata에 대한 template도 정의하여 사용할 수 있음 -> Good
export const metadata: Metadata = {
    title: {
        template: "%s | Next Movies",
        default: "Next Movies",
    },
    description: "The best movies on the best framework",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}

// 실제로는 다음과 같이 렌더링 /about-us
{
    /* <Layout>
    <AboutUs />
</Layout> */
}
