import styled from '@emotion/styled';
import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';

const faq = [
  {
    question: 'How do I purchase a membership for the digital agency?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Do you provide hosting and deployment as a service?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Do you provide long term support for projects?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export function FAQ() {
  const { faqRef } = useNavbar();
  return (
    <Module ref={faqRef}>
      <Layout>
        <Header>
          <Subtitle>FAQ</Subtitle>
          <Title>Frequently Asked Questions</Title>
        </Header>
        <Questions>
          {faq.map(({ question, answer }) => (
            <QuestionGroup key={question}>
              <QuestionCard primary>
                <Symbol primary>Q.</Symbol>
                <Question css={{ marginLeft: '2rem' }}>{question}</Question>
              </QuestionCard>
              <QuestionCard transparent>
                <Symbol>A.</Symbol>
                <Body css={{ marginLeft: '2rem' }}>{answer}</Body>
              </QuestionCard>
            </QuestionGroup>
          ))}
        </Questions>
      </Layout>
    </Module>
  );
}

const Module = styled.section({
  padding: '6rem 1.25rem',
});

const Layout = styled(Container)({
  display: 'grid',
  gap: '2rem',
});

const Header = styled.div({
  display: 'grid',
  gap: '2rem',
});

const Subtitle = styled(Typography)();
Subtitle.defaultProps = { as: 'h2', color: 'primary', variant: 'subtitle1' };

const Title = styled(Typography)();
Title.defaultProps = { as: 'h1', variant: 'h4' };

const Questions = styled.div({
  display: 'grid',
  gap: '3rem',
});

const QuestionGroup = styled.div();

const QuestionCard = styled.div<{ transparent?: boolean; primary?: boolean }>(
  ({ theme, transparent, primary }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: transparent ? 'transparent' : theme.palette.gray[100],
    borderLeftColor: primary
      ? theme.palette.primary[500]
      : theme.palette.gray[300],
    borderLeftWidth: '.25rem',
  })
);

const Symbol = styled(Typography)<{ primary?: boolean }>(
  ({ theme, primary }) => ({
    color: primary ? theme.palette.primary[500] : theme.palette.gray[300],
    padding: '.75rem 0 .75rem 1rem',
  })
);
Symbol.defaultProps = { as: 'h2', variant: 'h1' };

const Question = styled(Typography)({
  width: '100%',
  padding: '1.5rem 0',
});
Question.defaultProps = { as: 'h3', variant: 'h6' };

const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[600],
  width: '100%',
  padding: '1.5rem 0',
}));
Body.defaultProps = { as: 'p', variant: 'body1' };
