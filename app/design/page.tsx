import Link from "next/link"; 

export default function Design() { 
    return ( 
        <>
            <h2>Design</h2>
            <section className="customer-journey">
                <h3>Customer Journey</h3>
                <p>The major stages of the customer journey often mirror the marketing funnel: </p>
                <ul>
                    <li><strong>Awareness:</strong> The stage to introduce our brand, product, or service when potential customers first discover it.</li>
                    <li><strong>Consideration:</strong> The stage to help potential customers evaluate our product or service when they compare it against the competitors.</li>
                    <li><strong>Decision:</strong> The stage to influence potential customers when they decide to purchase our product or service.</li>
                </ul>
            </section>
            <section className="modes-of-presentation">
                <h3>Modes of Presentation</h3>
                <p>To visualize and materialize abstract concepts, designers use visual languages and employ suitable modes of presentation including expression, representation and presentation to express their intentions.</p>
            </section>
            <section className="aesthetic-criticism">
                <h3>Theories of Aesthetic Criticism</h3>
                <p>There are three common aesthetic theories concerning different aesthetic qualities in art criticism: </p>
                <ul>
                    <li><strong>Imitationalism: </strong>Imitationalists think that the most important aesthetic qualities of an artwork is the literal qualities. The literal qualities are the realistic presentation of subject matter of an artwork. In their opinion, an artwork can be considered successful if it looks like and reminds the view of what they see in the reality. The Renaissance painter Leonardo da Vinci is a famous Imitationalist who claimed that the painting which is most like nature is the best.</li>
                    <li><strong>Formalism: </strong>In formalism​, an artwork is a significant form while formalists mainly concern with design qualities of an artwork. Significant form is a collection of visual elements and design principles that bring viewers aesthetic pleasure. The formalist Clive Bell stated that we need to bring nothing but a sense of form and colour to appreciate a work of art. The modern Post-Impressionist painter Cezanne is one of the well-known formalists who believed all forms can be simplified as geometric forms. </li>
                    <li><strong>Emotionalism: </strong>Emotionalists claim that no object can be considered art if it fails to arouse an emotional response in the viewer through the expressive qualities. The expressive qualities are qualities which convey ideas, moods, and feelings we can notice when we study the content of an artwork. The early medieval Chinese painter Gu Kaizhi can be viewed as an Emotionalist since he pointed out the importance of temperament over form.</li>
                </ul>
            </section>
            <section className="image-development-strategies">
                <h3>Image Development Strategies</h3>
                <p>There are various image development strategies such as imitation and deformation.</p>
                <p>In practice, deformation is achieved through simplification and exaggeration.</p>
            </section>
            <section className="icon-design">
                <h3>Icon Design</h3>
                <p>In a narrow sense, icon is a visual language which could be understood by designers and users in the graphic interface.</p>
                <p>In a broad sense, icons are graphical signs for indication which have features of highly concentrating, conveying information conveniently and remembering easily.</p>
                <p>The composition of icons are divided into two types: single element and multiple elements.</p>
            </section>
            <section className="harmony">
                <h3>Harmony</h3>
                <p>French colour scientist Chevreul proposed the theory of harmony that there are two types of harmony, similarity and contrast, which considered as the basis of color scheme.</p>
                <ul>
                    <li>Similarity</li>
                    <li>Contrast</li>
                </ul>
            </section>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    ); 
}