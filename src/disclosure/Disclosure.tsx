import React from 'react';

import './Disclosure.scss';

const Disclosure: React.FC = () => {
    return (
        <section id="disclosure-page">
            <h1>FTC Disclosure</h1>

            <h2>Apparently the FTC said things that require stuff</h2>

            <p>
                This is not a blog for making money, which is good, since it generates as much money as a banking fee
                for insufficient funds. And while I will try to make some money in some way, the real point of this blog
                is for me to try cool things and write (cool?) stuff. So I’m going to paraphrase Tim Ferris and an
                illustration from his disclosure page (at one-point anyway) by Louis Gray and Jeannine Schafer…
            </p>

            <p>From the mind that brought you The 4-Hour Workweek (and The Random Show with Kevin Rose):</p>

            <blockquote>
                <p>
                    Per the FTC rules, if I interview someone and they grab the bill for lunch, I would need to specify
                    this. Ditto if I use an Amazon link that gets me 8 cents instead of an Amazon link that gets me 0
                    cents. If someone gives me a comfy t-shirt with a logo and I wear it in a photo, same deal.
                    Disclaimers all over the place. This would be tedious for me and a continual eye sore for readers.
                    But rules is rules. To cover my ass and preserve your reading experience, please assume that, for
                    every recommendation, link, and product I use, the following all hold true:
                </p>
                <ul>
                    <li>writer got fed</li>
                    <li>writer got some sweet gadgets</li>
                    <li>writer received mad scrilla (we’re talkin’ cash y’all)</li>
                    <li>writer got a helluva schwag bag</li>
                    <li>writer got stock options</li>
                </ul>
            </blockquote>

            <p>
                So there you have it. FTC satiation. I feel like I should reward you for reading a "disclosure" page…
                well, have you seen those 3d gifs? Check this out:
            </p>

            <img
                src="http://i.imgur.com/Afkkhrx.gif"
                alt="Will Smith and Martin Lawrence letting the client know they 'better stop playing' when the client asked if the site worked in IE"
                title="Will Smith and Martin Lawrence letting the client know they 'better stop playing' when the client asked if the site worked in IE"
            />
        </section>
    );
};
export default Disclosure;
