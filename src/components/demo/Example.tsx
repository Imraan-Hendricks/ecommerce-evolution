import styled from '@emotion/styled';
import { Color } from '../../theme/types';
import { Container } from '../ui/Container';
import {
  faNodeJs,
  faReact,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Typography } from '../ui/Typography';

const title = 'Styling Example';

const body = {
  one: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,

  two: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
} as const;

const icons = [
  { key: 'react', color: 'primary', icon: faReact },
  { key: 'css', color: 'secondary', icon: faCss3Alt },
  { key: 'node', color: 'primary', icon: faNodeJs },
] as const;

const cards = [
  {
    title: 'Primary Section',
    color: 'primary',
    body: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Secondary Section',
    color: 'secondary',
    body: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Info Section',
    color: 'info',
    body: 'Lorem ipsum dolor sit amet',
  },
] as const;

export const Example: FC = () => (
  <Module>
    <Layout>
      <ContentBlock>
        <Title>{title}</Title>
        <TitleDivider />
        <Body>{body.one}</Body>
        <Body>{body.two}</Body>
        <IconList>
          {icons.map((props) => (
            <Icon {...props} />
          ))}
        </IconList>
      </ContentBlock>
      <CardList>
        {cards.map(({ title, color, body }) => (
          <Card key={title} color={color}>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
            <CardDivider color={color} />
          </Card>
        ))}
      </CardList>
    </Layout>
  </Module>
);

const Module = styled.section(({ theme }) => ({
  backgroundColor: theme.palette.gray[50],
  padding: '6rem 1.25rem',
}));

const Layout = styled(Container)({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
});

const ContentBlock = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '3rem',
  justifyItems: 'start',
  alignItems: 'center',
  height: 'max-content',
});

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const TitleDivider = styled.hr(({ theme }) => ({
  borderColor: theme.palette.secondary[500],
  borderWidth: '0.125rem',
  width: '4rem',
}));

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[600],
  maxWidth: '80%',
}));
Body.defaultProps = { as: 'p', variant: 'body2' };

const IconList = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '8rem',
  justifyItems: 'start',
  width: 'max-content',
});

const Icon: FC<{ color?: Color; icon: IconDefinition }> = ({
  color = 'primary',
  icon,
}) => (
  <FontAwesomeIcon
    icon={icon}
    css={(theme) => ({
      color: theme.palette[color][500],
      width: '4rem',
      height: '4rem',
    })}
  />
);

const CardList = styled.div({ display: 'grid', gap: '2rem' });

const Card = styled.div<{ color?: Color }>(({ color = 'primary', theme }) => ({
  padding: '2rem 4rem',
  width: '100%',
  display: 'grid',
  gap: '0.5rem',
  boxShadow: theme.shadows[8],
  backgroundColor: theme.palette.white,
  borderRadius: '0.375rem',
  '&:hover': {
    backgroundColor: theme.palette[color][500],
    cursor: 'pointer',
    paddingLeft: '5rem',
    transition: theme.transition.all,
    transitionDuration: '500ms',
    h2: { ...theme.typography.body2, color: theme.palette.gray[200] },
    p: { ...theme.typography.h4, color: theme.palette.black },
    [`${CardDivider}`]: { borderColor: theme.palette.gray[200] },
    '&:active': {
      backgroundColor: theme.palette.success[500],
      boxShadow: theme.shadows[0],
      paddingLeft: '4rem',
      p: { ...theme.typography.h4, color: theme.palette.gray[200] },
    },
  },
}));

const CardTitle = styled(Typography)();
CardTitle.defaultProps = { as: 'h2', variant: 'h4' };

const CardBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[500],
}));
CardBody.defaultProps = { as: 'p', variant: 'body2' };

const CardDivider = styled.hr<{ color?: Color }>(
  ({ color = 'gray', theme }) => ({
    borderColor: theme.palette[color][500],
    borderWidth: '0.125rem',
    width: '4rem',
  })
);
