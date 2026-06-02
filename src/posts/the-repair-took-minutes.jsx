export const metadata = {
    title: "The repair took minutes",
    excerpt:
        "A bent brake line took minutes to fix, but weeks to diagnose. Watching a veteran Jeep mechanic work through the problem reminded me that finding the right problem is often harder than solving it.",
    date: "2026-06-02",
};

function ImageWithCaption({ src, alt, caption }) {
    return (
        <figure style={{
            margin: "2rem auto",
            maxWidth: "520px",
        }}>
            <div style={{
                borderRadius: "8px",
                overflow: "hidden",
                lineHeight: 0,
            }}>
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: "100%",
                        maxHeight: "340px",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </div>
            <figcaption style={{
                fontSize: "0.78rem",
                color: "#888",
                fontStyle: "italic",
                lineHeight: "1.5",
                padding: "0.5rem 0.75rem",
                borderLeft: "2px solid #ddd",
                marginTop: "0.6rem",
            }}>
                {caption}
            </figcaption>
        </figure>
    );
}

export default function Post() {
    return (
        <>
            <p>
                Today I took our family's Jeep back to Ashokettan's workshop.
                Around here, if you own an old Jeep, there's a good chance you
                know who he is. He's been working on them for decades. The kind
                of person people call when a problem refuses to go away. Over
                the years, he has become the go-to mechanic for Jeeps in our
                area, building a reputation not just for repairing them, but
                for understanding them.
            </p>

            <p>
                A week ago, he had worked on our brakes. There was an issue with
                the pedal feel, and after the repair everything seemed fine. But
                over the next few days it became clear that the problem hadn't
                really been solved. The first press of the brake pedal would go
                almost all the way down with very little braking force. Press it
                a second time and the brakes would feel normal. Something wasn't
                right.
            </p>

            <p>
                So today I went back.
            </p>

            <ImageWithCaption
                src="/posts/the-repair-took-minutes/1.jpg"
                alt="Clock inside Ashokettan's workshop"
                caption="A clock that has probably watched thousands of repairs—and just as many wrong diagnoses."
            />

            <p>
                Ashokettan inspected the Jeep, made a few adjustments, and took
                it for a test drive. When he returned, he seemed confident that
                the issue had been resolved. Years of experience had probably
                taught him to recognize patterns quickly. The symptoms matched
                things he had seen before, and the fix seemed reasonable.
            </p>

            <p>
                But when I drove it myself, the problem was still there.
            </p>

            <p>
                Back to the workshop.
            </p>

            <p>
                After some more investigation, he suspected the hydraulic master
                cylinder. The diagnosis made sense. The symptoms pointed in that
                direction, and replacing it seemed like the logical next step.
                So we did.
            </p>

            <p>
                ₹2500 later, the new part was installed.
            </p>

            <p>
                The problem remained exactly the same.
            </p>

            <ImageWithCaption
                src="/posts/the-repair-took-minutes/2.jpg"
                alt="Ashokettan working on the Jeep"
                caption="Decades of experience don't eliminate uncertainty. They simply provide better places to start looking."
            />

            <p>
                At that moment, I found the situation strangely fascinating.
                Here was someone who had spent decades working on Jeeps. Someone
                people trusted because of his experience. Yet today, he couldn't
                figure out the problem.
            </p>

            <p>
                We often imagine experts as people who always know the answer.
                We picture mastery as a state where uncertainty disappears. We
                assume that experience eventually removes doubt.
            </p>

            <p>
                But reality is rarely that neat.
            </p>

            <p>
                Expertise doesn't eliminate uncertainty. It simply improves your
                odds.
            </p>

            <p>
                An expert isn't someone who always knows the answer. An expert
                simply has a better understanding of where to look, which
                assumptions to test, and which possibilities are more likely
                than others. Most of the time, that leads them to the right
                answer faster than everyone else.
            </p>

            <p>
                But not always.
            </p>

            <p>
                Sometimes a problem refuses to fit neatly into previous
                experience. Sometimes the obvious explanation turns out to be
                wrong. Sometimes replacing a part solves nothing. Sometimes the
                machine keeps its secrets.
            </p>

            <ImageWithCaption
                src="/posts/the-repair-took-minutes/3.jpg"
                alt="A repaired stool in the workshop"
                caption="Nothing here was thrown away at the first sign of failure."
            />

            <p>
                Later that day, Ashokettan called.
            </p>

            <p>
                The problem had finally been found.
            </p>

            <p>
                It wasn't the master cylinder. It wasn't any of the larger,
                more expensive components we had suspected. It was a bent pipe
                in the brake line. Because of the bend, the hydraulic fluid
                wasn't flowing the way it should.
            </p>

            <p>
                The fix took only a few minutes.
            </p>

            <p>
                Weeks of uncertainty. Multiple inspections. Test drives. A
                replaced component. Countless assumptions.
            </p>

            <p>
                And the actual solution took minutes.
            </p>

            <p>
                That struck me more than the repair itself.
            </p>

            <p>
                We often judge problems by the effort required to fix them. But
                in reality, the difficult part is often discovering what the
                problem actually is. Once the cause becomes visible, the
                solution can seem almost embarrassingly simple.
            </p>

            <p>
                The same thing happens in design. Teams spend months solving
                symptoms instead of causes. We redesign interfaces when the
                issue is trust. We add features when the issue is clarity. We
                improve performance when the issue is discoverability.
            </p>

            <p>
                Once the real problem is understood, the solution often feels
                obvious in hindsight.
            </p>

            <p>
                Looking back, what impressed me wasn't that Ashokettan got the
                diagnosis wrong. It was that he kept searching. Decades of
                experience didn't give him instant answers, but they gave him
                the persistence to keep eliminating possibilities until the
                truth revealed itself.
            </p>

            <p>
                In the end, the repair took minutes.
            </p>

            <p>
                Understanding the problem took weeks.
            </p>

            <p>
                And maybe that's what expertise really is. Not always knowing
                the answer, but knowing how to keep looking for it.
            </p>
        </>
    );
}