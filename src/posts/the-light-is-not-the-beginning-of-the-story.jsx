import { useEffect } from 'react';

export const metadata = {
    title: "The light is not the beginning of the story",
    date: "2026-06-27",
    excerpt:
        "A firefly spends years becoming visible. On invisible work, the hunter beneath the light, and what we miss when we only celebrate the glow.",
};

/* ─── Page-level theme ──────────────────────────────────────────────────────── */
function FireflyPageTheme() {
    useEffect(() => {
        const body = document.body;

        const previous = {
            background: body.style.background,
            color: body.style.color,
        };

        body.style.background = "#0B1015";
        body.style.color = "#C8DCC5";

        const style = document.createElement("style");
        style.id = "ff-page-theme";

        style.textContent = `
html,
body,
#__next,
#__next > div,
main,
article,
[class*="layout"],
[class*="container"],
[class*="wrapper"],
[class*="post"]{
    background:#0B1015 !important;
    color:#C8DCC5 !important;
}

.site-header{
    background:#0B1015 !important;
    border-bottom:1px solid rgba(255,255,255,.04);
}

.site-header.scrolled{
    background:rgba(11,16,21,.92) !important;
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);
    border-bottom:1px solid rgba(255,255,255,.05);
}

.logo,.logo-link{
    color:#F3F7EE !important;
}

.logo-subtitle{
    color:#90A98C !important;
}

.nav-link{
    color:#8FD18A !important;
}

.nav-link:hover,
.nav-link.active{
    color:#C6F4C1 !important;
}

.nav-link.active::after{
    background:#7FD67A !important;
}

.resume-btn{
    background:rgba(127,214,122,.05) !important;
    border:1px solid rgba(127,214,122,.18) !important;
    color:#F3F7EE !important;
}

.resume-btn:hover{
    background:#7FD67A !important;
    color:#08110B !important;
}

.search-btn,
.theme-toggle{
    color:#8FD18A !important;
}

.search-btn:hover,
.theme-toggle:hover{
    background:rgba(255,255,255,.06) !important;
    color:#C6F4C1 !important;
}

.theme-toggle{
    display:none !important;
}

.ff-post h1,
.ff-post h2,
.ff-post h3,
.ff-post h4,
.ff-section-heading{
    color:#EEF6EA !important;
}
    /* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

.contact-section{
    background:#0B1015 !important;
    border-top:1px solid rgba(255,255,255,.06) !important;
}

.footer-divider{
    background:rgba(255,255,255,.06) !important;
}

.footer-line{
    background:rgba(255,255,255,.08) !important;
}

/* Primary text */

.footer-email,
.footer-time{
    color:#F3F7EE !important;
}

/* Secondary text */

.footer-location,
.footer-place,
.footer-get-in-touch,
.footer-arrow-line,
.footer-meta,
.footer-bottom,
.footer-socials a,
.footer-phone{
    color:#8FAF8A !important;
}

/* Hover */

.footer-socials a:hover,
.footer-phone:hover,
.footer-email:hover{
    color:#C6F4C1 !important;
}

/* Small separators */

.footer-dot{
    color:rgba(255,255,255,.20) !important;
}

::selection{
    background:#7FD67A;
    color:#08110B;
}
`;
        document.head.appendChild(style);

        return () => {
            body.style.background = previous.background;
            body.style.color = previous.color;
            document.getElementById("ff-page-theme")?.remove();
        };
    }, []);

    return null;
}

