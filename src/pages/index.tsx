import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BaseLayout } from '../modules';


type HomePageProps = {
  someVar?: boolean;
  someFn?: (param: boolean) => void;
};

function HomePage(props: HomePageProps) {
  /**
   * Initializers
   */

  /**
   * Contexts
   */

  /**
   * Functions
   */

  /**
   * Hooks
   */

  /**
   * Renders
   */
  return (
    <BaseLayout>
      <Heading>HomePage Works</Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe beatae, vero repudiandae modi eveniet delectus illo ullam voluptatibus tempora in minus nihil a soluta pariatur, nemo non. Vitae, cupiditate!</p>
    </BaseLayout>
  );
}

export default HomePage;