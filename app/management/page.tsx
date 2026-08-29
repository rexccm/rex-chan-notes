import Link from "next/link"; 

export default function Management() { 
    return (
        <>
            <h2>Management</h2>
            <p>"Formal organization is the kind of cooperation that is conscious, deliberate, purposeful. The function of the executive are those of control, management, supervision, administration, in formal organizations. These functions are exercised not merely by high officials in such organizations but by all those who are in positions of control of whatever degree. ", American management theorist Chester Barnard mentioned in <em>The Functions of Executive</em>. </p>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    )
}