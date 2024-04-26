import s from './Section.module.css'

export const Section = ({Children}) => {
  return (
    <Section className={s.Section}>
{Children}
    </Section>
  )
}

