import * as React from 'react';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

import { colors } from 'ts/style/colors';

import { Column, Section, Wrap, WrapCentered } from 'ts/@next/components/layout';
import { SiteWrap } from 'ts/@next/components/siteWrap';
import { Heading, Paragraph } from 'ts/@next/components/text';
import { Image } from 'ts/@next/components/image';

import CoinIcon from 'ts/@next/icons/illustrations/coin.svg';
import ConsistentlyShipIcon from 'ts/@next/icons/illustrations/consistently-ship.svg';
import RightThingIcon from 'ts/@next/icons/illustrations/right-thing.svg';
import LongTermImpactIcon from 'ts/@next/icons/illustrations/long-term-impact.svg';

export const NextAboutPress = () => (
  <SiteWrap theme="light">
    <Section>
      <Wrap>
         <Column colWidth="1/3">
            <ChapterLink to="/next/about/mission">Our Mission</ChapterLink>
            <ChapterLink to="/next/about/team">Team</ChapterLink>
            <ChapterLink to="/next/about/press">Press</ChapterLink>
            <ChapterLink to="/next/about/jobs">Jobs</ChapterLink>
        </Column>
        <Column colWidth="2/3">
            <Heading size="medium">Press Highlights</Heading>
            <Paragraph size="medium">Want to write about 0x? Get in touch, or download our press kit.</Paragraph>

            <Wrap>
                <Column colWidth="1/3">
                    <img src="/images/@next/press/logo-fortune.png" width="100" alt="Fortune"/>
                </Column>
                <Column colWidth="2/3">
                    <Paragraph isMuted={false}>The difference is that 0x is decentralized, operating as a series of anonymous nodes...</Paragraph>
                    <a href="#">Read Article</a>
                </Column>
            </Wrap>

            <Wrap>
                <Column colWidth="1/3">
                    <img src="/images/@next/press/logo-fortune.png" width="100" alt="Fortune"/>
                </Column>
                <Column colWidth="2/3">
                    <Paragraph isMuted={false}>The difference is that 0x is decentralized, operating as a series of anonymous nodes...</Paragraph>
                    <a href="#">Read Article</a>
                </Column>
            </Wrap>

            <Wrap>
                <Column colWidth="1/3">
                    <img src="/images/@next/press/logo-fortune.png" width="100" alt="Fortune"/>
                </Column>
                <Column colWidth="2/3">
                    <Paragraph isMuted={false}>The difference is that 0x is decentralized, operating as a series of anonymous nodes...</Paragraph>
                    <a href="#">Read Article</a>
                </Column>
            </Wrap>

            <Wrap>
                <Column colWidth="1/3">
                    <img src="/images/@next/press/logo-fortune.png" width="100" alt="Fortune"/>
                </Column>
                <Column colWidth="2/3">
                    <Paragraph isMuted={false}>The difference is that 0x is decentralized, operating as a series of anonymous nodes...</Paragraph>
                    <a href="#">Read Article</a>
                </Column>
            </Wrap>
        </Column>
      </Wrap>
    </Section>
  </SiteWrap>
);

const ChapterLink = styled(ReactRouterLink)`
    font-size: 1.222222222rem;
    display: block;
    opacity: 0.8;
    margin-bottom: 1.666666667rem;

    &:first-child {
        opacity: 1;
    }

    &:hover {
        opacity: 1;
    }
`;
