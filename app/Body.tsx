interface Props {
    children: React.ReactNode;
}

export default function Body(props: Props) {
    return (
        <div className="min-h-full">
                <header className="bg-white shadow">
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {props.children}
                    </div>
                </main>
        </div>
)
}