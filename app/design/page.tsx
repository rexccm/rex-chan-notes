import Link from "next/link"; 

export default function Design() { 
    return ( 
        <>
            <h2>Design</h2>
            <section>
                <h3>Image Development Strategies</h3>
                <p>There are various image development strategies such as imitation and deformation.</p>
                <p>In practice, deformation is achieved through simplification and exaggeration.</p>
            </section>
            <section>
                <h3>Icon Design</h3>
                <p>In a narrow sense, icon is a visual language which could be understood by designers and users in the graphic interface.</p>
                <p>In a broad sense, icons are graphical signs for indication which have features of highly concentrating, conveying information conveniently and remembering easily.</p>
                <p>The composition of icons are divided into two types: single element and multiple elements.</p>
            </section>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    ); 
}