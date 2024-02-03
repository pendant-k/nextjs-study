export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            &copy; Next.js is awesome!
        </div>
    );
}

// 실제로는 다음과 같이 렌더링 /about-us
{
    /* <Layout>
    <AboutUs />
</Layout> */
}
