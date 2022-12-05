import {Member} from "../page";

interface Params {
    id: number;
}

async function getData(id: number): Promise<Member> {
    const res = await fetch("http://localhost:8080/members/" + id);
    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
}

async function ViewMember({params}: { params: Params }) {
    const data = await getData(params.id);
    return (
        <div>
            <h1>ID: {data.id}</h1>
            <h1>Name: {data.name}</h1>
            <h1>Email: {data.email}</h1>
            <h1>Phone: {data.phone}</h1>
            <a className={"text-3xl"} href={"./"}>Back</a>
        </div>
    )
}

export default ViewMember;