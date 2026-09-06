import Link from "next/link"; 

export default function BusinessAdministration() { 
    return (
        <>
            <h2>Business Administration</h2>
            <section className="management">
                <h3>Management</h3>
                <p>"Formal organization is the kind of cooperation that is conscious, deliberate, purposeful. The function of the executive are those of control, management, supervision, administration, in formal organizations. These functions are exercised not merely by high officials in such organizations but by all those who are in positions of control of whatever degree. ", American management theorist Chester Barnard mentioned in <em>The Functions of Executive</em>. </p>
                <p>Management is the process of guiding the corporate development by the POLC framework to achieve organizational goals efficiently and effectively.</p>
                <ul>
                    <li><strong>Planning: </strong>Anticipating potential opportunities and challenges and designning a plan to deal with them.</li>
                    <li><strong>Organizing: </strong>Coordinating and allocating resources required to implement the plan.</li>
                    <li><strong>Leading: </strong>Motivating and guiding personnel through the implementation process.</li>
                    <li><strong>Controlling: </strong>Reviewing results and making necessary adjustments.</li>
                </ul>
            </section>
            <section>
                <h3>Corporate Governance</h3>
                <p>Corporate governance refers to the set of rules, controls, policies, processes, and resolutions used to steer and oversee the corporate behaviors including direction, management and performance of a company.</p>
                <p>The core principles of corporate governance include accountability, fairness, transparency, responsibility and risk management.</p>
                <p>In agency theory, corporate governance is concerned with resolving conflicts of interest between principal (shareholders) and agent (managers) under conditions of information asymmetry and differing risk preferences which require heavy oversight.</p>
                <p>In stewardship theory, managers are seen as stewards whose interests are aligned with those of the owners (shareholders) while they are trusted to act in the best interests of the company.</p>

            </section>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    )
}