import Link from "next/link"; 

export default function Frontend() { 
    return ( 
        <>
            <h2>Frontend Web Development</h2>
            <section className="modularity">
                <h3>Modularity</h3>
                <p>A modular architecture splits an application into smaller, independent, self-contained and reusable components.</p>
                <p>The following are the benefits of modularity: </p>
                <ul>
                    <li><strong>Scalability: </strong>The project stays clean and manageable as it grows.</li>
                    <li><strong>Testability: </strong>Every component can be tested in isolation.</li>
                    <li><strong>Maintainability: </strong>The codebase remains easy to understand and modify after a while.</li>
                </ul>
            </section>
            <section className="accessibility">
                <h3>Accessibility</h3>
                <p></p>
            </section>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    ); 
}