import React from 'react';

import Cloud from './Cloud';

import './About.scss';

interface CloudOffsets {
    animationFactor: number;
    left: number;
    onLeft: boolean;
    top: number;
}

interface AboutProps {}

interface AboutState {
    scrollTop: number;
    windowWidth: number;
}

class About extends React.Component<AboutProps, AboutState> {
    cloudOffsets: Array<CloudOffsets> = [
        { animationFactor: 3, left: 24, onLeft: true, top: 260 },
        { animationFactor: 5, left: 124, onLeft: true, top: 228 },
        { animationFactor: 6, left: 240, onLeft: false, top: 300 },
        { animationFactor: 8, left: 360, onLeft: true, top: 260 },
        { animationFactor: 6, left: 440, onLeft: false, top: 200 },
        { animationFactor: 4.5, left: 24, onLeft: false, top: 240 },
        { animationFactor: 7, left: 120, onLeft: true, top: 540 },
        { animationFactor: 4.5, left: 180, onLeft: true, top: 500 },
        { animationFactor: 7, left: 140, onLeft: false, top: 520 },
        { animationFactor: 6, left: 380, onLeft: false, top: 500 },
        { animationFactor: 4, left: 80, onLeft: true, top: 360 },
        { animationFactor: 3.5, left: 80, onLeft: false, top: 400 },
        { animationFactor: 5, left: 360, onLeft: false, top: 422 },
        { animationFactor: 4, left: 240, onLeft: true, top: 420 },
        { animationFactor: 6.5, left: 180, onLeft: false, top: 460 },
    ];

    constructor(props: AboutProps) {
        super(props);
        this.state = {
            scrollTop: 0,
            windowWidth: window.innerWidth,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event: Event) {
        this.setState({ scrollTop: window.scrollY });
    }

    cloudLeft(cloud: CloudOffsets, scrollTop: number, windowWidth: number): string {
        return cloud.onLeft
            ? `${cloud.left - scrollTop * cloud.animationFactor}px`
            : `${windowWidth - 320 - cloud.left + scrollTop * cloud.animationFactor}px`;
    }

    cloudTop(cloud: CloudOffsets): string {
        return `${cloud.top}px`;
    }

    render() {
        return (
            <div id="about-page">
                <div id="background"></div>
                <div id="content">
                    <section>
                        {this.cloudOffsets.map((cloud, i) => {
                            return (
                                <Cloud
                                    key={i}
                                    left={this.cloudLeft(cloud, this.state.scrollTop, this.state.windowWidth)}
                                    top={this.cloudTop(cloud)}
                                ></Cloud>
                            );
                        })}
                    </section>
                    <main>
                        <h1>Welcome to my blog!</h1>
                        <h2 className="intro">...it's just another tech blog, only different</h2>
                        <p>Here you'll find unique pages for every post</p>
                        <p>
                            Some posts will be about the page itself <span>(meta, eh?)</span>
                        </p>
                        <p>
                            Some posts will attempt to explain what programming is like{' '}
                            <span>(short answer: it depends...)</span>
                        </p>
                        <p>
                            Some posts will speak to general software engineering stuff <span>(technical term)</span>
                        </p>
                        <p>
                            Some posts won't be posts at all! <span>(just my take on useful tools)</span>
                        </p>
                        <p>
                            But no matter what any particular page is about,{' '}
                            <a href="https://github.com/lrcrews/ryancrews.com.react" target="github">
                                you can totally ignore the words on it and view the source code on github
                            </a>
                            , for those times you only care about how a page was made. Case in point, you can check out
                            this page with its "parting clouds" effect{' '}
                            <a
                                href="https://github.com/lrcrews/ryancrews.com.react/tree/master/src/about"
                                target="about page"
                            >
                                here
                            </a>
                        </p>
                        <h2>You may be wondering, "How does he come up with all these page designs?"</h2>
                        <h2>I don't!</h2>
                        <p>
                            I'm merely an engineer who happens to enjoy design, so when I see a design I like I want to
                            see if I can recreate it (or something similar). For instance, this page is based on the
                            level "map" screen of a fantastic came called{' '}
                            <a href="https://www.dots.co/twodots/" target="twodots">
                                Two Dots
                            </a>
                        </p>
                        <p>
                            You'll find a link and a few words (at the very least) on each page referencing the source
                            material for the design
                        </p>
                        <h2>
                            You're still reading the <em>about page</em>, eh?
                        </h2>
                        <p>
                            Well then you may care to know that I've been in the industry for about 15 years after
                            spending my college years earning a CS degree. I've worked at Fortune 500 companies,
                            startups, and a few places inbetween. I've done purely backend, iOS, full-stack, and
                            (almost) fully frontend work. And, as you may have guessed from this site, I happen to
                            rather enjoy the frontend stuff =]
                        </p>
                        <h2>Time to read something else, on a totally different page</h2>
                    </main>
                </div>
            </div>
        );
    }
}
export default About;
