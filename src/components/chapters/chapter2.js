import React from "react";
import { Row, Col, Affix } from "antd";
import Navbar from "../navbar";
const Chapter2 = () => {
  return (
    <div className="container">
      <Row gutter={[100, 0]}>
        <Col sm={8}>
          <Affix offset={0} onChange={affixed => console.log(affixed)}>
            <div className="justify ">
              <Navbar />
              <br></br>
              <br></br>
              <h3 className="chapters">Chapter 2:</h3>
              <h1 className="titles">What We Stand For</h1>
              <h1 className="link-to-next-route">Next: What Influenced Us</h1>
            </div>
          </Affix>
        </Col>
        <Col sm={16}>
          <p className="paragraph">
            Everyone working at Basecampd represents Basecamp. When a customer
            gets a response from Merissa on support, Merissa is Basecamp. When a
            customer reads a tweet by Eron that our systems are down, Eron is
            Basecamp. In those situations, all the other stuff we do to
            cultivate our best image is secondary. What’s right in front of
            someone in a time of need is what they’ll remember. That’s what we
            mean when we say marketing is everyone’s responsibility, and that it
            pays to spend the time to recognize that. This means avoiding the
            bullshit of outage language and bending our policies, not just
            lending your ears. It means taking the time to get the writing right
            and consider how you’d feel if you were on the other side of the
            interaction. It also means that you’re strongly encouraged to help
            share your thoughts, experiences, and learnings on Signal v Noise,
            our blog. The vast majority of our customers come from word of mouth
            and much of that word comes from people in our audience. This is an
            audience we’ve been educating and entertaining for 20 years and
            counting, and your voice is part of us now, whether you like it or
            not! Tell us and our audience what you have to say! This goes for
            tools and techniques as much as it goes for prose. Basecamp not only
            tries to out-teach the competition, but also out-share and
            out-collaborate. We’re prolific open source contributors through
            Ruby on Rails, Trix, Turbolinks, Stimulus, and many other projects.
            Extracting the common infrastructure that others could use as well
            is satisfying, important work, and we should continue to do that.
            It’s also worth mentioning that joining Basecamp can be
            all-consuming. We’ve seen it happen. You dig Basecamp, so you feel
            pressure to contribute, maybe overwhelmingly so. The people who work
            here are some of the best and brightest in our industry, so the
            self-imposed burden to be exceptional is real. But here’s the thing:
            stop it. Settle in. We’re glad you love this job because we all do
            too, but at the end of the day it’s a job. Do your best work,
            collaborate with your team, write, read, learn, and then turn off
            your computer and play with your dog. We’ll all be better for it.
            Extracting the common infrastructure that others could use as well
            is satisfying, important work, and we should continue to do that.
            It’s also worth mentioning that joining Basecamp can be
            all-consuming. We’ve seen it happen. You dig Basecamp, so you feel
            pressure to contribute, maybe overwhelmingly so. The people who work
            here are some of the best and brightest in our industry, so the
            self-imposed burden to be exceptional is real. But here’s the thing:
            stop it. Settle in. We’re glad you love this job because we all do
            too, but at the end of the day it’s a job. Do your best work,
            collaborate with your team, write, read, learn, and then turn off
            your computer and play with your dog. We’ll all be better for it.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Chapter2;
