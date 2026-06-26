export const metadata = {
    title: "The scooter wasn't broken. The design was.",
    date: "2026-06-25",
    excerpt:
        "A scooter that refused to start turned into an unexpected lesson about interaction design. The machine knew exactly what was wrong—it simply chose not to tell me.",
};

export default function Post() {
    return (
        <>
            <p>
                Today I stopped for a smoke.
            </p>

            <p>
                As I got back onto the scooter, I turned the key, pressed the
                starter, and... nothing.
            </p>

            <p>
                No sound. No struggle. Just silence.
            </p>

            <p>
                My first reaction wasn't curiosity. It was panic.
            </p>

            <p>
                Not because the scooter had broken down—but because my dad
                might find out where I was.
            </p>

            <p>
                I tried again.
            </p>

            <p>
                Nothing.
            </p>

            <p>
                Maybe the battery?
            </p>

            <p>
                I looked at the dashboard. Everything seemed normal.
            </p>

            <p>
                Maybe the side stand?
            </p>

            <p>
                No warning.
            </p>

            <p>
                Maybe the fuel?
            </p>

            <p>
                The gauge still showed there was petrol left.
            </p>

            <p>
                I tried kick-starting the scooter over and over again until I
                was exhausted. Still nothing.
            </p>

            <p>
                By this point my mind wasn't thinking logically anymore. It was
                racing through worst-case scenarios. I even asked the nearby
                shopkeeper if he had a bottle of petrol I could borrow. He
                didn't.
            </p>

            <p>
                Then, almost by accident, I looked at the handlebar.
            </p>

            <p>
                <strong>The kill switch.</strong>
            </p>

            <p>
                It was in the OFF position. I must have brushed against it while
                parking and never noticed. What made it worse was how
                <strong> subtle it was</strong>. The switch itself was
                <strong> black</strong>, blending into the black plastic housing
                around it. There wasn't a bright red cap, no obvious contrast,
                nothing that drew my attention to the fact that the engine had
                been disabled.
            </p>

            <p>
                I flipped it back.
            </p>

            <p>
                The scooter started instantly.
            </p>

            <p>
                The scooter was never the problem.
            </p>

            <p>
                <strong>The interface was.</strong>
            </p>

            <p>
                As designers, we often think about making things beautiful or
                easy to use. But moments like this remind me that the real job
                of design is helping people understand <em>why</em> something
                isn't working.
            </p>

            <p>
                This scooter is filled with electronics.
            </p>

            <p>
                It tells me when the side stand is down. It flashes indicators.
                It warns me about fuel. It has diagnostic lights and digital
                readouts.
            </p>

            <p>
                But it never tells me the one thing that actually prevented the
                scooter from starting.
            </p>

            <p>
                A tiny switch on the handlebar silently disables the engine, yet
                the dashboard offers no explanation.
            </p>

            <p>
                Imagine if, instead of silence, the display simply said:
            </p>

            <blockquote>
                <p>
                    <strong>
                        Kill switch is OFF. Turn it ON to start the engine.
                    </strong>
                </p>
            </blockquote>

            <p>
                My entire experience would have lasted two seconds instead of
                ten anxious minutes.
            </p>

            <p>
                That made me question something else.
            </p>

            <p>
                <strong>
                    Why does a scooter even need a kill switch?
                </strong>
            </p>

            <p>
                On motorcycles, especially larger ones, the answer makes sense.
                In racing, off-roading, or emergency situations, instantly
                cutting the engine without taking your hands off the bars can be
                genuinely useful.
            </p>

            <p>
                But on an automatic scooter?
            </p>

            <p>
                You already have an ignition key. The rider isn't shifting
                gears. The number of situations where a kill switch is genuinely
                useful becomes much smaller.
            </p>

            <p>
                Yet the extra control remains, introducing another hidden state
                the rider has to remember.
            </p>

            <p>
                Every control we add carries a cost.
            </p>

            <p>
                Not just manufacturing cost.
            </p>

            <p>
                <strong>Cognitive cost.</strong>
            </p>

            <p>
                Every switch asks the rider to remember one more thing. Every
                hidden state creates another opportunity for confusion.
            </p>

            <p>
                The irony is that this wasn't a mechanical failure at all.
            </p>

            <p>
                <strong>It was a communication failure.</strong>
            </p>

            <p>
                The scooter knew exactly why it wouldn't start.
            </p>

            <p>
                It simply refused to tell me.
            </p>

            <p>
                Instead, it left me guessing between fuel, battery, engine
                problems, and expensive repairs.
            </p>

            <p>
                Machines often know far more than they communicate.
            </p>

            <p>
                Design is deciding what deserves to be communicated, and when.
            </p>

            <p>
                This experience reminded me that good design isn't about
                preventing every mistake.
            </p>

            <p>
                People will always make mistakes. We'll press the wrong button,
                leave switches in the wrong position, and forget things.
            </p>

            <p>
                Good design catches us before panic begins.
            </p>

            <p>
                Sometimes innovation isn't inventing a new feature.
            </p>

            <p>
                Sometimes it's adding one sentence:
            </p>

            <blockquote>
                <p>
                    <strong>"Kill switch is OFF."</strong>
                </p>
            </blockquote>

            <p>
                Because the difference between a broken machine and a broken
                experience is often just information.
            </p>
        </>
    );
}