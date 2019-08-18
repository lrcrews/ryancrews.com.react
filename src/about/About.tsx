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
        { animationFactor: 2.5, left: 24, onLeft: true, top: 240 },
        { animationFactor: 4.5, left: 124, onLeft: true, top: 208 },
        { animationFactor: 5, left: 240, onLeft: false, top: 280 },
        { animationFactor: 5, left: 360, onLeft: true, top: 260 },
        { animationFactor: 4.5, left: 440, onLeft: false, top: 180 },
        { animationFactor: 3.5, left: 24, onLeft: false, top: 220 },
        { animationFactor: 4.5, left: 120, onLeft: true, top: 520 },
        { animationFactor: 3.5, left: 180, onLeft: true, top: 480 },
        { animationFactor: 5.5, left: 140, onLeft: false, top: 500 },
        { animationFactor: 3, left: 380, onLeft: false, top: 480 },
        { animationFactor: 1.5, left: 80, onLeft: true, top: 340 },
        { animationFactor: 1.5, left: 80, onLeft: false, top: 380 },
        { animationFactor: 4.5, left: 360, onLeft: false, top: 412 },
        { animationFactor: 2.5, left: 240, onLeft: true, top: 400 },
        { animationFactor: 2.5, left: 180, onLeft: false, top: 440 },
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
                        <p>Some posts will be about the page itself (meta, eh?)</p>
                        <p>Some posts will attempt to explain what programming is like (short answer: it depends...)</p>
                        <p>Some posts will speak to general software engineering stuff (technical term)</p>
                        <p>
                            But no matter what any particular page is about,{' '}
                            <a href="https://github.com/lrcrews/ryancrews.com.angular" target="github">
                                you can totally ignore the words on it and view the source code on github
                            </a>
                            , for those times you only care about how a page was made. Case in point, you can check out
                            this page with its "parting clouds" effect <a href="/">here</a>
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
                        <h2>Time to read something else, on a totally different page</h2>
                    </main>
                    <div></div>
                </div>
            </div>
        );
    }
}
export default About;
