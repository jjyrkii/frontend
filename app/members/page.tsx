export type Member = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function getData(): Promise<Member[]> {
    const res = await fetch("http://localhost:8080/members/");
    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
}

async function Members() {
    const data = await getData();
    return (
        <div>
            <h1 className={"font-bold text-3xl text-center p-3"}>Members Page</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((m: Member) =>
                    <tr key={m.id}>
                        <td>{m.id}</td>
                        <td>{m.name}</td>
                        <td>{m.email}</td>
                        <td>{m.phone}</td>
                        <td><a href={"/members/" + m.id}>View</a></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Members;