/* ─── Styles ────────────────────────────────────────────────────────────────── */
function FireflyStyles() {
    return (
        <style>{`
            /* ── Firefly canvas fixed behind everything ── */
            .ff-canvas {
                position: fixed;
                inset: 0;
                pointer-events: none;
                z-index: 0;
                overflow: hidden;
            }

            .ff-spark {
                position: absolute;
                border-radius: 50%;
                background: #7FD67A;
            }

            @keyframes ff-float {
                0%   { transform: translate(0, 0);           opacity: 0; }
                12%  { opacity: var(--peak); }
                50%  { transform: translate(var(--dx1), var(--dy1)); opacity: var(--peak); }
                88%  { opacity: calc(var(--peak) * 0.3); }
                100% { transform: translate(var(--dx2), var(--dy2)); opacity: 0; }
            }

            /* ── Post body ── */
            .ff-post {
                position: relative;
                z-index: 1;
                color: inherit;
                font-family: 'Georgia', 'Times New Roman', serif;
                padding-bottom: 6rem;
            }

            .ff-post p {
                font-size: 1.08rem;
                line-height: 1.9;
                color: inherit;
                margin-bottom: 1.5rem;
                font-weight: 300;
            }

            /* ── Blockquote ── */
            .ff-post blockquote {
                border: none;
                border-left: 2px solid #7FD67A;
                margin: 2.5rem 0;
                padding: 0.4rem 0 0.4rem 1.5rem;
                background: transparent;
            }

            .ff-post blockquote p {
                font-size: 1.2rem;
                font-style: italic;
                line-height: 1.6;
                color: inherit;
                margin: 0;
            }

            /* ── Section break ── */
            .ff-break {
                display: flex;
                align-items: center;
                gap: 12px;
                margin: 3rem 0;
            }
            .ff-break-line {
                flex: 1;
                height: 0.5px;
                background: #1A2820;
            }
            .ff-break-dot {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #7FD67A;
                opacity: 0.7;
            }

            /* ── Fact aside ── */
            .ff-aside {
                background: #0F1A10;
                border: 0.5px solid #2A3D2C;
                border-radius: 8px;
                padding: 1.25rem 1.5rem;
                margin: 2.5rem 0;
            }
            .ff-aside-label {
                font-size: 10px;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                color: #7FD67A;
                margin-bottom: 0.75rem;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .ff-aside-dot {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #7FD67A;
                flex-shrink: 0;
            }
            .ff-aside p {
                font-size: 0.95rem !important;
                line-height: 1.75 !important;
                color: #7A9C79 !important;
                margin: 0 !important;
            }

            /* ── Section heading ── */
            .ff-section-eyebrow {
                font-size: 10px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #3E5B3C;
                margin-bottom: 0.5rem;
            }
            .ff-section-heading {
                font-size: 1.4rem;
                font-weight: 400;
                color: inherit;
                line-height: 1.35;
                margin: 0 0 1.25rem;
            }

            /* ── Closing ── */
            .ff-closing {
                margin-top: 3.5rem;
                padding-top: 2.5rem;
                border-top: 0.5px solid #1A2820;
            }
            .ff-closing-title {
                font-size: 1.1rem;
                font-style: italic;
                color: #A8E6A3;
                margin-bottom: 1.25rem;
            }
        `}</style>
    );
}

/* ─── Firefly canvas — fixed layer behind full page ─────────────────────────── */
const SPARKS = [
    { left: '5%', top: '8%', size: 2, dur: 6.2, delay: 0.0, peak: 0.8, dx1: '12px', dy1: '−18px', dx2: '−5px', dy2: '−55px' },
    { left: '18%', top: '22%', size: 2.5, dur: 8.1, delay: 1.4, peak: 0.65, dx1: '−16px', dy1: '−12px', dx2: '8px', dy2: '−48px' },
    { left: '32%', top: '55%', size: 1.5, dur: 5.7, delay: 2.8, peak: 0.9, dx1: '10px', dy1: '−22px', dx2: '−6px', dy2: '−58px' },
    { left: '47%', top: '14%', size: 2, dur: 7.4, delay: 0.6, peak: 0.7, dx1: '−8px', dy1: '−30px', dx2: '14px', dy2: '−62px' },
    { left: '61%', top: '38%', size: 3, dur: 9.0, delay: 3.5, peak: 0.55, dx1: '18px', dy1: '−15px', dx2: '−10px', dy2: '−44px' },
    { left: '74%', top: '68%', size: 2, dur: 6.8, delay: 1.1, peak: 0.85, dx1: '−12px', dy1: '−25px', dx2: '6px', dy2: '−60px' },
    { left: '88%', top: '12%', size: 1.5, dur: 5.3, delay: 4.2, peak: 0.6, dx1: '8px', dy1: '−20px', dx2: '−4px', dy2: '−50px' },
    { left: '92%', top: '50%', size: 2.5, dur: 7.9, delay: 0.3, peak: 0.75, dx1: '−14px', dy1: '−18px', dx2: '10px', dy2: '−52px' },
    { left: '10%', top: '75%', size: 2, dur: 6.5, delay: 5.1, peak: 0.5, dx1: '16px', dy1: '−10px', dx2: '−8px', dy2: '−40px' },
    { left: '25%', top: '88%', size: 1.5, dur: 8.6, delay: 2.0, peak: 0.8, dx1: '−6px', dy1: '−28px', dx2: '12px', dy2: '−56px' },
    { left: '40%', top: '42%', size: 2, dur: 5.9, delay: 3.3, peak: 0.65, dx1: '10px', dy1: '−16px', dx2: '−5px', dy2: '−46px' },
    { left: '55%', top: '80%', size: 2.5, dur: 7.2, delay: 1.8, peak: 0.9, dx1: '−18px', dy1: '−22px', dx2: '8px', dy2: '−54px' },
    { left: '68%', top: '25%', size: 1.5, dur: 6.0, delay: 4.7, peak: 0.7, dx1: '12px', dy1: '−30px', dx2: '−6px', dy2: '−65px' },
    { left: '80%', top: '60%', size: 2, dur: 9.3, delay: 0.9, peak: 0.55, dx1: '−10px', dy1: '−14px', dx2: '5px', dy2: '−42px' },
    { left: '3%', top: '45%', size: 3, dur: 7.6, delay: 6.0, peak: 0.6, dx1: '14px', dy1: '−20px', dx2: '−9px', dy2: '−50px' },
    { left: '50%', top: '95%', size: 2, dur: 5.5, delay: 2.5, peak: 0.85, dx1: '−8px', dy1: '−26px', dx2: '4px', dy2: '−58px' },
    { left: '83%', top: '82%', size: 1.5, dur: 8.0, delay: 3.9, peak: 0.7, dx1: '10px', dy1: '−12px', dx2: '−7px', dy2: '−44px' },
    { left: '36%', top: '5%', size: 2.5, dur: 6.7, delay: 1.2, peak: 0.5, dx1: '−15px', dy1: '−24px', dx2: '6px', dy2: '−52px' },
];

