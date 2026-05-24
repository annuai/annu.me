import React, { useEffect, useRef } from 'react';

export const metadata = {
    title: 'A daydream about robots and tomatoes',
    date: '2026-05-24',
    excerpt:
        'A daydream about eternal.ag, greenhouse robots, and why some companies get under your skin.',
};

function HLSVideo({ src, ...props }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        } else {
            import('https://cdn.jsdelivr.net/npm/hls.js@1/dist/hls.min.mjs').then(({ default: Hls }) => {
                if (Hls.isSupported()) {
                    const hls = new Hls();
                    hls.loadSource(src);
                    hls.attachMedia(video);
                    return () => hls.destroy();
                }
            });
        }
    }, [src]);

    return <video ref={videoRef} {...props} />;
}

export default function EternalAgObsession() {
    return (
        <>
            <p>
                There's a company I keep thinking about. I'll be in the middle of something — making tea,
                staring at a half-finished CAD model — and my brain just drifts back to them.
            </p>

            <p>
                The company is{' '}
                <a href="https://eternal.ag" target="_blank" rel="noopener noreferrer">eternal.ag</a>.
                They build fully autonomous harvesting robots for greenhouses. Their tagline is "building
                resilience into food production." I applied for their product designer role.
            </p>

            <p>I'm writing this anyway.</p>

            <HLSVideo
                src="https://assets-eternal.com/video/full_res_1-hls.c555cfe44aca/playlist.m3u8"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0 0.5rem' }}
            />
            <p style={{ fontSize: '13px', color: 'var(--color-text-tertiary)', margin: '0 0 1.5rem', fontStyle: 'italic' }}>
                video sourced from <a href="https://eternal.ag" target="_blank" rel="noopener noreferrer">eternal.ag</a> official website
            </p>

            <h2>What They're Building</h2>

            <p>
                What they're doing is, on the surface, pretty legible: greenhouse labour in Europe has
                dropped by nearly 30% since 2010. Someone has to pick the tomatoes. If humans increasingly
                won't — or can't — a robot has to. eternal.ag's answer is Harvester, a fully autonomous
                robot that runs up to 22 hours a day, uses AI to identify and pick produce, and feeds every
                action back into a system that keeps getting better.
            </p>

            <p>
                They train and validate in virtual greenhouses first — cutting iteration cycles from months
                to days — then deploy into the real thing. Every deployed robot becomes a data point. The
                system learns. It scales. By 2040, they want no manual labour in greenhouses at all.
            </p>

            <h2>The Tagline That Won't Leave Me Alone</h2>

            <p>
                "Building resilience into food production." It's not a tagline. It's a design brief.
            </p>

            <p>
                What does resilience look like as a physical object? How do you design a machine that works
                reliably in a greenhouse — humid, organic, variable — and keeps working even when things go
                wrong? How does it feel to a grower who has to trust it completely, day after day, without
                babysitting it?
            </p>

            <p>
                These are the questions I find myself sketching around. Not because I was asked to, but
                because the problem is genuinely fascinating.
            </p>

            <h2>Why I Think I'm the Right Kind of Wrong Fit</h2>

            <p>
                My grad project was building a 3D printer from scratch. Not designing one — building one,
                from a BOM I wrote myself, with components I sourced for cost, with tolerances I had to
                actually hit. It taught me that a machine is a negotiation: between what you want it to do,
                what materials and physics will allow, and what a real person can actually live with. You
                can't render your way out of a bad kinematic decision.
            </p>

            <p>
                A harvesting robot is the same negotiation, at higher stakes. The crop doesn't cooperate.
                The greenhouse layout varies. Every design decision — the gripper geometry, the sensor
                placement, the way the machine communicates its status — has to work in the real world.
                Not in a render. Not in a virtual greenhouse. In the actual one, at 5am, when no one is
                watching.
            </p>

            <h2>The Part I Keep Coming Back To</h2>

            <p>
                eternal.ag's platform is modular. The plan isn't just to harvest tomatoes — it's to build
                something that can expand to other crops, other tasks, other greenhouses. That's a systems
                design problem as much as a product design problem. And systems design is the kind of work
                where getting the physical and digital layers to talk to each other — really talk, not just
                coexist — is the hardest thing to get right.
            </p>

            <h2>Closer to Home Than I Expected</h2>

            <p>
                Today I was working with copra. My family runs a small business converting coconuts to
                copra — they've been doing it for years. I grew up watching it happen, and somewhere in the
                middle of today I found myself thinking: why isn't there a machine for this?
            </p>

            <p>
                My dad did invest in one small step forward — a dryer, an oven-like machine that dries the
                copra instead of sun drying it. When I was smaller, we used to lay them out one by one
                under the sun. At least a thousand pieces a day, placed in a straight line. It was the kind
                of work that is hard to explain to someone who hasn't done it — repetitive, physical,
                unrelenting. The dryer changed that. One machine, one decision, and a whole layer of labour
                just disappeared.
            </p>

            <p>
                But the rest of it is still manual. The cracking, the extraction — getting the copra and
                the <em>pongu</em> (the white edible sprout that grows inside a mature coconut) out cleanly,
                without damage, at any kind of scale. Nobody has made a machine for that yet, as far as I
                know. And I've been thinking about why. The coconut is variable. The interior geometry
                changes. The sprout is delicate. These are exactly the kinds of problems that make
                automation hard — and exactly the kinds of problems eternal.ag is learning to solve for
                tomatoes.
            </p>

            <p>
                I don't know if they'll come back to me. Probably not. But I find myself thinking about
                the grower's experience, about what it feels like to hand trust over to a machine, about
                what the robot does when something goes wrong and a human needs to step in. I'm thinking
                about it because the problem is real — food security, climate pressure, the slow erosion
                of agricultural labour — and eternal.ag is one of the few companies trying to{' '}
                <em>design</em> its way through those problems, not around them.
            </p>

            <p>
                And maybe I'm drawn to it because I've seen what even one small machine can change.
                What a thousand coconuts a day looks like before and after someone decides to solve it.
            </p>

            <p>That's worth obsessing over, even if it doesn't work out.</p>
        </>
    );
}