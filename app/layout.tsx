import './globals.css'
import NavBar from "./NavBar";
import Body from "./Body";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Test</title>
        </head>
        <body>
        <NavBar/>
        <Body>
            {children}
        </Body>
        </body>
        </html>
    )
}