function FireflyCanvas() {
    return (
        <div className="ff-canvas" aria-hidden="true">
            {SPARKS.map((s, i) => (
                <div
                    key={i}
                    className="ff-spark"
                    style={{
                        left: s.left,
                        top: s.top,
                        width: s.size,
                        height: s.size,
                        '--peak': s.peak,
                        '--dx1': s.dx1,
                        '--dy1': s.dy1,
                        '--dx2': s.dx2,
                        '--dy2': s.dy2,
                        animation: `ff-float ${s.dur}s ease-in-out infinite ${s.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

/* ─── Reusable components ───────────────────────────────────────────────────── */
function Break() {
    return (
        <div className="ff-break" aria-hidden="true">
            <div className="ff-break-line" />
            <div className="ff-break-dot" />
            <div className="ff-break-line" />
        </div>
    );
}

function Aside({ label, children }) {
    return (
        <div className="ff-aside">
            <div className="ff-aside-label">
                <div className="ff-aside-dot" />
                {label}
            </div>
            <p>{children}</p>
        </div>
    );
}

function SectionHead({ eyebrow, heading }) {
    return (
        <>
            <p className="ff-section-eyebrow">{eyebrow}</p>
            <h2 className="ff-section-heading">{heading}</h2>
        </>
    );
}

/* ─── Post ──────────────────────────────────────────────────────────────────── */
export default function Post() {
    return (
        <div className="ff-post">
            <FireflyPageTheme />
            <FireflyStyles />
            <FireflyCanvas />

            <p>
                This monsoon week, I stopped on a path through the trees and watched
                something I hadn't seen in months.
            </p>

            <p>
                Fireflies. Dozens of them — small green lights drifting through the
                dark with a patience that felt almost deliberate. Not frantic. Not
                random. Just there, appearing and disappearing as if the forest was
                breathing them out one at a time.
            </p>

            <p>
                They looked fragile. Soft and transient. The kind of thing you
                instinctively hold your breath for, afraid even the exhale might
                scatter them.
            </p>

            <p>
                Then I looked closer — not at them, but at what they actually are. And
                what they are is far stranger and more instructive than the gentle
                lanterns we've made them into.
            </p>

            <Aside label="The hidden life of a firefly">
                Depending on species, a firefly spends one to two years as a larva —
                hidden beneath leaf litter, damp soil, or rotting wood. During this
                time, it doesn't glow to attract admiration. It hunts. Firefly larvae
                are active predators: they stalk snails, slugs, and worms, some
                injecting enzymes that paralyse prey before consumption. The creature
                we celebrate in the monsoon sky has already lived most of its life in
                complete obscurity.
            </Aside>

            <p>
                The adult stage — winged, luminous, the version we stop and watch —
                often lasts only a few weeks.
            </p>

            <blockquote>
                <p>
                    The phase we celebrate is the shortest chapter of its life. The
                    years of preparation happened underground, unnoticed. By the time
                    we see the light, the difficult work has already been done.
                </p>
            </blockquote>

            <p>This is the part I keep returning to.</p>

            <p>
                There is a version of the firefly story that is purely beautiful — the
                transformation, the cold light, the efficiency of a bioluminescent
                signal evolved over millions of years. All of that is real and worth
                marvelling at. But the more honest version of the story starts in the
                dark, in the soil, with something that no one is watching and nothing
                to show for its effort yet.
            </p>

            <Break />

            <SectionHead
                eyebrow="What visibility hides"
                heading="We celebrate the light. We rarely ask about the dark."
            />

            <p>
                Visibility has a way of making us believe things appeared overnight. We
                encounter a product that seems fully formed and assume it was always
                that way. We see a designer whose work looks effortless and forget that
                effortlessness is usually a destination, not a starting point. We notice
                the company that suddenly seems to have figured it out, without seeing
                the years it spent not knowing if it was building the right thing for
                anyone.
            </p>

            <p>
                This isn't a new observation. Every field has some version of the
                overnight success who spent a decade preparing. But knowing it
                intellectually and actually internalising it are different things —
                especially when you're the one in the soil, doing invisible work,
                wondering if any of it is adding up to something.
            </p>

            <blockquote>
                <p>
                    Visibility isn't proof of progress. Its absence isn't proof of
                    failure. The larva doesn't know it will glow. It just keeps working
                    until it does.
                </p>
            </blockquote>

            <p>
                The problem with invisible work is that it has no immediate feedback
                loop. You don't know if you're becoming the right kind of firefly. You
                just keep going. Keep learning. Keep building, in the dark, without
                applause or confirmation.
            </p>

            <Break />

            <SectionHead
                eyebrow="The hunter beneath the light"
                heading="Gentleness is not the whole story."
            />

            <p>
                There is a second thing the firefly teaches, and it is less comfortable
                than the first.
            </p>

            <p>
                The same creature that drifts so softly through the monsoon air — the
                one that makes children stop and point and feel something close to
                wonder — is, for most of its existence, a predator. It survives by
                being capable and precise. Its beauty in the adult stage is real, but
                it didn't come instead of resilience. It came because of it.
            </p>

            <p>
                We often talk about gentleness and strength as if they sit on opposite
                ends of a spectrum. As if choosing one means diminishing the other. The
                firefly doesn't seem to know about this trade-off. It is, without
                contradiction, both the hunter and the light.
            </p>

            <blockquote>
                <p>
                    That feels worth holding onto. Especially in work that is meant to
                    be beautiful or useful or resonant — where there is constant pressure
                    to perform softness. All of that can be true and genuine. But
                    underneath it, the discipline, the predatory focus, the willingness
                    to go into the dark without reassurance — that's what produces the
                    light in the first place.
                </p>
            </blockquote>

            <Break />

            <SectionHead
                eyebrow="On the nature of seasons"
                heading="The brief season of being seen."
            />

            <p>
                The adult firefly lives for a few weeks. It glows, finds its kind, does
                what it needs to do, and then the season ends. There's something
                clarifying about that brevity. The window of visibility is not
                indefinite. The opportunity to signal, to connect, to be seen — it
                comes and it goes.
            </p>

            <p>
                I don't think this is a reason for urgency in the anxious sense. More
                the opposite. It's a reason to have already been doing the work before
                the season arrives. The firefly doesn't decide to start preparing when
                it sees the other fireflies glowing. It's been preparing for years.
            </p>

            <p>
                The season of visibility is not where the preparation happens. It's
                where the preparation lands.
            </p>

            <blockquote>
                <p>
                    Are you doing the kind of work that would survive even if that
                    season never comes? Because the most alive thing about the larva is
                    that it doesn't know it will glow. It just keeps being what it is.
                </p>
            </blockquote>

            <Break />

            <SectionHead
                eyebrow="A redefinition"
                heading="Perhaps success is not the light."
            />

            <p>
                We have, as a culture, become very good at celebrating outputs.
                Launches, publications, follower counts — the things that register on
                the outside. These aren't meaningless. They matter. But they're not
                where the real thing lives.
            </p>

            <p>
                The real thing lives in the years of invisible work. In the discipline
                you built when no one was watching. In the failures that taught you
                something the successes couldn't. In the strange, patient accumulation
                of capability that can't be photographed or announced or put in a
                portfolio until it's already been absorbed into who you are.
            </p>

            <p>
                A firefly doesn't become luminous in the final week of its life. It
                becomes luminous because of everything that happened before anyone was
                watching.
            </p>

            <blockquote>
                <p>The light is simply proof that the work was there all along.</p>
            </blockquote>

            <div className="ff-closing">
                <p className="ff-closing-title">
                    Standing in the dark with dozens of lights
                </p>

                <p>
                    I stood there longer than I probably should have — long enough for
                    my eyes to fully adjust, long enough to stop trying to track
                    individual fireflies and just let the whole picture in. Dozens of
                    tiny green lights, drifting between the trees. Each one representing
                    years I'll never see.
                </p>

                <p>
                    That felt like the right way to think about most of the things I
                    admire. Not as products of a moment, but as the surface expression
                    of something much longer. Patient. Ongoing. Mostly invisible.
                </p>

                <p>The forest was full of light that night.</p>

                <p>But it had been full of work for much longer.</p>
            </div>

        </div>
    );
}