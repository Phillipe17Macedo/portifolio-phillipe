'use client';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/Button';
import { Line } from '@/components/Line';
import { SocialLinks } from '@/components/SocialLinks';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div className='article'>
        <S.AboveTitle>
          <Line />i am a
        </S.AboveTitle>

        <S.StyledTitle>
          <h2>
            FullStack <span>Developer</span>
          </h2>
        </S.StyledTitle>

        <S.Article>
          <p>
            Hi! My name is <span>Phillipe Macedo</span>.
          </p>

          <p>
            I started studying <span>Systems Analysis and Development</span> in
            Feb 2022, at the <span>Instituto Federal do Triângulo Mineiro</span>, and since
            then, I feel more and more <span>inspired and willing</span> to
            pursue my career in the area.
          </p>

          <p>
            My current <span>goal</span> is to become a Senior{' '}
            <span>Typescript</span> and <span>C# </span>
            Dev, and eventually become a <span>Tech Lead</span>.
          </p>

          <p>
            My main stack is{' '}
            <span>
              Typescript, Javascript, React Native, C#, ReactJs, NextJS,
              MariaDB, CRUD's C# and Typescript.
            </span>
            .
          </p>

          <p className='p-about-me'>
            Know more about me{' '}
            <Link href='/about'>
              here <ChevronRight size={18} />
            </Link>
          </p>
        </S.Article>

        <a
          download
          href='/documents/resume.pdf'
        >
          <Button variant='light'>Download CV</Button>
        </a>
      </div>

      <S.ImageGroup className='image-group'>
        <S.StyledImage
          src='https://github.com/phillipe17macedo.png'
          alt="Cristian Sbardelotto's profile picture"
          width={300}
          height={300}
          priority={true}
        />

        <SocialLinks />
      </S.ImageGroup>
    </S.Container>
  );
}
