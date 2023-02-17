import styled from '@emotion/styled';
import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';
import { useNavbar } from '../layout/NavbarContext';

const faq = [
  {
    question: 'What kind of ecommerce solutions do you offer?',
    answer: `We offer a wide range of services to help businesses succeed online, including website design and development, social media marketing, email campaigns, and more. We'll also provide you with training and resources to help you manage your website on your own if you prefer.`,
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Our pricing varies depending on the specific services you require and the scope of your project. We offer transparent pricing and will work with you to create a customized package that fits your budget.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: `The timeline for a project can vary depending on its complexity and the services required. We'll work with you to establish a realistic timeline for your project and keep you informed of our progress along the way.`,
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
