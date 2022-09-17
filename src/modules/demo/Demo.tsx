import { DemoBox } from './DemoBox';
import { FC } from 'react';

export const Demo: FC = () => (
  <section css={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
    <div
      css={{
        width: '80%',
        margin: 'auto auto',
        paddingTop: '5rem',
        [`${DemoBox}`]: { display: 'none' },
        '&:hover': {
          [`${DemoBox}`]: { display: 'block' },
        },
      }}>
      <div
        css={(props) => ({
          padding: '2rem 4rem',
          width: '100%',
          display: 'grid',
          gap: '.5rem',
          boxShadow: props.shadows[10],
          borderRadius: '0.375rem',
          '&:hover': {
            backgroundColor: '#10b981',
            cursor: 'pointer',
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '500ms',
            h1: { ...props.typography.body },
            p: { ...props.typography.h1 },
            '&:active': {
              backgroundColor: '#38bdf8',
              boxShadow: 'none',
            },
          },
        })}>
        <h1 css={(props) => props.typography.h1}>Hero Section</h1>
        <p css={(props) => props.typography.body}>Styled with CSS Prop</p>
      </div>
      <DemoBox css={{ marginTop: '5rem' }}>
        <h1 css={(props) => props.typography.h1}>Box Component</h1>
        <p css={(props) => props.typography.body}>
          Styled using styled component
        </p>
      </DemoBox>
      <DemoBox color='red' css={{ marginTop: '5rem' }}>
        <h1 css={(props) => props.typography.h1}>Box Component</h1>
        <p css={(props) => props.typography.body}>
          Styled component with color prop
        </p>
      </DemoBox>
    </div>
  </section>
);
