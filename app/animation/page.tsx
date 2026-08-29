import Link from "next/link"; 

export default function Animation() {
    return ( 
        <>
            <h2>Animation</h2>
            <section>
                <h3>Tweening</h3>
                <p>"By increasing the number of inbetweens, the movement will become much smoother and more fluid. The golden rule of animation is determine the exact middle drawing (breakdown) first. This is the basic of basics for all animation. The quality of this middle drawing determines the success of the entire inbetween sequence. Keep splitting themby finding the middle, then the next middle.", Japanese animator Yasuo Muroi (室井康雄) said.</p>
                <p>"Inbetween is not just about mechanically dividing the space between two keys. You must maintain the mindset that we are creating a complete, well-crafted standalone drawing.", <em>The Animator's Workbook: The First Step to Understanding the Laws of Motion</em> published by The Association of Japanese Animations (AJA) mentioned.</p>
                <h3>Observation</h3>
                <p>"For movements we don't comprehend, take an interest in why it behaves that way, and observe them extensively. The best practice is to observe skilled artists' drawings frame-by-frame and copy them.", Yasuo Muroi said.</p>
                <h3>Physics</h3>
                <p>AJA's <em>The Animator's Workbook</em> wrote, "It is necessary to understand the rules of physics beforehand — such as gravity, air resistance, friction, and the law of inertia."</p>
                <h3>Movement</h3>
                <p><em>The Animator's Workbook</em> wrote, "Thinking about human body movement means aiming for a natual acting. The key here is to understand the center of gravity of the human body. First, we need to understand joints such as the hands and feet. In particular, the head is very heavy and vulnerable to external damage. Notice how the waist and body constantly act as a cushion to protect the head. Additionally, animals have an instinct and habit of unconsciously seeking comfortable, fatigue-free movements. Good movement might be movement that doesn't tire you out."</p>
                <p>"Animation will look like it's moving even if you just draw it haphazardly. However, if you want it to move smoothly, maintain an awareness of the volume. By firmly grounding the animation in physical logic, it will give the movement real persuasiveness and credibility. Humans move by utilizing our center of gravity. If you draw a movement using the linear way, it ends up lacking a sense of gravity. The larger and more pronounced the trajectory we plot, the more the movement will successfully convey a realistic sense of gravity. For moving characters, always draw with the premise that the character is going to move.", Yasuo Muroi (室井康雄) mentioned.</p>
                <h3>Acting for Animators</h3>
                <p>"Acting is the parallel between you and the stage or movie actor — the difference being, you act with a pencil, he acts with his body. Both the background, training, and preparation are the same — the knowledge and understanding of human nature. The audience goes to see cartoons to be entertained. They are interested in what happens. But we who fabricate them also have to know why and how. So we concern ourselves with why and how people act the way they do under the multitude of situations we subject them to in our stories.", American animator Walt Stanchfield wrote.</p>
            </section>
            <Link 
                href="/"
            >
                Back to Home
            </Link>
        </>
    );  
}