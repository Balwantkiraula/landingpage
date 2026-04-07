import { Container } from "./Container";

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-14 sm:py-18 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

